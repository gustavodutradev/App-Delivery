const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { User } = require('../../../database/models');
const app = require('../../../api/app');
const {
  newUser,
  registerServiceReturn,
  adminLogin,
  adminInfo,
  token,
  loginServiceReturn,
  createdUser,
} = require('../../mocks/login.mock');
const jwt = require('jsonwebtoken');

const { expect } = chai;
chai.use(chaiHttp);

describe('Teste de integração para login e register', function () {
  afterEach(function () {
    return sinon.restore();
  });

  describe('Testes para login', function () {
    it('Espera que quando não cadastrado não seja possivel fazer login', async function () {
      sinon.stub(User, 'findOne').resolves(null);
      
      const response = await chai
        .request(app)
        .post('/login')
        .send({ ...adminLogin, email: 'admin@invalid.com' });

      expect(response).to.be.json;
      expect(response).to.have.status(404);
      expect(response.body).to.deep.equal({ message: 'Email or password is invalid!' });
    });

    it('Espera não seja possivel fazer login com a senha errada', async function () {
      sinon.stub(User, 'findOne').resolves(adminInfo);
      
      const response = await chai
        .request(app)
        .post('/login')
        .send({ ...adminLogin, password: 'invalidPassword' });

      expect(response).to.be.json;
      expect(response).to.have.status(404);
      expect(response.body).to.deep.equal({ message: 'Email or password is invalid!' });
    });

    it('Espera que seja possivel fazer login', async function () {
      sinon.stub(User, 'findOne').resolves(adminInfo);
      sinon.stub(jwt, 'sign').returns(token);

      const response = await chai
        .request(app)
        .post('/login')
        .send(adminLogin);

      expect(response).to.be.json;
      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal(loginServiceReturn);
    });
  });

  describe('Testes para cadastro', function () {
    
    it('Espera que não seja possivel cadastrar um email já cadastrado', async function () {
      sinon.stub(User, 'findOne').resolves(createdUser);
      sinon.stub(User, 'create').resolves(null);

      const response = await chai
        .request(app)
        .post('/register')
        .send(newUser);

      expect(response).to.be.json;
      expect(response).to.have.status(409);
      expect(response.body).to.deep.equal({ message: 'Email already registered.'});
    });

    it('Espera que não seja possivel cadastrar com um email inválido', async function () {
      sinon.stub(User, 'findOne').resolves(null);
      sinon.stub(User, 'create').resolves(null);

      const response = await chai
        .request(app)
        .post('/register')
        .send({ ...newUser, email: 'emaileamil.com' });

      expect(response).to.be.json;
      expect(response).to.have.status(400);
      expect(response.body).to.deep.equal({ message: 'Email must be: "email@domain.domain".'});
    });

    it('Espera que o nome não seja menor que 12 caracteres', async function () {
      sinon.stub(User, 'findOne').resolves(null);
      sinon.stub(User, 'create').resolves(null);

      const response = await chai
        .request(app)
        .post('/register')
        .send({ ...newUser, name: 'Nome' });

      expect(response).to.be.json;
      expect(response).to.have.status(400);
      expect(response.body).to.deep.equal({ message: 'Name must be at least 12 characters long.'});
    });

    it('Espera que a senha não seja menor que 6 caracteres', async function () {
      sinon.stub(User, 'findOne').resolves(null);
      sinon.stub(User, 'create').resolves(null);

      const response = await chai
        .request(app)
        .post('/register')
        .send({ ...newUser, password: 'ruim' });

      expect(response).to.be.json;
      expect(response).to.have.status(400);
      expect(response.body).to.deep.equal({ message: 'Password must have at least 6 characters long.'});
    });

    it('Espera que seja possivel se cadastrar', async function () {
      sinon.stub(User, 'findOne').resolves(null);
      sinon.stub(User, 'create').resolves(createdUser);
      sinon.stub(jwt, 'sign').returns(token);

      const response = await chai
        .request(app)
        .post('/register')
        .send(newUser);

      expect(response).to.be.json;
      expect(response).to.have.status(201);
      expect(response.body).to.deep.equal(registerServiceReturn);
    });
  });
});