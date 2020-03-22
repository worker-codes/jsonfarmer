let gql = require('graphql-tag');
let graphql = require('graphql-anywhere').default;
let resolver = require('./resolver');
let mkdirp = require('mkdirp');
let fs = require('fs');
let path = require('path');
let { parse } = require('graphql')
let logSyntaxError = require('log-syntax-error')

function valiadteQuery(value) {
    try {
        let ast = parse(value);
        return true
    } catch (error) {

        error.locations
        error.locations.forEach(location => {
            var block = logSyntaxError( value, location.line, location.column-1 );
            console.error( block );
        });
        
        // console.error(error.message)
        throw new Error(error.message)
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

/**
 * save as json file
 * @param query - graphql query
 * @param saveDir - path to save file
 */
function save(query, saveDir) {
    valiadteQuery(query)
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
            console.log("JSON file Created")
        });
    });
}

module.exports = {
    // faker: faker,
    generate: generate,
    savetoFile: save
};
