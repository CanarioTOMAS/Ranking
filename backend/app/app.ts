import express from 'express';
import "dotenv/config";
import { ApolloServer } from '@apollo/server';
import {expressMiddleware} from '@apollo/server/express4';
import cors from 'cors';
import http from 'http';
import mongoose from 'mongoose';


export async function startApolloServer(typeDefs: any, resolvers: any){
    const app = express();
    const httpServer = http.createServer(app);
    mongoose.set("strictQuery", true);
    mongoose.connect(
      process.env.DB_TDB +
        "://" +
        process.env.DB_USER +
        ":" +
        process.env.DB_PWD +
        "@" +
        process.env.DB_HOST +
        ":" +
        process.env.DB_PORT +
        "/" +
        process.env.DB_NAME,
      () => {
        console.log("La base de datos esta corriendo correctamente");
      }
    );
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    await server.start();
    
    app.use('/graphql',cors(), express.json(), expressMiddleware( server));

    await new Promise<void>(resolve => httpServer.listen({
         port: 4001
         } , resolve));
    console.log(`🚀 Server ready at http://localhost:4001/graphql`);
}