CREATE TABLE table_name (
    id int NOT NULL AUTO_INCREMENT,
    column1 varchar(255),
    column2 varchar(255),
    column3 int(20),
    column BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (Personid)
    FOREIGN KEY (thing_id) REFERENCES things(id)
);