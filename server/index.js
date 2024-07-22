// npm install @apollo/server express graphql cors
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import db from "./connection/connection.js";
import mongoose from "mongoose";
import express from "express";
import http from "http";
import cors from "cors";

import typeDefs from "./graphql/schemas/index.js";
import resolvers from "./graphql/resolvers/index.js";

const PORT = 3001;

// Define your GraphQL schema

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.

const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Once connected, log the connection success
db.once("open", () => {
  console.log("MongoDB connection successful");
  app.listen(PORT, () => {
    console.log(`REST server running on ${PORT}`);
  });
});

await server.start();
app.use(
  "/graphql",
  cors(),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  })
);

app.get("/hello", (req, res) => {
  res.send("pong");
});

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/graphql`);
