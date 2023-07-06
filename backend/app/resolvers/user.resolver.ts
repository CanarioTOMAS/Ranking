import { GraphQLError } from "graphql"
import User from "../schemas/user"

module.exports = {
    Query: {
       hello: () => {
              return "Hello world with GraphQL"
       }
    },
    Mutation: {
        createUser: async (root: any,args:any) => {
            console.log(args)

            const user = new User({
                name:args.name,
                phone:args.phone,
                email:args.email,
                address:args.address,
                password:args.password,
                image:args.image,
                role:args.role
            })
            return await user.save().catch((error) => {
                throw new GraphQLError("Error al crear el usuario: " + error,{
                    extensions: {
                        code: "status(400) Error al crear el usuario"
                }  
                } 
            )
            })
            }
        }
    }
