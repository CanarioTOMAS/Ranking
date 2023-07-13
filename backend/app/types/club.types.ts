module.exports = `#graphql
    extend type User {
        description:String
        turnament:String
        shift:String
        }
    
    type Mutation{
        updateClub(
            _id:String!
            name:String 
            phone:String    
            email:String
            image:String
            description:String
            turnament:String
            shift:String  
            ): User
    }

`;
