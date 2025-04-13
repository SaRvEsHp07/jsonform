export const userFormSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 2,
      title: 'Full Name'
    },
    email: {
      type: 'string',
      format: 'email',
      title: 'Email Address'
    },
    address: {
      type: 'object',
      properties: {
        street: {
          type: 'string',
          title: 'Street Address'
        },
        city: {
          type: 'string',
          title: 'City'
        },
        country: {
          type: 'string',
          title: 'Country'
        }
      }
    }
  },
  required: ['name', 'email']
};

export const userFormUiSchema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      scope: '#/properties/name',
      options: {
        placeholder: 'Enter your full name'
      }
    },
    {
      type: 'Control',
      scope: '#/properties/email',
      options: {
        placeholder: 'Enter your email address'
      }
    },
    {
      type: 'Control',
      scope: '#/properties/address/properties/street',
      options: {
        placeholder: 'Enter street address'
      }
    },
    {
      type: 'Control',
      scope: '#/properties/address/properties/city',
      options: {
        placeholder: 'Enter city'
      }
    },
    {
      type: 'Control',
      scope: '#/properties/address/properties/country',
      options: {
        placeholder: 'Select country'
      }
    }
  ]
}; 