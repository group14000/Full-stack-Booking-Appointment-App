const mysql = require("mysql2");

// Replace the database configuration with your own credentials
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Diganta@7908",
  database: "booking_app", // Update to match the actual database name
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL database");

    // Create 'users' table if it doesn't exist
    db.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        phone VARCHAR(15) NOT NULL,
        email VARCHAR(255) NOT NULL
      )
    `, (createErr, result) => {
      if (createErr) {
        console.error('Error creating users table:', createErr);
      } else {
        console.log('Users table created or already exists');
      }
    });
  }
});

module.exports = db;
