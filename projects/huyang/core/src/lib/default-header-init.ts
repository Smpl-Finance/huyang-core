import {HuyangHeaderInitModel} from './models/huyang-header/huyang-header-init.model';

export const defaultHeaderObj: HuyangHeaderInitModel = {
  title: 'Huyang Core',
  headerLinks: [
    {
      title: 'Get Terms',
      url: ['terms']
    }
  ],
  headerSearchParams: [
    {
      value: 'accountId',
      label: 'Account ID'
    },
    {
      value: 'orderId',
      label: 'Order ID'
    },
    {
      value: 'fName',
      label: 'First Name'
    },
    {
      value: 'lName',
      label: 'Last Name'
    },
    {
      value: 'fullName',
      label: 'Name'
    },
    {
      value: 'phone',
      label: 'Phone'
    },
    {
      value: 'email',
      label: 'Email'
    },
    {
      value: 'zip',
      label: 'Postal Code'
    },
    {
      value: 'city',
      label: 'City'
    },
    {
      value: 'country',
      label: 'Country'
    },
    {
      value: 'templateId',
      label: 'Template ID'
    },
    {
      value: 'temporaryId',
      label: 'Temporary ID'
    },
    {
      value: 'coappName',
      label: 'Co App Name'
    },
    {
      value: 'bday',
      label: 'Birth Date'
    }
  ],
  user: null
};
