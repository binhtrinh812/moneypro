import "./Income.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const IncomeLog = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:5000");
    setData(res.data);
  };

  const handleOnclickDelete = async (thunhapchinh_id) => {
    try {
        const res = await axios.delete("http://localhost:5000/delete-incomelog", {
            data: {
                thunhapchinh_id
            }
        })
        alert(res.data.message);
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div class="container">
        <Navbar></Navbar>
        <section className="main">
          <section className="attendance">
            <div className="attendance-list">
              <h1>Quản lý danh sách chi tiêu</h1>

              <Button
                className="incomeAdd"
                variant="primary"
                onClick={handleShow}
              >
                Thêm mới
              </Button>

              <Modal className="incomeModal" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Example textarea</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>

              <table className="table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên khoản</th>
                    <th>Loại Thu Nhập Chính</th>
                    <th>Số Tiền</th>
                    <th>Diễn giải</th>
                    <th>Ngày</th>
                    <th>Thời gian</th>
                    <th className="income_th">Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((value) => {
                    console.log(value);
                    return (
                      <tr>
                        <td>{value.id}</td>
                        <td>{value.ten}</td>
                        <td>{value.tenthunhapchinh}</td>
                        <td>{value.sotien}</td>
                        <td>{value.diengiai}</td>
                        <td>{value.ngay}</td>
                        <td>{value.thoigian}</td>
                        <td className="incomeButton">
                          <button>Sửa</button>
                          <button className="incomeDelete" onClick={() => handleOnclickDelete(value.id)}>Xóa</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};
export default IncomeLog;
