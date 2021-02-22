def neutralise(string1, string2):
  result = ''
  for i in range(len(string1)):
    if (string1[i] == '-' and string2[i] == '+') or (string1[i] == '+' and string2[i] == '-'):
      result += '0'
    else:
      result += string1[i]
  return result




