-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2023 at 01:22 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `serverena`
--

-- --------------------------------------------------------

--
-- Table structure for table `assets`
--

CREATE TABLE `assets` (
  `id` varchar(191) NOT NULL,
  `title` varchar(100) NOT NULL,
  `desc` varchar(255) NOT NULL,
  `category_id` varchar(191) NOT NULL,
  `style_id` varchar(191) NOT NULL,
  `theme_id` varchar(191) NOT NULL,
  `price` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `image` varchar(191) NOT NULL,
  `url` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `assets`
--

INSERT INTO `assets` (`id`, `title`, `desc`, `category_id`, `style_id`, `theme_id`, `price`, `createdAt`, `image`, `url`) VALUES
('0461493c-f3e0-431b-abf6-cb1f6396eea6', 'Hahhaa', 'NONONO', 'c025359d-37ea-420f-b31a-f618082ce4b5', '3d8140dc-538e-457e-b58d-b5725ac9a951', '2b828476-738c-4a36-b381-bca30cee6d72', 23, '2023-10-16 01:51:04.310', '5ada4ef1341dc39b02a34a88ea0a4af1.png', 'http://localhost:3002/uploads/5ada4ef1341dc39b02a34a88ea0a4af1.png'),
('053a2171-db4d-4871-8c52-8d149911e714', 'Folderback', 'ho', '25cf4a21-509c-40cd-99c6-967a073d1fba', '61f5ddff-22de-4b95-bd35-028870735af1', '2b828476-738c-4a36-b381-bca30cee6d72', 11, '2023-10-16 02:52:10.937', 'c26be60cfd1ba40772b5ac48b95ab19b.png', 'http://localhost:3002/uploads/c26be60cfd1ba40772b5ac48b95ab19b.png'),
('f24ac0ac-ac10-46ef-afdb-4424bc93aa36', 'Backarrow', 'Backarrow', '25cf4a21-509c-40cd-99c6-967a073d1fba', '61f5ddff-22de-4b95-bd35-028870735af1', '2b828476-738c-4a36-b381-bca30cee6d72', 12, '2023-10-16 02:47:41.247', 'decc1476084564d1ac48c586606433fe.png', 'http://localhost:3002/uploads/decc1476084564d1ac48c586606433fe.png');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` varchar(191) NOT NULL,
  `title` varchar(100) NOT NULL,
  `desc` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `title`, `desc`) VALUES
('25cf4a21-509c-40cd-99c6-967a073d1fba', 'Icons', '-'),
('c025359d-37ea-420f-b31a-f618082ce4b5', 'Illustrations', '-');

-- --------------------------------------------------------

--
-- Table structure for table `styles`
--

CREATE TABLE `styles` (
  `id` varchar(191) NOT NULL,
  `title` varchar(100) NOT NULL,
  `desc` varchar(100) DEFAULT NULL,
  `category_id` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `styles`
--

INSERT INTO `styles` (`id`, `title`, `desc`, `category_id`) VALUES
('3d8140dc-538e-457e-b58d-b5725ac9a951', 'Handmade', '-', 'c025359d-37ea-420f-b31a-f618082ce4b5'),
('4f8fcef1-195f-4a32-b71e-14c7609ab1e5', 'Gradient', '-', 'c025359d-37ea-420f-b31a-f618082ce4b5'),
('61f5ddff-22de-4b95-bd35-028870735af1', 'Indoor', '-', '25cf4a21-509c-40cd-99c6-967a073d1fba'),
('91459fa5-0cdb-4e58-a068-46e6fc43c481', 'Outline', '-', 'c025359d-37ea-420f-b31a-f618082ce4b5');

-- --------------------------------------------------------

--
-- Table structure for table `themes`
--

CREATE TABLE `themes` (
  `id` varchar(191) NOT NULL,
  `title` varchar(100) NOT NULL,
  `desc` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `themes`
--

INSERT INTO `themes` (`id`, `title`, `desc`) VALUES
('03b5683d-c966-44bb-bcf9-8e3438d3c3e1', 'Outdoor', '-'),
('2b828476-738c-4a36-b381-bca30cee6d72', 'Indoor', '-');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(191) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('79f994e7-8d70-4a7d-8523-83a145438ac2', '6ab106b907d6cf792607783bc459da5bd111d3876e7f151889840b71e389a33f', '2023-10-09 03:43:07.745', '20231009034238_ja', NULL, NULL, '2023-10-09 03:43:06.780', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assets`
--
ALTER TABLE `assets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `assets_category_id_fkey` (`category_id`),
  ADD KEY `assets_style_id_fkey` (`style_id`),
  ADD KEY `assets_theme_id_fkey` (`theme_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `styles`
--
ALTER TABLE `styles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `styles_category_id_fkey` (`category_id`);

--
-- Indexes for table `themes`
--
ALTER TABLE `themes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `assets`
--
ALTER TABLE `assets`
  ADD CONSTRAINT `assets_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `assets_style_id_fkey` FOREIGN KEY (`style_id`) REFERENCES `styles` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `assets_theme_id_fkey` FOREIGN KEY (`theme_id`) REFERENCES `themes` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `styles`
--
ALTER TABLE `styles`
  ADD CONSTRAINT `styles_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
