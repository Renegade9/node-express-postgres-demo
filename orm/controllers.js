const { request } = require('express');
const { User } = require('./models')

const getUsers = async (req, res) => {
    const users = await User.findAll();
    res.json(users)
}

const createUser = async (req, res) => {
    // TODO add validation
    const newUser = User.create(
        { email, fullName, age, employed } = req.body);
    res.json(erq.body)
}

const updateUser = async (req, res) => {
    // TODO add validation
    await User.update({ fullName, age, employed } = req.body, {
        where: {
            email: req.params.email
        }
    });
    res.json(req.body)
}

const deleteUser = async (req, res) => {
    // TODO add validation
    await User.destroy({
        where: {
            email: req.params.email
        }
    });
    res.json(req.body)
}

module.exports = { getUsers, createUser, updateUser, deleteUser }