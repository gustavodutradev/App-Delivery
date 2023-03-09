const newSale = {
  userId: 3,
  sellerId: 2,
  products: [
    { id: 3, quantity: 2 },
    { id: 6, quantity: 1 },
    { id: 2, quantity: 4 },
    { id: 4, quantity: 6 },
    { id: 10, quantity: 1 },
    { id: 1, quantity: 2 }
  ],
  address: {
    street: 'Rua ortegas ferraz',
    number: 782
  },
  totalPrice: 322.00
};

const mockFindByPk = {
  id: 1,
  userId: 3,
  sellerId: 2,
  totalPrice: '322.00',
  deliveryAddress: 'Rua ortegas ferraz',
  deliveryNumber: '782',
  saleDate: '2023-03-09T18:49:11.000Z',
  status: 'Pendente',
  seller: {
    id: 2,
    name: 'Fulana Pereira'
  },
  products: [
    {
      name: 'Skol Lata 250ml',
      price: 2.20,
      SalesProduct: {
        quantity: 2
      }
    },
    {
      name: 'Heineken 600ml',
      price: 7.50,
      SalesProduct: {
        quantity: 4
      }
    },
    {
      name: 'Antarctica Pilsen 300ml',
      price: 2.49,
      SalesProduct: {
        quantity: 2
      }
    },
    {
      name: 'Brahma 600ml',
      price: 7.50,
      SalesProduct: {
        quantity: 6
      }
    },
    {
      name: 'Skol Beats Senses 313ml',
      price: 4.49,
      SalesProduct: {
        quantity: 1
      }
    },
    {
      name: 'Skol Beats Senses 269ml',
      price: 3.57,
      SalesProduct: {
        quantity: 1
      }
    }
  ],
};

const createdSale = {
  saleId: 1,
  totalPrice: '322.00',
  saleDate: '2023-03-09T18:49:11.000Z',
  status: 'Pendente',
  seller: {
    id: 2,
    name: 'Fulana Pereira'
  },
  products: [
    {
      name: 'Skol Lata 250ml',
      price: 2.20,
      quantity: 2
    },
    {
      name: 'Heineken 600ml',
      price: 7.50,
      quantity: 4
    },
    {
      name: 'Antarctica Pilsen 300ml',
      price: 2.49,
      quantity: 2
    },
    {
      name: 'Brahma 600ml',
      price: 7.50,
      quantity: 6
    },
    {
      name: 'Skol Beats Senses 313ml',
      price: 4.49,
      quantity: 1
    },
    {
      name: 'Skol Beats Senses 269ml',
      price: 3.57,
      quantity: 1
    }
  ],
};

const allSellers = [
  {
    id: 2,
    name: 'Fulana Pereira',
    email: 'fulana@deliveryapp.com',
    password: '3c28d2b0881bf46457a853e0b07531c6',
    role: 'seller'
  }
];

const userSalles = [
  {
    id: 1,
    totalPrice: '322.00',
    saleDate: '2023-03-09T18:49:11.000Z',
    status: 'Pendente'
  },
];

const sellerSalles = [
  {
    id: 1,
    totalPrice: '322.00',
    saleDate: '2023-03-09T18:49:11.000Z',
    deliveryAddress: 'Rua das laranjeiras',
    deliveryNumber: '2001',
    status: 'Pendente'
  },
];

module.exports = {
  newSale,
  createdSale,
  mockFindByPk,
  allSellers,
  userSalles,
  sellerSalles,
};
