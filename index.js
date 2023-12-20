// app.js

const express = require('express');
const users = require('./MOCK_DATA.json');
const app = express();
const port = 8000;


app.get('/users', (req, res) => {
    const html = `
        <ul>
        ${users.map((user) =>`<li> ${user.first_name}</li>`).join(" ")}
        </ul>
    `;

    return res.send(html);
  });


app.get('/api/users', (req, res) => {
  return res.json(users)
});

app.route("/api/users/:id")
    .get((req, res) => {
  const id = Number(req.params.id);
  const user = users.find(user => user.id === id);
  return res.json(user);
})
. patch((req, res) => {
    // Edit the user with id
    return res.json({"status": "Pending"});
}).post((req, res) => {
    // Create new use5r
    return res.json({"status": "Pending"});
})
.delete((req, res) => {
    // Delete the user with id
    return res.json({"status": "Pending"});
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});