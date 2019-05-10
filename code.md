// project table
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();

            tbl
                .string('name')
                .notNullable()
                .unique();

            tbl
                .string('description')
                .notNullable()

            tbl
                .boolean('status')
                .notNullable()
        })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('projects')
};


//actions table


exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('actions', tbl => {
            tbl.increments();

            tbl
                .string('description')
                .notNullable()

            tbl
                .string('notes')
                .notNullable()

            tbl
                .boolean('status')
                .notNullable()

            tbl
                .integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
        })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('actions')
};
