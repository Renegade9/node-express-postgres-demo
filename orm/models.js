const { DataTypes } = require('sequelize');
const { sq } = require('./config');

const User = sq.define('sequelize_user', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },

    fullName: {
        type: DataTypes.STRING,
    },

    age: {
        type: DataTypes.INTEGER,
    },

    employed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

// create table migration
User.sync().then(() => {
    console.log('User model synced')
});

module.exports = { User };