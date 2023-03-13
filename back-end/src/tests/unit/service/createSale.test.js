const sinon = require('sinon');
const { expect } = require('chai');
const { Model } = require('sequelize');
const saleService = require('../../../service/sale.service');
const jwt = require('jsonwebtoken');
const { token } = require('../../mocks/login.mock');
const { newSale, createdSale, mockFindByPk } = require('../../mocks/sale.mock');

describe('Testes para criação de uma sale', function () {
  afterEach(function () {
    return sinon.restore();
  });

  it('Espera que não seja possivel criar uma sale sem token', async function () {
    sinon.stub(Model, 'create').resolves(null);
    sinon.stub(jwt, 'sign').returns(null);

    try {
      const result = await saleService.createSale(newSale, 'invalidToken');
      expect(result).to.equal(null);
    } catch (err) {
      expect(err.message).to.equal('Inválid token!');
    }
  });

  it('Espera que seja possivel realizar uma sale', async function () {
    sinon.stub(Model, 'create').resolves({ id: 1 }).onSecondCall(createdSale.products);
    sinon.stub(Model, 'findByPk').resolves(mockFindByPk);
    sinon.stub(jwt, 'sign').returns();

    const result = await saleService.createSale(newSale, token);

    expect(result).to.deep.equal(createdSale);
  });
});