const sinon = require('sinon');
const { expect } = require('chai');
const { Model } = require('sequelize');
const productsService = require('../../../service/products.service');
const {
  allProducts,
  newProduct,
  productCreated,
} = require('../../mocks/products.mock');
const jwt = require('jsonwebtoken');
const {
  userData,
  userDataCostumer,
} = require('../../mocks/token.mock');
const { token } = require('../../mocks/login.mock');

describe('Testes para produtos', function () {
  afterEach(function () {
    return sinon.restore();
  });

  describe('Caso de sucesso', function () {
    it('Espera que seja possivel pegar todos os produtos', async function () {
      sinon.stub(Model, 'findAll').resolves(allProducts);

      const response = await productsService.getProducts();

      expect(response).to.deep.equal(allProducts);
    });

    it('Espera que seja possivel buscar um produto pelo id', async function () {
      sinon.stub(Model, 'findByPk').resolves(allProducts[0]);

      const response = await productsService.getProductById(1);

      expect(response).to.deep.equal(allProducts[0]);
    });

    it('Espera que seja possivel criar um novo produto', async function () {
      sinon.stub(Model, 'create').resolves(productCreated);
      sinon.stub(jwt, 'verify').returns(userData);

      const response = await productsService.createProduct(newProduct);

      expect(response).to.deep.equal(productCreated);
    });

    it('Espera que seja possivel atualizar um produto', async function () {
      sinon.stub(Model, 'update')
        .resolves({ ...allProducts[0], name: 'Lavadora de louça' });
      sinon.stub(Model, 'findByPk').resolves(allProducts[0]);
      sinon.stub(jwt, 'verify').returns(userData);

      await productsService
        .updateProduct({ ...newProduct, name: 'Lavadora de louça' }, 1, token);

      const response = await productsService.getProductById(1);
      expect(response).to.deep.equal(allProducts[0]);
    });
  });

  describe('Casos de erro', function () {
    it('Lança um erro caso buscando por um produto que não existe', async function () {
      sinon.stub(Model, 'findByPk').resolves(null);
      try {
        await productsService.getProductById(9999);
      } catch (err) {
        expect(err.message).to.deep.equal('Invalid product id!');
      };
    });

    it('Lança um erro caso tente criar um produto sem nome', async function () {
      sinon.stub(Model, 'create').resolves(null);
      sinon.stub(jwt, 'verify').returns(userData);

      try {
        await productsService.createProduct({ ...newProduct, name: null });
      } catch (err) {
        expect(err.message).to.deep.equal('Name is required.');
      };
    });

    it('Lança um erro caso tente criar um produto com o nome menor que 2 caracteres', async function () {
      sinon.stub(Model, 'create').resolves(null);
      sinon.stub(jwt, 'verify').returns(userData);

      try {
        await productsService.createProduct({ ...newProduct, name: 'a' });
      } catch (err) {
        expect(err.message).to.deep.equal('Name must be at least 2 characters.');
      };
    });

    it('Lança um erro caso tente criar um produto sem preço', async function () {
      sinon.stub(Model, 'create').resolves(null);
      sinon.stub(jwt, 'verify').returns(userData);

      try {
        await productsService.createProduct({ ...newProduct, price: null });
      } catch (err) {
        expect(err.message).to.deep.equal('Price is required.');
      };
    });

    it('Lança um erro caso tente criar um produto sem uma urlImage', async function () {
      sinon.stub(Model, 'create').resolves(null);
      sinon.stub(jwt, 'verify').returns(userData);

      try {
        await productsService.createProduct({ ...newProduct, urlImage: null });
      } catch (err) {
        expect(err.message).to.deep.equal('Product image is required.');
      };
    });

    it('Lança um erro caso tente criar um produto sem ser um "seller"', async function () {
      sinon.stub(Model, 'create').resolves(null);
      sinon.stub(jwt, 'verify').returns(userDataCostumer);

      try {
        await productsService.createProduct(newProduct);
      } catch (err) {
        expect(err.message).to.deep.equal('Only sellers can register new products.');
      };
    });

    it('Lança um erro caso tente alterar um produto sem ser um "seller"', async function () {
      sinon.stub(Model, 'create').resolves(null);
      sinon.stub(jwt, 'verify').returns(userDataCostumer);

      try {
        await productsService.updateProduct(newProduct, 12, token);
      } catch (err) {
        expect(err.message).to.deep.equal('Only sellers can register new products.');
      };
    });

    it('Lança um erro caso tente alterar um produto com um token inválido', async function () {
      sinon.stub(Model, 'create').resolves(null);

      try {
        await productsService.updateProduct(newProduct, 12, 'token');
      } catch (err) {
        expect(err.message).to.deep.equal('Inválid token!');
      };
    });
  });
});