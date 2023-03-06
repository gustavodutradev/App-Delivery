const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { Product } = require('../../../database/models');
const app = require('../../../api/app');
const allProducts = require('../../mocks/products.mock');

const { expect } = chai;
chai.use(chaiHttp);

describe('Teste de integração para products', function () {
  afterEach(function () {
    return sinon.restore();
  });

  it('Espera que sejam retornados todos os produtos do banco', async function () {
    sinon.stub(Product, 'findAll').resolves(allProducts);
    
    const response = await chai
      .request(app)
      .get('/products');

    expect(response).to.be.json;
    expect(response).to.have.status(200);
    expect(response.body).to.deep.equal(allProducts);
  });
});