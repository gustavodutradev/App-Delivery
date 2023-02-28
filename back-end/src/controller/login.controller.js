const loginService = require('../service/login.service');

async function createUser(req, res) {
    const user = req.body;
    const data = await loginService.createUser(user);
    return res.status(201).json(data);
}
async function loginUser(req, res) {
    const user = req.body;
    const data = await loginService.loginUser(user)
    return res.status(200).json(data);
}

module.exports = {
    createUser,
    loginUser,
}