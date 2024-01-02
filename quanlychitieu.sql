-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 01, 2022 lúc 11:55 AM
-- Phiên bản máy phục vụ: 10.4.11-MariaDB
-- Phiên bản PHP: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `quanlychitieu`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chitieucodinh`
--

CREATE TABLE `chitieucodinh` (
  `id` int(11) NOT NULL,
  `ten` varchar(255) DEFAULT NULL,
  `sotien` decimal(10,0) DEFAULT NULL,
  `diengiai` varchar(500) NOT NULL,
  `ngay` varchar(250) NOT NULL,
  `thoigian` varchar(250) NOT NULL,
  `loaichitieucodinh_id` int(11) NOT NULL,
  `taikhoan_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `chitieucodinh`
--

INSERT INTO `chitieucodinh` (`id`, `ten`, `sotien`, `diengiai`, `ngay`, `thoigian`, `loaichitieucodinh_id`, `taikhoan_id`) VALUES
(1, 'Tiền ăn sáng', '100000', 'ăn sáng', '2022-12-01', '15:52', 1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chitieuphatsinh`
--

CREATE TABLE `chitieuphatsinh` (
  `id` int(11) NOT NULL,
  `ten` varchar(255) DEFAULT NULL,
  `sotien` decimal(10,0) DEFAULT NULL,
  `diengiai` varchar(500) NOT NULL,
  `ngay` varchar(250) NOT NULL,
  `thoigian` varchar(250) NOT NULL,
  `loaichitieuphatsinh_id` int(11) NOT NULL,
  `taikhoan_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `chitieuphatsinh`
--

INSERT INTO `chitieuphatsinh` (`id`, `ten`, `sotien`, `diengiai`, `ngay`, `thoigian`, `loaichitieuphatsinh_id`, `taikhoan_id`) VALUES
(1, 'Tiền đổ xăng ', '100000', 'đổ xăng', '2022-12-01', '17:20', 5, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khoantietkiem`
--

CREATE TABLE `khoantietkiem` (
  `id` int(11) NOT NULL,
  `ten` varchar(255) DEFAULT NULL,
  `sotien` decimal(10,0) DEFAULT NULL,
  `diengiai` varchar(500) NOT NULL,
  `ngay` varchar(250) NOT NULL,
  `thoigian` varchar(250) NOT NULL,
  `loaitietkiem_id` int(11) NOT NULL,
  `taikhoan_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `khoantietkiem`
--

INSERT INTO `khoantietkiem` (`id`, `ten`, `sotien`, `diengiai`, `ngay`, `thoigian`, `loaitietkiem_id`, `taikhoan_id`) VALUES
(2, 'Lãi ngân hàng VCB', '500000', 'lãi ngân hàng', '2022-12-01', '16:32', 1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loaichitieucodinh`
--

CREATE TABLE `loaichitieucodinh` (
  `id` int(11) NOT NULL,
  `ten` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `loaichitieucodinh`
--

INSERT INTO `loaichitieucodinh` (`id`, `ten`) VALUES
(1, 'Ăn uống'),
(3, 'Con cái'),
(6, 'Nhà cửa');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loaichitieuphatsinh`
--

CREATE TABLE `loaichitieuphatsinh` (
  `id` int(11) NOT NULL,
  `ten` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `loaichitieuphatsinh`
--

INSERT INTO `loaichitieuphatsinh` (`id`, `ten`) VALUES
(1, 'Mua sắm'),
(2, 'Du lịch'),
(3, 'Quà cáp'),
(4, 'Giải trí'),
(5, 'Xã hội'),
(6, 'Làm đẹp');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loaithunhapchinh`
--

CREATE TABLE `loaithunhapchinh` (
  `id` int(11) NOT NULL,
  `ten` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `loaithunhapchinh`
--

INSERT INTO `loaithunhapchinh` (`id`, `ten`) VALUES
(1, 'Tiền lương'),
(3, 'Tiền buôn bán');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loaithunhapphu`
--

CREATE TABLE `loaithunhapphu` (
  `id` int(11) NOT NULL,
  `ten` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `loaithunhapphu`
--

INSERT INTO `loaithunhapphu` (`id`, `ten`) VALUES
(1, 'Tiền được tặng'),
(2, 'Tiền lãi');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loaitietkiem`
--

CREATE TABLE `loaitietkiem` (
  `id` int(11) NOT NULL,
  `ten` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `loaitietkiem`
--

INSERT INTO `loaitietkiem` (`id`, `ten`) VALUES
(1, 'Gửi ngân hàng'),
(3, 'Bỏ heo đất');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `taikhoan`
--

CREATE TABLE `taikhoan` (
  `id` int(11) NOT NULL,
  `ten` varchar(250) NOT NULL,
  `taikhoan` varchar(250) NOT NULL,
  `matkhau` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `taikhoan`
--

INSERT INTO `taikhoan` (`id`, `ten`, `taikhoan`, `matkhau`) VALUES
(1, 'Bảo Trinh', 'baotrinh', '123456'),
(2, 'Test', 'test', '123'),
(3, 'Minh nhã', 'minhnha', '123456');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thunhapchinh`
--

CREATE TABLE `thunhapchinh` (
  `id` int(11) NOT NULL,
  `ten` varchar(250) NOT NULL,
  `sotien` decimal(10,0) NOT NULL,
  `diengiai` varchar(500) NOT NULL,
  `ngay` varchar(250) NOT NULL,
  `thoigian` varchar(250) NOT NULL,
  `loaithunhapchinh_id` int(11) NOT NULL,
  `taikhoan_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `thunhapchinh`
--

INSERT INTO `thunhapchinh` (`id`, `ten`, `sotien`, `diengiai`, `ngay`, `thoigian`, `loaithunhapchinh_id`, `taikhoan_id`) VALUES
(5, 'Lương đi làm thêm', '7000000', 'lương đi làm', '2022-11-30', '14:43', 1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thunhapphu`
--

CREATE TABLE `thunhapphu` (
  `id` int(11) NOT NULL,
  `ten` varchar(255) DEFAULT NULL,
  `sotien` decimal(10,0) DEFAULT NULL,
  `diengiai` varchar(500) NOT NULL,
  `ngay` varchar(250) NOT NULL,
  `thoigian` varchar(250) NOT NULL,
  `loaithunhapphu_id` int(11) NOT NULL,
  `taikhoan_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `thunhapphu`
--

INSERT INTO `thunhapphu` (`id`, `ten`, `sotien`, `diengiai`, `ngay`, `thoigian`, `loaithunhapphu_id`, `taikhoan_id`) VALUES
(1, 'Lãi góp vốn', '300000', 'lãi suất', '2022-12-01', '15:21', 2, 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `chitieucodinh`
--
ALTER TABLE `chitieucodinh`
  ADD PRIMARY KEY (`id`),
  ADD KEY `loaichitieucodinh_id` (`loaichitieucodinh_id`),
  ADD KEY `taikhoan_id` (`taikhoan_id`);

--
-- Chỉ mục cho bảng `chitieuphatsinh`
--
ALTER TABLE `chitieuphatsinh`
  ADD PRIMARY KEY (`id`),
  ADD KEY `loaichitieuphatsinh_id` (`loaichitieuphatsinh_id`),
  ADD KEY `taikhoan_id` (`taikhoan_id`);

--
-- Chỉ mục cho bảng `khoantietkiem`
--
ALTER TABLE `khoantietkiem`
  ADD PRIMARY KEY (`id`),
  ADD KEY `loaitietkiem_id` (`loaitietkiem_id`),
  ADD KEY `taikhoan_id` (`taikhoan_id`);

--
-- Chỉ mục cho bảng `loaichitieucodinh`
--
ALTER TABLE `loaichitieucodinh`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `loaichitieuphatsinh`
--
ALTER TABLE `loaichitieuphatsinh`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `loaithunhapchinh`
--
ALTER TABLE `loaithunhapchinh`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `loaithunhapphu`
--
ALTER TABLE `loaithunhapphu`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `loaitietkiem`
--
ALTER TABLE `loaitietkiem`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `thunhapchinh`
--
ALTER TABLE `thunhapchinh`
  ADD PRIMARY KEY (`id`),
  ADD KEY `loaithunhapchinh_id` (`loaithunhapchinh_id`),
  ADD KEY `taikhoan_id` (`taikhoan_id`);

--
-- Chỉ mục cho bảng `thunhapphu`
--
ALTER TABLE `thunhapphu`
  ADD PRIMARY KEY (`id`),
  ADD KEY `loaithunhapphu_id` (`loaithunhapphu_id`),
  ADD KEY `taikhoan_id` (`taikhoan_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `chitieucodinh`
--
ALTER TABLE `chitieucodinh`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `chitieuphatsinh`
--
ALTER TABLE `chitieuphatsinh`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `khoantietkiem`
--
ALTER TABLE `khoantietkiem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `loaichitieucodinh`
--
ALTER TABLE `loaichitieucodinh`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `loaichitieuphatsinh`
--
ALTER TABLE `loaichitieuphatsinh`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `loaithunhapchinh`
--
ALTER TABLE `loaithunhapchinh`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `loaithunhapphu`
--
ALTER TABLE `loaithunhapphu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `loaitietkiem`
--
ALTER TABLE `loaitietkiem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `thunhapchinh`
--
ALTER TABLE `thunhapchinh`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `thunhapphu`
--
ALTER TABLE `thunhapphu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `chitieucodinh`
--
ALTER TABLE `chitieucodinh`
  ADD CONSTRAINT `chitieucodinh_ibfk_1` FOREIGN KEY (`loaichitieucodinh_id`) REFERENCES `loaichitieucodinh` (`id`),
  ADD CONSTRAINT `chitieucodinh_ibfk_2` FOREIGN KEY (`taikhoan_id`) REFERENCES `taikhoan` (`id`);

--
-- Các ràng buộc cho bảng `chitieuphatsinh`
--
ALTER TABLE `chitieuphatsinh`
  ADD CONSTRAINT `chitieuphatsinh_ibfk_1` FOREIGN KEY (`loaichitieuphatsinh_id`) REFERENCES `loaichitieuphatsinh` (`id`),
  ADD CONSTRAINT `chitieuphatsinh_ibfk_2` FOREIGN KEY (`taikhoan_id`) REFERENCES `taikhoan` (`id`);

--
-- Các ràng buộc cho bảng `khoantietkiem`
--
ALTER TABLE `khoantietkiem`
  ADD CONSTRAINT `khoantietkiem_ibfk_1` FOREIGN KEY (`loaitietkiem_id`) REFERENCES `loaitietkiem` (`id`),
  ADD CONSTRAINT `khoantietkiem_ibfk_2` FOREIGN KEY (`taikhoan_id`) REFERENCES `taikhoan` (`id`);

--
-- Các ràng buộc cho bảng `thunhapchinh`
--
ALTER TABLE `thunhapchinh`
  ADD CONSTRAINT `thunhapchinh_ibfk_1` FOREIGN KEY (`loaithunhapchinh_id`) REFERENCES `loaithunhapchinh` (`id`),
  ADD CONSTRAINT `thunhapchinh_ibfk_2` FOREIGN KEY (`taikhoan_id`) REFERENCES `taikhoan` (`id`);

--
-- Các ràng buộc cho bảng `thunhapphu`
--
ALTER TABLE `thunhapphu`
  ADD CONSTRAINT `thunhapphu_ibfk_1` FOREIGN KEY (`loaithunhapphu_id`) REFERENCES `loaithunhapphu` (`id`),
  ADD CONSTRAINT `thunhapphu_ibfk_2` FOREIGN KEY (`taikhoan_id`) REFERENCES `taikhoan` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
