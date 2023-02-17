DROP DATABASE IF EXISTS qna;
CREATE DATABASE qna;

CREATE TABLE questions(
  question_id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  asker_name TEXT NOT NULL,
  question_body TEXT NOT NULL,
  question_date DATE NOT NULL DEFAULT CURRENT_DATE,
  question_helpfulness INT DEFAULT 0,
  reported INT DEFAULT 0
  FOREIGN KEY (question_id) REFERENCES answers(question_id)
)

CREATE TABLE answers(
  answer_id SERIAL PRIMARY KEY,
  question_id INT NOT NULL,
  answerer_name TEXT NOT NULL,
  body TEXT NOT NULL,
  answer_date DATE NOT NULL DEFAULT CURRENT_DATE,
  helpfulness INT DEFAULT 0,
  reported INT DEFAULT 0
  FOREIGN KEY (question_id) REFERENCES questions(question_id)
  FOREIGN KEY (answer_id) REFERENCES photos(answer_id)
)

CREATE TABLE photos(
  id SERIAL PRIMARY KEY,
  answer_id INT NOT NULL,
  url TEXT
  FOREIGN KEY (answer_id) REFERENCES answers(answer_id)
)

COPY questions
FROM '/Users/terrencekoo/Downloads/questions.csv'
DELIMITER ',' CSV HEADER;

COPY answers
FROM '/Users/terrencekoo/Downloads/answers.csv'
DELIMITER ',' CSV HEADER;

COPY photos
FROM '/Users/terrencekoo/Downloads/answers_photos.csv'
DELIMITER ',' CSV HEADER;