const express = require("express");
const colors = require("colors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema.js");
const connectDB = require("./config/db.js");
const PORT = process.env.PORT || 6655;

const app = express();

// Connect to database
connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(PORT, console.log(`Server running on port ${PORT}`));
