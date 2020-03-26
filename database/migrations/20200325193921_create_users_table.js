exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments();
        table.string('full_name').notNullable()
        table.string('phone').notNullable()
        table.string('email').notNullable()
    })

    .createTable('cases', table => {
        table.increments();
        table.integer('case_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        table.string('full_name').notNullable()
        table.string('phone').notNullable()
        table.string('email').notNullable()
        table.string('street_address').notNullable()
        table.string('zip_code').notNullable()
        table.string('city').notNullable()
        table.string('state').notNullable()
    })

    .createTable('agency', table => {
        table.increments();
        table.integer('agency_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('cases')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        table.string('full_name').notNullable()
        table.string('business_phone').notNullable()
        table.string('business_email').notNullable()
        table.string('street_address').notNullable()
        table.string('zip_code').notNullable()
        table.string('city').notNullable()
        table.string('state').notNullable()
    })

    .createTable('joins', table => {
        table.increments();
        table.integer('case_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('agency')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        table.integer('agency_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('cases')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('joins')
    .dropTableIfExists('agency')
    .dropTableIfExists('cases')
    .dropTableIfExists('users')
};