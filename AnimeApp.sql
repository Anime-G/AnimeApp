-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 05, 2024 at 01:43 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `AnimeApp`
--

-- --------------------------------------------------------

--
-- Table structure for table `Adds`
--

CREATE TABLE `Adds` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  `Description` varchar(500) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Adds`
--

INSERT INTO `Adds` (`id`, `title`, `pic`, `Description`, `createdAt`, `updatedAt`) VALUES
(1, 'tokyo ghoul', 'https://images7.alphacoders.com/912/912555.jpg', 'Ken Kaneki transforms into a half-ghoul, straddling two worlds of humans and flesh-eating ghouls. Amidst moral dilemmas and societal rejection, he seeks acceptance while navigating a perilous existence. As conflicts between ghouls and humans intensify, Kaneki confronts his inner demons and battles for survival in a dark and unforgiving world.', '2024-02-05 10:26:53', '2024-02-05 10:26:53'),
(2, 'naruto shippuden', 'https://i.pinimg.com/564x/5f/e1/66/5fe1661b6a16eb735df5d6348d4287a0.jpg', 'Naruto Shippuden follows Naruto Uzumaki\'s journey as he returns to the Hidden Leaf Village after training for two years. Faced with the looming threat of the Akatsuki organization, Naruto seeks to retrieve his friend Sasuke, who has turned to darkness. Alongside his allies, Naruto confronts powerful enemies, delves into his past, and strives to protect his village while wrestling with the complexities of friendship, loss, and the pursuit of peace.', '2024-02-05 10:35:34', '2024-02-05 10:35:34'),
(3, 'dragon ball', 'https://i.pinimg.com/564x/05/42/a4/0542a4f210b38840fd20019ad1b88a55.jpg', 'Dragon Ball follows the adventures of Goku, a pure-hearted and adventurous boy with a monkey tail, as he embarks on a quest to find the mystical Dragon Balls. Along the way, he encounters allies like Bulma, Krillin, and Master Roshi, and faces off against villains such as Emperor Pilaf and the Red Ribbon Army. Through martial arts tournaments and epic battles, Goku\'s journey unfolds, marked by friendship, discovery, and the pursuit of strength and justice.', '2024-02-05 11:51:19', '2024-02-05 11:51:19'),
(4, 'one piece', 'https://i.pinimg.com/564x/7e/53/5d/7e535de95a28f8566df01b4ea80156e9.jpg', 'One Piece follows the epic journey of Monkey D. Luffy and his diverse crew, the Straw Hat Pirates, as they search for the legendary treasure known as One Piece. Sailing the treacherous Grand Line, they encounter formidable foes, forge alliances, and unravel mysteries. Luffy\'s dream of becoming the Pirate King drives their adventures, as they navigate through perilous seas filled with both danger and wonder, bound together by friendship, loyalty, and shared dreams.', '2024-02-05 11:53:20', '2024-02-05 11:53:20'),
(6, 'devilman crybaby', 'https://i.pinimg.com/564x/73/82/e4/7382e441ef3d238d895eae27997a3b5e.jpg', '\"Devilman Crybaby\" follows Akira Fudo, who merges with a demon to become Devilman. As the world faces a demonic invasion, Akira grapples with his newfound powers and the responsibilities they entail. Amidst moral dilemmas and societal chaos, Akira fights to protect humanity while navigating his own identity and relationships. The series explores themes of power, morality, and the blurred lines between good and evil.', '2024-02-05 12:02:33', '2024-02-05 12:02:33'),
(7, 'bluelock', 'https://images7.alphacoders.com/131/1319752.jpeg', 'In \"Blue Lock,\" elite strikers are assembled by the mysterious Blue Lock program to revolutionize the sport of soccer. Focused on fostering the ultimate striker, the program pits talented players against each other in a cutthroat environment where only the strongest survive. As tensions rise and egos clash, the players must navigate intense training, fierce competition, and personal growth to achieve their dreams of soccer greatness.', '2024-02-05 12:08:55', '2024-02-05 12:08:55'),
(8, 'attack on titan', 'https://i.pinimg.com/564x/ad/6a/cc/ad6acc77523a4aedd1b0d73aa7dfd293.jpg', '\"Attack on Titan\" (Shingeki no Kyojin) is a gripping anime set in a world where humanity is on the brink of extinction due to giant humanoid creatures called Titans. The story follows Eren Yeager, Mikasa Ackerman, and Armin Arlert as they join the military to fight the Titans and uncover the truth about their existence. As the narrative unfolds, secrets about the Titans, the government, and the history of humanity are revealed, leading to intense battles and moral dilemmas.', '2024-02-05 12:12:54', '2024-02-05 12:12:54'),
(16, 'hellsing', 'https://i.pinimg.com/originals/08/f3/c6/08f3c69a2c6787689f5ee1717748d0f3.gif', '\"Hellsing\" follows the Hellsing Organization, led by the enigmatic Sir Integra Hellsing, as they combat supernatural threats, particularly vampires, in England. The organization\'s most powerful weapon is Alucard, a powerful vampire who serves as their trump card against other undead creatures. With his newly turned protege, Seras Victoria, Alucard battles a variety of enemies, including rival vampire factions and secret societies, in a dark and atmospheric world filled with intrigue and horror.', '2024-02-05 12:35:19', '2024-02-05 12:35:19'),
(17, 'beserk', 'https://i.pinimg.com/originals/cb/9d/d2/cb9dd263099adac75b965e94d15b06b4.gif', '\"Berserk\" follows Guts, a tough warrior seeking revenge against Griffith, his former ally turned enemy. In a dark medieval world, Guts battles demons and human foes, facing his own inner struggles along the way. The story explores themes of betrayal, ambition, and the human spirit in a gritty and visually striking tale of dark fantasy.', '2024-02-05 12:39:16', '2024-02-05 12:39:16');

-- --------------------------------------------------------

--
-- Table structure for table `Animes`
--

CREATE TABLE `Animes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `RateId` int(11) DEFAULT NULL,
  `TypeId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `AuthorAnimes`
--

CREATE TABLE `AuthorAnimes` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `AnimeId` int(11) DEFAULT NULL,
  `AuthorId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Authors`
--

CREATE TABLE `Authors` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Authors`
--

INSERT INTO `Authors` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(6, 'akira toriyama', '2024-01-30 06:20:03', '2024-01-30 06:20:03'),
(7, 'masashi kishimoto', '2024-01-30 06:22:27', '2024-01-30 06:22:27'),
(8, 'tite kubo', '2024-01-30 06:23:04', '2024-01-30 06:23:04'),
(9, 'tsugumi ohba', '2024-01-30 06:24:42', '2024-01-30 06:24:42');

-- --------------------------------------------------------

--
-- Table structure for table `Episodes`
--

CREATE TABLE `Episodes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `Epno` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `AnimeId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Generes`
--

CREATE TABLE `Generes` (
  `id` int(11) NOT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Generes`
--

INSERT INTO `Generes` (`id`, `Title`, `createdAt`, `updatedAt`) VALUES
(1, 'action', '2024-02-05 07:35:55', '2024-02-05 07:35:55'),
(2, 'romance', '2024-02-05 07:36:04', '2024-02-05 07:36:04'),
(3, 'sports', '2024-02-05 07:36:11', '2024-02-05 07:36:11'),
(4, 'fantasy', '2024-02-05 07:36:18', '2024-02-05 07:36:18'),
(5, 'horror', '2024-02-05 07:36:24', '2024-02-05 07:36:24'),
(6, 'mystery', '2024-02-05 07:36:30', '2024-02-05 07:36:30'),
(7, 'comedy', '2024-02-05 07:36:39', '2024-02-05 07:36:39'),
(8, 'drama', '2024-02-05 07:36:46', '2024-02-05 07:36:46'),
(9, 'science fiction', '2024-02-05 07:36:57', '2024-02-05 07:36:57'),
(10, 'adventure', '2024-02-05 07:37:13', '2024-02-05 07:37:13'),
(11, 'supernatural', '2024-02-05 07:37:18', '2024-02-05 07:37:18'),
(12, 'psychological', '2024-02-05 07:37:23', '2024-02-05 07:37:23'),
(13, 'ecchi', '2024-02-05 07:37:41', '2024-02-05 07:37:41'),
(14, 'harem', '2024-02-05 07:37:58', '2024-02-05 07:37:58'),
(15, 'historical', '2024-02-05 07:38:04', '2024-02-05 07:38:04'),
(16, 'post-apocalyptic', '2024-02-05 07:38:15', '2024-02-05 07:38:15');

-- --------------------------------------------------------

--
-- Table structure for table `GeneresAnimes`
--

CREATE TABLE `GeneresAnimes` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `AnimeId` int(11) DEFAULT NULL,
  `GenereId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Rates`
--

CREATE TABLE `Rates` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Rates`
--

INSERT INTO `Rates` (`id`, `title`, `Description`, `createdAt`, `updatedAt`) VALUES
(1, 'g (general audiences)', NULL, '2024-02-05 07:25:56', '2024-02-05 07:25:56'),
(2, 'pg (parental guidance suggested)', NULL, '2024-02-05 07:26:05', '2024-02-05 07:26:05'),
(3, 'pg-13 (parental guidance strongly advised)', NULL, '2024-02-05 07:26:23', '2024-02-05 07:26:32'),
(4, 'r (restricted)', NULL, '2024-02-05 07:26:41', '2024-02-05 07:26:41'),
(5, 'nc-17 (no one 17 and under admitted)', NULL, '2024-02-05 07:26:58', '2024-02-05 07:26:58');

-- --------------------------------------------------------

--
-- Table structure for table `StudioAnimes`
--

CREATE TABLE `StudioAnimes` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `AnimeId` int(11) DEFAULT NULL,
  `StudioId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Studios`
--

CREATE TABLE `Studios` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Studios`
--

INSERT INTO `Studios` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(2, 'toei animation', '2024-02-05 06:23:17', '2024-02-05 06:23:17'),
(3, 'wit studio', '2024-02-05 06:23:39', '2024-02-05 06:23:39'),
(4, 'madhouse', '2024-02-05 06:23:49', '2024-02-05 06:23:49'),
(5, 'production i.g', '2024-02-05 06:24:18', '2024-02-05 06:24:22'),
(6, 'mappa', '2024-02-05 06:24:38', '2024-02-05 06:24:38'),
(7, 'studio pierrot', '2024-02-05 06:24:51', '2024-02-05 06:24:51'),
(8, 'white fox', '2024-02-05 06:25:10', '2024-02-05 06:25:10');

-- --------------------------------------------------------

--
-- Table structure for table `Types`
--

CREATE TABLE `Types` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Types`
--

INSERT INTO `Types` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'tv series', '2024-02-05 07:15:32', '2024-02-05 07:15:32'),
(2, 'movies', '2024-02-05 07:15:41', '2024-02-05 07:15:41'),
(3, 'ovas (original video animations)', '2024-02-05 07:15:53', '2024-02-05 07:15:53'),
(4, 'ona (original net animation)', '2024-02-05 07:16:02', '2024-02-05 07:16:02');

-- --------------------------------------------------------

--
-- Table structure for table `Userpics`
--

CREATE TABLE `Userpics` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `emailid` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `name`, `emailid`, `password`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'goku', 'goku@gmail.com', '$2b$10$Jsuyl7st20yse6EtwqU72eDwyHBKzzPeRsxYaDbaMFFc39tAn29QC', 1, '2024-01-29 10:40:16', '2024-01-29 10:40:16'),
(2, 'vegeta', 'vegeta@gmail.com', '$2b$10$NEsa./y4Y7/MYph6W49qSOgkqKtUtMT.klJh2kNe4VDqOpD4bqBTW', 0, '2024-01-29 10:42:59', '2024-01-29 10:42:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Adds`
--
ALTER TABLE `Adds`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Description` (`Description`);

--
-- Indexes for table `Animes`
--
ALTER TABLE `Animes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `description` (`description`),
  ADD KEY `RateId` (`RateId`),
  ADD KEY `TypeId` (`TypeId`);

--
-- Indexes for table `AuthorAnimes`
--
ALTER TABLE `AuthorAnimes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `AnimeId` (`AnimeId`),
  ADD KEY `AuthorId` (`AuthorId`);

--
-- Indexes for table `Authors`
--
ALTER TABLE `Authors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Episodes`
--
ALTER TABLE `Episodes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Epno` (`Epno`),
  ADD KEY `AnimeId` (`AnimeId`);

--
-- Indexes for table `Generes`
--
ALTER TABLE `Generes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `GeneresAnimes`
--
ALTER TABLE `GeneresAnimes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `AnimeId` (`AnimeId`),
  ADD KEY `GenereId` (`GenereId`);

--
-- Indexes for table `Rates`
--
ALTER TABLE `Rates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `StudioAnimes`
--
ALTER TABLE `StudioAnimes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `AnimeId` (`AnimeId`),
  ADD KEY `StudioId` (`StudioId`);

--
-- Indexes for table `Studios`
--
ALTER TABLE `Studios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Types`
--
ALTER TABLE `Types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Userpics`
--
ALTER TABLE `Userpics`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `emailid` (`emailid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Adds`
--
ALTER TABLE `Adds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `Animes`
--
ALTER TABLE `Animes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `AuthorAnimes`
--
ALTER TABLE `AuthorAnimes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Authors`
--
ALTER TABLE `Authors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `Episodes`
--
ALTER TABLE `Episodes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Generes`
--
ALTER TABLE `Generes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `GeneresAnimes`
--
ALTER TABLE `GeneresAnimes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Rates`
--
ALTER TABLE `Rates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `StudioAnimes`
--
ALTER TABLE `StudioAnimes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Studios`
--
ALTER TABLE `Studios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `Types`
--
ALTER TABLE `Types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Userpics`
--
ALTER TABLE `Userpics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Animes`
--
ALTER TABLE `Animes`
  ADD CONSTRAINT `Animes_ibfk_1` FOREIGN KEY (`RateId`) REFERENCES `Rates` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Animes_ibfk_2` FOREIGN KEY (`TypeId`) REFERENCES `Types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `AuthorAnimes`
--
ALTER TABLE `AuthorAnimes`
  ADD CONSTRAINT `AuthorAnimes_ibfk_1` FOREIGN KEY (`AnimeId`) REFERENCES `Animes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `AuthorAnimes_ibfk_2` FOREIGN KEY (`AuthorId`) REFERENCES `Authors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Episodes`
--
ALTER TABLE `Episodes`
  ADD CONSTRAINT `Episodes_ibfk_1` FOREIGN KEY (`AnimeId`) REFERENCES `Animes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `GeneresAnimes`
--
ALTER TABLE `GeneresAnimes`
  ADD CONSTRAINT `GeneresAnimes_ibfk_1` FOREIGN KEY (`AnimeId`) REFERENCES `Animes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `GeneresAnimes_ibfk_2` FOREIGN KEY (`GenereId`) REFERENCES `Generes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `StudioAnimes`
--
ALTER TABLE `StudioAnimes`
  ADD CONSTRAINT `StudioAnimes_ibfk_1` FOREIGN KEY (`AnimeId`) REFERENCES `Animes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `StudioAnimes_ibfk_2` FOREIGN KEY (`StudioId`) REFERENCES `Studios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
