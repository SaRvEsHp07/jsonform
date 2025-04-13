export const userFormSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 2
    },
    email: {
      type: 'string',
      format: 'email'
    },
    age: {
      type: 'integer',
      minimum: 18
    },
    address: {
      type: 'object',
      properties: {
        street: {
          type: 'string'
        },
        city: {
          type: 'string'
        },
        country: {
          type: 'string',
          enum: ['USA', 'Canada', 'UK', 'Australia']
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
      label: 'Full Name'
    },
    {
      type: 'Control',
      scope: '#/properties/email',
      label: 'Email Address'
    },
    {
      type: 'Control',
      scope: '#/properties/age',
      label: 'Age'
    },
    {
      type: 'Control',
      scope: '#/properties/address/properties/street',
      label: 'Street Address'
    },
    {
      type: 'Control',
      scope: '#/properties/address/properties/city',
      label: 'City'
    },
    {
      type: 'Control',
      scope: '#/properties/address/properties/country',
      label: 'Country'
    }
  ]
};

export const productFormSchema = {
  type: 'object',
  properties: {
    productName: {
      type: 'string',
      minLength: 2
    },
    price: {
      type: 'number',
      minimum: 0
    },
    category: {
      type: 'string',
      enum: ['Electronics', 'Clothing', 'Books', 'Home']
    },
    description: {
      type: 'string'
    },
    inStock: {
      type: 'boolean'
    }
  },
  required: ['productName', 'price', 'category']
};

export const productFormUiSchema = {
  type: 'HorizontalLayout',
  elements: [
    {
      type: 'VerticalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/productName',
          label: 'Product Name'
        },
        {
          type: 'Control',
          scope: '#/properties/price',
          label: 'Price'
        }
      ]
    },
    {
      type: 'VerticalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/category',
          label: 'Category'
        },
        {
          type: 'Control',
          scope: '#/properties/inStock',
          label: 'In Stock'
        }
      ]
    },
    {
      type: 'Control',
      scope: '#/properties/description',
      label: 'Description',
      options: {
        multi: true
      }
    }
  ]
}; 