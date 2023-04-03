const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const cors = require("cors");

const schema = buildSchema(`
  type Query {
    books: [Book!]!
    book(id: ID!): Book
  }

  type Book {
    id: ID!
    title: String!
    author: String!
    year: Int!
    description: String!
    image: String!
    price: Float!
  }
`);

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    description: "A novel of decadence and decay in the roaring twenties",
    image: "https://source.unsplash.com/kfLp0IWzy9o",
    price: 11.99,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    description:
      "A story of racial injustice and loss of innocence in the American South",
    image: "https://source.unsplash.com/K3GJd_oVwSE",
    price: 10.99,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    description: "A dystopian novel set in a totalitarian society",
    image: "https://source.unsplash.com/FnYqrw6Mg_c",
    price: 9.99,
  },
  {
    id: 4,
    title: "Brave New World",
    author: "Aldous Huxley",
    year: 1932,
    description:
      "A dystopian novel set in a future world where people are controlled and conditioned by a government-enforced drug called soma",
    image: "https://source.unsplash.com/uW2D3YwY80A",
    price: 8.99,
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    description: "A story of adolescent angst and rebellion",
    image: "https://source.unsplash.com/5vDl2Z0C_xA",
    price: 7.99,
  },
  {
    id: 6,
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    year: 1952,
    description: "A story of an aging fisherman's battle with a giant marlin",
    image: "https://source.unsplash.com/cnmaDG3YqIc",
    price: 6.99,
  },
  {
    id: 7,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954,
    description:
      "A high-fantasy epic about a hobbit's quest to destroy the One Ring and defeat the dark lord Sauron",
    image: "https://source.unsplash.com/kXoVfTXBNYs",
    price: 13.99,
  },
  {
    id: 8,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    description: "A romantic novel of manners",
    image: "https://source.unsplash.com/XcLzl3iZv_w",
    price: 9.99,
  },
  {
    id: 9,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    year: 1890,
    description:
      "A story of a man's moral corruption and the ugliness that hides beneath physical beauty",
    image: "https://source.unsplash.com/ywrHt9XvQg0",
    price: 5.99,
  },
];

const rootValue = {
  books: () => books,
  book: ({ id }) => books.find((book) => book.id == id),
};

const app = express();
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: rootValue,
    graphiql: true,
  })
);

const port = 3030;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
