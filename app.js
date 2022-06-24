    
import {ApolloServer} from 'apollo-server'
import typeDefs from './src/graphaql/schema.js'
import connectDB from "./src/db/connectdb.js";

const DATABASE_URL= process.env.DATABASE_URL || 'mongodb://localhost:27017';

connectDB(DATABASE_URL);

const server = new ApolloServer({typeDefs});






server.listen().then(() => {
    console.log(`
      Server is running!
      Listening on port 4000
      Explore at https://studio.apollographql.com/sandbox
    `);
  });
  






