import "./Income.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal } from 'antd';
const IncomeLog = () => {

  // Thêm
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Sửa
  const [a,setA] = useState(false);
  const showA = () => {
    setA(true);
  };

  const handleOkA = () => {
    setA(false);
  };
  const handleCancelA = () => {
    setA(false);
  };

    // Xóa
    const [b,setB] = useState(false);
    const showB = () => {
      setB(true);
    };
  
    const handleOkB = () => {
      setB(false);
    };
    const handleCancelB = () => {
      setB(false);
    };

  

  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:5000/thunhapchinh");
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
              <h1>Quản lý danh sách thu nhập chính</h1>

              <Button className="incomeAdd" type="primary" onClick={showModal}>
                Thêm mới
              </Button>
              <Modal className="incomeModel" title="Thêm mới" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <label>Tên khoản</label>
                <input type="text" placeholder="" />
                <label>Loại thu nhập chính</label>
                <input type="text" placeholder="" />
                <label>Số tiền</label>
                <input type="text" placeholder="" />
                <label>Diễn giải</label>
                <input type="text" placeholder="" />
                <label>Ngày</label>
                <input type="text" placeholder="" />
                <label>Thời gian</label>
                <input type="text" placeholder="" />
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
                        <Button className="incomeUpdate" type="primary" onClick={showA}>
                        Sửa
                        </Button>
                        <Modal className="incomeModel" title="Sửa" open={a} onOk={handleOkA} onCancel={handleCancelA}>
                          <label>Tên khoản</label>
                          <input type="text" placeholder="" />
                          <label>Loại thu nhập chính</label>
                          <input type="text" placeholder="" />
                          <label>Số tiền</label>
                          <input type="text" placeholder="" />
                          <label>Diễn giải</label>
                          <input type="text" placeholder="" />
                          <label>Ngày</label>
                          <input type="text" placeholder="" />
                          <label>Thời gian</label>
                          <input type="text" placeholder="" />
                        </Modal>

                          <Button className="incomeDelete" type="primary" onClick={showB}>
                            Xóa
                          </Button>
                          <Modal title="Xóa" open={b} onOk={handleOkB} onCancel={handleCancelB}>
                            <p>Có chắc bạn muốn xóa ?</p>
                          </Modal>
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
