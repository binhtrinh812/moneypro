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
  password: "08122002",
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

// Route select Thu Nhập chính
app.get("/thunhapchinh", (req, res) => {
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

// Router xóa Thu nhập chính
app.delete('/delete-incomelog', (req, res) => {
  const { thunhapchinh_id } = req.body;
  // Kiểm tra xác thực.
  connection.query('SELECT * FROM thunhapchinh WHERE id = ?', [thunhapchinh_id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    console.log(thunhapchinh_id);
    // Nếu tìm thấy thu nhập chính, xóa.
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

// Route select Loại thu nhập chính
app.get("/loaithunhapchinh", (req, res) => {
  connection.query("SELECT * FROM loaithunhapchinh", (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.send("Error");
      return;
    }
    // Xử lý kết quả và gửi về client
    res.json(results);
  });
});

// Route select Thu Nhập Phụ
app.get("/thunhapphu", (req, res) => {
  connection.query("SELECT thunhapphu.*, loaithunhapphu.ten as tenthunhapphu FROM thunhapphu JOIN loaithunhapphu ON loaithunhapphu.id = thunhapphu.loaithunhapphu_id", (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.send("Error");
      return;
    }
    // Xử lý kết quả và gửi về client
    res.json(results);
  });
});

// Route select Loại thu nhập phụ
app.get("/loaithunhapphu", (req, res) => {
  connection.query("SELECT * FROM loaithunhapphu", (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.send("Error");
      return;
    }
    // Xử lý kết quả và gửi về client
    res.json(results);
  });
});

// Route select Chi tiêu cố định
app.get("/chitieucodinh", (req, res) => {
  connection.query("SELECT chitieucodinh.*, loaichitieucodinh.ten as tenchitieucodinh FROM chitieucodinh JOIN loaichitieucodinh ON loaichitieucodinh.id = chitieucodinh.loaichitieucodinh_id", (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.send("Error");
      return;
    }
    // Xử lý kết quả và gửi về client
    res.json(results);
  });
});

// Route select Loại chi tiêu cố định
app.get("/loaichitieucodinh", (req, res) => {
  connection.query("SELECT * FROM loaichitieucodinh", (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.send("Error");
      return;
    }
    // Xử lý kết quả và gửi về client
    res.json(results);
  });
});

// Route select Chi tiêu phát sinh
app.get("/chitieuphatsinh", (req, res) => {
  connection.query("SELECT chitieuphatsinh.*, loaichitieuphatsinh.ten as tenchitieuphatsinh FROM chitieuphatsinh JOIN loaichitieuphatsinh ON loaichitieuphatsinh.id = chitieuphatsinh.loaichitieuphatsinh_id", (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.send("Error");
      return;
    }
    // Xử lý kết quả và gửi về client
    res.json(results);
  });
});

// Route select Loại chi tiêu phát sinh
app.get("/loaichitieuphatsinh", (req, res) => {
  connection.query("SELECT * FROM loaichitieuphatsinh", (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.send("Error");
      return;
    }
    // Xử lý kết quả và gửi về client
    res.json(results);
  });
});

// Route select Tiết kiệm
app.get("/khoantietkiem", (req, res) => {
  connection.query("SELECT khoantietkiem.*, loaitietkiem.ten as tenkhoantietkiem FROM khoantietkiem JOIN loaitietkiem ON loaitietkiem.id = khoantietkiem.loaitietkiem_id", (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.send("Error");
      return;
    }
    // Xử lý kết quả và gửi về client
    res.json(results);
  });
});

// Route select Loại tiết kiệm
app.get("/loaitietkiem", (req, res) => {
  connection.query("SELECT * FROM loaitietkiem", (err, results) => {
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


