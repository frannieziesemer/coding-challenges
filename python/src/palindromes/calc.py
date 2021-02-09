

def checkPalindrome(palindrome):
    """
    Takes parameter (string or number) converts it to a string. Then removes punctuation and reverses it. 
    The new reversed string is then compared to the original string to check if it is a plalindrome

    returns boolean True or False
    
    """
    originalString = str(palindrome)
    originalString = ''.join(e for e in originalString if e.isalnum()).lower()
    reversedString = originalString[::-1]
 
    if originalString == reversedString:
        return True
    else:
        return False



checkPalindrome('MADAM')
checkPalindrome(65456)
checkPalindrome('hello')
checkPalindrome('Was it a car or a cat I saw?')
