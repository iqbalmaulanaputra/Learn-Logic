# Create a function that returns the sum of the two lowest positive numbers given an array 
# of minimum 4 positive integers. No floats or non-positive integers will be passed.
# For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
# [10, 343445353, 3453445, 3453545353453] should return 3453455

#step 1
# def sum_two_smallest_numbers(numbers):
#     sorted_numbers = sorted(numbers)
#     return sorted_numbers[0] + sorted_numbers[1]

#step 2
def sum_two_smallest_numbers(numbers):
    return sum(sorted(numbers)[:2])


result1 = sum_two_smallest_numbers([19, 5, 42, 2, 77])
result2 = sum_two_smallest_numbers([10, 343445353, 3453445, 3453545353453])

print(result1)  
print(result2)  