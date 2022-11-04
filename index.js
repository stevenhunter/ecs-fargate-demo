const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send(JSON.stringify({ message: 'NodeJS App Running on Amazon ECS Fargate' }));
})

app.listen(3000, () => {
    console.log("server connected");
})