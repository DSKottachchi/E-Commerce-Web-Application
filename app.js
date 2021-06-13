const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const {buildSchema, } = require('graphql');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/graphql', graphqlHTTP({
    schema: buildSchema(`
        type RootQuery {
            products: [String!]!
        }

        type RootMutation {
            createProduct(name: String): String
        }

        schema {
            query:  RootQuery
            mutation: RootMutation
        }
    `),

    // Adding all the logic in the resolver
    rootValue: {
        products: () => {
            return ['Sofa', 'Bench', 'Chair'];
        },
        createProduct: (args) => {
            const productName = args.name;
            return productName;
        }
    },
    graphiql: true
}));

app.listen(3000);