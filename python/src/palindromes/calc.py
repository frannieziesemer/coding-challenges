

def checkPalindrome(palindrome):
    """
    Takes parameter (string or number) converts it to a string. Then removes punctuation and reverses it. 
    The new reversed string is then compared to the original string to check if it is a plalindrome

    returns boolean True or False
    
    """
    originalString = str(palindrome)
    originalString = ''.join(e for e in originalString if e.isalnum()).lower()
    
    return True if originalString == originalString[::-1] else False



