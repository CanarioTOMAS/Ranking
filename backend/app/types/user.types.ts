module.exports = `#graphql
    type User {
        id: ID!
        name: String!
        phone: String
        email: String!
        address: String
        password: String!
        image: String
        role: String!
    }

    type Mutation{
        createUser(name: String!, phone: String, email: String!, address: String, password: String!, image: String, role: String!): User
    }

    type Query{
        hello: String 
    }
    `;
