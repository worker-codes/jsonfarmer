let faker = require( "faker" );
let chance = require('chance').Chance();
let ObjectID = require("bson-objectid");
let func = require("./func");


let generatorFunctions ={}
for (const key in func) {
    if (func.hasOwnProperty(key)) {             
        const element = func[key];

        generatorFunctions[key] = (args)=>{           
            if (element.type === "faker") {

                const attrs = element.attrs

                let newArgs =[]
                for (const attr of attrs) {
                    newArgs.push(args[attr.name])
                }

                return faker[element.cat][key].apply(this, newArgs);

            } else if (element.type === "chance") {
                return chance[key](args)
            } else if (element.type === "custom") {
                return element.custom(args)
            }        
        }
    }
}
module.exports = generatorFunctions
