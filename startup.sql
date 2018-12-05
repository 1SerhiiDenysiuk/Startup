DROP DATABASE IF EXISTS Startup;
CREATE DATABASE Startup;
USE Startup;

CREATE Table InvestmentCompany(
    name varchar(50) not null,
    description varchar(50) not null,
    web_adress varchar(50) not null, check(web_adress like '%@%'),
    date_of_foundation date not null,
    adress varchar(50) not null,
    director varchar(50) not null,
    company_id int(50) not null,
    primary key(company_id)
);

CREATE Table InvestmentManager(
    company_id int(50) not null,
    surname VARCHAR(25) NOT NULL,
    name VARCHAR(25) NOT NULL,
    identification_number int(30) NOT NULL,
    primary key(identification_number)
);

CREATE Table Startup(
    id int(50) not null AUTO_INCREMENT, 
    name VARCHAR(50) not null,
    startup_description varchar(50) not null,
    business_model VARCHAR(50) not null,
    concurents varchar(50) not null,
    marketing_strategy varchar(50) not null,
    investment int(50) not null,
    startup_web_adress varchar(50) not null, check(web_adress like '%@%'),
    startup_date_of_foundation date not null,
    Twitter_adress varchar(50) not null,
    business_incubator_id int(50) not null,
    startup_head varchar(50) not null,
    development_stage_id varchar(50) not null,
    Primary key(id,name, development_stage_id)
);

CREATE Table developmentstages(
    development_stage_name varchar(50) not null,
    development_stage_id int(50) not null,
    primary key(development_stage_id)
);

CREATE Table PrivateInvestor(
	investor_id int(50) not null AUTO_INCREMENT,
    name varchar(50) not null,
    surname varchar(50) not null,
    primary key(investor_id)
);
 CREATE Table business_incubator(
	id int(25) not null AUTO_INCREMENT,
    count_of_seats int(50) not null,
    office_adress varchar(50) not null,
    web_adress varchar(50) not null, check (web_adress like '%@%'),
    primary key(id)
);
CREATE Table RoundOfFunding(
    name varchar(50) not null,
    round_id int(50) not null,
    investor_id int(50) not null,
    startup_id int(50) not null,
    investment int(50) not null,
    primary key(round_id)
);

CREATE Table Application(
    startup_name varchar(50) not null,
    round_id int(50) not null,
    PrivateInvestor_name varchar(50) null,
    investor_id int(50) null,
    situation boolean null
);

Insert into InvestmentCompany(name,description,web_adress,date_of_foundation,adress,director,company_id) values
('company 1','best company','czzs@gmail.com','2017-12-12','Львів,Гашека 12','Денисюк Сергій',3),
('company 2','best company','casfzs@gmail.com','2017-12-12','Львів,Гашека 13','Денисюк Андрій',2),
('company 3','best company','czzawers@gmail.com','2017-12-12','Львів,Гашека 14','Денисюк Роман',1);

Insert into InvestmentManager(company_id,surname,name,identification_number) values
(1,'Попов','Андрій',14356),
(2,'Манько','Анна',1445656),
(3,'Питько','Дмитро',1456),
(3,'Рой','Віталій',8676),
(1,'Попов','Сергій',1412),
(1,'Попов','Віталій',17686),
(2,'Іванов','Андрій',1476856),
(3,'Турій','Віталій',143547),
(1,'Рой','Андрій',1431246);

insert Into startup(name,startup_description,business_model,concurents,marketing_strategy,investment,startup_web_adress, startup_date_of_foundation,twitter_adress,business_incubator_id,startup_head,development_stage_id) values
('lala','startup 1','model 1','concurents','marketing strategy',1235,'sdg@gmail.com','2016-12-12','ddvb',1,'Денисюк Сергій',3);

insert into developmentstages(development_stage_id,development_stage_name) values
(1,'seed stage'),
(2,'startup stage'),
(3,'growth stage'),
(4,'expansion stage'),
(5,'exit stage');

insert into privateinvestor(name,surname) values
('Сергій','Ткач'),
('Роман','Іванчук'),
('Сергій','Іванов');

insert into business_incubator(count_of_seats,office_adress,web_adress) values
(50,'Львів, Шевченка 28','gfdgo@gmail.com'),
(150,'Львів, Шевченка 25','nbgo@gmail.com'),
(250,'Львів, Шевченка 23','zxgo@gmail.com');

insert into RoundOfFunding(round_id,name,investor_id,startup_id,investment) values
(1,'round 1',1,1,5461);

insert into application(startup_name,round_id) values
('lala',1);

