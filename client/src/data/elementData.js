export const elementData = [
  {
    id: 1,
    name: 'JIRA',
    authTypes: 'Basic',
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
      }
    ]
  },
  {
    id: 6,
    name: 'SendGrid',
    authTypes: 'Custom',
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
]