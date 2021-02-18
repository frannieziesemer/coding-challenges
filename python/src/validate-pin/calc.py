import re

def valid(pin):
  if len(pin) == 4 or len(pin) == 6:
    match = re.search(r'\D', pin)
    if match:
      return False
    else:
      return True
  else:
    return False