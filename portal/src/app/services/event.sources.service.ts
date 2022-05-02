import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventSourcesService {
  serviceListItems = [
    {
      title: 'Knative function',
      type: 'function',
      provider: 'k8s',
      service: 'knative',
      icon: 'build',
      logo: 'https://avatars.githubusercontent.com/u/35583233?s=200&v=4',
      route: '',
      description: 'Quickly create, test, and deploy an Knative functions',
      disabled: false,
    },
    {
      title: 'OpenFaaS function',
      type: 'function',
      provider: 'openfaas',
      service: 'openFaaS',
      icon: 'build',
      logo: 'https://www.openfaas.com/images/openfaas/whale.png',
      route: '',
      description: 'Create an OpenFaaS function',
      disabled: false,
    },
    {
      title: 'AWS SNS Source',
      type: 'source_event',
      provider: 'AWS',
      service: 'SNS',
      icon: 'build',
      logo: '../../../../assets/icons/aws_icon_146074.png',
      route: 'snssource',
      description: 'Load events from AWS Simple Notification Service (SNS)',
      disabled: false,
    },
    {
      title: 'AMQP Source',
      type: 'source_event',
      provider: 'OSS',
      service: 'AMQP',
      icon: 'build',
      logo: '../../../../assets/icons/cloudiot.png',
      route: '',
      description: 'Load events using the Advanced Message Queuing Protocol (AMQP)',
      disabled: false,
    },
    {
      title: 'Azure HUB Source',
      type: 'source_event',
      provider: 'Azure',
      service: 'IoT HUB',
      icon: 'build',
      logo: '../../../../assets/icons/file_type_azure_icon_130731.png',
      route: '',
      description: 'Load events from Microsoft Azure Hub',
      disabled: false,
    },
    {
      title: 'BitBucket Source',
      type: 'source_event',
      provider: 'BitBucket',
      service: 'BitBucket',
      icon: 'build',
      logo: '../../../../assets/icons/bitbucket_logo_icon_147312.png',
      route: '',
      description: 'Load events generated by Atlassian BitBucket',
      disabled: false,
    },
    {
      title: 'Calendar Source',
      type: 'source_event',
      provider: 'Calendar',
      service: 'Calendar',
      icon: 'build',
      logo: '../../../../assets/icons/weekly-calendar-outline-event-interface-symbol_icon-icons.com_73108.png',
      route: '',
      description: 'Create events based on calendars and scheduled events',
      disabled: false,
    },
    {
      title: 'Generic emitter source',
      type: 'source_event',
      provider: 'OSS',
      service: 'Generic',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: '',
      description: 'Use gRPC to create custom event sources',
      disabled: false,
    },
    {
      title: 'File Source',
      type: 'source_event',
      provider: 'OSS',
      service: 'File',
      icon: 'build',
      logo: '../../../../assets/icons/Generic_Yellow_27071.png',
      route: '',
      description: 'Create events based on change to your file system',
      disabled: false,
    },
    {
      title: 'GCP PupSub Source',
      type: 'source_event',
      provider: 'GCP',
      service: 'GCP PubSub',
      icon: 'build',
      logo: '../../../../assets/icons/Google_Chrome_icon-icons.com_66794.png',
      route: '',
      description: 'Load data from Google PubSub events',
      disabled: false,
    },
    {
      title: 'GCP workload Source',
      type: 'source_event',
      provider: 'GCP',
      service: 'GCP workload',
      icon: 'build',
      logo: '../../../../assets/icons/Google_Chrome_icon-icons.com_66794.png',
      route: '',
      description: 'Load data from Google workflows',
      disabled: false,
    },
    {
      title: 'GitHub Source',
      type: 'source_event',
      provider: 'GitHub',
      service: 'GitHub',
      icon: 'build',
      logo: '../../../../assets/icons/github-logo_icon-icons.com_73546.png',
      route: 'Capture events generated by GitHub',
      description: 'Capture events generated by GitHub',
      disabled: false,
    },
    {
      title: 'GitLab Source',
      type: 'source_event',
      provider: 'GitLab',
      service: 'GitLab',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: '',
      description: 'Capture events generated by GitLab',
      disabled: false,
    },
    {
      title: 'HDFS Source',
      type: 'source_event',
      provider: 'OSS',
      service: 'HDFS',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: '',
      description: 'Create events based on changes to your HDFS file system',
      disabled: false,
    },
    {
      title: 'Kafka Source',
      type: 'source_event',
      provider: 'Apache',
      service: 'Kafka',
      icon: 'build',
      logo: '../../../../assets/icons/apache_kafka_vertical_logo_icon_169585.png',
      route: '',
      description: 'Read events as a Kafka producer',
      disabled: false,
    },
    {
      title: 'Minio Source',
      type: 'source_event',
      provider: 'OSS',
      service: 'S3',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: '',
      description: 'Generate events based on changes to your Minio(s3) file store',
      disabled: false,
    },
    {
      title: 'MQTT Source',
      type: 'source_event',
      provider: 'OSS',
      service: 'MQTT',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: '',
      description: 'Capature events from thousand of IoT devices using Message Queue Telemetry Transport(MQTT) event bus',
      disabled: false,
    },
    {
      title: 'NSQ Source',
      type: 'source_event',
      provider: 'OSS',
      service: 'NSQ',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: '',
      description: 'Integrate with NSQ for realtime distributed messaging',
      disabled: false,
    },
    {
      title: 'Pulsar Source',
      type: 'source_event',
      provider: 'OSS',
      service: 'Pulsar',
      icon: 'build',
      logo: '../../../../assets/icons/cloudio.png',
      route: '',
      description: 'Read event data from Apache Pulsar',
      disabled: false,
    },
    {
      title: 'Redis Source',
      type: 'source_event',
      provider: 'Redis',
      service: 'Redis',
      icon: 'build',
      logo: '../../../../assets/icons/redis_original_logo_icon_146368.png',
      route: '',
      description: 'Read event from your Redis Pub/Sub',
      disabled: false,
    },
    {
      title: 'Kubernetes resource Source',
      type: 'source_event',
      provider: 'k8s',
      service: 'k8s',
      icon: 'build',
      logo: '../../../../assets/icons/kubernetes_logo_icon_168359.png',
      route: '',
      description: 'Create events based on changes to Kubernetes resources',
      disabled: false,
    },
    {
      title: 'SQS Source',
      type: 'source_event',
      provider: 'AWS',
      service: 'SQS',
      icon: 'build',
      logo: '../../../../assets/icons/aws_icon_146074.png',
      route: '',
      description: 'Ingest data from Amazons Simple Queue Service (SQS)',
      disabled: false,
    },
    {
      title: 'Storage Grid Source',
      type: 'source_event',
      provider: 'Storage Grid',
      service: 'Storage Grid',
      icon: 'build',
      logo: '../../../../assets/icons/grid_icon_176420.png',
      route: '',
      description: 'Generate events based on changes to your storage grid object store',
      disabled: false,
    },
    {
      title: 'Go worker pool microservice',
      type: 'microservice',
      provider: '',
      service: '',
      icon: 'build',
      logo: 'https://dalmarcogd.github.io/gwp/golang-worker.png',
      route: '',
      description: 'Build a new service using th Go worker pool design pattern.  Customize your jobs and schedulers',
      disabled: false,
    },
    {
      title: 'Stripe Source',
      type: 'source_event',
      provider: 'stripe',
      service: 'Stripe',
      icon: 'build',
      logo: '../../../../assets/icons/stripe_icon_146092.png',
      route: '',
      description: 'Generate events from the Stripe payment service',
      disabled: false,
    },
    {
      title: 'Go data manager microservice',
      type: 'microservice',
      provider: '',
      service: '',
      icon: 'build',
      logo: 'https://3.bp.blogspot.com/-UsQwhhKUlME/Wr8nD7zEnXI/AAAAAAAASLU/zSIRkmmIArQP4xl18anTg6FUP93FK23igCLcBGAs/s1600/Model%2BView%2BController%2B-%2BMVC.png',
      route: '',
      description: 'Create and use databases quickly with the data manager',
      disabled: false,
    },
    {
      title: 'Go tri-lateral microservice',
      type: 'microservice',
      provider: '',
      service: '',
      icon: 'build',
      logo: 'https://static.packt-cdn.com/products/9781838643317/graphics/7289ebef-6d03-47b0-a4a5-f7c497ef2720.png',
      route: '',
      description: 'Add your business logic to the tri-lateral pattern to create event based micro-services',
      disabled: false,
    },
    {
      title: 'Slack source',
      type: 'source_event',
      provider: 'slack',
      service: 'Slack',
      icon: 'build',
      logo: 'https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg',
      route: '',
      description: 'Use the slack event source to read content from slack',
      disabled: false,
    },
    {
      title: 'AWS Lambda',
      type: 'trigger_event',
      provider: 'AWS',
      service: 'lambda',
      icon: 'build',
      logo: 'https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg',
      route: '',
      description: 'Create events from your slack application',
      disabled: false,
    },
    {
      title: 'Slack trigger',
      type: 'trigger_event',
      provider: 'Slack',
      service: 'slack',
      icon: 'build',
      logo: 'https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg',
      route: '',
      description: 'Create events from your slack application',
      disabled: false,
    },
    {
      title: 'Argo workflow',
      type: 'workflow',
      provider: 'Argo',
      service: 'argo',
      icon: 'build',
      logo: 'https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg',
      route: '',
      description: 'Create events from your slack application',
      disabled: false,
    },
  ];

  constructor() { }

  getServices() {
	  return this.serviceListItems;
  }
}
