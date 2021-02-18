import pytest
from calc import valid


class TestClass:
  def test_four_digits(self):
    assert valid('1234') == True
  def test_five_digits(self):
    assert valid('45135') == False
  def test_contains_letters(self):
    assert valid('89abc1') == False
  def test_six_digits(self):
    assert valid('900876') == True
  def test_whitespace(self):
    assert valid(' 4983') == False