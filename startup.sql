DROP DATABASE IF EXISTS Startup;
CREATE DATABASE Startup;
USE Startup;

CREATE Table business_incubator(
	incubator_id int(25) not null AUTO_INCREMENT,
    count_of_seats int(50) not null,
    office_adress varchar(50) not null,
    web_adress varchar(50) not null,
    primary key(incubator_id)
);
CREATE Table investment_company(
    name varchar(50) not null,
    description varchar(50) not null,
    web_adress varchar(50) not null,
    date_of_foundation date not null,
    adress varchar(50) not null,
    director varchar(50) not null,
    company_id int(50) not null AUTO_INCREMENT,
    primary key(company_id)
);
CREATE Table investment_manager(
    company_id int(50) not null,
    surname VARCHAR(25) NOT NULL,
    name VARCHAR(25) NOT NULL,
    identification_number int(30) NOT NULL,
    primary key(identification_number),
    FOREIGN KEY (company_id) REFERENCES investment_company(company_id)
);
CREATE Table startup(
    id int(50) not null AUTO_INCREMENT, 
    name VARCHAR(50) not null,
    startup_description varchar(50) not null,
    business_model VARCHAR(50) not null,
    concurents varchar(50) not null,
    marketing_strategy varchar(50) not null,
    investment int(50) not null,
    startup_web_adress varchar(50) not null,
    startup_date_of_foundation date not null,
    development_stage varchar(50) not null,
    Twitter_adress varchar(50) not null,
    incubator_id int(50) not null,
    startup_head varchar(50) not null,
    Primary key(id),
    FOREIGN KEY (incubator_id) REFERENCES business_incubator(incubator_id)
);
CREATE Table private_investor(
	investor_id int(50) not null AUTO_INCREMENT,
    name varchar(50) not null,
    surname varchar(50) not null,
    primary key(investor_id)
);
CREATE Table application(
    round varchar(50) not null,
    investor_id int(50),
    startup_id int(50) not null,
    investment int(50) not null,
    situation boolean null,
    investment_company_id int(50),
	FOREIGN KEY (startup_id) REFERENCES startup(id),
    FOREIGN KEY (investor_id) REFERENCES private_investor(investor_id),
    FOREIGN KEY (investment_company_id) REFERENCES investment_company(company_id)
);

DELIMITER //
CREATE TRIGGER investor_type
BEFORE INSERT ON application FOR EACH ROW
BEGIN
IF(new.investor_id is not null && new.investment_company_id is not null) 
THEN SIGNAL SQLSTATE '45000'
SET MESSAGE_TEXT = 'can be only one investor type';
END IF;
END//

DELIMITER //
CREATE TRIGGER investor_type_update
BEFORE UPDATE ON application FOR EACH ROW
BEGIN
IF(new.investor_id is not null && new.investment_company_id is not null)  
THEN SIGNAL SQLSTATE '45000'
SET MESSAGE_TEXT = 'can be only one investor type';
END IF;
END//

insert into business_incubator(count_of_seats,office_adress,web_adress) values
(50,'Львів, Шевченка 28','gfdgo@gmail.com'),
(150,'Львів, Шевченка 25','nbgo@gmail.com'),
(250,'Львів, Шевченка 23','zxgo@gmail.com');

Insert into investment_company(name,description,web_adress,date_of_foundation,adress,director) values
('company 1','best company','czzs.com','2017-12-12','Львів,Гашека 12','Денисюк Сергій'),
('company 2','best company','casfzs.com','2017-12-12','Львів,Гашека 13','Денисюк Андрій'),
('company 3','best company','czzawer.com','2017-12-12','Львів,Гашека 14','Денисюк Роман');

Insert into investment_manager(company_id,surname,name,identification_number) values
(1,'Попов','Андрій',14356),
(2,'Манько','Анна',1445656),
(3,'Питько','Дмитро',1456),
(3,'Рой','Віталій',8676),
(1,'Попов','Сергій',1412),
(1,'Попов','Віталій',17686),
(2,'Іванов','Андрій',1476856),
(3,'Турій','Віталій',143547),
(1,'Рой','Андрій',1431246);

insert Into startup(name,startup_description,business_model,concurents,marketing_strategy,investment,startup_web_adress, startup_date_of_foundation,twitter_adress,incubator_id,startup_head,development_stage) values
('lala','startup 1','model 1','concurents','marketing strategy',1235,'sdg.gmail.com','2016-12-12','ddvb',1,'Денисюк Сергій','seed stage');

insert into private_investor(name,surname) values
('Сергій','Ткач'),
('Роман','Іванчук'),
('Сергій','Іванов');

insert into application(round, investor_id,investment, investment_company_id,startup_id) values
('lala',1,1234,null,1);


