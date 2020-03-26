exports.up = function(knex) {
    return knex.schema.createTable('agency', table => {
        table.increments();
        table.string('full_name').notNullable()
        table.string('business_phone').notNullable()
        table.string('business_email').notNullable()
        table.string('street_address').notNullable()
        table.string('zip_code').notNullable()
        table.string('city').notNullable()
        table.string('state').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('agency')
};
