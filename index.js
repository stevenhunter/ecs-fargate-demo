const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send(JSON.stringify({ message: 'NodeJS App with source code in Github, deployed by AWS CodePipeline to ECS Fargate!!!' }));

    console.log(`Request received from ${req.ip}`);
})

app.listen(3000, () => {
    console.log("server connected");
})