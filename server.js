import express from "express";
import bcrypt from "bcrypt";
import session from "express-session";

const app = express();
app.use(express.json());

const users = []; // temporary DB (can replace later)

app.use(session({
  secret: "secret-key",
  resave: false,
  saveUninitialized: false
}));

// SIGN UP
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);
  users.push({ username, password: hashed });

  res.json({ success: true });
});

// LOGIN
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (!user) return res.status(401).json({ error: "User not found" });

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json({ error: "Wrong password" });

  req.session.user = user.username;
  res.json({ success: true });
});

// PROTECTED
app.get("/me", (req, res) => {
  if (!req.session.user) return res.status(401).end();
  res.json({ user: req.session.user });
});

app.listen(3000, () => console.log("Server running"));
