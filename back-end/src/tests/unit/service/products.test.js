const sinon = require('sinon');
const { expect } = require('chai');
const { Model } = require('sequelize');
const productsService = require('../../../service/products.service');
const allProducts = require('../../mocks/products.mock');

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
  });
});