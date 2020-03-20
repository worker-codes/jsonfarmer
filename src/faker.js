let faker = require( "faker" );
let chance = require('chance').Chance();
let _ = require( "lodash" );
let numeral = require( "numeral" );
let moment = require( "moment" );
// let objectId = require( "../vendor/object-id" );
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


Array.prototype.random = function () {
    return this[ Math.floor( ( Math.random() * this.length ) ) ];
};

module.exports = generatorFunctions
// export default {
let mike = {

    // make faker to public
    faker: faker,

    /**
     * returns random item from passed arguments list.
     * @params [arg1, arg2, ...]
     * @returns {*}
     */
    random (/*[arg1, arg2,...]*/ { data }) {
        return faker.random.arrayElement( _.toArray( data ) );
    },

    /**
     * Random integer in specified range. Can be negative.
     * @param min - Minimum number in the range.
     * @param max - Maximum number in the range.
     * @param format - Number format. For more info visit http://adamwdraper.github.io/Numeral-js/
     * @returns {*}
     */
    integer ( { min, max, format } ) {

        let number = _.random( min, max );

        if ( format ) {
            return numeral( number ).format( format );
        }

        return number;
    },


    /**
     *  Random float in specified range. If min argument is float
     *  generated number will be float too with same number of decimals. Can be negative.
     * @param min - Minimum number in the range.
     * @param max - Maximum number in the range.
     * @param fixed - Number of decimals
     * @param format - Number format. For more info visit http://adamwdraper.github.io/Numeral-js/
     * @returns {number}
     */
    floating ( { min = null, max = null, fixed = null, format = null } ) {
        let number = _.random( min, max, true );

        if ( fixed ) {
            number = number.toFixed( fixed );
        }

        if ( format ) {
            number = numeral( number ).format( format );
        }

        return ( isNaN( parseFloat( number ) ) ) ? number : parseFloat( number );
    },

    // Random boolean value.
    bool () {
        return faker.random.boolean();
    },

    // Random globally unique identifier.
    guid () {
        return faker.random.uuid();
    },

    finance ({ min = null, max = null, fixed = null, format = null }) {
        return chance.floating({min, max, fixed});
    },

    // MongoDB's globally unique identifier for objects.
    objectId () {
        return ObjectID();
    },

    /**
     * Random date in specified range.
     * @param [min] - Minimum date in the range. Default is new Date(1970, 0, 1).
     * @param [max] - Maximum date in the range. Default is new Date().
     * @param [format] - Date format. For more info visit http://github.com/hogart/datef
     * @returns {*}
     */
    date ( { min = null, max = null, format = null } ) {
        let date;

        if ( !format ) {
            if ( typeof max === "string" ) {
                format = max;
            } else if ( typeof min === "string" ) {
                format = min;
            }
        }

        min = _.isDate( min ) ? min : new Date( 0 );
        max = _.isDate( max ) ? max : new Date();

        // date = new Date(_.random(min.getTime(), max.getTime()));
        // console.log(min);

        date = date = faker.date.between( min, max );

        if ( format ) {
            return moment(date ).format(format);
        }

        return date.toISOString()
    },

    /**
     * Random Lorem Ipsum text.
     * @param count - Number of generated units. Default is 1.
     * @param units - Units type. Can be words, sentences, or paragraphs. Default is sentences.
     */
    lorem ( count, units ) {
        count = count || 1;
        units = units || "sentences";

        return faker.lorem[ units ]( count );

    },

    /**
     * Random person name of both genders if no gender is specified.
     * @param [gender]
     */
    firstName ( gender ) {
        gender = gender === "male" ? 0 : 1;
        return faker.name.firstName( gender );
    },

    paragraph ( { sentences=null } ) {
        return chance.paragraph( {sentences} );
    },
    ssn ( { ssnFour=null, dashes=true } ) {
        return chance.ssn( {ssnFour, dashes} );
    },

    // equal lastName
    surname () {
        return faker.name.lastName();
    },

    lastName () {
        return faker.name.lastName();
    },

    // Random company name.
    company () {
        return faker.company.companyName();
    },

    // Random email
    email () {
        return faker.internet.email();
    },

    // Random phone number
    phone ( { format = null } ) {
        let phonePrefix = [
            135, 136, 137, 138, 139, 150,
            151, 152, 157, 158, 159, 187,
            188, 130, 131, 132, 155, 156,
            185, 186, 133, 153, 180, 189,
        ];

        format = format || faker.random.arrayElement( phonePrefix ) + "########";
        format = format.replace( /x/g, "#" );

        return faker.phone.phoneNumber( format );
    },

    // Random country
    country () {
        return faker.address.country();
    },

    // Random state
    state () {
        return faker.address.state();
    },

    // random city
    city () {
        return faker.address.city();
    },

    // random street
    street () {
        return faker.address.streetName();
    },

    streetAddress () {
        return faker.address.streetAddress();
    },

    secondaryAddress () {
        return faker.address.secondaryAddress();
    },

    // random street
    commerceColor () {
        return faker.commerce.color();
    },
    commerceDepartment () {
        return faker.commerce.department();
    },
    commerceProductName () {
        return faker.commerce.productName();
    },
    commercePrice() {
        return faker.commerce.price();
    },
    commerceProductAdjective() {
        return faker.commerce.productAdjective();
    },
    commerceProductMaterial() {
        return faker.commerce.productMaterial();
    },
    commerceProduct() {
        return faker.commerce.product();
    },

    past () {
        return faker.date.past();
    },


    // random street
    jobTitle () {
        return faker.name.jobTitle();
    },

    findName () {
        return faker.name.findName();
    },

    age ({ type=null } ) {
      
        return chance.age({type:type})
    },
    birthday ({ type=null, string= false, american= false } ) {
      
        return chance.birthday({type, string, american})
    },

    // image
    image() { return faker.image.image() },

    /**
     * image placeholder, single color image
     * http://dummyimage.com/100x200/F00/FFF.png&text=hello
     * @param width
     * @param height
     * @param options
     * @returns {string}
     */
    imagePl ( width, height, options ) {
        let imageUrl = "http://dummyimage.com/",
            bgColor,
            fgColor;

        // check params
        if ( typeof width === "object" ) options = width;
        if ( typeof height === "object" ) options = height;

        // overwrite default options
        o = _.extend( {
            width: 640,
            height: 480,
            bgColor: [ "CCC", "FF9C5B", "FAD089", "FF9C5B", "ED303C", "3B8183" ],
            fgColor: [ "333", "FFF" ],
            format: "png",
            text: "",
        }, options );

        o.width = typeof width === "number" ? width : o.width;
        o.height = typeof height === "number" ? height : o.height;

        // if color is array, random to pick one
        bgColor = _.isArray( o.bgColor ) ? faker.random.arrayElement( o.bgColor ) : o.bgColor;
        fgColor = _.isArray( o.fgColor ) ? faker.random.arrayElement( o.fgColor ) : o.fgColor;

        imageUrl += (
            o.width + "x" +
            o.height + "/" +
            bgColor + "/" +
            fgColor + "." +
            o.format + "&text=" +
            o.text
        );

        return imageUrl;
    },

};
