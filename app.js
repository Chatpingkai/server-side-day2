require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const app = express();

const PORT = process.env.PORT || 3000;


const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE,
  charset: 'utf8mb4'
});


db.query("SET NAMES utf8mb4", (err) => {
  if (err) {
    console.error("Error setting charset:", err);
  } else {
    console.log("Connection charset set to utf8mb4");
  }
});


app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  next();
});


app.get('/', (req, res) => {
  res.json({ message: "Welcome to API" });
});

app.get('/products', (req, res) => {
  const sql = 'SELECT * FROM products';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    console.log(results);
    res.json(results);
  });
});

app.get('/products/:id', (req, res) => {
  const sql = 'SELECT * FROM products WHERE id = ?';
  db.query(sql, [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Product not found' });
    res.json(results[0]);
  });
});

app.get('/products/search/:keyword', (req, res) => {
  const keyword = `%${req.params.keyword}%`;
  const sql = 'SELECT * FROM products WHERE name LIKE ?';
  db.query(sql, [keyword], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`🚀 API server running at http://localhost:${PORT}`);
});
