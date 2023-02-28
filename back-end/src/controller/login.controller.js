import { createUser } from '../service/login.service';

async function createUser(req, res) {
    const user = req.body;
    const data = await createUser(user);
    return res.status(201).json(data);
}