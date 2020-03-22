let gql = require('graphql-tag');
let graphql = require('graphql-anywhere').default;
let resolver = require('./resolver');
let mkdirp = require('mkdirp');
let fs = require('fs');
let path = require('path');

console.log(resolver);

/**
 * Generate the Seeded Json
 * @param query - graphql gql
 * @returns {any}
 */
function generate( query ) {
    return graphql(resolver, gql`${query}` );
}

/**
 * save as json file
 * @param query - graphql query
 * @param saveDir - path to save file
 */
function save(query, saveDir) {
    let data = graphql(resolver, gql`${query}` );
    let dir = path.dirname(saveDir);

    mkdirp(dir, (err) => {
        if(err) {
            throw err.message
        }

        fs.writeFile(saveDir, JSON.stringify(data, null, 2), (err) => {
            if(err) {
                throw err.message
            }
            console.log("Seed file Created")
        });
    });
}

module.exports = {
    // faker: faker,
    generate: generate,
    savetoFile: save
};
