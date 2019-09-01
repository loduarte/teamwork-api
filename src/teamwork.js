'use strict'

var request = require('request-promise-native')

class Teamwork {

    /**
     * Teamwork Constructor
     * 
     * @param  {String}
     * @param  {String}
     * @return {Object}
     */
    constructor(api_key, domain) {
        this.api_key = api_key
        this.domain = domain
        this.europe = domain.indexOf('.eu') === -1
    }
    
    /**
     * Get account information
     * 
     * @method GET
     * @uri /account.json
     * @url https://developer.teamwork.com/projects/account/get-account
     * @example tw.teamwork.account()
     * 
     * @return {Promise}
     */
    account() {
        return this.query({
            uri: '/account.json'
        })
    }

    /** 
     * Authenticate a user
     * 
     * @method GET
     * @uri /authenticate.json
     * @url https://developer.teamwork.com/projects/authentication-questions/authentication
     * @example tw.teamwork.authenticate()
     * 
     * @return {Promise}
     */
    authenticate() {
        return this.query({
            uri: '/authenticate.json',
            baseUrl: 'https://' + (this.europe ? 'authenticate.teamwork.com' : 'authenticate.eu.teamwork.com')
        })
    }

    /** 
     * Search
     * 
     * @method GET
     * @uri /search.json
     * @url https://developer.teamwork.com/projects/search/search
     * @example tw.teamwork.search(query_string)
     *
     * @param {Object}
     * @return {Promise}
     */
    search(qs = {}) {
        return this.query({
            uri: '/search.json',
            qs
        })
    }

    /**
     * handle Errors
     * 
     * @param  {String}
     * @return {Promise}
     */
    handleError(message = 'Fatal error occured') {
        return Promise.reject(message)
    }

    /**
     * Execute api query
     * 
     * @param  {Object}
     * @param  {Object}
     * @return {Promise}
     */
    query(options = {}) {

        options = Object.assign({
            method: 'GET',
            baseUrl: `https://${this.domain}.teamwork.com`,
            uri: '/',
            json: true,
            auth: {
                user: this.api_key,
                pass: 'xx'
            }
        }, options)

        return request(options)
    }

}

module.exports = Teamwork