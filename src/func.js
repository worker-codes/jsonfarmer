module.exports = {
    ///address
    zipCode: {
        type: "faker",
        cat: "address",
        attrs: [
            {
                name: "format",
                type: "string"
            }
        ]
    },
    city: {
        type: "faker",
        cat: "address",
        attrs: []
    },
    cityPrefix: {
        type: "faker",
        cat: "address",
        attrs: []
    },
    citySuffix: {
        type: "faker",
        cat: "address",
        attrs: []
    },
    streetName: {
        type: "faker",
        cat: "address",
        attrs: []
    },
    streetAddress: {
        type: "faker",
        cat: "address",
        attrs: [
            {
                name: "useFullAddress",
                type: "bool"
            }
        ]
    },
    streetSuffix: {
        type: "faker",
        cat: "address",
        attrs: []
    },
    streetPrefix: {
        type: "faker",
        cat: "address",
        attrs: []
    },
    secondaryAddress: {
        type: "faker",
        cat: "address",
        attrs: []
    },
    county: {
        type: "faker",
        cat: "address",
        attrs: []
    },
    country: {
        type: "faker",
        cat: "address",
        attrs: []
    },
    countryCode: {
        type: "faker",
        cat: "address",
        attrs: []
    },
    state: {
        type: "faker",
        cat: "address",
        attrs: [
            {
                name: "useAbbr",
                type: "bool"
            }
            // {
            //     name: "useFullAddress",
            //     type: "bool"
            // }
        ]
    },
    stateAbbr: {
        type: "faker",
        cat: "address",
        attrs: []
    },
    latitude: {
        type: "faker",
        cat: "address",
        attrs: []
    },
    longitude: {
        type: "faker",
        cat: "address",
        attrs: []
    },

    /////commerce
    color: {
        type: "faker",
        cat: "commerce",
        attrs: []
    },
    department: {
        type: "faker",
        cat: "commerce",
        attrs: []
    },
    productName: {
        type: "faker",
        cat: "commerce",
        attrs: []
    },
    price: {
        type: "faker",
        cat: "commerce",
        attrs: [
            {
                name: "min",
                type: "number"
            },
            {
                name: "max",
                type: "number"
            },
            {
                name: "dec",
                type: "number"
            },
            {
                name: "symbol",
                type: "string"
            }
        ]
    },
    productAdjective: {
        type: "faker",
        cat: "commerce",
        attrs: []
    },
    productMaterial: {
        type: "faker",
        cat: "commerce",
        attrs: []
    },
    product: {
        type: "faker",
        cat: "commerce",
        attrs: []
    },

    /////company
    suffixes: {
        type: "faker",
        cat: "company",
        attrs: []
    },
    companyName: {
        type: "faker",
        cat: "company",
        attrs: [
            {
                name: "format",
                type: "string"
            }
        ]
    },
    companySuffix: {
        type: "faker",
        cat: "company",
        attrs: []
    },
    catchPhrase: {
        type: "faker",
        cat: "company",
        attrs: []
    },
    bs: {
        type: "faker",
        cat: "company",
        attrs: []
    },
    catchPhraseAdjective: {
        type: "faker",
        cat: "company",
        attrs: []
    },
    catchPhraseDescriptor: {
        type: "faker",
        cat: "company",
        attrs: []
    },
    catchPhraseNoun: {
        type: "faker",
        cat: "company",
        attrs: []
    },
    bsAdjective: {
        type: "faker",
        cat: "company",
        attrs: []
    },
    bsBuzz: {
        type: "faker",
        cat: "company",
        attrs: []
    },
    bsNoun: {
        type: "faker",
        cat: "company",
        attrs: []
    },

    //database
    column: {
        type: "faker",
        cat: "database",
        attrs: []
    },
    type: {
        type: "faker",
        cat: "database",
        attrs: []
    },
    collation: {
        type: "faker",
        cat: "database",
        attrs: []
    },
    engine: {
        type: "faker",
        cat: "database",
        attrs: []
    },

    ///date
    past: {
        type: "faker",
        cat: "date",
        attrs: [
            {
                name: "years",
                type: "number"
            },
            {
                name: "refDate",
                type: "date"
            }
        ]
    },
    future: {
        type: "faker",
        cat: "date",
        attrs: [
            {
                name: "years",
                type: "number"
            },
            {
                name: "refDate",
                type: "date"
            }
        ]
    },
    between: {
        type: "faker",
        cat: "date",
        attrs: [
            {
                name: "from",
                type: "date"
            },
            {
                name: "to",
                type: "date"
            }
        ]
    },
    recent: {
        type: "faker",
        cat: "date",
        attrs: [
            {
                name: "days",
                type: "number"
            }
        ]
    },
    soon: {
        type: "faker",
        cat: "date",
        attrs: []
    },
    month: {
        type: "faker",
        cat: "date",
        attrs: [
            {
                name: "options",
                type: "object"
            }
        ]
    },
    weekday: {
        type: "faker",
        cat: "date",
        attrs: [
            {
                name: "options",
                type: "object"
            }
        ]
    },

    ///fake
    // fake: {
    //     type: "faker",
    //     cat: "fake",
    //     attrs: []
    // },

    ///finance
    account: {
        type: "faker",
        cat: "finance",
        attrs: [
            {
                name: "length",
                type: "number"
            }
        ]
    },
    accountName: {
        type: "faker",
        cat: "finance",
        attrs: []
    },
    mask: {
        type: "faker",
        cat: "finance",
        attrs: [
            {
                name: "length",
                type: "number"
            },
            {
                name: "parens",
                type: "boolean"
            },
            {
                name: "ellipsis",
                type: "boolean"
            }
        ]
    },
    amount: {
        type: "faker",
        cat: "finance",
        attrs: [
            {
                name: "min",
                type: "number"
            },
            {
                name: "max",
                type: "number"
            },
            {
                name: "dec",
                type: "number"
            },
            {
                name: "symbol",
                type: "string"
            }
        ]
    },
    transactionType: {
        type: "faker",
        cat: "finance",
        attrs: []
    },
    currencyCode: {
        type: "faker",
        cat: "finance",
        attrs: []
    },
    currencyName: {
        type: "faker",
        cat: "finance",
        attrs: []
    },
    currencySymbol: {
        type: "faker",
        cat: "finance",
        attrs: []
    },
    bitcoinAddress: {
        type: "faker",
        cat: "finance",
        attrs: []
    },
    ethereumAddress: {
        type: "faker",
        cat: "finance",
        attrs: []
    },
    iban: {
        type: "faker",
        cat: "finance",
        attrs: []
    },
    bic: {
        type: "faker",
        cat: "finance",
        attrs: []
    },

    ////hacker
    abbreviation: {
        type: "faker",
        cat: "helpers",
        attrs: []
    },
    adjective: {
        type: "faker",
        cat: "helpers",
        attrs: []
    },
    noun: {
        type: "faker",
        cat: "helpers",
        attrs: []
    },
    verb: {
        type: "faker",
        cat: "helpers",
        attrs: []
    },
    ingverb: {
        type: "faker",
        cat: "helpers",
        attrs: []
    },
    phrase: {
        type: "faker",
        cat: "helpers",
        attrs: []
    },
    randomize: {
        type: "faker",
        cat: "helpers",
        attrs: []
    },
    slugify: {
        type: "faker",
        cat: "helpers",
        attrs: []
    },
    replaceSymbolWithNumber: {
        type: "faker",
        cat: "helpers",
        attrs: []
    },
    replaceSymbols: {
        type: "faker",
        cat: "helpers",
        attrs: []
    },
    shuffle: {
        type: "faker",
        cat: "helpers",
        attrs: []
    },
    mustache: {
        type: "faker",
        cat: "helpers",
        attrs: []
    },
    createCard: {
        type: "faker",
        cat: "helpers",
        attrs: []
    },
    contextualCard: {
        type: "faker",
        cat: "helpers",
        attrs: []
    },
    userCard: {
        type: "faker",
        cat: "helpers",
        attrs: []
    },
    createTransaction: {
        type: "faker",
        cat: "helpers",
        attrs: []
    },

    ///helpers
    image: {
        type: "faker",
        cat: "image",
        attrs: [
            {
                name: "width",
                type: "number"
            },
            {
                name: "height",
                type: "number"
            },
            {
                name: "randomize",
                type: "boolean"
            }
        ]
    },
    avatar: {
        type: "faker",
        cat: "image",
        attrs: []
    },
    dataurl: {
        type: "faker",
        cat: "image",
        attrs: [
            {
                name: "width",
                type: "number"
            },
            {
                name: "height",
                type: "number"
            }
        ]
    },
    imageUrl: {
        type: "faker",
        cat: "image",
        attrs: [
            {
                name: "width",
                type: "number"
            },
            {
                name: "height",
                type: "number"
            },
            {
                name: "category",
                type: "string"
            },
            {
                name: "randomize",
                type: "boolean"
            }
        ]
    },
    abstract: {
        type: "faker",
        cat: "image",
        attrs: [
            {
                name: "width",
                type: "number"
            },
            {
                name: "height",
                type: "number"
            },
            {
                name: "randomize",
                type: "boolean"
            }
        ]
    },
    animals: {
        type: "faker",
        cat: "image",
        attrs: [
            {
                name: "width",
                type: "number"
            },
            {
                name: "height",
                type: "number"
            },
            {
                name: "randomize",
                type: "boolean"
            }
        ]
    },
    business: {
        type: "faker",
        cat: "image",
        attrs: [
            {
                name: "width",
                type: "number"
            },
            {
                name: "height",
                type: "number"
            },
            {
                name: "randomize",
                type: "boolean"
            }
        ]
    },
    cats: {
        type: "faker",
        cat: "image",
        attrs: [
            {
                name: "width",
                type: "number"
            },
            {
                name: "height",
                type: "number"
            },
            {
                name: "randomize",
                type: "boolean"
            }
        ]
    },
    city: {
        type: "faker",
        cat: "image",
        attrs: [
            {
                name: "width",
                type: "number"
            },
            {
                name: "height",
                type: "number"
            },
            {
                name: "randomize",
                type: "boolean"
            }
        ]
    },
    food: {
        type: "faker",
        cat: "image",
        attrs: [
            {
                name: "width",
                type: "number"
            },
            {
                name: "height",
                type: "number"
            },
            {
                name: "randomize",
                type: "boolean"
            }
        ]
    },
    nightlife: {
        type: "faker",
        cat: "image",
        attrs: [
            {
                name: "width",
                type: "number"
            },
            {
                name: "height",
                type: "number"
            },
            {
                name: "randomize",
                type: "boolean"
            }
        ]
    },
    fashion: {
        type: "faker",
        cat: "image",
        attrs: [
            {
                name: "width",
                type: "number"
            },
            {
                name: "height",
                type: "number"
            },
            {
                name: "randomize",
                type: "boolean"
            }
        ]
    },
    people: {
        type: "faker",
        cat: "image",
        attrs: [
            {
                name: "width",
                type: "number"
            },
            {
                name: "height",
                type: "number"
            },
            {
                name: "randomize",
                type: "boolean"
            }
        ]
    },
    nature: {
        type: "faker",
        cat: "image",
        attrs: [
            {
                name: "width",
                type: "number"
            },
            {
                name: "height",
                type: "number"
            },
            {
                name: "randomize",
                type: "boolean"
            }
        ]
    },
    sports: {
        type: "faker",
        cat: "image",
        attrs: [
            {
                name: "width",
                type: "number"
            },
            {
                name: "height",
                type: "number"
            },
            {
                name: "randomize",
                type: "boolean"
            }
        ]
    },
    technics: {
        type: "faker",
        cat: "image",
        attrs: [
            {
                name: "width",
                type: "number"
            },
            {
                name: "height",
                type: "number"
            },
            {
                name: "randomize",
                type: "boolean"
            }
        ]
    },
    transport: {
        type: "faker",
        cat: "image",
        attrs: [
            {
                name: "width",
                type: "number"
            },
            {
                name: "height",
                type: "number"
            },
            {
                name: "randomize",
                type: "boolean"
            }
        ]
    },
    dataUri: {
        type: "faker",
        cat: "image",
        attrs: [
            {
                name: "width",
                type: "number"
            },
            {
                name: "height",
                type: "number"
            },
            {
                name: "randomize",
                type: "boolean"
            }
        ]
    },

    ///////////internet
    avatar: {
        type: "faker",
        cat: "internet",
        attrs: []
    },
    email: {
        type: "faker",
        cat: "internet",
        attrs: [
            {
                name: "firstName",
                type: "string"
            },
            {
                name: "lastName",
                type: "string"
            },
            {
                name: "provider",
                type: "string"
            }
        ]
    },
    exampleEmail: {
        type: "faker",
        cat: "internet",
        attrs: [
            {
                name: "firstName",
                type: "string"
            },
            {
                name: "lastName",
                type: "string"
            }
        ]
    },
    userName: {
        type: "faker",
        cat: "internet",
        attrs: [
            {
                name: "firstName",
                type: "string"
            },
            {
                name: "lastName",
                type: "string"
            }
        ]
    },
    protocol: {
        type: "faker",
        cat: "internet",
        attrs: []
    },
    url: {
        type: "faker",
        cat: "internet",
        attrs: []
    },
    domainName: {
        type: "faker",
        cat: "internet",
        attrs: []
    },
    domainSuffix: {
        type: "faker",
        cat: "internet",
        attrs: []
    },
    domainWord: {
        type: "faker",
        cat: "internet",
        attrs: []
    },
    ip: {
        type: "faker",
        cat: "internet",
        attrs: []
    },
    ipv6: {
        type: "faker",
        cat: "internet",
        attrs: []
    },
    userAgent: {
        type: "faker",
        cat: "internet",
        attrs: []
    },
    color: {
        type: "faker",
        cat: "internet",
        attrs: [
            {
                name: "baseRed255",
                type: "number"
            },
            {
                name: "baseGreen255",
                type: "number"
            },
            {
                name: "baseBlue255",
                type: "number"
            }
        ]
    },
    mac: {
        type: "faker",
        cat: "internet",
        attrs: []
    },

    password: {
        type: "faker",
        cat: "internet",
        attrs: [
            {
                name: "len",
                type: "number"
            },
            {
                name: "memorable",
                type: "boolean"
            },
            {
                name: "pattern",
                type: "string"
            },
            {
                name: "prefix",
                type: "string"
            }
        ]
    },

    ///// lorem
    lines: {
        type: "faker",
        cat: "lorem",
        attrs: [
            {
                name: "lineCount",
                type: "number",
                description: "defaults to a random number between 1 and 5"
            }
        ]
    },
    word: {
        type: "faker",
        cat: "lorem",
        attrs: [
            {
                name: "num",
                type: "number"
            }
        ]
    },
    words: {
        type: "faker",
        cat: "lorem",
        attrs: [
            {
                name: "num",
                type: "number",
                description: "number of words, defaults to 3"
            }
        ]
    },
    sentence: {
        type: "faker",
        cat: "lorem",
        attrs: [
            {
                name: "wordCount",
                type: "number",
                description: "defaults to a random number between 3 and 10"
            },
            {
                name: "range",
                type: "number"
            }
        ]
    },
    slug: {
        type: "faker",
        cat: "lorem",
        attrs: [
            {
                name: "wordCount",
                type: "number",
                description: "number of words, defaults to 3"
            }
        ]
    },
    sentences: {
        type: "faker",
        cat: "lorem",
        attrs: [
            {
                name: "sentenceCount",
                type: "number",
                description: "defautls to a random number between 2 and 6"
            },
            {
                name: "separator",
                type: "string",
                description: "defaults to ' '"
            }
        ]
    },
    paragraph: {
        type: "faker",
        cat: "lorem",
        attrs: [
            {
                name: "sentenceCount",
                type: "number",
                description: "defaults to 3"
            }
        ]
    },
    paragraphs: {
        type: "faker",
        cat: "lorem",
        attrs: [
            {
                name: "paragraphCount",
                type: "number",
                description: "defaults to 3"
            },
            {
                name: "separator",
                type: "string",
                description: "defaults to '\n \r'"
            }
        ]
    },
    text: {
        type: "faker",
        cat: "lorem",
        attrs: []
    },
    lines: {
        type: "faker",
        cat: "lorem",
        attrs: [
            {
                name: "lineCount",
                type: "number"
            }
        ]
    },

    ///name
    firstName: {
        type: "faker",
        cat: "name",
        attrs: [
            {
                name: "gender",
                type: "string"
            }
        ]
    },
    lastName: {
        type: "faker",
        cat: "name",
        attrs: [
            {
                name: "gender",
                type: "string"
            }
        ]
    },
    findName: {
        type: "faker",
        cat: "name",
        attrs: [
            {
                name: "firstName",
                type: "string"
            },
            {
                name: "lastName",
                type: "string"
            },
            {
                name: "gender",
                type: "string"
            }
        ]
    },
    jobTitle: {
        type: "faker",
        cat: "name",
        attrs: []
    },
    prefix: {
        type: "faker",
        cat: "name",
        attrs: [
            {
                name: "gender",
                type: "string"
            }
        ]
    },
    suffix: {
        type: "faker",
        cat: "name",
        attrs: []
    },
    title: {
        type: "faker",
        cat: "name",
        attrs: []
    },
    jobDescriptor: {
        type: "faker",
        cat: "name",
        attrs: []
    },
    jobArea: {
        type: "faker",
        cat: "name",
        attrs: []
    },
    jobType: {
        type: "faker",
        cat: "name",
        attrs: []
    },

    ///phone
    phoneNumber: {
        type: "faker",
        cat: "phone",
        attrs: [
            {
                name: "format",
                type: "string"
            }
        ]
    },
    phoneNumberFormat: {
        type: "faker",
        cat: "phone",
        attrs: [
            {
                name: "phoneFormatsArrayIndex",
                type: "number"
            }
        ]
    },
    phoneFormats: {
        type: "faker",
        cat: "phone",
        attrs: []
    },

    ////random
    number: {
        type: "faker",
        cat: "random",
        attrs: []
    },
    // float: {
    //     type: "faker",
    //     cat: "random",
    //     attrs: []
    // },
    arrayElement: {
        type: "faker",
        cat: "random",
        attrs: [
            {
                name: "array",
                type: "array"
            }
        ]
    },
    objectElement: {
        type: "faker",
        cat: "random",
        attrs: [
            {
                name: "object",
                type: "object"
            },
            {
                name: "field",
                type: "mixed"
            }
        ]
    },
    uuid: {
        type: "faker",
        cat: "random",
        attrs: []
    },
    boolean: {
        type: "faker",
        cat: "random",
        attrs: []
    },
    word: {
        type: "faker",
        cat: "random",
        attrs: [
            {
                name: "type",
                type: "string"
            }
        ]
    },
    words: {
        type: "faker",
        cat: "random",
        attrs: [
            {
                name: "count",
                type: "number",
                description: "defaults to a random value between 1 and 3"
            }
        ]
    },
    image: {
        type: "faker",
        cat: "random",
        attrs: []
    },
    locale: {
        type: "faker",
        cat: "random",
        attrs: []
    },
    alphaNumeric: {
        type: "faker",
        cat: "random",
        attrs: [
            {
                name: "count",
                type: "number"
            }
        ]
    },
    hexaDecimal: {
        type: "faker",
        cat: "random",
        attrs: []
    },

    ///system
    fileName: {
        type: "faker",
        cat: "system",
        attrs: [
            {
                name: "ext",
                type: "string"
            },
            {
                name: "type",
                type: "string"
            }
        ]
    },
    commonFileName: {
        type: "faker",
        cat: "system",
        attrs: [
            {
                name: "ext",
                type: "string"
            },
            {
                name: "type",
                type: "string"
            }
        ]
    },
    mimeType: {
        type: "faker",
        cat: "system",
        attrs: []
    },
    commonFileType: {
        type: "faker",
        cat: "system",
        attrs: []
    },
    commonFileExt: {
        type: "faker",
        cat: "system",
        attrs: [
            {
                name: "mimeType",
                type: "string"
            }
        ]
    },
    fileType: {
        type: "faker",
        cat: "system",
        attrs: []
    },
    fileExt: {
        type: "faker",
        cat: "system",
        attrs: [
            {
                name: "count",
                type: "number"
            }
        ]
    },
    directoryPath: {
        type: "faker",
        cat: "system",
        attrs: []
    },
    filePath: {
        type: "faker",
        cat: "system",
        attrs: []
    },
    semver: {
        type: "faker",
        cat: "system",
        attrs: []
    },

    /*
/CHANCE
*/

    //Basic
    bool: {
        type: "chance",
        cat: "basics",
        description: "Return a random boolean value (true or false).",
        attrs: [
            {
                name: "likelihood",
                type: "number",
                description:
                    "The default likelihood of success (returning true) is 50%. Can optionally specify the likelihood in percent: In this case only a 30% likelihood of true, and a 70% likelihood of false"
            }
        ]
    },
    falsy: {
        type: "chance",
        cat: "basics",
        description:
            "Return a random falsy value (false, null, undefined, 0, NaN, '').",
        attrs: [
            {
                name: "pool",
                type: "array",
                description:
                    "The default pool can be change to better meet the needs: example [ NaN, undefined ]"
            }
        ]
    },
    character: {
        type: "chance",
        cat: "basics",
        description: "Return a random character.",
        attrs: [
            {
                name: "pool",
                type: "string",
                description:
                    "Can optionally specify a pool and the string will be generated with characters only from that pool."
            },
            {
                name: "alpha",
                type: "boolean",
                description:
                    "Optionally specify alpha for an alphabetic character."
            },
            {
                name: "numeric",
                type: "boolean",
                description: "Optionally specify numeric character."
            },
            {
                name: "casing",
                type: "string",
                description:
                    "Default includes both upper and lower case. It's possible to specify one or the other."
            },
            {
                name: "symbols",
                type: "boolean",
                description: "Optionally return only symbols"
            }
        ]
    },
    floating: {
        type: "chance",
        cat: "basics",
        description:
            "Return a random floating point number. By default it will return a fixed number of at most 4 digits after the decimal.",
        attrs: [
            {
                name: "fixed",
                type: "number",
                description:
                    "To retrieve a set number of fixed digits after the decimal, provide it as an option."
            },
            {
                name: "min",
                type: "number",
                description: "Can optionally provide min."
            },
            {
                name: "max",
                type: "number",
                description: "Can optionally provide max."
            }
        ]
    },
    integer: {
        type: "chance",
        cat: "basics",
        description:
            "Return a random integer. range: -9007199254740991 to 9007199254740991",
        attrs: [
            {
                name: "min",
                type: "number",
                description: "Can optionally provide min."
            },
            {
                name: "max",
                type: "number",
                description: "Can optionally provide max."
            }
        ]
    },
    letter: {
        type: "chance",
        cat: "basics",
        description: "Return a random letter.",
        attrs: [
            {
                name: "casing",
                type: "string",
                description:
                    "By default it will return a random lowercase letter."
            }
        ]
    },
    natural: {
        type: "chance",
        cat: "basics",
        description: "Return a natural number. range: 0 to 9007199254740991",
        attrs: [
            {
                name: "min",
                type: "number",
                description: "Can optionally provide min."
            },
            {
                name: "max",
                type: "number",
                description: "Can optionally provide max."
            },
            {
                name: "exclude",
                type: "array",
                description:
                    "Can optionally provide numbers you wish to exclude. [1, 3]"
            }
        ]
    },
    prime: {
        type: "chance",
        cat: "basics",
        description: "Return a prime number. default range: 0 to 10000",
        attrs: [
            {
                name: "min",
                type: "number",
                description: "Can optionally provide min."
            },
            {
                name: "max",
                type: "number",
                description: "Can optionally provide max."
            }
        ]
    },
    string: {
        type: "chance",
        cat: "basics",
        description: "Return a random string.",
        attrs: [
            {
                name: "length",
                type: "number",
                description:
                    "Can optionally specify a length and the string will be exactly that length."
            },
            {
                name: "pool",
                type: "string",
                description:
                    "Can optionally specify a pool and the string will be generated with characters only from that pool."
            },
            {
                name: "alpha",
                type: "boolean",
                description:
                    "Optionally specify alpha for an alphabetic character."
            },
            {
                name: "numeric",
                type: "boolean",
                description: "Optionally specify numeric character."
            },
            {
                name: "casing",
                type: "string",
                description:
                    "Default includes both upper and lower case. It's possible to specify one or the other."
            },
            {
                name: "symbols",
                type: "boolean",
                description: "Optionally return only symbols"
            }
        ]
    },

    ////TEXT
    paragraph_c: {
        type: "chance",
        cat: "text",
        description:
            "Return a random paragraph generated from sentences populated by semi-pronounceable random (nonsense) words.",
        attrs: [
            {
                name: "sentences",
                type: "number",
                description:
                    "Default is a paragraph with a random number of sentences from 3 to 7, Optionally specify the number of sentences in the paragraph."
            }
        ]
    },
    sentence_c: {
        type: "chance",
        cat: "text",
        description:
            "Return a random sentence populated by semi-pronounceable random (nonsense) words.",
        attrs: [
            {
                name: "words",
                type: "number",
                description:
                    "Default is a sentence with a random number of words from 12 to 18. Optionally specify the number of words in the sentence."
            }
        ]
    },
    syllable: {
        type: "chance",
        cat: "text",
        description: "Return a semi-speakable syllable, 2 or 3 letters",
        attrs: []
    },
    word_c: {
        type: "chance",
        cat: "text",
        description: "Return a semi-pronounceable random (nonsense) word.",
        attrs: [
            {
                name: "syllables",
                type: "number",
                description:
                    "Default is a word with a random number of syllables from 1 to 3. Can optionally specify a number of syllables which the word will have"
            },
            {
                name: "length",
                type: "number",
                description:
                    "Can optionally specify a length and the word will obey that bounding."
            }
        ]
    },

    ///Person
    age: {
        type: "chance",
        cat: "person",
        description: "Generate a random age",
        attrs: [
            {
                name: "type",
                type: "string",
                description: "Allowed types are: child, teen, adult, senior"
            }
        ]
    },
    birthday: {
        type: "chance",
        cat: "person",
        description: "Generate a random birthday",
        attrs: [
            {
                name: "string",
                type: "boolean",
                description:
                    "By default, returns an actual JavaScript Date object. Optionally specify it be returned as a string."
            },
            {
                name: "american",
                type: "boolean",
                description:
                    "By default returns in MM/DD/YYYY format. Can specify DD/MM/YYYY as follows:"
            },
            {
                name: "type",
                type: "string",
                description: "Allowed types are: child, teen, adult, senior"
            }
        ]
    },
    cf: {
        type: "chance",
        cat: "person",
        description:
            "Generate a random Italian social security number (Codice Fiscale).",
        attrs: []
    },
    cpf: {
        type: "chance",
        cat: "person",
        description: "Generate a random Brazilian tax id.",
        attrs: []
    },
    first: {
        type: "chance",
        cat: "person",
        description: "Generate a random first name",
        attrs: [
            {
                name: "gender",
                type: "boolean",
                description:
                    "Optionally specify a gender to limit first names to that gender"
            },
            {
                name: "nationality",
                type: "string",
                description:
                    "Optionally specify a nationality:, currently support for nationality is limited to: 'us', 'it'"
            }
        ]
    },
    gender: {
        type: "chance",
        cat: "person",
        description: "Generate a random gender",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    last: {
        type: "chance",
        cat: "person",
        description: "Generate a random last name",
        attrs: [
            {
                name: "nationality",
                type: "string",
                description:
                    "Optionally specify a nationality:, currently support for nationality is limited to: 'en', 'it', 'nl', 'uk', 'de', 'jp', 'es', 'fr'"
            }
        ]
    },
    name: {
        type: "chance",
        cat: "person",
        description: "Generate a random name",
        attrs: [
            {
                name: "middle",
                type: "boolean",
                description: "Optionally include the middle name"
            },
            {
                name: "middle_initial",
                type: "boolean",
                description: "Optionally include the middle initial"
            },
            {
                name: "prefix",
                type: "boolean",
                description: "Optionally include the prefix"
            },
            {
                name: "suffix",
                type: "boolean",
                description: "Optionally include the suffix"
            },
            {
                name: "gender",
                type: "boolean",
                description: "Optionally specify a gender"
            },
            {
                name: "nationality",
                type: "string",
                description:
                    "Optionally specify a nationality:, currently support for nationality is limited to: 'en', 'it'"
            }
        ]
    },
    prefix: {
        type: "chance",
        cat: "person",
        description: "Generate a random name prefix",
        attrs: [
            {
                name: "full",
                type: "boolean",
                description: "Optionally get back the full version."
            },
            {
                name: "gender",
                type: "string",
                description:
                    "Optionally specify a gender. Valid options are male, female, or all (the default)."
            }
        ]
    },
    ssn: {
        type: "chance",
        cat: "person",
        description: "Generate a random social security number.",
        attrs: [
            {
                name: "ssnFour",
                type: "boolean",
                description:
                    "Optionally provide option of getting only the last four"
            },
            {
                name: "dashes",
                type: "boolean",
                description: "Optionally specify dashes be removed"
            }
        ]
    },
    suffix: {
        type: "chance",
        cat: "person",
        description: "Generate a random name suffix",
        attrs: [
            {
                name: "full",
                type: "boolean",
                description: "Optionally get back the full version."
            }
        ]
    },

    ////Thing
    animal: {
        type: "chance",
        cat: "thing",
        description: "Generate a random animal",
        attrs: [
            {
                name: "type",
                type: "string",
                description:
                    "Optionally specify a specific type of animal. Allowed types are: ocean, desert, grassland, forest, farm, pet, and zoo"
            }
        ]
    },

    ///Mobile
    android_id: {
        type: "chance",
        cat: "mobile",
        description: "Return a random GCM registration ID.",
        attrs: []
    },
    apple_token: {
        type: "chance",
        cat: "mobile",
        description: "Return a random Apple Push Token",
        attrs: []
    },
    bb_pin: {
        type: "chance",
        cat: "mobile",
        description: "Return a random BlackBerry Device PIN",
        attrs: []
    },
    wp7_anid: {
        type: "chance",
        cat: "mobile",
        description: "Return a random Windows Phone 7 ANID",
        attrs: []
    },
    wp8_anid2: {
        type: "chance",
        cat: "mobile",
        description: "Return a random Windows Phone 8 ANID2",
        attrs: []
    },

    /////WEB
    avatar_c: {
        type: "chance",
        cat: "web",
        description: "Return a URL to a random avatar from Gravatar.",
        attrs: [
            {
                name: "protocol",
                type: "string",
                description:
                    "By default, a url is returned without a protocol. Specify one to get a random url but with a known protocol"
            },

            {
                name: "extensions",
                type: "string",
                description:
                    "Optionally specify a file extension to get one of a known type"
            },
            {
                name: "email",
                type: "string",
                description:
                    "You can also use it with a known email address to just get that gravatar. However, note this, of course, no longer makes it random, just more of a helper function:"
            }
        ]
    },
    color: {
        type: "chance",
        cat: "web",
        description: "Return a random color.",
        attrs: [
            {
                name: "format",
                type: "string",
                description:
                    "Colors have four base types: hex, shorthex, rgb, 0x: These are the kinds usable in HTML or CSS. The type can optionally be specified"
            },
            {
                name: "grayscale",
                type: "boolean",
                description:
                    "Can optionally specify that only grayscale colors be generated"
            },
            {
                name: "casing",
                type: "string",
                description:
                    "Optionally specify casing to get only uppercase letters in the color"
            }
        ]
    },
    company: {
        type: "chance",
        cat: "web",
        description: "Return a random company name.",
        attrs: []
    },
    domain: {
        type: "chance",
        cat: "web",
        description: "Return a random domain with a random tld.",
        attrs: [
            {
                name: "tld",
                type: "string",
                description:
                    "Optionally specify a tld and the domain will be random but the tld will not."
            }
        ]
    },
    email: {
        type: "chance",
        cat: "web",
        description: "Return a random email with a random domain.",
        attrs: [
            {
                name: "domain",
                type: "string",
                description: "Return a random email with a random domain."
            }
        ]
    },
    fbid: {
        type: "chance",
        cat: "web",
        description: "Return a random Facebook id, aka fbid.",
        attrs: []
    },
    google_analytics: {
        type: "chance",
        cat: "web",
        description:
            "Return a random Google Analytics tracking code. Takes the form 'UA-123456-01'",
        attrs: []
    },
    hashtag: {
        type: "chance",
        cat: "web",
        description:
            "Return a random hashtag. This is a string of the form '#thisisahashtag'.",
        attrs: []
    },
    ip: {
        type: "chance",
        cat: "web",
        description: "Return a random IP Address.",
        attrs: []
    },
    ipv6: {
        type: "chance",
        cat: "web",
        description: "Return a random IPv6 Address.",
        attrs: []
    },
    klout: {
        type: "chance",
        cat: "web",
        description: "Return a random Klout score. Range 1-99.",
        attrs: []
    },
    profession: {
        type: "chance",
        cat: "web",
        description: "Return a random profession. Rank is false by default.",
        attrs: [
            {
                name: "rank",
                type: "boolean",
                description:
                    "Optionally set rank as true get rank with profession."
            }
        ]
    },
    tld: {
        type: "chance",
        cat: "web",
        description:
            "Return a random tld (Top Level Domain) from the set: ['com', 'org', 'edu', 'gov', 'uk', 'net', 'io']",
        attrs: []
    },
    twitter: {
        type: "chance",
        cat: "web",
        description: "Return a random twitter handle.",
        attrs: []
    },
    url: {
        type: "chance",
        cat: "web",
        description: "Return a random url.",
        attrs: [
            {
                name: "protocol",
                type: "string",
                description:
                    "Optionally specify a protocol and the url will be random but the protocol will not."
            },
            {
                name: "domain",
                type: "string",
                description:
                    "Optionally specify a domain and the url will be random but the domain will not."
            },
            {
                name: "domain_prefix",
                type: "string",
                description:
                    "Optionally specify a domain prefix and domain will be random, and domain prefix will not."
            },
            {
                name: "path",
                type: "string",
                description: "Optionally specify a path and it will be obeyed."
            },
            {
                name: "extensions",
                type: "string",
                description:
                    "Optionally specify an array of extensions and one will be picked at random."
            }
        ]
    },

    ///Location
    address: {
        type: "chance",
        cat: "location",
        description: "Generate a random street address",
        attrs: [
            {
                name: "short_suffix",
                type: "boolean",
                description: "Optionally mandate that it return a short suffix"
            }
        ]
    },
    altitude: {
        type: "chance",
        cat: "location",
        description: "Generate a random altitude, in meters.",
        attrs: [
            {
                name: "fixed",
                type: "number",
                description:
                    "By default, includes 5 digits of accuracy after the decimal. Can override with the fixed option."
            },
            {
                name: "max",
                type: "number",
                description:
                    "By default, max of 8848m (height of Mount Everest), but this can be overridden with the max option."
            }
        ]
    },
    areacode: {
        type: "chance",
        cat: "location",
        description: "Generate a random area code",
        attrs: []
    },
    city: {
        type: "chance",
        cat: "location",
        description: "Generate a random city",
        attrs: []
    },
    coordinates: {
        type: "chance",
        cat: "location",
        description:
            "Generate random coordinates, which are latitude and longitude, comma separated.",
        attrs: [
            {
                name: "fixed",
                type: "number",
                description:
                    "By default includes 5 fixed digits after decimal, can specify otherwise."
            }
        ]
    },
    country: {
        type: "chance",
        cat: "location",
        description:
            "Return a random country. By default, returns only the 2 letter ISO 3166-1 code for the country.",
        attrs: [
            {
                name: "full",
                type: "boolean",
                description:
                    "Optionally specify that it ought to return a full country name"
            }
        ]
    },
    depth: {
        type: "chance",
        cat: "location",
        description:
            "Generate a random depth, in meters. Depths are always negative",
        attrs: [
            {
                name: "fixed",
                type: "number",
                description:
                    "By default, includes 5 digits of accuracy after the decimal. Can override with the fixed option.."
            },
            {
                name: "min",
                type: "number",
                description:
                    "y default, maximum (or minimum depending on your frame of reference) depth of -2550 (depth of the Mariana Trench), but this can be overridden with the min option."
            }
        ]
    },
    geohash: {
        type: "chance",
        cat: "location",
        description: "Generate a random geohash",
        attrs: [
            {
                name: "length",
                type: "number",
                description:
                    "By default, includes 7 characters of accuracy. Can override with the length option."
            }
        ]
    },
    latitude: {
        type: "chance",
        cat: "location",
        description: "Generate a random latitude.",
        attrs: [
            {
                name: "fixed",
                type: "number",
                description:
                    "By default includes 5 fixed digits after decimal, can specify otherwise."
            },
            {
                name: "min",
                type: "number",
                description:
                    "By default includes entire range of allowed latitudes, can specify a min and/or max to bound it"
            },
            {
                name: "max",
                type: "number",
                description:
                    "By default includes entire range of allowed latitudes, can specify a min and/or max to bound it"
            }
        ]
    },
    locale: {
        type: "chance",
        cat: "location",
        description: "Generate a random ISO-639-1 language code",
        attrs: [
            {
                name: "region",
                type: "boolean",
                description: "Generate a random IETF region code"
            }
        ]
    },
    longitude: {
        type: "chance",
        cat: "location",
        description: "Generate a random longitude.",
        attrs: [
            {
                name: "fixed",
                type: "number",
                description:
                    "By default includes 5 fixed digits after decimal, can specify otherwise."
            },
            {
                name: "min",
                type: "number",
                description:
                    "By default includes entire range of allowed longitudes, can specify a min and/or max to bound it"
            },
            {
                name: "max",
                type: "number",
                description:
                    "By default includes entire range of allowed longitudes, can specify a min and/or max to bound it"
            }
        ]
    },
    phone: {
        type: "chance",
        cat: "location",
        description:
            "Generate a random phone By default conforms to NANP for a proper US phone number.",
        attrs: [
            {
                name: "formatted",
                type: "boolean",
                description: "Optionally disable formatting."
            },
            {
                name: "country",
                type: "string",
                description: "Optionally specify a country."
            },
            {
                name: "mobile",
                type: "string",
                description: "For uk and fr, optionally specify a mobile phone"
            }
        ]
    },
    postal: {
        type: "chance",
        cat: "location",
        description:
            "Return a Canadian Postal code. Returned postal code is valid with respect to the Postal District (first character) and format only.",
        attrs: []
    },
    postcode: {
        type: "chance",
        cat: "location",
        description:
            "Generate a random (U.K.) postcode. Returned postcode is valid with respect to the Postcode Area (first characters) and format only.",
        attrs: []
    },
    province: {
        type: "chance",
        cat: "location",
        description: "Return a random province.",
        attrs: [
            {
                name: "full",
                type: "boolean",
                description:
                    "By default, returns only the 2 letter abbreviation for province. Optionally specify that it ought to return a full province name."
            }
        ]
    },
    state_c: {
        type: "chance",
        cat: "location",
        description: "Return a random state.",
        attrs: [
            {
                name: "full",
                type: "boolean",
                description:
                    "Optionally specify that it ought to return a full state name."
            },
            {
                name: "territories",
                type: "boolean",
                description:
                    "Optionally add U.S. Territories ('American Samoa', 'Federated States of Micronesia', 'Guam', 'Marshall Islands', 'Northern Mariana Islands', 'Puerto Rico', 'Virgin Islands, U.S.') to the mix of randomly selected items"
            },
            {
                name: "armed_forces",
                type: "boolean",
                description: "Optionally add Armed Forces to the list as well."
            },
            {
                name: "us_states_and_dc",
                type: "boolean",
                description:
                    "Optionally specify that it ought to return a continental US"
            },
            {
                name: "country",
                type: "string",
                description:
                    "Optionally specify a country (US specific options are ignored if country is specified and different from 'us')"
            }
        ]
    },
    street: {
        type: "chance",
        cat: "location",
        description: "Generate a random street",
        attrs: [
            // {
            //     name: "country",
            //     type: "string",
            //     description:
            //         "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            // },
            {
                name: "short_suffix",
                type: "boolean",
                description: "Optionally mandate that it returns a short suffix"
            },
            {
                name: "syllables",
                type: "number",
                description:
                    "Optionally specify the number of syllables used to generate the street name"
            }
        ]
    },
    zip: {
        type: "chance",
        cat: "location",
        description: "Generate a random (U.S.) zip code.",
        attrs: [
            {
                name: "plusfour",
                type: "boolean",
                description:
                    "Can optionally specify that it ought to return a Zip+4:"
            }
        ]
    },

    ///Time
    ampm: {
        type: "chance",
        cat: "time",
        description: "Return am or pm.",
        attrs: []
    },
    date: {
        type: "chance",
        cat: "time",
        description:
            "Generate a random date By default, returns an actual Date object",
        attrs: [
            {
                name: "string",
                type: "boolean",
                description:
                    "Can optionally specify that a date be returned as a string"
            },
            {
                name: "american",
                type: "boolean",
                description:
                    "This will return a date string of the format MM/DD/YYYY."
            }
        ]
    },
    hammertime: {
        type: "chance",
        cat: "time",
        description:
            "Generate a random hammertime. Hammertime is the name given to a Unix time with milliseconds. Which is the same as saying the number of milliseconds since 1970. It has finer granularity than a normal Unix timestamp and thus is often used in realtime applications.",
        attrs: []
    },
    hour: {
        type: "chance",
        cat: "time",
        description: "Generate a random hour",
        attrs: [
            {
                name: "twentyfour",
                type: "boolean",
                description:
                    "This will return an hour from 1 to 24. By default, returns an hour from 1 to 12"
            }
        ]
    },
    millisecond: {
        type: "chance",
        cat: "time",
        description: "Generate a random millisecond",
        attrs: []
    },
    minute: {
        type: "chance",
        cat: "time",
        description: "Generate a random minute",
        attrs: []
    },
    month: {
        type: "chance",
        cat: "time",
        description: "Generate a random month",
        attrs: []
    },
    second: {
        type: "chance",
        cat: "time",
        description: "Generate a random second",
        attrs: []
    },
    timestamp: {
        type: "chance",
        cat: "time",
        description: "Generate a random timestamp",
        attrs: []
    },
    timezone: {
        type: "chance",
        cat: "time",
        description: "Generate a random timezone object",
        attrs: []
    },
    weekday: {
        type: "chance",
        cat: "time",
        description: "Return a weekday",
        attrs: [
            {
                name: "weekday_only",
                type: "boolean",
                description:
                    "By default, weekday_only is false. If set to true it will never return Saturday or Sunday."
            }
        ]
    },
    year: {
        type: "chance",
        cat: "time",
        description: "Generate a random year",
        attrs: [
            {
                name: "min",
                type: "number",
                description:
                    "By default, min is the current year and max is 100 years greater than min"
            },
            {
                name: "min",
                type: "number",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },

    ///Finance
    cc: {
        type: "chance",
        cat: "finance",
        description:
            "Generate a random credit card number. This card number will pass the Luhn algorithm so it looks like a legit card.",
        attrs: [
            {
                name: "type",
                type: "string",
                description:
                    "Optionally specify a particular type of card to return, can be specified by the long name, or by the short name"
            }
        ]
    },
    cc_type: {
        type: "chance",
        cat: "finance",
        description: "Return a random credit card type.",
        attrs: [
            {
                name: "raw",
                type: "boolean",
                description:
                    "Default returns just the name. To return the entire object (consisting of name, short name, numeric prefix, and length), specify so with the raw flag."
            }
        ]
    },
    currency: {
        type: "chance",
        cat: "finance",
        description: "Generate a random currency.",
        attrs: []
    },
    currency_pair: {
        type: "chance",
        cat: "finance",
        description:
            "Generate a currency pair. Handy for simulating currency conversions. Guaranteed to return a unique pair (and not the same currency twice).",
        attrs: []
    },
    dollar: {
        type: "chance",
        cat: "finance",
        description: "Return a random dollar amount.",
        attrs: [
            {
                name: "max",
                type: "number",
                description:
                    "By default returns dollar amount no larger than 10000. Optionally specify the max to make it larger (or smaller)."
            }
        ]
    },
    euro: {
        type: "chance",
        cat: "finance",
        description: "Return a random euro amount",
        attrs: [
            {
                name: "max",
                type: "number",
                description:
                    "By default returns euro amount no larger than 10000. Optionally specify the max to make it larger (or smaller)."
            }
        ]
    },
    exp: {
        type: "chance",
        cat: "finance",
        description: "Generate a random credit card expiration.",
        attrs: [
            {
                name: "raw",
                type: "boolean",
                description:
                    "Specify that a raw object be returned rather than a string"
            }
        ]
    },
    exp_month: {
        type: "chance",
        cat: "finance",
        description: "Generate a random credit card expiration month.",
        attrs: [
            {
                name: "future",
                type: "boolean",
                description:
                    "Specify that it must be a later month than the current month. So if called in June, this would return a random month from July - Dec. If called in October, would return November or December"
            }
        ]
    },
    exp_year: {
        type: "chance",
        cat: "finance",
        description:
            "Returns a random year between today and 10 years in the future."
    },

    ///Miscellaneous
    coin: {
        type: "chance",
        cat: "miscellaneous",
        description: "Flip a coin!",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    dice: {
        type: "chance",
        cat: "miscellaneous",
        description: "Return a value equal to the roll of a die.",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    guid: {
        type: "chance",
        cat: "miscellaneous",
        description: "Return a random guid, version 5 by default.",
        attrs: [
            {
                name: "version",
                type: "number"
            }
        ]
    },
    hash: {
        type: "chance",
        cat: "miscellaneous",
        description: "Return a random hex hash",
        attrs: [
            {
                name: "length",
                type: "number",
                description: "specify a length"
            },
            {
                name: "casing",
                type: "string",
                description:
                    "uppercase letters rather than the default lowercase"
            }
        ]
    },
    normal: {
        type: "chance",
        cat: "miscellaneous",
        description: "Return a normally-distributed random variate.",
        attrs: [
            {
                name: "mean",
                type: "number"
            },
            {
                name: "deviation",
                type: "number"
            }
        ]
    },
    radio: {
        type: "chance",
        cat: "miscellaneous",
        description: "Return a random hex hash",
        attrs: [
            {
                name: "side",
                type: "string",
                description: "east or west"
            }
        ]
    },
    rpg: {
        type: "chance",
        cat: "miscellaneous",
        description:
            "Given an input looking like #d#, where the first # is the number of dice to roll and the second # is the max of each die, returns an array of dice values.",
        attrs: [
            {
                name: "sum",
                type: "boolean",
                description: "Sum of array"
            }
        ]
    },
    tv: {
        type: "chance",
        cat: "miscellaneous",
        description: "Return a random hex hash",
        attrs: [
            {
                name: "side",
                type: "string",
                description: "east or west"
            }
        ]
    },


    validator: {
        type: "custom",
        cat: "finance",
        description:"Return a random hex hash",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ],
        custom(args){
            return "lucky.............................."
        }
    }

    /*  gender: {
        type: "chance",
        cat: "finance",
        description:"Return a random hex hash",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    gender: {
        type: "chance",
        cat: "location",
        description:"Generate",
        description:"Return a random hex hash",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    gender: {
        type: "chance",
        cat: "location",
        description:"Generate",
        description:"Return a random hex hash",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    gender: {
        type: "chance",
        cat: "person",
        description:"Return a random hex hash",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    gender: {
        type: "chance",
        cat: "person",
        description:"Return a random hex hash",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    gender: {
        type: "chance",
        cat: "person",
        description:"Return a random hex hash",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    gender: {
        type: "chance",
        cat: "person",
        description:"Return a random hex hash",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    gender: {
        type: "chance",
        cat: "person",
        description:"Return a random hex hash",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    gender: {
        type: "chance",
        cat: "person",
        description:"Return a random hex hash",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    gender: {
        type: "chance",
        cat: "person",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    gender: {
        type: "chance",
        cat: "person",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    gender: {
        type: "chance",
        cat: "person",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    gender: {
        type: "chance",
        cat: "person",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    gender: {
        type: "chance",
        cat: "person",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    gender: {
        type: "chance",
        cat: "person",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    gender: {
        type: "chance",
        cat: "person",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    gender: {
        type: "chance",
        cat: "person",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    gender: {
        type: "chance",
        cat: "person",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    gender: {
        type: "chance",
        cat: "person",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    gender: {
        type: "chance",
        cat: "person",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    gender: {
        type: "chance",
        cat: "person",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    gender: {
        type: "chance",
        cat: "person",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    gender: {
        type: "chance",
        cat: "person",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    gender: {
        type: "chance",
        cat: "person",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    gender: {
        type: "chance",
        cat: "person",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    gender: {
        type: "chance",
        cat: "person",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    gender: {
        type: "chance",
        cat: "person",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    },
    gender: {
        type: "chance",
        cat: "person",
        attrs: [
            {
                name: "extraGenders",
                type: "array",
                description:
                    "Extra genders can be provided example: ['Agender', 'Genderqueer', 'Trans', 'Pangender']"
            }
        ]
    } */
};
