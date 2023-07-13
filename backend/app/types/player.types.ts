module.exports = `#graphql
    extend type User {
        dateBirth: String
        gender: String
        surname: String
        age: String
        nationality: String
        }
    
    type Mutation{
        updatePlayer(
            _id:String!
            name:String
            surname:String  
            phone:String    
            email:String
            address:String
            image:String
            gender:String
            ): User
    }

`;
