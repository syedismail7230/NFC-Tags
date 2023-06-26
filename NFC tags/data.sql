
CREATE DATABASE progress_reports;

USE progress_reports;

CREATE TABLE Students (
  student_id INT PRIMARY KEY,
  name VARCHAR(100),
);

CREATE TABLE Courses (
  course_id INT PRIMARY KEY,
  course_name VARCHAR(100),
);

CREATE TABLE ProgressReports (
  report_id INT PRIMARY KEY,
  student_id INT,
  course_id INT,
  report_date DATE,
  grade VARCHAR(10),
  FOREIGN KEY (student_id) REFERENCES Students(student_id),
  FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);
