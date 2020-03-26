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
    return db('agency');
};

function findBy(filter) {
    return db('agency').where(filter);
};

function findById (id) {
    return db('agency')
    .where('id', id)
    .first();
};

function add(newUser) {
    return db('agency')
    .insert(newUser)
    .then(ids => {
    return findById(ids[0]);
    });
};

function update(id, changes) {
    return db('agency')
    .where('id', id)
    .update(changes);
};

function remove (id) {
    return db('agency')
    .where('id', id)
    .del();
};