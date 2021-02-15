

def wash_hands(n, nM):
  monthly_seconds = (n * 21) * 30
  total_minutes = (monthly_seconds * nM )/ 60
  seconds = (total_minutes % 1) * 60
  return (f"{int(total_minutes)} minutes and {int(seconds)} seconds")

wash_hands(8, 7)
