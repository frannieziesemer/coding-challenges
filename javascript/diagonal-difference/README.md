### Compare Triplets  description
Given a square matrix, calculate the absolute difference between the sums of its diagonals. 
Sample Input

[11, 2, 4]
[4, 5, 6]
[10, 8, -12]

Sample Output

15


#### psuedo code 
``` loop through the array or arrays 
        then target the row within the loop and add  - this will return the first number of the first row, then the 2nd number second row, then third number third row = diagonal right to left 
        
        to find right to left diagonal reverse the rows and do as above 

    subract one from the other using Math.abs 
```
#### tests 