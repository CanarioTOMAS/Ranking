import { GraphQLError } from "graphql";
import User from "../schemas/user";
import Player from "../schemas/player";
import { UserInputError } from "apollo-server-core";

module.exports = {
  
  Mutation: {
    updatePlayer: async (root: any, args: any) => {
      const { _id, ...updates } = args;
      const player = await User.findByIdAndUpdate(_id, updates, {
        new: true,
      });
      if (!player) {
        throw new UserInputError("player not found", {
          invalidArgs: args,
        });
      }
      return player;
    },

  },
};
