let _ = require('lodash');
let faker = require('./faker');

/**
 * Graphql resolver that run faker
 * @param fieldName
 * @param rootValue
 * @param args
 * @param context
 * @param info
 * @returns {*}
 */

function resolver(fieldName, rootValue, args, context, info) {
   
    if (faker[fieldName]) {
        if (args) {
            return faker[fieldName](args);
        } else {
            return faker[fieldName]({});
        }
    } else {
        let arr = {};

        if (!info.isLeaf && info.directives && info.directives.array != null) {
            arr = [];
        }

        if (!info.isLeaf && info.directives && info.directives.repeat) {
            arr = [];
            let repeat = info.directives.repeat;
            let min = parseInt(repeat.min) || 0;
            let max = parseInt(repeat.max);

            let length = isNaN(max) ? min : _.random(min, max);

            if (length === 1 && info.directives.array === undefined) {
                arr = {};
            } else {
                arr = [];
                for (let j = 0; j < length; j++) {
                    arr.push({});
                }
            }
        }

        return arr;
    }
};

module.exports = resolver