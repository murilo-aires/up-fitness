-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 28/05/2026 às 10:39
-- Versão do servidor: 8.0.43
-- Versão do PHP: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `upfitness`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `professor`
--

DROP TABLE IF EXISTS `professor`;
CREATE TABLE IF NOT EXISTS `professor` (
  `matricula` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `cpf` char(11) NOT NULL,
  `cref` varchar(30) NOT NULL,
  `senha` varchar(100) NOT NULL,
  PRIMARY KEY (`matricula`)
) ENGINE=InnoDB AUTO_INCREMENT=878865525 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `professor`
--

INSERT INTO `professor` (`matricula`, `nome`, `email`, `cpf`, `cref`, `senha`) VALUES
(288520916, 'Romulo', 'romulo@gmail.com', '11058077356', 'CREF11CE', '$2y$10$tJgeQar3EB44F2TJoScCKOssRPRCvZcUhmwjIId9QvBomp9QUd72W');

-- --------------------------------------------------------

--
-- Estrutura para tabela `solicitacoes_treino`
--

DROP TABLE IF EXISTS `solicitacoes_treino`;
CREATE TABLE IF NOT EXISTS `solicitacoes_treino` (
  `id` int NOT NULL AUTO_INCREMENT,
  `aluno_nome` varchar(100) DEFAULT NULL,
  `objetivo` varchar(100) DEFAULT NULL,
  `observacoes` text,
  `status` varchar(50) DEFAULT 'Pendente',
  `data_solicitacao` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `professor_id` varchar(50) DEFAULT NULL,
  `matricula_aluno` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `solicitacoes_treino`
--

INSERT INTO `solicitacoes_treino` (`id`, `aluno_nome`, `objetivo`, `observacoes`, `status`, `data_solicitacao`, `professor_id`, `matricula_aluno`) VALUES
(5, 'Gareth Bale', 'Emagrecimento', 'Quero emagrecer                ', 'Pendente', '2026-05-26 13:10:30', '288520916', '288520916');

-- --------------------------------------------------------

--
-- Estrutura para tabela `treinos_alunos`
--

DROP TABLE IF EXISTS `treinos_alunos`;
CREATE TABLE IF NOT EXISTS `treinos_alunos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `aluno_nome` varchar(100) DEFAULT NULL,
  `exercicio` varchar(100) DEFAULT NULL,
  `series` varchar(100) DEFAULT NULL,
  `professor` varchar(100) DEFAULT NULL,
  `data_treino` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `matricula_aluno` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `treinos_alunos`
--

INSERT INTO `treinos_alunos` (`id`, `aluno_nome`, `exercicio`, `series`, `professor`, `data_treino`, `matricula_aluno`) VALUES
(1, 'Gareth Bale', 'Abdominal', '30x3', NULL, '2026-05-26 12:43:54', NULL),
(2, 'Gareth Bale', 'Abdominal', '30x3', NULL, '2026-05-26 12:44:01', NULL),
(3, 'Gareth Bale', 'Abdominal', '30x3', NULL, '2026-05-26 12:53:14', NULL),
(4, 'Gareth Bale', 'Abdominal', '30x3', NULL, '2026-05-26 13:14:09', '288520916'),
(5, 'Gareth Bale', 'Polichinelo', '30x3', NULL, '2026-05-26 13:14:33', '288520916'),
(6, 'Gareth Bale', 'Prancha', '30x3', NULL, '2026-05-26 13:15:09', '288520916');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `matricula` bigint NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `cpf` char(11) NOT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  `senha` varchar(255) NOT NULL,
  PRIMARY KEY (`matricula`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `cpf` (`cpf`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`matricula`, `nome`, `email`, `cpf`, `telefone`, `senha`) VALUES
(510310412, 'Gareth Bale', 'bale@gmail.com', '23456669088', '4008522', '$2y$10$fM.UhiXjPFOjfx/9wn3lMO8LTWGfdllqmokSjR6tBkIxIbGx8CoLq'),
(899162687, 'Messi', 'messi@gmail.com', '35465334578', '4008922', '$2y$10$JxrUc0wrRmcdTKw28b36aO.VNcFdE7PC6QF/HuXm4jZIic/XnA7p6'),
(902235721, 'Ronaldo', 'ronaldo@gmail.com', '2354778903', '4008920', '$2y$10$XLyAsdiTvrzWrDpQmR67GOhEAu7H/tLeJhDIxeH0lSd3/5bC1R4Ei');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
