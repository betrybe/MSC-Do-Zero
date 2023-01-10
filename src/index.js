require('dotenv').config();
const express = require('express');
const PORT = process.env.APP_PORT;

const app = express();

app.use(express.json());

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
