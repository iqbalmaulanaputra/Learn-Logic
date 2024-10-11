# Your task is to make a function that can take any non-negative integer as 
# an argument and return it with its digits in descending order. Essentially, 
# rearrange the digits to create the highest possible number.


#step 1
# def descending_order(n):
#     sorted_digits = sorted(str(n), reverse=True)
#     return int(''.join(sorted_digits))

#step 2
# def descending_order(n):
#     return int(''.join(sorted(str(n), reverse=True)))

#step 3
descending_order = lambda n: int(''.join(reversed(sorted(str(n)))))


result = descending_order(42145)
print(result)  
