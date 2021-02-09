function gradingStudents(grades) {

    let finalGrades = [];

  for(let i = 0; i< grades.length; i++) {
    const roundedGrade = Math.ceil(grades[i]/5)*5;
    const roundedDifference = roundedGrade - grades[i]; 
    if(grades[i] >= 38 && roundedDifference < 3 ) {
      finalGrades.push(roundedGrade);
    } else {
      finalGrades.push(grades[i]);
    }
  }
  return finalGrades;
}
gradingStudents([73, 67, 38, 33]);