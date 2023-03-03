const sinon = require('sinon');
const { expect } = require('chai');
const { Model } = require('sequelize');
const loginService = require('../../../service/login.service');
const { createdUser, newUser, serviceObjReturn, token } = require('../../mocks/login.mock');
const jwt = require('jsonwebtoken');
const NotFound = require('../../../utils/errors/notFound');

describe('Testes para criação de um novo usuário', function () {
  afterEach(function () {
    return sinon.restore();
  });

  describe('Casos de erro', function () {
    it('Lança um erro caso o email esteja no formato "email@domain.domain"', async function () {
      sinon.stub(Model, 'findOne').resolves(null);
      sinon.stub(Model, 'create').resolves(null);

      try {
        await loginService.createUser({ ...newUser, email: 'emaileamil.com' });
      } catch (err) {
        expect(err.message).to.be.equals('Email must be: "email@domain.domain".');
      }
    });

    it('Lança um erro caso o name seja menor que 12 caracteres', async function () {
      sinon.stub(Model, 'findOne').resolves(null);
      sinon.stub(Model, 'create').resolves(null);

      try {
        await loginService.createUser({ ...newUser, name: 'Paulo' });
      } catch (err) {
        expect(err.message).to.be.equals('Name must be at least 12 characters long.');
      }
    });

    it('Lança um erro caso a password seja menor que 6 caracteres', async function () {
      sinon.stub(Model, 'findOne').resolves(null);
      sinon.stub(Model, 'create').resolves(null);

      try {
        await loginService.createUser({ ...newUser, password: '12345' });
      } catch (err) {
        expect(err.message).to.be.equals('Password must have at least 6 characters long.');
      }
    });
  });

  describe('Caso de sucesso', function () {
    it('Espera o retorno de um objeto contendo as informações do usuário e um token', async function () {
      sinon.stub(Model, 'findOne').resolves(null);
      sinon.stub(Model, 'create').resolves(createdUser);
      sinon.stub(jwt, 'sign').returns(token);

      const result = await loginService.createUser(newUser);

      expect(result).to.deep.equal(serviceObjReturn);
    });
  });
});