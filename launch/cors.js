
const cors = require("cors");

const cors_options = {
    origin: ["http://localhost:3000", "http://localhost:3001", "https://food-go-lemon.vercel.app"],
    'Access-Control-Allow-Origin': 'https://food-go-lemon.vercel.app/',
    'Access-Control-Allow-Credentials': true,
    credentials: true,
}

module.exports = (app) => {
  app.use(cors(cors_options));
}
