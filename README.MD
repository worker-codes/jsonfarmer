# JSONFarmer easily generate large amounts of fake JSON with GraphQL syntax

### Features

- Generate JSON using graphql syntax.
- Generate random strings, numbers, name, email, city, color, etc
- Generate unlimited depth.
- Need some mock data to test your app.
- Compatible in nodejs and browsers.
- Using Faker.js and Chance.js

### Demo
[https://jsonfarmer.netlify.com/](https://jsonfarmer.netlify.com/)

# JSONFarmer
[![GitHub stars](https://img.shields.io/github/stars/graphflo/jsonfarmer)](https://github.com/graphflo/jsonfarmer/stargazers) [![GitHub forks](https://img.shields.io/github/forks/graphflo/jsonfarmer)](https://github.com/graphflo/jsonfarmer/network) [![GitHub issues](https://img.shields.io/github/issues/graphflo/jsonfarmer)](https://github.com/graphflo/jsonfarmer/issues) [![GitHub license](https://img.shields.io/github/license/graphflo/jsonfarmer)](https://github.com/graphflo/jsonfarmer)


#### Install JSONFarmer

```
npm install jsonfarmer
yarn add jsonfarmer
```

#### How to use JSONFarmer 　

```javascript
let { generate, savetoFile } = require('jsonfarmer');

const query = /* GraphQL */ `
{
  suppliers @repeat(min: 1, max: 1) {
    companyName: company
    contactName: findName
    contactTitle: jobTitle
    email: email(domain: "google.com")
    city: city
    state: state(useAbbr: true)
    country: country
    phone: phone
    fax: phone
    products {
      create @repeat(min: 5, max: 15) {
        name: productName
        modelNumber: natural(max: 999999)
        unitPrice: price(symbol: "$", min: 50, max: 4000)
        color: color
        material: productMaterial
        isDiscontinued: bool
        image: image
      }
    }
  }
}
`;

//generate JSON To variable
let generateJSON = generate(query);

//Print generated JSON To conosle
console.dir( generateJSON, { depth:null} );

//Save generated JSON To file
savetoFile(query, './suppliers.json');
```

#### Available Function
Arguments are optional
```graphql
{
    zipCode: zipCode(format:string)
    city: city #Generate a random city
    cityPrefix: cityPrefix
    citySuffix: citySuffix
    streetName: streetName
    streetAddress: streetAddress(useFullAddress:bool)
    streetSuffix: streetSuffix
    streetPrefix: streetPrefix
    secondaryAddress: secondaryAddress
    county: county
    country: country(full:boolean) #Return a random country. By default, returns only the 2 letter ISO 3166-1 code for the country.
    countryCode: countryCode
    state: state(useAbbr:bool)
    stateAbbr: stateAbbr
    latitude: latitude(fixed:number,min:number,max:number) #Generate a random latitude.
    longitude: longitude(fixed:number,min:number,max:number) #Generate a random longitude.
    color: color(format:string,grayscale:boolean,casing:string) #Return a random color.
    department: department
    productName: productName
    price: price(min:number,max:number,dec:number,symbol:string)
    productAdjective: productAdjective
    productMaterial: productMaterial
    product: product
    suffixes: suffixes
    companyName: companyName(format:string)
    companySuffix: companySuffix
    catchPhrase: catchPhrase
    bs: bs
    catchPhraseAdjective: catchPhraseAdjective
    catchPhraseDescriptor: catchPhraseDescriptor
    catchPhraseNoun: catchPhraseNoun
    bsAdjective: bsAdjective
    bsBuzz: bsBuzz
    bsNoun: bsNoun
    column: column
    type: type
    collation: collation
    engine: engine
    past: past(years:number,refDate:date)
    future: future(years:number,refDate:date)
    between: between(from:date,to:date)
    recent: recent(days:number)
    soon: soon
    month: month #Generate a random month
    weekday: weekday(weekday_only:boolean) #Return a weekday
    account: account(length:number)
    accountName: accountName
    mask: mask(length:number,parens:boolean,ellipsis:boolean)
    amount: amount(min:number,max:number,dec:number,symbol:string)
    transactionType: transactionType
    currencyCode: currencyCode
    currencyName: currencyName
    currencySymbol: currencySymbol
    bitcoinAddress: bitcoinAddress
    ethereumAddress: ethereumAddress
    iban: iban
    bic: bic
    abbreviation: abbreviation
    adjective: adjective
    noun: noun
    verb: verb
    ingverb: ingverb
    phrase: phrase
    randomize: randomize
    slugify: slugify
    replaceSymbolWithNumber: replaceSymbolWithNumber
    replaceSymbols: replaceSymbols
    shuffle: shuffle
    mustache: mustache
    createCard: createCard
    contextualCard: contextualCard
    userCard: userCard
    createTransaction: createTransaction
    image: image
    avatar: avatar
    dataurl: dataurl(width:number,height:number)
    imageUrl: imageUrl(width:number,height:number,category:string,randomize:boolean)
    abstract: abstract(width:number,height:number,randomize:boolean)
    animals: animals(width:number,height:number,randomize:boolean)
    business: business(width:number,height:number,randomize:boolean)
    cats: cats(width:number,height:number,randomize:boolean)
    food: food(width:number,height:number,randomize:boolean)
    nightlife: nightlife(width:number,height:number,randomize:boolean)
    fashion: fashion(width:number,height:number,randomize:boolean)
    people: people(width:number,height:number,randomize:boolean)
    nature: nature(width:number,height:number,randomize:boolean)
    sports: sports(width:number,height:number,randomize:boolean)
    technics: technics(width:number,height:number,randomize:boolean)
    transport: transport(width:number,height:number,randomize:boolean)
    dataUri: dataUri(width:number,height:number,randomize:boolean)
    email: email(domain:string) #Return a random email with a random domain.
    exampleEmail: exampleEmail(firstName:string,lastName:string)
    userName: userName(firstName:string,lastName:string)
    protocol: protocol
    url: url(protocol:string,domain:string,domain_prefix:string,path:string,extensions:string) #Return a random url.
    domainName: domainName
    domainSuffix: domainSuffix
    domainWord: domainWord
    ip: ip #Return a random IP Address.
    ipv6: ipv6 #Return a random IPv6 Address.
    userAgent: userAgent
    mac: mac
    password: password(len:number,memorable:boolean,pattern:string,prefix:string)
    lines: lines(lineCount:number)
    word: word(type:string)
    words: words(count:number)
    sentence: sentence(wordCount:number,range:number)
    slug: slug(wordCount:number)
    sentences: sentences(sentenceCount:number,separator:string)
    paragraph: paragraph(sentenceCount:number)
    paragraphs: paragraphs(paragraphCount:number,separator:string)
    text: text
    firstName: firstName(gender:string)
    lastName: lastName(gender:string)
    findName: findName(firstName:string,lastName:string,gender:string)
    jobTitle: jobTitle
    prefix: prefix(full:boolean,gender:string) #Generate a random name prefix
    suffix: suffix(full:boolean) #Generate a random name suffix
    title: title
    jobDescriptor: jobDescriptor
    jobArea: jobArea
    jobType: jobType
    phoneNumber: phoneNumber(format:string)
    phoneNumberFormat: phoneNumberFormat(phoneFormatsArrayIndex:number)
    phoneFormats: phoneFormats
    number: number
    arrayElement: arrayElement(array:array)
    objectElement: objectElement(object:object,field:mixed)
    uuid: uuid
    boolean: boolean
    locale: locale(region:boolean) #Generate a random ISO-639-1 language code
    alphaNumeric: alphaNumeric(count:number)
    hexaDecimal: hexaDecimal
    fileName: fileName(ext:string,type:string)
    commonFileName: commonFileName(ext:string,type:string)
    mimeType: mimeType
    commonFileType: commonFileType
    commonFileExt: commonFileExt(mimeType:string)
    fileType: fileType
    fileExt: fileExt(count:number)
    directoryPath: directoryPath
    filePath: filePath
    semver: semver
    bool: bool(likelihood:number) #Return a random boolean value (true or false).
    falsy: falsy(pool:array) #Return a random falsy value (false, null, undefined, 0, NaN, '').
    character: character(pool:string,alpha:boolean,numeric:boolean,casing:string,symbols:boolean) #Return a random character.
    floating: floating(fixed:number,min:number,max:number) #Return a random floating point number. By default it will return a fixed number of at most 4 digits after the decimal.
    integer: integer(min:number,max:number) #Return a random integer. range: -9007199254740991 to 9007199254740991
    letter: letter(casing:string) #Return a random letter.
    natural: natural(min:number,max:number,exclude:array) #Return a natural number. range: 0 to 9007199254740991
    prime: prime(min:number,max:number) #Return a prime number. default range: 0 to 10000
    string: string(length:number,pool:string,alpha:boolean,numeric:boolean,casing:string,symbols:boolean) #Return a random string.
    paragraph_c: paragraph_c(sentences:number) #Return a random paragraph generated from sentences populated by semi-pronounceable random (nonsense) words.
    sentence_c: sentence_c(words:number) #Return a random sentence populated by semi-pronounceable random (nonsense) words.
    syllable: syllable #Return a semi-speakable syllable, 2 or 3 letters
    word_c: word_c(syllables:number,length:number) #Return a semi-pronounceable random (nonsense) word.
    age: age(type:string) #Generate a random age
    birthday: birthday(string:boolean,american:boolean,type:string) #Generate a random birthday
    cf: cf #Generate a random Italian social security number (Codice Fiscale).
    cpf: cpf #Generate a random Brazilian tax id.
    first: first(gender:boolean,nationality:string) #Generate a random first name
    gender: gender(extraGenders:array) #Generate a random gender
    last: last(nationality:string) #Generate a random last name
    name: name(middle:boolean,middle_initial:boolean,prefix:boolean,suffix:boolean,gender:boolean,nationality:string) #Generate a random name
    ssn: ssn(ssnFour:boolean,dashes:boolean) #Generate a random social security number.
    animal: animal(type:string) #Generate a random animal
    android_id: android_id #Return a random GCM registration ID.
    apple_token: apple_token #Return a random Apple Push Token
    bb_pin: bb_pin #Return a random BlackBerry Device PIN
    wp7_anid: wp7_anid #Return a random Windows Phone 7 ANID
    wp8_anid2: wp8_anid2 #Return a random Windows Phone 8 ANID2
    avatar_c: avatar_c(protocol:string,extensions:string,email:string) #Return a URL to a random avatar from Gravatar.
    company: company #Return a random company name.
    domain: domain(tld:string) #Return a random domain with a random tld.
    fbid: fbid #Return a random Facebook id, aka fbid.
    google_analytics: google_analytics #Return a random Google Analytics tracking code. Takes the form 'UA-123456-01'
    hashtag: hashtag #Return a random hashtag. This is a string of the form '#thisisahashtag'.
    klout: klout #Return a random Klout score. Range 1-99.
    profession: profession(rank:boolean) #Return a random profession. Rank is false by default.
    tld: tld #Return a random tld (Top Level Domain) from the set: ['com', 'org', 'edu', 'gov', 'uk', 'net', 'io']
    twitter: twitter #Return a random twitter handle.
    address: address(short_suffix:boolean) #Generate a random street address
    altitude: altitude(fixed:number,max:number) #Generate a random altitude, in meters.
    areacode: areacode #Generate a random area code
    coordinates: coordinates(fixed:number) #Generate random coordinates, which are latitude and longitude, comma separated.
    depth: depth(fixed:number,min:number) #Generate a random depth, in meters. Depths are always negative
    geohash: geohash(length:number) #Generate a random geohash
    phone: phone(formatted:boolean,country:string,mobile:string) #Generate a random phone By default conforms to NANP for a proper US phone number.
    postal: postal #Return a Canadian Postal code. Returned postal code is valid with respect to the Postal District (first character) and format only.
    postcode: postcode #Generate a random (U.K.) postcode. Returned postcode is valid with respect to the Postcode Area (first characters) and format only.
    province: province(full:boolean) #Return a random province.
    state_c: state_c(full:boolean,territories:boolean,armed_forces:boolean,us_states_and_dc:boolean,country:string) #Return a random state.
    street: street(short_suffix:boolean,syllables:number) #Generate a random street
    zip: zip(plusfour:boolean) #Generate a random (U.S.) zip code.
    ampm: ampm #Return am or pm.
    date: date(string:boolean,american:boolean) #Generate a random date By default, returns an actual Date object
    hammertime: hammertime #Generate a random hammertime. Hammertime is the name given to a Unix time with milliseconds. Which is the same as saying the number of milliseconds since 1970. It has finer granularity than a normal Unix timestamp and thus is often used in realtime applications.
    hour: hour(twentyfour:boolean) #Generate a random hour
    millisecond: millisecond #Generate a random millisecond
    minute: minute #Generate a random minute
    second: second #Generate a random second
    timestamp: timestamp #Generate a random timestamp
    timezone: timezone #Generate a random timezone object
    year: year(min:number,min:number) #Generate a random year
    cc: cc(type:string) #Generate a random credit card number. This card number will pass the Luhn algorithm so it looks like a legit card.
    cc_type: cc_type(raw:boolean) #Return a random credit card type.
    currency: currency #Generate a random currency.
    currency_pair: currency_pair #Generate a currency pair. Handy for simulating currency conversions. Guaranteed to return a unique pair (and not the same currency twice).
    dollar: dollar(max:number) #Return a random dollar amount.
    euro: euro(max:number) #Return a random euro amount
    exp: exp(raw:boolean) #Generate a random credit card expiration.
    exp_month: exp_month(future:boolean) #Generate a random credit card expiration month.
    exp_year: exp_year #Returns a random year between today and 10 years in the future.
    coin: coin(extraGenders:array) #Flip a coin!
    dice: dice(extraGenders:array) #Return a value equal to the roll of a die.
    guid: guid(version:number) #Return a random guid, version 5 by default.
    hash: hash(length:number,casing:string) #Return a random hex hash
    normal: normal(mean:number,deviation:number) #Return a normally-distributed random variate.
    radio: radio(side:string) #Return a random hex hash
    rpg: rpg(sum:boolean) #Given an input looking like #d#, where the first # is the number of dice to roll and the second # is the max of each die, returns an array of dice values.
    tv: tv(side:string) #Return a random hex hash
    validator: validator(extraGenders:array) #Return a random hex hash  
}
```
### Acknowledgements & Thanks
- graphql
- graphql-anywhere;
- fakerjs
- chancejs
