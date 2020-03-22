let gql = require('graphql-tag');
let graphql = require('graphql-anywhere').default;
let resolver = require('./resolver');
let func = require('./func');

let { parse } = require('graphql')

function valiadteQuery(value) {
    try {
        let ast = parse(value);
        return true
    } catch (error) {
        throw ""+ error
    }
}

/**
 * Generate the Seeded Json
 * @param query - graphql gql
 * @returns {any}
 */
function generate( query ) {
    valiadteQuery(query)
    return graphql(resolver, gql`${query}` );
}

module.exports = {
    generate,
    func
};
