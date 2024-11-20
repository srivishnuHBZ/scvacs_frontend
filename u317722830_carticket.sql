-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 19, 2022 at 09:17 AM
-- Server version: 10.5.12-MariaDB-cll-lve
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u317722830_carticket`
--

-- --------------------------------------------------------

--
-- Table structure for table `parking_lots`
--

CREATE TABLE `parking_lots` (
  `Parking_Lot_Key` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Num_Spots` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Name` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Num_Used` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `parking_lots`
--

INSERT INTO `parking_lots` (`Parking_Lot_Key`, `Num_Spots`, `Name`, `Num_Used`) VALUES
('1', '50', 'Dewan', '0');

-- --------------------------------------------------------

--
-- Table structure for table `valid_passes`
--

CREATE TABLE `valid_passes` (
  `Pass_Number` int(11) NOT NULL,
  `Pass_Type` varchar(32) DEFAULT NULL,
  `License_Plate_Number` varchar(45) DEFAULT NULL,
  `Pass_Year` date DEFAULT NULL,
  `Owner_Name` varchar(45) DEFAULT NULL,
  `Student_ID` varchar(45) DEFAULT NULL,
  `Address_No` varchar(45) DEFAULT NULL,
  `Phone_No` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `valid_passes`
--

INSERT INTO `valid_passes` (`Pass_Number`, `Pass_Type`, `License_Plate_Number`, `Pass_Year`, `Owner_Name`, `Student_ID`, `Address_No`, `Phone_No`) VALUES
(1, 'Normal', 'SKX7205Z', '0000-00-00', 'Muhammad', '321', '123', '11222'),
(2, 'Normal', 'BML5758', '2022-01-01', 'Rizal', '23', '24', '321'),
(20, 'normal', 'PFQ5217', '1970-01-01', 'Hannan', '41940214121', 'BLOCK B 43', '0129578642'),
(22, 'normal', 'PC3938', '1970-01-01', 'Dinesh', '56556abc', 'Residence', '98762233995'),
(38, 'normal', 'KOP123', '1970-01-01', 'Hazwani', '31091021', 'MASHYUR SATU', '03659944'),
(39, 'normal', 'WPB8899', '1970-01-01', 'Rao', '9595962', 'Sri Muda', '992191'),
(41, 'normal', 'JPE7856', '1970-01-01', 'Unisel', 'FEQF', 'QFWE', '143'),
(42, 'normal', 'CCG8724', '1970-01-01', 'Divi', '0125988', 'Bestari Jaya', '012956874'),
(99, 'normal', 'KFJ5928', '2022-01-01', 'Vishnu', '4192006201D', 'House', '0105631605'),
(103, 'normal', 'PKV9595', '1970-01-01', 'Kamsiah', '5698745', 'Subang', '0165848662'),
(105, 'normal', 'WRW5797', '1970-01-01', 'Navin', '8055', 'BJ', '0123652444');

-- --------------------------------------------------------

--
-- Table structure for table `vehicle`
--

CREATE TABLE `vehicle` (
  `License_Plate_Number` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Valid_Pass` int(11) DEFAULT NULL,
  `License_Plate_State` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Color` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Make` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Model` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Confidence` float DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `vehicle`
--

INSERT INTO `vehicle` (`License_Plate_Number`, `Valid_Pass`, `License_Plate_State`, `Color`, `Make`, `Model`, `Confidence`, `id`) VALUES
('CCG8724', NULL, 'MY', 'NULL', 'NULL', 'NULL', 89.2, 98),
('KN232', 104, 'MY', 'NULL', 'NULL', 'NULL', 89.7, 99),
('WE68', NULL, 'MY', 'NULL', 'NULL', 'NULL', 65, 100),
('PFQ5217', NULL, 'MY', 'NULL', 'NULL', 'NULL', 90.1, 101),
('SAA8967Y', NULL, 'MY', 'NULL', 'NULL', 'NULL', 90, 102),
('SDN7484U', NULL, 'MY', 'NULL', 'NULL', 'NULL', 89.5, 103),
('FIV', NULL, 'MY', 'NULL', 'NULL', 'NULL', 79.7, 104),
('WRW5797', NULL, 'MY', 'NULL', 'NULL', 'NULL', 90.4, 105),
('AVW8899', NULL, 'MY', 'NULL', 'NULL', 'NULL', 90.3, 106);

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_history`
--

CREATE TABLE `vehicle_history` (
  `Plate_Number` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Lot_Number` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Entry` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Stamp` timestamp NULL DEFAULT NULL,
  `id` int(11) NOT NULL,
  `Pass_Number` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `vehicle_history`
--

INSERT INTO `vehicle_history` (`Plate_Number`, `Lot_Number`, `Entry`, `Stamp`, `id`, `Pass_Number`) VALUES
('CCG8724', '1', '0', '2022-07-19 11:14:36', 206, NULL),
('KN232', '1', '0', '2022-07-19 11:14:58', 207, NULL),
('WE68', '1', '0', '2022-07-19 11:31:04', 208, NULL),
('PFQ5217', '1', '0', '2022-07-19 11:31:45', 209, NULL),
('SAA8967Y', '1', '0', '2022-07-19 11:32:05', 210, NULL),
('SDN7484U', '1', '0', '2022-07-19 11:36:42', 211, NULL),
('FIV', '1', '0', '2022-07-19 11:37:49', 212, NULL),
('WRW5797', '1', '0', '2022-07-19 11:38:06', 213, NULL),
('AVW8899', '1', '0', '2022-07-19 11:39:11', 214, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `valid_passes`
--
ALTER TABLE `valid_passes`
  ADD PRIMARY KEY (`Pass_Number`);

--
-- Indexes for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vehicle_history`
--
ALTER TABLE `vehicle_history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Pass_Number_idx` (`Pass_Number`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `valid_passes`
--
ALTER TABLE `valid_passes`
  MODIFY `Pass_Number` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

--
-- AUTO_INCREMENT for table `vehicle`
--
ALTER TABLE `vehicle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;

--
-- AUTO_INCREMENT for table `vehicle_history`
--
ALTER TABLE `vehicle_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=215;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `vehicle_history`
--
ALTER TABLE `vehicle_history`
  ADD CONSTRAINT `Pass_Number` FOREIGN KEY (`Pass_Number`) REFERENCES `valid_passes` (`Pass_Number`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
