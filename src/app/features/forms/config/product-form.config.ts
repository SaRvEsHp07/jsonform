export const productFormSchema = {
  type: 'object',
  properties: {
    productName: {
      type: 'string',
      minLength: 3,
      title: 'Product Name'
    },
    category: {
      type: 'string',
      enum: ['Electronics', 'Clothing', 'Books', 'Food', 'Other'],
      title: 'Category'
    },
    price: {
      type: 'number',
      minimum: 0,
      title: 'Price'
    },
    inStock: {
      type: 'boolean',
      title: 'In Stock'
    },
    description: {
      type: 'string',
      title: 'Description'
    }
  },
  required: ['productName', 'category', 'price']
};

export const productFormUiSchema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      scope: '#/properties/productName',
      options: {
        placeholder: 'Enter product name'
      }
    },
    {
      type: 'Control',
      scope: '#/properties/category',
      options: {
        placeholder: 'Select category'
      }
    },
    {
      type: 'Control',
      scope: '#/properties/price',
      options: {
        placeholder: 'Enter price'
      }
    },
    {
      type: 'Control',
      scope: '#/properties/inStock'
    },
    {
      type: 'Control',
      scope: '#/properties/description',
      options: {
        placeholder: 'Enter product description',
        multi: true
      }
    }
  ]
}; 