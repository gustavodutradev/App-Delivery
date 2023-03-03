const newUser = {
  name: 'Paulo Gustavo Afonseca Evangelista',
  email: 'pauloRicardo_09@mock.com',
  password: 'AfonsecaPaulo0509'
}

const createdUser = {
  name: 'Paulo Gustavo Afonseca Evangelista',
  email: 'pauloRicardo_09@mock.com',
  password: '8d57ce3a6d955aa96df7dbdef2a4e094',
  role: 'costumer'
}

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJQYXVsbyBHdXN0YXZvIEFmb25zZWNhIEV2YW5nZWxpc3RhIiwiZW1haWwiOiJwYXVsb1JpY2FyZG9fMDlAbW9jay5jb20iLCJyb2xlIjoiY29zdHVtZXIifSwiaWF0IjoxNjc3ODczNzMxLCJleHAiOjE2Nzg3Mzc3MzF9.0Dnej2pqF1t19s7IBCKaL-W5t7k6LE5b5WYHaQ8zQNA'

const registerServiceReturn = {
  name: 'Paulo Gustavo Afonseca Evangelista',
  email: 'pauloRicardo_09@mock.com',
  role: 'costumer',
  token
};

const adminLogin = {
  email: 'adm@deliveryapp.com',
  password: '--adm2@21!!--'
}

const adminInfo = {
  id: 1,
  name: 'Delivery App Admin',
  email: 'adm@deliveryapp.com',
  password: 'a4c86edecc5aee06eff8fdeda69e0d04',
  role: 'administrator',
}

const loginServiceReturn = {
  name: adminInfo.name,
  email: adminInfo.email,
  role: adminInfo.role,
  token
}

module.exports = {
  newUser,
  createdUser,
  token,
  registerServiceReturn,
  adminLogin,
  adminInfo,
  loginServiceReturn,
};
