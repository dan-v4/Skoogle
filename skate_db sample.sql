CREATE SCHEMA `skate_db` ;
CREATE TABLE `skate_db`.`skaters` (
  `skaters_id` INT NOT NULL AUTO_INCREMENT,
  `skaters_fname` VARCHAR(45) NULL,
  `skaters_lname` VARCHAR(45) NULL,
  PRIMARY KEY (`skaters_id`));

CREATE TABLE `skate_db`.`videos` (
`videos_id` INT NOT NULL AUTO_INCREMENT,
`videos_name` VARCHAR(45) NOT NULL,
PRIMARY KEY (`videos_id`)
);

CREATE TABLE `skate_db`.`company` (
`company_id` INT NOT NULL AUTO_INCREMENT,
`company_name` VARCHAR(45) NOT NULL,
PRIMARY KEY (`company_id`)
);

INSERT INTO skate_db.skaters (skaters_fname, skaters_lname) VALUES ('Jerry', 'Hsu');
INSERT INTO skate_db.skaters (skaters_fname, skaters_lname) VALUES ('Sean', 'Pablo');
INSERT INTO skate_db.skaters (skaters_fname, skaters_lname) VALUES ('Tyshawn', 'Jones');
INSERT INTO skate_db.skaters (skaters_fname, skaters_lname) VALUES ('Cyrus', 'Bennett');
INSERT INTO skate_db.skaters (skaters_fname, skaters_lname) VALUES ('Paul', 'Rodriguez');

INSERT INTO skate_db.company(company_name) VALUES ('enjoi');
INSERT INTO skate_db.company(company_name) VALUES ('Baker');
INSERT INTO skate_db.company(company_name) VALUES ('GX1000');
INSERT INTO skate_db.company(company_name) VALUES ('Fucking Awesome');
INSERT INTO skate_db.company(company_name) VALUES ('Independent');

INSERT INTO skate_db.videos(videos_name) VALUES ('HOCKEY');
INSERT INTO skate_db.videos(videos_name) VALUES ('JAGEN');
INSERT INTO skate_db.videos(videos_name) VALUES ('Illegal Civilization 2');
INSERT INTO skate_db.videos(videos_name) VALUES ('Godspeed');
INSERT INTO skate_db.videos(videos_name) VALUES ('Baker 3');
