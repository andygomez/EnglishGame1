-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema EnglishGame_BD
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema EnglishGame_BD
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `EnglishGame_BD` DEFAULT CHARACTER SET utf8 ;
USE `EnglishGame_BD` ;

-- -----------------------------------------------------
-- Table `EnglishGame_BD`.`subject`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `EnglishGame_BD`.`subject` (
  `id` INT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `EnglishGame_BD`.`question`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `EnglishGame_BD`.`question` (
  `id` INT NOT NULL,
  `firstPart` VARCHAR(100) NOT NULL,
  `secondPart` VARCHAR(100) NOT NULL,
  `type` VARCHAR(5) NOT NULL,
  `subject_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_question_subject_idx` (`subject_id` ASC),
  CONSTRAINT `fk_question_subject`
    FOREIGN KEY (`subject_id`)
    REFERENCES `EnglishGame_BD`.`subject` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `EnglishGame_BD`.`answer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `EnglishGame_BD`.`answer` (
  `id` INT NOT NULL,
  `content` VARCHAR(100) NOT NULL,
  `question_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_answer_question1_idx` (`question_id` ASC),
  CONSTRAINT `fk_answer_question1`
    FOREIGN KEY (`question_id`)
    REFERENCES `EnglishGame_BD`.`question` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `EnglishGame_BD`.`possibleAnswer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `EnglishGame_BD`.`possibleAnswer` (
  `id` INT NOT NULL,
  `content` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `EnglishGame_BD`.`word`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `EnglishGame_BD`.`word` (
  `id` INT NOT NULL,
  `word` VARCHAR(100) NOT NULL,
  `traslation` VARCHAR(100) NOT NULL,
  `question_id` INT NULL,
  `possibleAnswer_id` INT NULL,
  `answer_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_word_question1_idx` (`question_id` ASC),
  INDEX `fk_word_possibleAnswer1_idx` (`possibleAnswer_id` ASC),
  INDEX `fk_word_answer1_idx` (`answer_id` ASC),
  CONSTRAINT `fk_word_question1`
    FOREIGN KEY (`question_id`)
    REFERENCES `EnglishGame_BD`.`question` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_word_possibleAnswer1`
    FOREIGN KEY (`possibleAnswer_id`)
    REFERENCES `EnglishGame_BD`.`possibleAnswer` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_word_answer1`
    FOREIGN KEY (`answer_id`)
    REFERENCES `EnglishGame_BD`.`answer` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `EnglishGame_BD`.`question_possibleAnswer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `EnglishGame_BD`.`question_possibleAnswer` (
  `question_id` INT NOT NULL,
  `possibleAnswer_id` INT NOT NULL,
  PRIMARY KEY (`question_id`, `possibleAnswer_id`),
  INDEX `fk_question_possibleAnswer_possibleAnswer1_idx` (`possibleAnswer_id` ASC),
  INDEX `fk_question_possibleAnswer_question1_idx` (`question_id` ASC),
  CONSTRAINT `fk_question_possibleAnswer_question1`
    FOREIGN KEY (`question_id`)
    REFERENCES `EnglishGame_BD`.`question` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_question_possibleAnswer_possibleAnswer1`
    FOREIGN KEY (`possibleAnswer_id`)
    REFERENCES `EnglishGame_BD`.`possibleAnswer` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
