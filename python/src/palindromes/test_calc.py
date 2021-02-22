import pytest
from calc import checkPalindrome

# def test_palindrome():
#   assert checkPalindrome('MADAM') == True
#   assert checkPalindrome('hello') == False
#   assert checkPalindrome(67876) == True
#   assert checkPalindrome('Was it a car or a cat I saw?') == True




class TestClass:
  def test_string(self):
    assert checkPalindrome('MADAM') == True
  def test_string_two(self):
    assert checkPalindrome('hello') == False
  def test_number(self):
    assert checkPalindrome(67876) == True
  def test_with_punctuation(self):
    assert checkPalindrome('Was it a car or a cat I saw?') == True