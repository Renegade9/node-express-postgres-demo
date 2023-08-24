const { request } = require('express');
const { User } = require('./models')

const getUsers = async (req, res) => {
    const users = await User.findAll();
    res.json(users)
}

const getUser = async (req, res) => {
    const user = await User.findByPk(req.params.email);
    res.json(user)
}

// TODO getUser ... findByPk else res.status(404).send()

const createUser = async (req, res) => {
    // TODO add validation
    const newUser = User.create(
        { email, fullName, age, employed } = req.body);
    res.json(req.body)
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

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser }