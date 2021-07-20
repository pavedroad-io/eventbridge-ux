import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';

import { Customers } from '../schemas/customers';

const sleep = (milliseconds) => {
 return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*'
  }),
  mode: 'no-cors'
};

@Injectable({providedIn: 'root'})
export class CustomerService {
	private url: string = 'http://localhost:8081/api/v1/namespace/pavedroad/customers';
  private idurl: string = this.url + '/';

  id: string = "01db995c-2494-41cd-85ae-4a22409bae33";
  public customer: Customers;

  httpResponse: any;
  public ctx;
  public share;


  UpdateCustomer(data) {
    this.customer = data;
    this.ctx.next(data);
    this.updateCustomer(data);
  }

  Save(data) {
    return this.updateCustomer(data);
  }

  getdetails(): Observable<Customers> {
    return this.getCustomer(this.id);
  }

	constructor(private http: HttpClient) { 
    this.customer = new Customers();
    this.customer.customersuuid =  this.id;
    this.ServiceInit();
	}

  IsReady(): any {
    sleep(80).then(() => {
      if ( this.share !== undefined ) {
        return true;
      }
    });
  }

  ServiceInit(): void {
    this.getCustomer(this.customer.customersuuid).subscribe((data: any) => {
      this.customer = data;
      this.ctx = new BehaviorSubject<any>(this.customer);
      this.share = this.ctx.asObservable();
    });
  }


 private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) { // A client-side or network error.
     console.error('An error occurred:', error.error.message);
		} else { // Backend response errors
     console.error(
       `Backend returned code ${error.status}, ` +
       `body was: ${error.error}`);
   }

  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
  };

  getCustomers(): Observable<Customers[]> {
		 return this.http.get<Customers[]>(this.url+"LIST");
  }

  getCustomer(id: string): Observable<Customers> {
		 this.httpResponse = this.http.get<Customers>(this.idurl+id);
		 return this.httpResponse;
		 //return this.http.get<Customers>(this.idurl+id);
  }

  createCustomer(post: Customers) {
    return this.http.post<Customers>(this.url, JSON.stringify(post)).pipe(catchError(this.handleError));
  }

  updateCustomer(post: Customers) {
    this.httpResponse =  this.httpResponse = 
    this.http.put<Customers>(
      this.idurl+post.customersuuid,
      JSON.stringify(post),
      httpOptions).subscribe((data: any) => {
           console.log(data);
         });
  }

  deleteCustomer(post: Customers) {
    return this.http.delete<Customers>(this.idurl+post.customersuuid)
      .pipe(catchError(this.handleError));
  }
}
