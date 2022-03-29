BEGIN;

DROP TABLE IF EXISTS Users,Comments,Posts CASCADE;

CREATE TABLE Users(
    id SERIAL PRIMARY KEY,
    username varchar(50) NOT NULL,
    email varchar(100) UNIQUE NOT NULL,
    password  varchar(100)  NOT NULL,
    user_url_img varchar(100) NOT NULL 
);

CREATE TABLE Posts(
    id SERIAL PRIMARY KEY,
    title varchar(50) NOT NULL,
    description TEXT NOT NULL,
    user_id int,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE Comments(
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    user_id int,
    post_id int,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (post_id) REFERENCES Posts(id)
);

INSERT INTO Users(username, email, password, user_url_img) VALUES ('Rawan', 'rawaneyad@gmail.com', '$2a$08$YQIj86nG4iLo/f1N5MQ8/OB.rYXyNeRO4A/Xcj45XpQvrO5jTFF8e', '../img/img.jpg');
INSERT INTO Users(username, email, password, user_url_img) VALUES ('Barr', 'barr@gmail.com', '$2a$08$kiQM9he5Z//XgGVjeTJJuuS4tc8.pv64ovv.JIiW4sYQN6/2HpUiK', '../img/img.jpg');

COMMIT;