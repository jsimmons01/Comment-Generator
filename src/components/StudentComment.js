import { COMMENTS } from "../comments";
import React from "react";

const StudentComment = ({ studentName, gender, level }) => {
  const comments = COMMENTS;
  const studentLevel = comments.map((levels) => levels === level);
  const studentGender = studentLevel.map((genders) => genders === gender);
  //have to use another method to replace the name
  const comment = studentGender.replace(comments.StudentName, studentName);
  return <p>{comment}</p>;
};

export default StudentComment;
