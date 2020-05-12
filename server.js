const express = require("express");
const passport = require("passport");
const { v4: uuidv4 } = require("uuid");
const redis = require("redis");
const session = require("express-session");
const app = express();
const path = require("path");
const mountRoutes = require("./routes");

const RedisStore = require("connect-redis")(session);

let redisClient;

if (process.env.REDIS_URL) {
  const rtg = require("url").parse(process.env.REDIS_URL);
  redisClient = redis.createClient(rtg.port, rtg.hostname);

  redisClient.auth(rtg.auth.split(":")[1]);
} else {
  redisClient = require("redis").createClient();
}

redisClient.on("error", (err) => {
  console.log("Redis error: ", err);
});

// Middleware
app.use(express.json());
app.use(
  session({
    genid: (req) => {
      return uuidv4();
    },
    store: new RedisStore({
      host: "localhost",
      post: 6379,
      client: redisClient,
    }),
    name: "_redisDemo",
    secret: process.env.SECRET_KEY,
    resave: false,
    rolling: true,
    cookie: { secure: false, maxAge: 60000 },
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// console.log(passport);

// Routes
mountRoutes(app);

// Production Setup
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

module.exports = app;
