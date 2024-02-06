-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 06, 2024 at 06:53 PM
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
-- Database: `animeapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `adds`
--

CREATE TABLE `adds` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  `Description` varchar(500) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `adds`
--

INSERT INTO `adds` (`id`, `title`, `pic`, `Description`, `createdAt`, `updatedAt`) VALUES
(1, 'tokyo ghoul', 'https://i.pinimg.com/originals/33/b2/22/33b2225ce2b03ac98c8a5fa1af01d6cc.gif', 'Ken Kaneki transforms into a half-ghoul, straddling two worlds of humans and flesh-eating ghouls. Amidst moral dilemmas and societal rejection, he seeks acceptance while navigating a perilous existence. As conflicts between ghouls and humans intensify, Kaneki confronts his inner demons and battles for survival in a dark and unforgiving world.', '2024-02-05 10:26:53', '2024-02-06 06:38:05'),
(2, 'naruto shippuden', 'https://i.pinimg.com/originals/1a/5b/85/1a5b85c80a03fc4ba6b0847a6553e283.gif', 'Naruto Shippuden follows Naruto Uzumaki\'s journey as he returns to the Hidden Leaf Village after training for two years. Faced with the looming threat of the Akatsuki organization, Naruto seeks to retrieve his friend Sasuke, who has turned to darkness. Alongside his allies, Naruto confronts powerful enemies, delves into his past, and strives to protect his village while wrestling with the complexities of friendship, loss, and the pursuit of peace.', '2024-02-05 10:35:34', '2024-02-06 06:35:41'),
(3, 'dragon ball', 'https://i.pinimg.com/originals/d2/b7/09/d2b7095eb27bcd3efaf159be8cf43456.gif', 'Dragon Ball follows the adventures of Goku, a pure-hearted and adventurous boy with a monkey tail, as he embarks on a quest to find the mystical Dragon Balls. Along the way, he encounters allies like Bulma, Krillin, and Master Roshi, and faces off against villains such as Emperor Pilaf and the Red Ribbon Army. Through martial arts tournaments and epic battles, Goku\'s journey unfolds, marked by friendship, discovery, and the pursuit of strength and justice.', '2024-02-05 11:51:19', '2024-02-06 06:27:08'),
(4, 'one piece', 'https://i.pinimg.com/originals/02/6f/1d/026f1d0117d830a54b895816748f49e0.gif', 'One Piece follows the epic journey of Monkey D. Luffy and his diverse crew, the Straw Hat Pirates, as they search for the legendary treasure known as One Piece. Sailing the treacherous Grand Line, they encounter formidable foes, forge alliances, and unravel mysteries. Luffy\'s dream of becoming the Pirate King drives their adventures, as they navigate through perilous seas filled with both danger and wonder, bound together by friendship, loyalty, and shared dreams.', '2024-02-05 11:53:20', '2024-02-06 06:34:05'),
(6, 'devilman crybaby', 'https://i.pinimg.com/564x/73/82/e4/7382e441ef3d238d895eae27997a3b5e.jpg', '\"Devilman Crybaby\" follows Akira Fudo, who merges with a demon to become Devilman. As the world faces a demonic invasion, Akira grapples with his newfound powers and the responsibilities they entail. Amidst moral dilemmas and societal chaos, Akira fights to protect humanity while navigating his own identity and relationships. The series explores themes of power, morality, and the blurred lines between good and evil.', '2024-02-05 12:02:33', '2024-02-05 12:02:33'),
(7, 'bluelock', 'https://i.pinimg.com/originals/d8/e3/72/d8e3729a08d0b804f378d492709612f5.gif', 'In \"Blue Lock,\" elite strikers are assembled by the mysterious Blue Lock program to revolutionize the sport of soccer. Focused on fostering the ultimate striker, the program pits talented players against each other in a cutthroat environment where only the strongest survive. As tensions rise and egos clash, the players must navigate intense training, fierce competition, and personal growth to achieve their dreams of soccer greatness.', '2024-02-05 12:08:55', '2024-02-06 06:24:33'),
(8, 'attack on titan', 'https://i.pinimg.com/originals/4c/65/7a/4c657af69ab0cbf549f12842e8af106d.gif', '\"Attack on Titan\" (Shingeki no Kyojin) is a gripping anime set in a world where humanity is on the brink of extinction due to giant humanoid creatures called Titans. The story follows Eren Yeager, Mikasa Ackerman, and Armin Arlert as they join the military to fight the Titans and uncover the truth about their existence. As the narrative unfolds, secrets about the Titans, the government, and the history of humanity are revealed, leading to intense battles and moral dilemmas.', '2024-02-05 12:12:54', '2024-02-06 06:16:16'),
(16, 'hellsing', 'https://i.pinimg.com/originals/08/f3/c6/08f3c69a2c6787689f5ee1717748d0f3.gif', '\"Hellsing\" follows the Hellsing Organization, led by the enigmatic Sir Integra Hellsing, as they combat supernatural threats, particularly vampires, in England. The organization\'s most powerful weapon is Alucard, a powerful vampire who serves as their trump card against other undead creatures. With his newly turned protege, Seras Victoria, Alucard battles a variety of enemies, including rival vampire factions and secret societies, in a dark and atmospheric world filled with intrigue and horror.', '2024-02-05 12:35:19', '2024-02-05 12:35:19'),
(17, 'beserk', 'https://i.pinimg.com/originals/cb/9d/d2/cb9dd263099adac75b965e94d15b06b4.gif', '\"Berserk\" follows Guts, a tough warrior seeking revenge against Griffith, his former ally turned enemy. In a dark medieval world, Guts battles demons and human foes, facing his own inner struggles along the way. The story explores themes of betrayal, ambition, and the human spirit in a gritty and visually striking tale of dark fantasy.', '2024-02-05 12:39:16', '2024-02-05 12:39:16');

-- --------------------------------------------------------

--
-- Table structure for table `animes`
--

CREATE TABLE `animes` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `pic` varchar(500) DEFAULT NULL,
  `status` int(11) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `RateId` int(11) DEFAULT NULL,
  `TypeId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `animes`
--

INSERT INTO `animes` (`id`, `title`, `description`, `pic`, `status`, `createdAt`, `updatedAt`, `RateId`, `TypeId`) VALUES
(3, 'one piece', '\"One Piece\" is an epic manga series by Eiichiro Oda, chronicling the adventures of Monkey D. Luffy and his crew as they search for the legendary treasure, One Piece, to become the Pirate King. Filled with vibrant characters, intense battles, and intricate storytelling, the series takes readers on a journey through a vast world of oceans and islands. Luffy, armed with his rubber-like abilities, leads the Straw Hat Pirates on a quest filled with friendship, determination, and the pursuit of dreams, captivating audiences globally for over two decades.', 'https://i.pinimg.com/736x/10/8e/3b/108e3b1df00743bb3ce908a48c8e7e47.jpg', 0, '2024-02-06 17:01:19', '2024-02-06 17:01:19', 3, 1),
(4, 'dragon ball', '\"Dragon Ball\" is a classic Japanese manga and anime series created by Akira Toriyama. It follows the adventures of Goku, a young and adventurous boy with incredible martial arts skills and a monkey tail, as he embarks on a journey to collect the seven mystical Dragon Balls. Along the way, Goku encounters a diverse cast of characters, including the powerful Saiyan prince Vegeta, the wise martial arts master Master Roshi, and the loyal friends he makes during his travels. Filled with thrilling battles, humorous moments, and epic quests, \"Dragon Ball\" has become a beloved franchise worldwide, inspiring numerous spin-offs, movies, and video games.', 'https://i.pinimg.com/564x/04/1e/39/041e39121d129beb6a3423688e8eb03e.jpg', 1, '2024-02-06 17:18:26', '2024-02-06 17:18:26', 3, 1),
(5, 'naruto', '\"Naruto\" is a Japanese manga and anime series created by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja with dreams of becoming the strongest ninja and the leader of his village, known as the Hokage. Born with a powerful fox spirit sealed within him, Naruto faces prejudice and loneliness but strives to prove himself to his peers and earn their respect. Alongside his friends and fellow ninjas, including Sasuke Uchiha and Sakura Haruno, Naruto embarks on various missions and battles against powerful foes while uncovering the truth about his past and the world around him. With its themes of friendship, perseverance, and redemption, \"Naruto\" has captured the hearts of fans worldwide and has become one of the most popular anime and manga franchises of all time.', 'https://i.pinimg.com/564x/d7/be/b3/d7beb32a2ac6f8c8df1b7adbe6a1da75.jpg', 1, '2024-02-06 17:24:46', '2024-02-06 17:24:46', 3, 1),
(6, 'naruto shippuden', '\"Naruto Shippuden\" is the continuation of the original \"Naruto\" series, created by Masashi Kishimoto. Set several years after the events of the original series, it follows Naruto Uzumaki and his friends as they embark on a new set of adventures and face even greater challenges. With Sasuke Uchiha\'s defection to the villainous organization Akatsuki, Naruto\'s quest to bring him back becomes central to the story. Alongside his comrades, Naruto trains diligently to become stronger and protect his village from looming threats, including the malevolent figure known as Pain. \"Naruto Shippuden\" delves deeper into the characters\' backstories, relationships, and the complexities of the ninja world, offering a more mature and nuanced narrative while retaining the series\' trademark action and humor.', 'https://i.pinimg.com/564x/5d/5e/eb/5d5eeb960c8553db6fccaa30685b6f12.jpg', 1, '2024-02-06 17:32:02', '2024-02-06 17:32:02', 3, 1),
(7, 'bleach', '\"Bleach\" is a Japanese manga and anime series created by Tite Kubo. It follows the story of Ichigo Kurosaki, a teenager with the ability to see ghosts. After inadvertently obtaining the powers of a Soul Reaper—a spiritual being tasked with guiding souls to the afterlife—Ichigo finds himself thrust into the world of the Soul Society, where he must battle evil spirits known as Hollows and protect both the living and the dead. Alongside his friends, including the fiery-tempered Soul Reaper Rukia Kuchiki and the quirky spirit medium Orihime Inoue, Ichigo faces increasingly powerful foes and uncovers dark conspiracies that threaten the balance between the human world and the afterlife. With its blend of action-packed battles, supernatural elements, and intricate world-building, \"Bleach\" has garnered a dedicated fanbase worldwide.', 'https://i.pinimg.com/564x/73/3d/1b/733d1bdb2a589da8563016253232b586.jpg', 1, '2024-02-06 17:45:26', '2024-02-06 17:45:26', 3, 1),
(8, 'bleach: thousand-year blood war', '\"Bleach: Thousand-Year Blood War\" is an arc within the \"Bleach\" manga series, created by Tite Kubo. This arc follows the climactic battle between the Soul Society and the Wandenreich, a powerful organization of Quincy led by Yhwach. As Yhwach and his forces launch a full-scale invasion of the Soul Society, Ichigo Kurosaki and his allies must rally together to defend their world against this formidable threat. The arc delves into the history of the Quincy, Ichigo\'s own lineage, and the true nature of the Soul King, culminating in epic battles and shocking revelations that reshape the fate of the Bleach universe. With its intense action, complex characters, and high-stakes storytelling, the Thousand-Year Blood War arc is a thrilling conclusion to the Bleach manga series.', 'https://i.pinimg.com/564x/c4/d8/56/c4d85662d571d18c31437e2fe0b2c9ea.jpg', 1, '2024-02-06 17:48:38', '2024-02-06 17:48:38', 3, 1),
(9, 'god of high school', '\"God of High School\" is a South Korean webtoon series created by Yongje Park, which has also been adapted into a popular anime. The story centers around Jin Mori, a high school student and skilled martial artist who enters the God of High School tournament, a competition where participants from all over the country battle it out using their martial arts skills. As the tournament progresses, Jin Mori encounters formidable opponents, forges new friendships, and uncovers the mysteries surrounding the tournament\'s true purpose. Alongside his friends, including the swordswoman Yu Mira and the hand-to-hand fighter Han Daewi, Jin Mori faces increasingly powerful adversaries and confronts his own past. With its dynamic fight scenes, supernatural elements, and themes of friendship and self-discovery, \"God of High School\" has captivated audiences with its fast-paced action and compelling characters.m', 'https://i.pinimg.com/564x/dc/a5/94/dca59487be9687615d1a3e0fd78105b6.jpg', 1, '2024-02-06 17:52:11', '2024-02-06 17:52:11', 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `authoranimes`
--

CREATE TABLE `authoranimes` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `AnimeId` int(11) DEFAULT NULL,
  `AuthorId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `authoranimes`
--

INSERT INTO `authoranimes` (`id`, `createdAt`, `updatedAt`, `AnimeId`, `AuthorId`) VALUES
(3, '2024-02-06 17:01:19', '2024-02-06 17:01:19', 3, 36),
(4, '2024-02-06 17:18:26', '2024-02-06 17:18:26', 4, 6),
(5, '2024-02-06 17:24:46', '2024-02-06 17:24:46', 5, 7),
(6, '2024-02-06 17:32:02', '2024-02-06 17:32:02', 6, 7),
(7, '2024-02-06 17:45:26', '2024-02-06 17:45:26', 7, 8),
(8, '2024-02-06 17:48:38', '2024-02-06 17:48:38', 8, 8),
(9, '2024-02-06 17:52:11', '2024-02-06 17:52:11', 9, 38);

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(6, 'akira toriyama', '2024-01-30 06:20:03', '2024-01-30 06:20:03'),
(7, 'masashi kishimoto', '2024-01-30 06:22:27', '2024-01-30 06:22:27'),
(8, 'tite kubo', '2024-01-30 06:23:04', '2024-01-30 06:23:04'),
(9, 'tsugumi ohba', '2024-01-30 06:24:42', '2024-01-30 06:24:42'),
(36, 'eiichiro oda', '2024-02-06 11:41:48', '2024-02-06 11:41:48'),
(37, 'yuzuru tachikawa', '2024-02-06 11:47:22', '2024-02-06 11:47:22'),
(38, 'yongje park', '2024-02-06 17:51:15', '2024-02-06 17:51:15');

-- --------------------------------------------------------

--
-- Table structure for table `episodes`
--

CREATE TABLE `episodes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `Epno` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `AnimeId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `generes`
--

CREATE TABLE `generes` (
  `id` int(11) NOT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `generes`
--

INSERT INTO `generes` (`id`, `Title`, `createdAt`, `updatedAt`) VALUES
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
(16, 'post-apocalyptic', '2024-02-05 07:38:15', '2024-02-05 07:38:15'),
(18, 'shounen', '2024-02-06 17:24:19', '2024-02-06 17:24:19'),
(19, 'martial arts', '2024-02-06 17:50:59', '2024-02-06 17:50:59');

-- --------------------------------------------------------

--
-- Table structure for table `generesanimes`
--

CREATE TABLE `generesanimes` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `AnimeId` int(11) DEFAULT NULL,
  `GenereId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `generesanimes`
--

INSERT INTO `generesanimes` (`id`, `createdAt`, `updatedAt`, `AnimeId`, `GenereId`) VALUES
(13, '2024-02-06 17:01:19', '2024-02-06 17:01:19', 3, 10),
(14, '2024-02-06 17:01:19', '2024-02-06 17:01:19', 3, 1),
(15, '2024-02-06 17:01:19', '2024-02-06 17:01:19', 3, 11),
(16, '2024-02-06 17:01:19', '2024-02-06 17:01:19', 3, 7),
(17, '2024-02-06 17:01:19', '2024-02-06 17:01:19', 3, 8),
(18, '2024-02-06 17:01:19', '2024-02-06 17:01:19', 3, 4),
(19, '2024-02-06 17:18:26', '2024-02-06 17:18:26', 4, 4),
(20, '2024-02-06 17:18:26', '2024-02-06 17:18:26', 4, 1),
(21, '2024-02-06 17:18:26', '2024-02-06 17:18:26', 4, 10),
(22, '2024-02-06 17:18:26', '2024-02-06 17:18:26', 4, 8),
(23, '2024-02-06 17:18:26', '2024-02-06 17:18:26', 4, 11),
(24, '2024-02-06 17:24:46', '2024-02-06 17:24:46', 5, 1),
(25, '2024-02-06 17:24:46', '2024-02-06 17:24:46', 5, 10),
(26, '2024-02-06 17:24:46', '2024-02-06 17:24:46', 5, 8),
(27, '2024-02-06 17:24:46', '2024-02-06 17:24:46', 5, 11),
(28, '2024-02-06 17:24:46', '2024-02-06 17:24:46', 5, 18),
(29, '2024-02-06 17:32:02', '2024-02-06 17:32:02', 6, 1),
(30, '2024-02-06 17:32:02', '2024-02-06 17:32:02', 6, 10),
(31, '2024-02-06 17:32:02', '2024-02-06 17:32:02', 6, 8),
(32, '2024-02-06 17:32:02', '2024-02-06 17:32:02', 6, 4),
(33, '2024-02-06 17:32:02', '2024-02-06 17:32:02', 6, 18),
(34, '2024-02-06 17:45:26', '2024-02-06 17:45:26', 7, 18),
(35, '2024-02-06 17:45:26', '2024-02-06 17:45:26', 7, 11),
(36, '2024-02-06 17:45:26', '2024-02-06 17:45:26', 7, 1),
(37, '2024-02-06 17:48:38', '2024-02-06 17:48:38', 8, 1),
(38, '2024-02-06 17:48:38', '2024-02-06 17:48:38', 8, 18),
(39, '2024-02-06 17:48:38', '2024-02-06 17:48:38', 8, 11),
(40, '2024-02-06 17:52:11', '2024-02-06 17:52:11', 9, 19),
(41, '2024-02-06 17:52:11', '2024-02-06 17:52:11', 9, 1),
(42, '2024-02-06 17:52:11', '2024-02-06 17:52:11', 9, 11);

-- --------------------------------------------------------

--
-- Table structure for table `rates`
--

CREATE TABLE `rates` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rates`
--

INSERT INTO `rates` (`id`, `title`, `Description`, `createdAt`, `updatedAt`) VALUES
(1, 'g (general audiences)', NULL, '2024-02-05 07:25:56', '2024-02-06 10:18:44'),
(2, 'pg (parental guidance suggested)', NULL, '2024-02-05 07:26:05', '2024-02-05 07:26:05'),
(3, 'pg-13 (parental guidance strongly advised)', NULL, '2024-02-05 07:26:23', '2024-02-05 07:26:32'),
(4, 'r (restricted)', NULL, '2024-02-05 07:26:41', '2024-02-05 07:26:41'),
(5, 'nc-17 (no one 17 and under admitted)', NULL, '2024-02-05 07:26:58', '2024-02-05 07:26:58');

-- --------------------------------------------------------

--
-- Table structure for table `studioanimes`
--

CREATE TABLE `studioanimes` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `AnimeId` int(11) DEFAULT NULL,
  `StudioId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `studioanimes`
--

INSERT INTO `studioanimes` (`id`, `createdAt`, `updatedAt`, `AnimeId`, `StudioId`) VALUES
(3, '2024-02-06 17:01:19', '2024-02-06 17:01:19', 3, 2),
(4, '2024-02-06 17:18:26', '2024-02-06 17:18:26', 4, 2),
(5, '2024-02-06 17:24:46', '2024-02-06 17:24:46', 5, 7),
(6, '2024-02-06 17:32:02', '2024-02-06 17:32:02', 6, 7),
(7, '2024-02-06 17:45:26', '2024-02-06 17:45:26', 7, 7),
(8, '2024-02-06 17:48:38', '2024-02-06 17:48:38', 8, 7),
(9, '2024-02-06 17:52:11', '2024-02-06 17:52:11', 9, 6);

-- --------------------------------------------------------

--
-- Table structure for table `studios`
--

CREATE TABLE `studios` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `studios`
--

INSERT INTO `studios` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(2, 'toei animation', '2024-02-05 06:23:17', '2024-02-05 06:23:17'),
(3, 'wit studio', '2024-02-05 06:23:39', '2024-02-05 06:23:39'),
(4, 'madhouse', '2024-02-05 06:23:49', '2024-02-05 06:23:49'),
(5, 'production i.g', '2024-02-05 06:24:18', '2024-02-05 06:24:22'),
(6, 'mappa', '2024-02-05 06:24:38', '2024-02-05 06:24:38'),
(7, 'studio pierrot', '2024-02-05 06:24:51', '2024-02-05 06:24:51'),
(8, 'white fox', '2024-02-05 06:25:10', '2024-02-05 06:25:10'),
(11, 'sunrise inc.', '2024-02-06 12:01:31', '2024-02-06 12:01:31');

-- --------------------------------------------------------

--
-- Table structure for table `types`
--

CREATE TABLE `types` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `types`
--

INSERT INTO `types` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'tv series', '2024-02-05 07:15:32', '2024-02-05 07:15:32'),
(2, 'movies', '2024-02-05 07:15:41', '2024-02-05 07:15:41'),
(3, 'ovas (original video animations)', '2024-02-05 07:15:53', '2024-02-05 07:15:53'),
(4, 'ona (original net animation)', '2024-02-05 07:16:02', '2024-02-05 07:16:02');

-- --------------------------------------------------------

--
-- Table structure for table `userpics`
--

CREATE TABLE `userpics` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userpics`
--

INSERT INTO `userpics` (`id`, `name`, `pic`, `createdAt`, `updatedAt`) VALUES
(3, 'vegeta', 'https://i.pinimg.com/564x/dc/35/8d/dc358d4220377b6ff2cdbe7e05bb9355.jpg', '2024-02-06 08:25:24', '2024-02-06 08:25:24'),
(7, 'goku', 'https://i.pinimg.com/564x/2f/e8/2f/2fe82ff7ff7036713c6b998fbc62ae76.jpg', '2024-02-06 09:16:20', '2024-02-06 09:45:17'),
(8, 'dazai', 'https://i.pinimg.com/736x/b3/f1/ca/b3f1ca5ce955d634548cce80bbf646c1.jpg', '2024-02-06 09:18:19', '2024-02-06 09:18:19'),
(9, 'naruto', 'https://i.pinimg.com/564x/bf/13/ac/bf13acd22a1e9c60058673dcb92dc441.jpg', '2024-02-06 09:18:54', '2024-02-06 09:18:54'),
(10, 'luffy', 'https://i.pinimg.com/736x/40/31/00/403100c729d0ef4551aeadfa57d9cbf7.jpg', '2024-02-06 09:19:14', '2024-02-06 09:19:14'),
(11, 'zoro', 'https://i.pinimg.com/736x/e2/64/50/e264503e4088502818ac2d99cebef268.jpg', '2024-02-06 09:19:46', '2024-02-06 09:19:46'),
(12, 'sanji', 'https://i.pinimg.com/736x/ef/4b/22/ef4b2250c712f4c191d742300763d548.jpg', '2024-02-06 09:20:17', '2024-02-06 09:20:17'),
(13, 'gintama', 'https://i.pinimg.com/736x/af/7d/0d/af7d0d8ca1b622079cc54febc1c0b551.jpg', '2024-02-06 09:20:47', '2024-02-06 09:20:47'),
(14, 'levi', 'https://i.pinimg.com/736x/6d/37/5e/6d375e2d7fcd5ef0a8f6901b8f57ff8d.jpg', '2024-02-06 09:21:14', '2024-02-06 09:21:14'),
(15, 'yuuichi', 'https://i.pinimg.com/564x/2c/30/15/2c30154937e386d78bb62c2bed02ad9f.jpg', '2024-02-06 09:23:01', '2024-02-06 09:23:01'),
(16, 'ayanokouji', 'https://i.pinimg.com/564x/d3/36/aa/d336aa4b48859c3c18d83902b3df0e78.jpg', '2024-02-06 09:23:50', '2024-02-06 09:24:09'),
(17, 'light', 'https://i.pinimg.com/736x/76/c4/c6/76c4c6c7d5d87a41ed9843583f8a01d1.jpg', '2024-02-06 09:24:49', '2024-02-06 09:24:49'),
(18, 'l', 'https://i.pinimg.com/736x/8a/4c/0f/8a4c0f53a2058497139ecf197a7070c4.jpg', '2024-02-06 09:25:16', '2024-02-06 09:25:16'),
(19, 'kishibe', 'https://i.pinimg.com/564x/9a/9c/69/9a9c697b5f6586bc015c58eedf844ba1.jpg', '2024-02-06 09:27:25', '2024-02-06 09:27:25'),
(20, 'itachi', 'https://i.pinimg.com/564x/2f/be/a2/2fbea2e9c1b834f7e7f934ff519ee4db.jpg', '2024-02-06 09:29:18', '2024-02-06 09:29:18'),
(21, 'sasuke', 'https://i.pinimg.com/564x/b1/e9/9e/b1e99ec094df93091b34389aa67db8ec.jpg', '2024-02-06 09:33:26', '2024-02-06 09:33:26'),
(22, 'toshiro', 'https://i.pinimg.com/564x/17/49/4c/17494c6ce0b61d76c2aea6abf73334bb.jpg', '2024-02-06 09:42:29', '2024-02-06 09:42:29'),
(23, 'ichigo', 'https://i.pinimg.com/564x/ab/5f/c8/ab5fc8e5c6f5a305c81f16a7b465c302.jpg', '2024-02-06 09:42:49', '2024-02-06 09:42:49');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `emailid` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `emailid`, `password`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'goku', 'goku@gmail.com', '$2b$10$Jsuyl7st20yse6EtwqU72eDwyHBKzzPeRsxYaDbaMFFc39tAn29QC', 1, '2024-01-29 10:40:16', '2024-01-29 10:40:16'),
(2, 'vegeta', 'vegeta@gmail.com', '$2b$10$NEsa./y4Y7/MYph6W49qSOgkqKtUtMT.klJh2kNe4VDqOpD4bqBTW', 0, '2024-01-29 10:42:59', '2024-01-29 10:42:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adds`
--
ALTER TABLE `adds`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Description` (`Description`);

--
-- Indexes for table `animes`
--
ALTER TABLE `animes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `description` (`description`) USING HASH,
  ADD KEY `RateId` (`RateId`),
  ADD KEY `TypeId` (`TypeId`);

--
-- Indexes for table `authoranimes`
--
ALTER TABLE `authoranimes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `AnimeId` (`AnimeId`),
  ADD KEY `AuthorId` (`AuthorId`);

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `episodes`
--
ALTER TABLE `episodes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Epno` (`Epno`),
  ADD KEY `AnimeId` (`AnimeId`);

--
-- Indexes for table `generes`
--
ALTER TABLE `generes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `generesanimes`
--
ALTER TABLE `generesanimes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `AnimeId` (`AnimeId`),
  ADD KEY `GenereId` (`GenereId`);

--
-- Indexes for table `rates`
--
ALTER TABLE `rates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `studioanimes`
--
ALTER TABLE `studioanimes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `AnimeId` (`AnimeId`),
  ADD KEY `StudioId` (`StudioId`);

--
-- Indexes for table `studios`
--
ALTER TABLE `studios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userpics`
--
ALTER TABLE `userpics`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `emailid` (`emailid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adds`
--
ALTER TABLE `adds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `animes`
--
ALTER TABLE `animes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `authoranimes`
--
ALTER TABLE `authoranimes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `authors`
--
ALTER TABLE `authors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `episodes`
--
ALTER TABLE `episodes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `generes`
--
ALTER TABLE `generes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `generesanimes`
--
ALTER TABLE `generesanimes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `rates`
--
ALTER TABLE `rates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `studioanimes`
--
ALTER TABLE `studioanimes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `studios`
--
ALTER TABLE `studios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `types`
--
ALTER TABLE `types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `userpics`
--
ALTER TABLE `userpics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `animes`
--
ALTER TABLE `animes`
  ADD CONSTRAINT `Animes_ibfk_1` FOREIGN KEY (`RateId`) REFERENCES `rates` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Animes_ibfk_2` FOREIGN KEY (`TypeId`) REFERENCES `types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `authoranimes`
--
ALTER TABLE `authoranimes`
  ADD CONSTRAINT `AuthorAnimes_ibfk_1` FOREIGN KEY (`AnimeId`) REFERENCES `animes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `AuthorAnimes_ibfk_2` FOREIGN KEY (`AuthorId`) REFERENCES `authors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `episodes`
--
ALTER TABLE `episodes`
  ADD CONSTRAINT `Episodes_ibfk_1` FOREIGN KEY (`AnimeId`) REFERENCES `animes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `generesanimes`
--
ALTER TABLE `generesanimes`
  ADD CONSTRAINT `GeneresAnimes_ibfk_1` FOREIGN KEY (`AnimeId`) REFERENCES `animes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `GeneresAnimes_ibfk_2` FOREIGN KEY (`GenereId`) REFERENCES `generes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `studioanimes`
--
ALTER TABLE `studioanimes`
  ADD CONSTRAINT `StudioAnimes_ibfk_1` FOREIGN KEY (`AnimeId`) REFERENCES `animes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `StudioAnimes_ibfk_2` FOREIGN KEY (`StudioId`) REFERENCES `studios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
