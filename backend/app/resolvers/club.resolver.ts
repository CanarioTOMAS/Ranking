import { GraphQLError } from "graphql";
import User from "../schemas/user";
import { UserInputError } from "apollo-server-core";

module.exports = {
  
  Mutation: {
    updateClub: async (root: any, args: any) => {
      const { _id, ...updates } = args;
      const club = await User.findByIdAndUpdate(_id, updates, {
        new: true,
      });
      if (!club) {
        throw new UserInputError("club not found", {
          invalidArgs: args,
        });
      }
      return club;
    },

  },
};
