import express from "express";

const app = express();
app.use(express.json());

// JSON Object
// {
//     "name": "John",
//     "age": 20,
//     "email": "john@gmail.com",
//     "password": "123456",
//     "phone": "1234567890",
//     "address": "123 Main St, Anytown, USA"
// }

//req -> manipulate or recieve any incoming data from client
//res -> send any response to the client

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

//search params
//default -> next /

app.get("/users/:id", (req, res) => {
  res.send(`User ID is ${req.params.id}`);
});

//can also recieve search params
app.post("/users", (req, res) => {
  const body = req.body;
  console.log(body);
  res.send("User Created");
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  res.send(`User ${id} updated with name ${name}`);
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  res.send(`User ${id} deleted`);
});

// CRUD Operations -> Database -> MongoDB
// Create -> POST
// Read -> GET
// Update -> PUT
// Delete -> DELETE

app.listen(2212, () => {
  console.log("Server is running on port 2212");
});
