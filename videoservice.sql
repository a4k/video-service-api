-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 07, 2020 at 07:18 PM
-- Server version: 5.6.38
-- PHP Version: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `videoservice`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `title` varchar(64) NOT NULL,
  `sort` int(11) NOT NULL DEFAULT '500',
  `code` varchar(32) NOT NULL DEFAULT 'comedy'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `title`, `sort`, `code`) VALUES
(1, 'Комедии', 500, 'comedy'),
(2, 'Драмы', 500, 'dram'),
(3, 'Фантастика', 500, 'fant'),
(4, 'Ужасы', 500, 'horror');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `content` text NOT NULL,
  `film_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `sort` int(11) NOT NULL DEFAULT '500'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `content`, `film_id`, `user_id`, `sort`) VALUES
(2, 'sdf', 1, 1, 500),
(4, 'sdfsdf', 1, 1, 500);

-- --------------------------------------------------------

--
-- Table structure for table `films`
--

CREATE TABLE `films` (
  `id` int(11) NOT NULL,
  `title` varchar(64) NOT NULL,
  `country` varchar(64) NOT NULL,
  `content` text NOT NULL,
  `image` varchar(128) NOT NULL,
  `sort` int(11) NOT NULL DEFAULT '500',
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `films`
--

INSERT INTO `films` (`id`, `title`, `country`, `content`, `image`, `sort`, `category_id`) VALUES
(1, 'Мульт в кино. Выпуск №103. Некогда грустить!', 'Россия', 'Мульт в кино. Выпуск №103. Некогда грустить!', 'picture1.png', 500, 1),
(2, 'Новый Бэтмен', 'Россия', 'Новый Бэтмен Новый Бэтмен Новый Бэтмен Новый Бэтмен', 'picture2.png', 500, 3),
(3, 'Однажды... в Голливуде', 'США, Германия', 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.', 'picture3.png', 500, 1),
(4, 'Стриптизёрши', 'Россия', 'Стриптизёрши Стриптизёрши Стриптизёрши Стриптизёрши Стриптизёрши Стриптизёрши', 'picture4.png', 500, 1);

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `id` int(11) NOT NULL,
  `title` varchar(128) NOT NULL,
  `time` varchar(64) NOT NULL,
  `tv_id` int(11) NOT NULL,
  `sort` int(11) NOT NULL DEFAULT '500',
  `active` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`id`, `title`, `time`, `tv_id`, `sort`, `active`) VALUES
(1, 'Новости (с субтитрами)', '13:00', 1, 500, 1),
(2, 'Давай поженимся', '14:00', 1, 500, 0),
(3, 'Другие новости', '15:00', 1, 500, 0),
(4, 'МУЛЬТ ТВ. Сезон 4, 7 серия', '13:00', 2, 500, 1),
(5, 'ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия', '14:00', 2, 500, 0),
(6, 'БУРДАШЕВ. Сезон 1, 20 серия', '15:00', 2, 500, 0),
(7, 'ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС', '13:00', 3, 500, 1),
(8, 'ДЕНЬ. Главные темы', '14:00', 3, 500, 0),
(9, 'Главные новости', '15:00', 3, 500, 0),
(10, 'Клиент всегда мёртв', '13:00', 4, 500, 1),
(11, 'Голодные игры: Сойка-пересмешница. Часть I', '14:00', 4, 500, 0),
(12, 'Секс в большом городе', '15:00', 4, 500, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tv`
--

CREATE TABLE `tv` (
  `id` int(11) NOT NULL,
  `title` varchar(128) NOT NULL,
  `image` varchar(128) NOT NULL,
  `sort` int(11) NOT NULL DEFAULT '500'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tv`
--

INSERT INTO `tv` (`id`, `title`, `image`, `sort`) VALUES
(1, 'Первый канал', 'tv1.svg', 500),
(2, '2x2', 'tv2.svg', 500),
(3, 'РБК', 'tv3.svg', 500),
(4, 'AMEDIA PREMIUM', 'tv4.svg', 500);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `name`) VALUES
(1, 'test', 'test', 'testt');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `films`
--
ALTER TABLE `films`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tv`
--
ALTER TABLE `tv`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `films`
--
ALTER TABLE `films`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `schedule`
--
ALTER TABLE `schedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `tv`
--
ALTER TABLE `tv`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
