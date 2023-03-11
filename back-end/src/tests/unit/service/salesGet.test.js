const sinon = require('sinon');
const { expect } = require('chai');
const { Model } = require('sequelize');
const saleService = require('../../../service/sale.service');
const jwt = require('jsonwebtoken');
const { token } = require('../../mocks/login.mock');
const { allSellers, userSalles, sellerSalles } = require('../../mocks/sale.mock');

describe('Testes para consultas relacionadas a sales', function () {
  afterEach(function () {
    return sinon.restore();
  });

  it('Espera que seja possivel buscar todos os sellers', async function () {
    sinon.stub(Model, 'findAll').resolves(allSellers);
    sinon.stub(jwt, 'verify').returns();

    const result = await saleService.getAllSellers(token);

    expect(result).to.deep.equals(allSellers);
  });

  it('Espera que não seja possivel buscar todos os sellers sem um token', async function () {
    sinon.stub(Model, 'findAll').resolves(null);
    sinon.stub(jwt, 'verify').returns(null);

    try {
      const result = await saleService.getAllSellers(token);
      expect(result).to.equals(null);
    } catch (err) {
      expect(err.message).to.deep.equals('Inválid token!');
    }
  });

  it('Espera que seja possivel buscar todas as sales de um "costumer"', async function () {
    sinon.stub(Model, 'findAll').resolves(userSalles);

    const result = await saleService.getUserOrders();

    expect(result).to.deep.equals(userSalles);
  });

  it('Espera que seja possivel buscar todas as sales de um "seller"', async function () {
    sinon.stub(Model, 'findAll').resolves(sellerSalles);

    const result = await saleService.getSellerOrders();

    expect(result).to.deep.equals(sellerSalles);
  });
});