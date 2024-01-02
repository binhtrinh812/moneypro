// app.js
const express = require("express");
const mysql = require("mysql2");
const app = express();
var cors = require("cors");
const bodyParser = require('body-parser');
const port = 5000;

// Kết nối với MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "04112002",
  database: "quanlychitieu",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Định nghĩa route để thực hiện thao tác với cơ sở dữ liệu
app.get("/", (req, res) => {
  // Thực hiện truy vấn cơ sở dữ liệu (ví dụ)
  connection.query("SELECT thunhapchinh.*, loaithunhapchinh.ten as tenthunhapchinh FROM thunhapchinh JOIN loaithunhapchinh ON loaithunhapchinh.id = thunhapchinh.loaithunhapchinh_id", (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.send("Error");
      return;
    }
    // Xử lý kết quả và gửi về client
    res.json(results);
  });
});

// Route đăng ký người dùng
app.post('/register', (req, res) => {
    const { username, password, name } = req.body;
  
    // Kiểm tra xem người dùng đã tồn tại chưa
    connection.query('SELECT * FROM taikhoan WHERE taikhoan = ?', [username], (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      // Nếu người dùng chưa tồn tại, thêm mới vào cơ sở dữ liệu
      if (results.length === 0) {
        connection.query('INSERT INTO taikhoan (ten, taikhoan, matkhau) VALUES (?, ?, ?)', [name, username, password], (err) => {
          if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
          }
          res.status(200).json({ message: 'User registered successfully' });
        });
      } else {
        res.status(400).json({ error: 'Username already exists' });
      }
    });
  });

// Route đăng nhập
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Kiểm tra xác thực người dùng
  connection.query(
    "SELECT * FROM taikhoan WHERE taikhoan = ? AND matkhau = ?",
    [username, password],
    (err, results) => {
      if (err) {
        console.error("Error executing query:", err);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }

      // Nếu tìm thấy người dùng, đăng nhập thành công
      if (results.length > 0) {
        res.json({ message: "Login successful" });
      } else {
        res.status(401).json({ error: "Invalid username or password" });
      }
    }
  );
});

// Route xóa người dùng
app.delete('/delete-user', (req, res) => {
  const { username } = req.body;

  // Kiểm tra xác thực người dùng
  connection.query('SELECT * FROM taikhoan WHERE taikhoan = ?', [username], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    // Nếu tìm thấy người dùng, xóa người dùng
    if (results.length > 0) {
      connection.query('DELETE FROM taikhoan WHERE taikhoan = ?', [username], (err) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
        res.json({ message: 'User deleted successfully' });
      });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });
});

app.delete('/delete-incomelog', (req, res) => {
  const { thunhapchinh_id } = req.body;

  // Kiểm tra xác thực người dùng
  connection.query('SELECT * FROM thunhapchinh WHERE id = ?', [thunhapchinh_id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    console.log(thunhapchinh_id);

    // Nếu tìm thấy người dùng, xóa người dùng
    if (results.length > 0) {
      connection.query('DELETE FROM thunhapchinh WHERE id = ?', [thunhapchinh_id], (err) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
        res.json({ message: 'Income deleted successfully' });
      });
    } else {
      res.status(404).json({ error: 'Income not found' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
