'use strict'

const Teamwork = require('./teamwork')

class Role extends Teamwork {

    /**
     * Get a Role
     * 
     * @method GET
     * @uri /roles/{role_id}.json
     * @url https://developer.teamwork.com/projects/project-roles/get-an-individual-role
     * @example tw.roles.get(role_id)
     * 
     * @param  {Number}
     * @return {Promise}
     */
    get(role_id) {
        if (!role_id) {
            return this.handleError('No Role id')
        }

        return this.query({
            uri: `/roles/${role_id}.json`
        })
    }

    /**
     * Create a role
     * 
     * @method POST
     * @uri /projects/${project_id}/roles.json
     * @url https://developer.teamwork.com/projects/project-roles/add-a-role-to-a-project
     * @example tw.roles.create(project_id, body)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    create(project_id, body = {}) {
        if (!project_id) {
            return this.handleError('No Project id')
        }

        return this.query({
            method: 'POST',
            uri: `/projects/${project_id}/roles.json`,
            body
        })
    }

    /**
     * Update a Role
     * 
     * @method PUT
     * @uri /roles/${role_id}.json
     * @url https://developer.teamwork.com/projects/project-roles/update-a-role-on-a-project
     * @example tw.roles.update(role_id, body)
     * 
     * @param  {Number}
     * @param  {Object}
     * @return {Promise}
     */
    update(role_id, body = {}) {
        if (!role_id) {
            return this.handleError('No Role id')
        }

        return this.query({
            method: 'PUT',
            uri: `/roles/${role_id}.json`,
            body
        })
    }

    /**
     * Delete a Role
     * 
     * @method DELETE
     * @uri /roles/${role_id}.json
     * @url https://developer.teamwork.com/projects/project-roles/delete-a-role
     * @example tw.roles.delete(role_id)
     * 
     * @param  {Number}
     * @return {Promise}
     */
    delete(role_id) {
        if (!role_id) {
            return this.handleError('No Role id')
        }

        return this.query({
            method: 'DELETE',
            uri: `/roles/${role_id}.json`
        })
    }

}

module.exports = Role