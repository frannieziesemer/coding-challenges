## Grading Students 

HackerLand University has the following grading policy:

    Every student receives a grade in the inclusive range from 0 to 100.
    Any grade less than 40 is a failing grade.

Sam is a professor at the university and likes to round each student's grade according to these rules:

    If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
    If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

##### Examples:

- grade = 84 round to 85 (85 - 84 is less than 3)
- grade = 29 do not round (result is less than 40)
- grade = 57 do not round (60 - 57 is 3 or higher)

Given the initial value of grade for each of Sam's n students, write code to automate the rounding process. 


#### Pseudo code 
    ```grades are given as an array so loop through 
    take the grade and check:
        if it is above 38 find the next multiple of 5 
           the grade is only rounded up if the differece between the grade and next multiple of 5 is less than 5 
            so if the grade ends in 3 or 4 it will round up to 5
            so if the grade ends in 8 or 9 it will round up to 0 
                modulo 5 is less than 3 
      else  if it is less than 38 score stays the same  
              all other cases stay the same```
