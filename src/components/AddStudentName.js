/************************************************************************************************
 * import student info
 * import comments
 * access the comment in the comments
 * replace all instances of StudnetName with the students name using replace method
 ************************************************************************************************/

function AddStudentName(string, newName) {
  const newString = string.replace(/StudentName/g, newName);
  return newString;
}

export default AddStudentName;
