### Apples and Oranges 
Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.
- Points s and t indicate the house, where s is the start point, and t is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.
- Assume the trees are located on a single point, where the apple tree is at point a, and the orange tree is at point b.
- When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x-axis. 
    *A negative value of d means the fruit fell d units to the tree's left, and a positive value of d means it falls d units to the tree's right. *

Given the value of d for m apples and n oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range [s, t])?
[check the description on HackerRank here](https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true )

#### Pseudo code
understand the input:
``` s = start of sams house- number
    t = end of sams house- number
    a = location of apple tree- number
    b = location of orange tree - number
    apples and oranges array of where fruits land
```

describe how to execute function:
```i want to find how many apples and oranges land on sams house so between s and t 
    add m[i] to a to find the distance of each apple from the apple tree 
    add n[i] to b to find the distance of each from the orange tree 
        if the distance falls between s and t then we can say that the apple or orange fell on the house  ```
