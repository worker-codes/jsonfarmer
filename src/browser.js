let gql = require('graphql-tag');
let graphql = require('graphql-anywhere').default;
let resolver = require('./resolver');
let func = require('./func');
/**
 * Generate the Seeded Json
 * @param query - graphql gql
 * @returns {any}
 */
function generate( query ) {
    return graphql(resolver, gql`${query}` );
}

module.exports = {
    generate,
    func
};
