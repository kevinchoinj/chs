export const elementData = [
  {
    id: 1,
    name: 'JIRA',
    image: 'https://my.cloudelements.io/assets/img/elements/jira.svg',
    authTypes: ['Basic'],
    hub: 'HELPDESK',
    description: 'Add a Jira Instance to connect your existing Jira account to the Help Desk Hub, allowing you to manage your incidents, priorities, statuses, users, etc. across multiple Help Desk Elements. You will need your Jira account information to add an instance.',
    bulkUpload: true,
    bulkDownload: true,
    events: true,
    extendable: true,
    resources: [
      {
        name: 'agents',
        actions: [
          'delete',
          'get',
          'get by ID',
          'post',
        ]
      },
      {
        name: 'attachments',
        actions: [
          'delete',
          'get by ID',
        ]
      },
      {
        name: 'attachmentsMetadata',
        actions: [
          'get',
        ]
      },
      {
        name: 'authValidation',
        actions: [
          'get',
        ]
      },
      {
        name: 'bulk',
        actions: [
          'get by ID',
          'post'
        ]
      },
      {
        name: 'bulkCancel',
        actions: [
          'put',
        ]
      },
      {
        name: 'bulkQuery',
        actions: [
          'post',
        ]
      },
      {
        name: 'bulkStatus',
        actions: [
          'get',
        ]
      },
      {
        name: 'contacts',
        actions: [
          'delete',
          'get',
          'get by ID',
          'post',
        ]
      },
      {
        name: 'fields',
        actions: [
          'get',
          'post',
        ]
      },
      {
        name: 'groups',
        actions: [
          'get',
          'get by ID',
        ]
      },
      {
        name: 'incidentTypes',
        actions: [
          'delete',
          'get',
          'get by ID',
          'patch',
          'post',
        ]
      },
    ]
  },
  {
    id: 6,
    name: 'SendGrid',
    image: 'https://my.cloudelements.io/assets/img/elements/sendgrid.svg',
    authTypes: ['Custom'],
    hub: 'MESSAGING',
    description: 'Add a SendGrid Instance to connect your existing SendGrid account to the Messaging Hub, allowing you to send, receive and manage email and SMS messages etc. across multiple Messaging Elements. You will need your SendGrid account information, or use our trial account to add an instance.',
    bulkUpload: false,
    bulkDownload: false,
    events: false,
    extendable: true,
    resources: [
      {
        name: 'messages',
        actions: [
          'post',
        ]
      },
      {
        name: 'ping',
        actions: [
          'get',
        ]
      },
      {
        name: 'usage',
        actions: [
          'get',
        ]
      }
    ]
  },
  {
    id: 43,
    name: 'HubSpot Marketing',
    image: 'https://my.cloudelements.io/assets/img/elements/hubspot.svg',
    authTypes: ['OAuth 2', 'API Key'],
    hub: 'MARKETING',
    description: 'Add a HubSpot Instance to connect your existing HubSpot account to the Marketing Hub, allowing you to manage accounts, campaigns, contacts, leads etc. across multiple Marketing Elements. You will need your HubSpot account information to add an instance.',
    vendorInformation: {
      apiVersion: 'varies',
      link: 'https://developers.hubspot.com/docs/overview',
      apiType: 'REST',
    },
    bulkUpload: true,
    bulkDownload: true,
    events: true,
    extendable: true,
    resources: [
      {
        name: 'accounts',
        actions: [
          'delete',
          'get',
          'get by ID',
          'patch',
          'post',
        ]
      },
      {
        name: 'accountsProperties',
        actions: [
          'delete',
          'get',
          'get by ID',
          'patch',
          'post',
        ]
      }
    ]
  },
]