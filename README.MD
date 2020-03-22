# JSONFarmer easily generate large amounts of fake JSON with GraphQL

### Features

- Generate JSON using graphql syntax.
- Generate random strings, numbers, name, email, city, color, etc
- Generate unlimited depth.
- Need some mock data to test your app.
- Compatible in nodejs and browsers.
- Using Faker.js and Chance.js

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
            email: email
            city: city
            state: state
            country: country
            phone: phone
            fax: phone
            products {
                create @repeat(min: 5, max: 15){
                    name: commerceProductName
                    unitPrice: commercePrice
                    color: commerceColor
                    material: commerceProductMaterial
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

#### Example Function

```graphql
{
    author {
      firstname: firstName
      lastname: lastName
      # email: email
      age: integer(min: 1, max: 10)
      active:bool
      city: city
      country: country
      phone: phone
    }
  }
```
### Acknowledgements & Thanks
- graphql
- graphql-anywhere;
- fakerjs
- chancejs