-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 25, 2021 at 08:51 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `artinc`
--

-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `UserID` varchar(45) NOT NULL,
  `Caption` varchar(50) NOT NULL,
  `Description` varchar(200) NOT NULL,
  `DateUp` varchar(10) NOT NULL,
  `Contact` varchar(45) NOT NULL,
  `Region` varchar(50) NOT NULL,
  `ImageID` varchar(50) NOT NULL,
  `UpUser` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `favorites`
--

INSERT INTO `favorites` (`UserID`, `Caption`, `Description`, `DateUp`, `Contact`, `Region`, `ImageID`, `UpUser`) VALUES
('aliahmed', 'ye bhi acrylics hain bro', 'kia hi describe hoyega ye?', '2/2/2020', '+923335224994', 'Pakistan', 'acrylics/2', 'faizanahmed'),
('aliahmed', 'fire in a room', 'my semester burning down before my eyes', '23/01/2021', '+923115551537', 'Pakistan', 'acrylics/4', 'deedahwarmazhar'),
('amirkhan234', 'peaceful bliss', 'A lake with the sunset at peace', '23/01/2021', '+923115551537', 'Pakistan', 'photography/4', 'deedahwarmazhar'),
('deedahwarmazhar', 'peaceful bliss', 'A lake with the sunset at peace', '23/01/2021', '+923115551537', 'Pakistan', 'photography/4', 'deedahwarmazhar'),
('faizanahmed', 'A drawing called one for the ages.', 'Time goes by like wind.', '4/4/2020', '+923115551537', 'Pakistan', 'drawing/1', 'deedahwarmazhar'),
('faizanahmed', 'A drawing is meant to channel peace.', 'Drawings are beautiful.', '3/3/2019', '+923155903128', 'Pakistan', 'drawing/3', 'faizanahmed'),
('samjackson545', 'STUNNING', 'A stunning photograph.', '1/3/2019', '+923175409027', 'Pakistan', 'photography/1', 'zainabiftikhar'),
('samjackson545', 'Beautiful!!!!!', 'A beautiful photograph.', '20/1/2020', '+923155903128', 'Pakistan', 'photography/2', 'faizanahmed'),
('samjackson545', 'Amazing!!!!', 'An Amazing Photograph!!!', '3/3/2019', '+923115551537', 'Pakistan', 'photography/3', 'deedahwarmazhar'),
('samjackson545', 'peaceful bliss', 'A lake with the sunset at peace', '23/01/2021', '+923115551537', 'Pakistan', 'photography/4', 'deedahwarmazhar'),
('zainabiftikhar', 'Acrylic hai bro', 'isko ab kia describe karun mein?', '1/1/2020', '+923115551537', 'Pakistan', 'acrylics/1', 'zainabiftikhar'),
('zainabiftikhar', 'acrylics broo', 'still acrylics broooo', '4/4/2020', '+923115551537', 'Pakistan', 'acrylics/3', 'deedahwarmazhar'),
('zainabiftikhar', 'fire in a room', 'my semester burning down before my eyes', '23/01/2021', '+923115551537', 'Pakistan', 'acrylics/4', 'deedahwarmazhar');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `UserID` varchar(50) NOT NULL,
  `Caption` varchar(100) NOT NULL,
  `Description` varchar(200) NOT NULL,
  `Category` varchar(50) NOT NULL,
  `DateUp` varchar(10) NOT NULL,
  `Contact` varchar(13) NOT NULL,
  `Region` varchar(50) NOT NULL,
  `ImageID` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`UserID`, `Caption`, `Description`, `Category`, `DateUp`, `Contact`, `Region`, `ImageID`) VALUES
('zainabiftikhar', 'Acrylic hai bro', 'isko ab kia describe karun mein?', 'acrylics', '1/1/2020', '+923115551537', 'Pakistan', 'acrylics/1'),
('faizanahmed', 'ye bhi acrylics hain bro', 'kia hi describe hoyega ye?', 'acrylics', '2/2/2020', '+923335224994', 'Pakistan', 'acrylics/2'),
('deedahwarmazhar', 'acrylics broo', 'still acrylics broooo', 'acrylics', '4/4/2020', '+923115551537', 'Pakistan', 'acrylics/3'),
('deedahwarmazhar', 'fire in a room', 'my semester burning down before my eyes', 'acrylics', '23/01/2021', '+923115551537', 'Pakistan', 'acrylics/4'),
('amirkhan234', 'Grace is underrated.', 'The painting of a graceful fox done with acrylics.', 'acrylics', '24/01/2021', '+923331234567', 'Pakistan', 'acrylics/5'),
('zainabiftikhar', 'Books are a source of inspiration to all.', 'All kinds of books are a source of joy', 'books', '1/3/2019', '+923175409027', 'Pakistan', 'books/1'),
('faizanahmed', 'A book about the indefinite mysteries of life.', 'All Books are for sale.', 'books', '20/1/2020', '+923155903128', 'Pakistan', 'books/2'),
('zainabiftikhar', 'Books are a source of inspiration to all.', 'All kinds of books are a source of joy', 'books', '1/3/2019', '+923175409027', 'Pakistan', 'books/3'),
('faizanahmed', 'Comic Book', 'Vroom Vrooom', 'comics', '25/01/2021', '+923155903128', 'Pakistan', 'comics/1'),
('deedahwarmazhar', 'A drawing called one for the ages.', 'Time goes by like wind.', 'drawing', '4/4/2020', '+923115551537', 'Pakistan', 'drawing/1'),
('zainabiftikhar', 'A drawing of something amazing', 'Another Beautiful drawing by yours truly.', 'drawing', '20/1/2020', '+923175409027', 'Pakistan', 'drawing/2'),
('faizanahmed', 'A drawing is meant to channel peace.', 'Drawings are beautiful.', 'drawing', '3/3/2019', '+923155903128', 'Pakistan', 'drawing/3'),
('zainabiftikhar', 'smol cat in hood', 'Cat waering a hood and being cute art', 'drawing', '23/01/2021', '+923454745648', 'Pakistan', 'drawing/4'),
('zainabiftikhar', 'STUNNING', 'A stunning photograph.', 'photography', '1/3/2019', '+923175409027', 'Pakistan', 'photography/1'),
('faizanahmed', 'Beautiful!!!!!', 'A beautiful photograph.', 'photography', '20/1/2020', '+923155903128', 'Pakistan', 'photography/2'),
('deedahwarmazhar', 'Amazing!!!!', 'An Amazing Photograph!!!', 'photography', '3/3/2019', '+923115551537', 'Pakistan', 'photography/3'),
('deedahwarmazhar', 'peaceful bliss', 'A lake with the sunset at peace', 'photography', '23/01/2021', '+923115551537', 'Pakistan', 'photography/4'),
('samjackson545', 'Coastal Senseations', 'Captured from Canon 660E Camera at Brentford Beach, England', 'photography', '25/01/2021', '+441238409679', 'United Kingdom', 'photography/5'),
('ucantseeme', 'me', 'still me', 'photography', '25/01/2021', '+214339853479', 'NArnia', 'photography/6'),
('deedahwarmazhar', 'Miracles!!', 'A poem by Edward Samuel Jr', 'poetry', '25/01/2021', '+923115551537', 'Pakistan', 'poetry/1'),
('aliahmed', 'Pottery', 'Not every potter is a harry', 'pottery', '24/01/2021', '+923335224994', 'Pakistan', 'pottery/4');

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE `profiles` (
  `UserID` varchar(50) NOT NULL,
  `Description` varchar(100) NOT NULL,
  `Contact` varchar(13) NOT NULL,
  `Country` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`UserID`, `Description`, `Contact`, `Country`) VALUES
('aliahmed', 'Hopeless Boy in a hopeful world', '+924735898976', 'Pakistan'),
('amirkhan234', 'An ever changing personality.', '+900134524356', 'Turkey'),
('deedahwarmazhar', 'An art lover trying to also be a software engineer                          ', '+923115551537', 'Pakistan'),
('faizanahmed', 'KFC                     ', '090078601', 'Pulao'),
('samjackson545', 'A photographer who loves arts, crafts and appreciates talent.                          ', '+441239769317', 'United Kingdom'),
('ucantseeme', 'YOU CANT SEEE MEEEEEEEE HEHEHEHEHEHHEHEHEHEHEHE                          ', '+423429359835', 'Narnia'),
('zainabiftikhar', 'An art loving to-be-engineer                          ', '+923175409027', 'Pakistan');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `Firstname` varchar(45) NOT NULL,
  `Lastname` varchar(45) NOT NULL,
  `Username` varchar(45) NOT NULL,
  `Password` varchar(45) NOT NULL,
  `Email` varchar(320) NOT NULL,
  `DOB` varchar(11) NOT NULL,
  `Gender` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`Firstname`, `Lastname`, `Username`, `Password`, `Email`, `DOB`, `Gender`) VALUES
('Ali', 'Ahmed', 'aliahmed', '12345', 'aliahmed@gmail.com', '03/01/2003', 'Male'),
('Amir', 'Khan', 'amirkhan234', 'abcde', 'amirkhan@gmail.com', '02/01/2002', 'Male'),
('Deedahwar ', 'Mazhar', 'deedahwarmazhar', 'blegh', 'deedahwarmazhar@gmail.com', '27/11/1999', 'Male'),
('Faizan', 'Ahmed', 'faizanahmed', '12345', 'faizanahmed@gmail.com', '31/01/2000', 'Male'),
('Samuel', 'Jackson', 'samjackson545', 'qwerty', 'samjackson@gmail.com', '12/08/1996', 'Male'),
('John', 'Cena', 'ucantseeme', 'abcde', 'johncena101@gmail.com', '19/07/2000', 'Male'),
('Zainab', 'Iftikhar', 'zainabiftikhar', '12345', 'zainabiftikhar@gmail.com', '04/12/2000', 'Female');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD UNIQUE KEY `composite` (`UserID`,`ImageID`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`ImageID`);

--
-- Indexes for table `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`UserID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Username`),
  ADD UNIQUE KEY `email_unique` (`Email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
