const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { Product } = require('../../../database/models');
const app = require('../../../api/app');
const { allProducts, productCreated, newProduct } = require('../../mocks/products.mock');
const { token } = require('../../mocks/login.mock');
const jwt = require('jsonwebtoken');
const { userData, userDataCostumer } = require('../../mocks/token.mock');

const { expect } = chai;
chai.use(chaiHttp);

const expectAssertions = (response, status, body) => {
  expect(response).to.be.json;
  expect(response).to.have.status(status);
  expect(response.body).to.deep.equal(body);
}

describe('Teste de integração para products', function () {
  afterEach(function () {
    return sinon.restore();
  });

  describe('Testes para rotas get de products', function () {
    it('Espera que sejam retornados todos os produtos do banco', async function () {
      sinon.stub(Product, 'findAll').resolves(allProducts);

      const response = await chai
        .request(app)
        .get('/products');

      expectAssertions(response, 200, allProducts);
    });

    it('Espera que seja possivel buscar um produto pelo id', async function () {
      sinon.stub(Product, 'findByPk').resolves(allProducts[1]);

      const response = await chai
        .request(app)
        .get('/products/2');

      expectAssertions(response, 200, allProducts[1]);
    });

    it('Espera que não seja possivel buscar um produto por um id inválido', async function () {
      sinon.stub(Product, 'findByPk').resolves(null);

      const response = await chai
        .request(app)
        .get('/products/9999');

      expectAssertions(response, 404, { message: 'Invalid product id!' });
    });

    it('Retorna status 500 ao buscar todos os produtos e um erro interno ocorre', async function () {
      sinon.stub(Product, 'findAll').throws(new Error);

      const response = await chai
        .request(app)
        .get('/products');

      expect(response).to.be.json;
      expect(response).to.have.status(500);
    });
  });

  describe('Testes para rota post de products', function () {
    it('Espera que seja possivel criar um novo produto com sucesso', async function () {
      sinon.stub(Product, 'create').resolves(productCreated);
      sinon.stub(jwt, 'verify').returns(userData);

      const response = await chai
        .request(app)
        .post('/products')
        .set('authorization', token)
        .send(newProduct);

      expectAssertions(response, 201, productCreated);
    });

    it('Espera que não dê para criar um produto sem nome', async function () {
      sinon.stub(Product, 'create').resolves(null);

      const response = await chai
        .request(app)
        .post('/products')
        .send({ ...newProduct, name: null });

      expectAssertions(response, 400, { message: 'Name is required.' })
    });

    it('Espera que não dê para criar um produto sem price', async function () {
      sinon.stub(Product, 'create').resolves(null);

      const response = await chai
        .request(app)
        .post('/products')
        .send({ ...newProduct, price: null });

      expectAssertions(response, 400, { message: 'Price is required.' })
    });

    it('Espera que não dê para criar um produto sem urlImage', async function () {
      sinon.stub(Product, 'create').resolves(null);

      const response = await chai
        .request(app)
        .post('/products')
        .send({ ...newProduct, urlImage: null });

      expectAssertions(response, 400, { message: 'Product image is required.' })
    });

    it('Espera que não dê para criar um produto sem ser um "seller"', async function () {
      sinon.stub(Product, 'create').resolves(null);
      sinon.stub(jwt, 'verify').returns(userDataCostumer);

      const response = await chai
        .request(app)
        .post('/products')
        .set('authorization', token)
        .send(newProduct);

      expectAssertions(response, 401, { message: 'Only sellers can register new products.' })
    });
  });

  describe('Testes para rota put de products', function () {
    it('Espera que seja possivel alterar um produto', async function () {
      sinon.stub(Product, 'update').resolves({ ...allProducts[0], name: 'Balalaika' });
      sinon.stub(Product, 'findByPk').resolves(allProducts[0]);
      sinon.stub(jwt, 'verify').returns(userData);

      const response = await chai
        .request(app)
        .put('/products/12')
        .set('authorization', token)
        .send({ ...allProducts[0], name: 'Balalaika' });

      expect(response).to.have.status(204);
      expect(response.body).to.deep.equal({});
    });

    it('Espera que não seja possivel alterar um produto com id inválido', async function () {
      sinon.stub(Product, 'update').resolves(null);
      sinon.stub(Product, 'findByPk').resolves(null);
      sinon.stub(jwt, 'verify').returns(userData);

      const response = await chai
        .request(app)
        .put('/products/999')
        .set('authorization', token)
        .send({ ...allProducts[0], name: 'Balalaika' });

      expectAssertions(response, 404, { message: "Invalid product id!" })
    });
  });
});