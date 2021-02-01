import pytest
from calc import checkPalindrome

def test_palindrome():
  assert checkPalindrome('MADAM') == True
  assert checkPalindrome('hello') == False
  assert checkPalindrome(67876) == True
  assert checkPalindrome('Was it a car or a cat I saw?') == False




# class TestClass:
#   def test_string():
#     assert checkPalindrome('MADAM') == 'true'
#   def test_string_two():
#     assert checkPalindrome('hello') == 'false'
#   def test_number():
#     assert checkPalindrome(67876) == 'true'
#   def test_with_punctuation():
#     assert checkPalindrome('Was it a car or a cat I saw?') == 'true'