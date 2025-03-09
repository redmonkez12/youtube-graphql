import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import path from "path";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "url";
import { resolvers } from "@/resolvers";

const PORT = 9000;

const app = express();
app.use(cors(), express.json());

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const typeDefs = await readFile(path.resolve(__dirname, "schema.graphql"), "utf8");

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
});

await apolloServer.start();
app.use("/graphql", expressMiddleware(apolloServer));

app.listen({ port: PORT}, () => {
    console.log(`Server is running on port ${PORT}`);
})