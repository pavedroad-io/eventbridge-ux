import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-newservice',
  templateUrl: './newservice.component.html',
  styleUrls: ['./newservice.component.scss'],
})
export class NewserviceComponent implements OnInit {
  servcieListItems = [
    {
      title: 'Knative function',
      type: 'function',
      icon: 'build',
      logo: 'https://avatars.githubusercontent.com/u/35583233?s=200&v=4',
      route: '',
      description: 'Quickly create, test, and deploy an Knative functions',
      disabled: false,
    },
    {
      title: 'OpenFaaS function',
      type: 'function',
      icon: 'build',
      logo: 'https://www.openfaas.com/images/openfaas/whale.png',
      route: '',
      description: 'Create an OpenFaaS function',
      disabled: false,
    },
    {
      title: 'AWS SNS Source',
      type: 'source',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: 'snssource',
      description: 'Load events from AWS Simple Notification Service (SNS)',
      disabled: false,
    },
    {
      title: 'AMQP Source',
      type: 'source',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: '',
      description: 'Load events using the Advanced Message Queuing Protocol (AMQP)',
      disabled: false,
    },
    {
      title: 'Azure HUB Source',
      type: 'source',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: '',
      description: 'Load events from Microsoft Azure Hub',
      disabled: false,
    },
    {
      title: 'BitBucket Source',
      type: 'source',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: '',
      description: 'Load events generated by Atlassian BitBucket',
      disabled: false,
    },
    {
      title: 'Calendar Source',
      type: 'source',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: '',
      description: 'Create events based on calendars and scheduled events',
      disabled: false,
    },
    {
      title: 'Generic emitter source',
      type: 'source',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: '',
      description: 'Use gRPC to create custom event sources',
      disabled: false,
    },
    {
      title: 'File Source',
      type: 'source',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: '',
      description: 'Create events based on change to your file system',
      disabled: false,
    },
    {
      title: 'GCP PupSub Source',
      type: 'source',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: '',
      description: 'Load data from Google PubSub events',
      disabled: false,
    },
    {
      title: 'GCP workload Source',
      type: 'source',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: '',
      description: 'Load data from Google workflows',
      disabled: false,
    },
    {
      title: 'GitHub Source',
      type: 'source',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: 'Capture events generated by GitHub',
      description: 'Capture events generated by GitHub',
      disabled: false,
    },
    {
      title: 'GitLab Source',
      type: 'source',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: '',
      description: 'Capture events generated by GitLab',
      disabled: false,
    },
    {
      title: 'HDFS Source',
      type: 'source',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: '',
      description: 'Create events based on changes to your HDFS file system',
      disabled: false,
    },
    {
      title: 'Kafka Source',
      type: 'source',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: '',
      description: 'Read events as a Kafka producer',
      disabled: false,
    },
    {
      title: 'Minio Source',
      type: 'source',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: '',
      description: 'Generate events based on changes to your Minio(s3) file store',
      disabled: false,
    },
    {
      title: 'MQTT Source',
      type: 'source',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: '',
      description: 'Capature events from thousand of IoT devices using Message Queue Telemetry Transport(MQTT) event bus',
      disabled: false,
    },
    {
      title: 'NSQ Source',
      type: 'source',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: '',
      description: 'Integrate with NSQ for realtime distributed messaging',
      disabled: false,
    },
    {
      title: 'Pulsar Source',
      type: 'source',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: '',
      description: 'Read event data from Apache Pulsar',
      disabled: false,
    },
    {
      title: 'Redis Source',
      type: 'source',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: '',
      description: 'Read event from your Redis Pub/Sub',
      disabled: false,
    },
    {
      title: 'Kubernetes resource Source',
      type: 'source',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: '',
      description: 'Create events based on changes to Kubernetes resources',
      disabled: false,
    },
    {
      title: 'SQS Source',
      type: 'source',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: '',
      description: 'Ingest data from Amazons Simple Queue Service (SQS)',
      disabled: false,
    },
    {
      title: 'Storage Grid Source',
      type: 'source',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: '',
      description: 'Generate events based on changes to your storage grid object store',
      disabled: false,
    },
    {
      title: 'Go worker pool microservice',
      type: 'microservice',
      icon: 'build',
      logo: 'https://dalmarcogd.github.io/gwp/golang-worker.png',
      route: '',
      description: 'Build a new service using th Go worker pool design pattern.  Customize your jobs and schedulers',
      disabled: false,
    },
    {
      title: 'Stripe Source',
      type: 'source',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: '',
      description: 'Generate events from the Stripe payment service',
      disabled: false,
    },
    {
      title: 'Go data manager microservice',
      type: 'microservice',
      icon: 'build',
      logo: 'https://3.bp.blogspot.com/-UsQwhhKUlME/Wr8nD7zEnXI/AAAAAAAASLU/zSIRkmmIArQP4xl18anTg6FUP93FK23igCLcBGAs/s1600/Model%2BView%2BController%2B-%2BMVC.png',
      route: '',
      description: 'Create and use databases quickly with the data manager',
      disabled: false,
    },
    {
      title: 'Go tri-lateral microservice',
      type: 'microservice',
      icon: 'build',
      logo: 'https://static.packt-cdn.com/products/9781838643317/graphics/7289ebef-6d03-47b0-a4a5-f7c497ef2720.png',
      route: '',
      description: 'Add your business logic to the tri-lateral pattern to create event based micro-services',
      disabled: false,
    },
    {
      title: 'Slack source',
      type: 'source',
      icon: 'build',
      logo: 'https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg',
      route: '',
      description: 'Use the slack event source to read content from slack',
      disabled: false,
    },
    {
      title: 'Slack trigger',
      type: 'trigger',
      icon: 'build',
      logo: 'https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg',
      route: '',
      description: 'Create events from your slack application',
      disabled: false,
    },
  ];

  constructor(
      private router: Router, 
      private route: ActivatedRoute
  ) {}

  public openComponent(route: string) {
    this.router.navigate([route]);
  }

  ngOnInit(): void {}
}
