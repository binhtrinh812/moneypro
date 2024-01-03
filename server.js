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

// Route thêm thu nhập chính

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

// Router xóa loại thu nhập chính
app.delete('/delete-incometype', (req, res) => {
  const { loaithunhapchinh_id } = req.body;
  // Kiểm tra xác thực.
  connection.query('SELECT * FROM loaithunhapchinh WHERE id = ?', [loaithunhapchinh_id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    console.log(loaithunhapchinh_id);
    // Nếu tìm thấy, xóa.
    if (results.length > 0) {
      connection.query('DELETE FROM loaithunhapchinh WHERE id = ?', [loaithunhapchinh_id], (err) => {
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

// Router thêm loại thu nhập chính
app.post('/addloaithunhapchinh', (req, res) => {
  const { loaithunhapchinh} = req.body;
  // Kiểm tra xem đã tồn tại chưa
  connection.query('SELECT * FROM loaithunhapchinh WHERE ten = ?', [loaithunhapchinh], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    // Nếu chưa tồn tại, thêm mới vào cơ sở dữ liệu
    if (results.length === 0) {
      connection.query('INSERT INTO loaithunhapchinh (ten) VALUES (?)', [loaithunhapchinh], (err) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
        res.status(200).json({ message: 'Created successfully' });
      });
    } else {
      res.status(400).json({ error: 'Income Type already exists' });
    }
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

// Router xóa Thu nhập phụ
app.delete('/delete-subincomelog', (req, res) => {
  const { thunhapphu_id } = req.body;
  // Kiểm tra xác thực.
  connection.query('SELECT * FROM thunhapphu WHERE id = ?', [thunhapphu_id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    console.log(thunhapphu_id);
    // Nếu tìm thấy, xóa.
    if (results.length > 0) {
      connection.query('DELETE FROM thunhapphu WHERE id = ?', [thunhapphu_id], (err) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
        res.json({ message: 'Sub Income deleted successfully' });
      });
    } else {
      res.status(404).json({ error: 'Sub Income not found' });
    }
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

// Router xóa loại thu nhập phụ
app.delete('/delete-subincometype', (req, res) => {
  const { loaithunhapphu_id } = req.body;
  // Kiểm tra xác thực.
  connection.query('SELECT * FROM loaithunhapphu WHERE id = ?', [loaithunhapphu_id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    console.log(loaithunhapphu_id);
    // Nếu tìm thấy, xóa.
    if (results.length > 0) {
      connection.query('DELETE FROM loaithunhapphu WHERE id = ?', [loaithunhapphu_id], (err) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
        res.json({ message: 'Sub Income deleted successfully' });
      });
    } else {
      res.status(404).json({ error: 'Sub Income not found' });
    }
  });
});

// Router thêm loại thu nhập phụ
app.post('/addloaithunhapphu', (req, res) => {
  const { loaithunhapphu} = req.body;
  // Kiểm tra xem đã tồn tại chưa
  connection.query('SELECT * FROM loaithunhapphu WHERE ten = ?', [loaithunhapphu], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    // Nếu chưa tồn tại, thêm mới vào cơ sở dữ liệu
    if (results.length === 0) {
      connection.query('INSERT INTO loaithunhapphu (ten) VALUES (?)', [loaithunhapphu], (err) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
        res.status(200).json({ message: 'Created successfully' });
      });
    } else {
      res.status(400).json({ error: 'Sub Income Type already exists' });
    }
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

// Router xóa Chi tiêu cố định
app.delete('/delete-chitieucodinh', (req, res) => {
  const { chitieucodinh_id } = req.body;
  // Kiểm tra xác thực.
  connection.query('SELECT * FROM chitieucodinh WHERE id = ?', [chitieucodinh_id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    console.log(chitieucodinh_id);
    // Nếu tìm thấy, xóa.
    if (results.length > 0) {
      connection.query('DELETE FROM chitieucodinh WHERE id = ?', [chitieucodinh_id], (err) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
        res.json({ message: 'Sub Income deleted successfully' });
      });
    } else {
      res.status(404).json({ error: 'Sub Income not found' });
    }
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

// Router xóa Loại chi tiêu cố định
app.delete('/delete-loaichitieucodinh', (req, res) => {
  const { loaichitieucodinh_id } = req.body;
  // Kiểm tra xác thực.
  connection.query('SELECT * FROM loaichitieucodinh WHERE id = ?', [loaichitieucodinh_id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    console.log(loaichitieucodinh_id);
    // Nếu tìm thấy, xóa.
    if (results.length > 0) {
      connection.query('DELETE FROM loaichitieucodinh WHERE id = ?', [loaichitieucodinh_id], (err) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
        res.json({ message: 'Sub Income deleted successfully' });
      });
    } else {
      res.status(404).json({ error: 'Sub Income not found' });
    }
  });
});

// Router thêm loại chi tiêu cố định
app.post('/addloaichitieucodinh', (req, res) => {
  const { loaichitieucodinh} = req.body;
  // Kiểm tra xem đã tồn tại chưa
  connection.query('SELECT * FROM loaichitieucodinh WHERE ten = ?', [loaichitieucodinh], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    // Nếu chưa tồn tại, thêm mới vào cơ sở dữ liệu
    if (results.length === 0) {
      connection.query('INSERT INTO loaichitieucodinh (ten) VALUES (?)', [loaichitieucodinh], (err) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
        res.status(200).json({ message: 'Created successfully' });
      });
    } else {
      res.status(400).json({ error: 'Base Spending already exists' });
    }
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

// Router xóa Chi tiêu phát sinh
app.delete('/delete-chitieuphatsinh', (req, res) => {
  const { chitieuphatsinh_id } = req.body;
  // Kiểm tra xác thực.
  connection.query('SELECT * FROM chitieuphatsinh WHERE id = ?', [chitieuphatsinh_id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    console.log(chitieuphatsinh_id);
    // Nếu tìm thấy, xóa.
    if (results.length > 0) {
      connection.query('DELETE FROM chitieuphatsinh WHERE id = ?', [chitieuphatsinh_id], (err) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
        res.json({ message: 'Sub Income deleted successfully' });
      });
    } else {
      res.status(404).json({ error: 'Sub Income not found' });
    }
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

// Router xóa Loai chi tiêu phát sinh
app.delete('/delete-loaichitieuphatsinh', (req, res) => {
  const { loaichitieuphatsinh_id } = req.body;
  // Kiểm tra xác thực.
  connection.query('SELECT * FROM loaichitieuphatsinh WHERE id = ?', [loaichitieuphatsinh_id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    console.log(loaichitieuphatsinh_id);
    // Nếu tìm thấy, xóa.
    if (results.length > 0) {
      connection.query('DELETE FROM loaichitieuphatsinh WHERE id = ?', [loaichitieuphatsinh_id], (err) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
        res.json({ message: 'Sub Income deleted successfully' });
      });
    } else {
      res.status(404).json({ error: 'Sub Income not found' });
    }
  });
});

// Router thêm loại chi tiêu phát sinh
app.post('/addloaichitieuphatsinh', (req, res) => {
  const { loaichitieuphatsinh} = req.body;
  // Kiểm tra xem đã tồn tại chưa
  connection.query('SELECT * FROM loaichitieuphatsinh WHERE ten = ?', [loaichitieuphatsinh], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    // Nếu chưa tồn tại, thêm mới vào cơ sở dữ liệu
    if (results.length === 0) {
      connection.query('INSERT INTO loaichitieuphatsinh (ten) VALUES (?)', [loaichitieuphatsinh], (err) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
        res.status(200).json({ message: 'Created successfully' });
      });
    } else {
      res.status(400).json({ error: 'Extra Spending already exists' });
    }
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

// Router xóa khoản tiết kiệm
app.delete('/delete-khoantietkiem', (req, res) => {
  const { khoantietkiem_id } = req.body;
  // Kiểm tra xác thực.
  connection.query('SELECT * FROM khoantietkiem WHERE id = ?', [khoantietkiem_id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    console.log(khoantietkiem_id);
    // Nếu tìm thấy, xóa.
    if (results.length > 0) {
      connection.query('DELETE FROM khoantietkiem WHERE id = ?', [khoantietkiem_id], (err) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
        res.json({ message: 'Sub Income deleted successfully' });
      });
    } else {
      res.status(404).json({ error: 'Sub Income not found' });
    }
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

//// Router xóa Loại tiết kiệm
app.delete('/delete-loaitietkiem', (req, res) => {
  const { loaitietkiem_id } = req.body;
  // Kiểm tra xác thực.
  connection.query('SELECT * FROM loaitietkiem WHERE id = ?', [loaitietkiem_id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    console.log(loaitietkiem_id);
    // Nếu tìm thấy, xóa.
    if (results.length > 0) {
      connection.query('DELETE FROM loaitietkiem WHERE id = ?', [loaitietkiem_id], (err) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
        res.json({ message: 'Sub Income deleted successfully' });
      });
    } else {
      res.status(404).json({ error: 'Sub Income not found' });
    }
  });
});

// Router thêm loại tiết kiệm
app.post('/addloaitietkiem', (req, res) => {
  const { loaitietkiem} = req.body;
  // Kiểm tra xem đã tồn tại chưa
  connection.query('SELECT * FROM loaitietkiem WHERE ten = ?', [loaitietkiem], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    // Nếu chưa tồn tại, thêm mới vào cơ sở dữ liệu
    if (results.length === 0) {
      connection.query('INSERT INTO loaitietkiem (ten) VALUES (?)', [loaitietkiem], (err) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
        res.status(200).json({ message: 'Created successfully' });
      });
    } else {
      res.status(400).json({ error: 'Economied Type already exists' });
    }
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


