exports.up = function(knex) {
    return knex.schema.createTable('cases', table => {
        table.increments();
        table.string('full_name').notNullable()
        table.string('phone').notNullable()
        table.string('email').notNullable()
        table.string('street_address').notNullable()
        table.string('zip_code').notNullable()
        table.string('city').notNullable()
        table.string('state').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cases')
};
