import { startApolloServer } from './app';
import  resolvers  from '../app/resolvers';
import  typeDefs  from '../app/typeDefs';
startApolloServer(typeDefs, resolvers );



