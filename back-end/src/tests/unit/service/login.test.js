const sinon = require('sinon');
const { expect } = require('chai');
const { Model } = require('sequelize');
const loginService = require('../../../service/login.service');
const {
  adminLogin,
  adminInfo,
  loginServiceReturn,
  token,
} = require('../../mocks/login.mock');
const jwt = require('jsonwebtoken');

describe('Testes para o login de um usuário', function () {
  afterEach(function () {
    return sinon.restore();
  });

  describe('Casos de erro', function () {
    it('Lança um erro caso o email não esteja cadastrado', async function () {
      sinon.stub(Model, 'findOne').resolves(null);
      
      try {
        await loginService.loginUser({ ...adminLogin, email: 'falseAdmin@deliveryapp.com' });
      } catch (err) {
        expect(err.message).to.be.equals('Email or password is invalid!');
      }
    });

    it('Lança um erro caso a senha não seja igual a do banco de dados', async function () {
      sinon.stub(Model, 'findOne').resolves(adminInfo);
      
      try {
        await loginService.loginUser({ ...adminLogin, password: 'falseAdminPassword' });
      } catch (err) {
        expect(err.message).to.be.equals('Email or password is invalid!');
      }
    });
  });

  describe('Caso de sucesso', function () {
    it('Espera o retorno de um objeto contendo as informações do usuário e um token', async function () {
      sinon.stub(Model, 'findOne').resolves(adminInfo);
      sinon.stub(jwt, 'sign').returns(token);

      const result = await loginService.loginUser(adminLogin);

      expect(result).to.deep.equal(loginServiceReturn);
    });
  })
});