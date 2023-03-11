const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { Sale, SalesProduct, User } = require('../../../database/models');
const app = require('../../../api/app');
const { token } = require('../../mocks/login.mock');
const jwt = require('jsonwebtoken');
const {
  allSellers,
  sellerSalles,
  userSalles,
  mockFindByPk,
  createdSale,
  newSale
} = require('../../mocks/sale.mock');
const InvalidParam = require('../../../utils/errors/invalidParam');

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

  describe('Testes para rotas get de sales', function () {
    it('Espera que sejam retornados todos os "sellers" do banco', async function () {
      sinon.stub(User, 'findAll').resolves(allSellers);
      sinon.stub(jwt, 'verify').returns();

      const response = await chai
        .request(app)
        .get('/sales/sellers')
        .set('authorization', token);

      expectAssertions(response, 200, allSellers);
    });

    it('Espera que retorne um erro caso não contenha um token válido', async function () {
      sinon.stub(User, 'findAll').resolves(allSellers);
      sinon.stub(jwt, 'verify').throws(new InvalidParam);

      const response = await chai
        .request(app)
        .get('/sales/sellers')
        .set('authorization', 'invalid');

      expectAssertions(response, 400, { message: 'Inválid token!' });
    });

    it('Espera que seja possivel buscar todas as sales de um "seller"', async function () {
      sinon.stub(Sale, 'findAll').resolves(sellerSalles);

      const response = await chai
        .request(app)
        .get('/sales/seller/2');

      expectAssertions(response, 200, sellerSalles);
    });

    it('Espera que seja possivel buscar todas as sales de um "costumer"', async function () {
      sinon.stub(Sale, 'findAll').resolves(userSalles);

      const response = await chai
        .request(app)
        .get('/sales/user/3');

      expectAssertions(response, 200, userSalles);
    });

    it('Espera que seja possivel buscar uma sale pelo id', async function () {
      sinon.stub(Sale, 'findByPk').resolves(mockFindByPk);

      const response = await chai
        .request(app)
        .get('/sales/1');

      expectAssertions(response, 200, createdSale);
    });
  });

  describe('Testes para rota post de sales', function () {
    it('Espera que seja possivel criar uma nova sale com sucesso', async function () {
      sinon.stub(Sale, 'create').resolves({ id: 1 })
      sinon.stub(SalesProduct, 'create').resolves();
      sinon.stub(Sale, 'findByPk').resolves(mockFindByPk);
      sinon.stub(jwt, 'verify').returns();

      const response = await chai
        .request(app)
        .post('/sales')
        .set('authorization', token)
        .send(newSale);

      expectAssertions(response, 201, createdSale);
    });

    it('Espera que não dê para criar uma sale sem um token válido', async function () {
      sinon.stub(jwt, 'verify').throws(new InvalidParam);

      const response = await chai
        .request(app)
        .post('/sales')
        .set('authorization', '')
        .send(newSale);

      expectAssertions(response, 400, { message: 'Inválid token!' })
    });
  });

  describe('Testes para pegar erros internos', function () {
    it('Retorna status 500 ao buscar uma sale pelo id e de erro', async function () {
      sinon.stub(Sale, 'findByPk').throws(new Error);

      const response = await chai
        .request(app)
        .get('/sales/1');

      expect(response).to.be.json;
      expect(response).to.have.status(500);
    });

    it('Retorna status 500 ao buscar as sales de "seller" e de erro', async function () {
      sinon.stub(Sale, 'findAll').throws(new Error);

      const response = await chai
        .request(app)
        .get('/sales/user/3');

      expect(response).to.be.json;
      expect(response).to.have.status(500);
    });

    it('Retorna status 500 ao buscar uma sale de "costumer" e de erro', async function () {
      sinon.stub(Sale, 'findAll').throws(new Error);

      const response = await chai
        .request(app)
        .get('/sales/seller/2');

      expect(response).to.be.json;
      expect(response).to.have.status(500);
    });
  });
});