const connection = require('./connection')

module.exports = {
    getAllUsers
}

function getAllUsers(db = connection) {
    return db('users').select()
}
