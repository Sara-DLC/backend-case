const db = require('../database/db.config');

module.exports = {
    find,
    findBy,
    findById, 
    add,
    update,
    remove,
}


function find(){
    return db('cases');
};

function findBy(filter) {
    return db('cases').where(filter);
};

function findById (id) {
    return db('cases')
    .where('id', id)
    .first();
};

function add(newUser) {
    return db('cases')
    .insert(newUser)
    .then(ids => {
    return findById(ids[0]);
    });
};

function update(id, changes) {
    return db('cases')
    .where('id', id)
    .update(changes);
};

function remove (id) {
    return db('cases')
    .where('id', id)
    .del();
};