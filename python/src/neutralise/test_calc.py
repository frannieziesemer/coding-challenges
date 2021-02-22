import pytest
from calc import neutralise


class TestClass:
  def test_conversion(self):
    assert neutralise("--++--", "++--++") == "000000"
  def test_no_conversion(self):
    assert neutralise("-+-+-+", "-+-+-+") == "-+-+-+"
  def test_combination(self):
    assert neutralise("-++-", "-+-+") == "-+00"
