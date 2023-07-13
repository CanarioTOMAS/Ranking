import { GraphQLError } from "graphql"
import User from "../schemas/user"
import { UserInputError } from "apollo-server-core"

module.exports = {
    Query: {
        getUser: async (root: any, args: any) => {
            const { _id } = args;
            const user = await User.findById(_id);
            console.log(user);
            return user;
          },
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
            },
            deleteUser: async (root: any, args: any) => {
                const { _id } = args;
                const user = await User.findByIdAndDelete(_id);
                if (!user) {
                  throw new UserInputError("User not found", {
                    invalidArgs: args,
                  });
                }
                return "User deleted successfully";
              },
        }
    }
