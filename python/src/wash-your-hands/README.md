

## Wash Your Hands :)

It takes 21 seconds to wash your hands and help prevent the spread of COVID-19.

Create a function that takes the number of times a person washes their hands per day N and the number of months they follow this routine nM and calculates the duration in minutes and seconds that person spends washing their hands.
Examples

```
wash_hands(8, 7) ➞ "588 minutes and 0 seconds"

wash_hands(0, 0) ➞ "0 minutes and 0 seconds"

wash_hands(7, 9) ➞ "661 minutes and 30 seconds"
```

##### Notes
- Consider a month has 30 days.

#### Pseudo code 
      n= number of times person washes hands per day
      nM = number of months routine is followed

      time spent washing hands is 21 seconds 
      time per day = n * 21
      time per month = time per day * 30
      total seconds = time per month *nM
      total minutes = total seconds / 60 
        this returns a decimal number 
        extract minutes amount and then convert decimal back to seconds 
        minutes % 1  * 60 
      output= duration in minutes and seconds person spends washing hands 

