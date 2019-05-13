const db = require('../dbConfig');
const knex = require('knex');


function find() {
    return db('projects');
}

function findById(id) {
    return db('projects')
        .where({ id })
        .first();
}

function add(project) {
    return db('projects')
        .insert(project, 'id')
        .then(([id]) => {
            return findById(id);
        });
}

function update(id, changes) {
    return db('projects')
        .where({ id })
        .update(changes)
        .then(count => {
            if (count > 0) {
                return findById(id);
            } else {
                return null;
            }
        });
}

function remove(id) {
    return db('projects')
        .where({ id })
        .del();
}

function getWithActions(id) {
    return db('projects')
        .innerJoin('actions', 'projects.id', 'actions.project_id')
        .where({ id })
}

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    getWithActions,
    findWithActions,
};
