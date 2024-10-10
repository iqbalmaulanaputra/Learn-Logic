# Instructions
# Given a mathematical expression as a string you must return the result as a number.

# Numbers
# Number may be both whole numbers and/or decimal numbers. The same goes for the returned result.

# Operators
# You need to support the following mathematical operators:

# Multiplication *
# Division / (as floating point division)
# Addition +
# Subtraction -
# Operators are always evaluated from left-to-right, and * and / must be evaluated before + and -.

# Parentheses
# You need to support multiple levels of nested parentheses, ex. (2 / (2 + 3.33) * 4) - -6



import re

def calc(expression):
    def parse_expression(expression):
        tokens = re.findall(r"\d+\.?\d*|[+\-*/()]|\S", expression)
        return evaluate(tokens)

    def evaluate(tokens):
        def get_next_value():
            value = parse_term()
            while tokens and tokens[0] in ('+', '-'):
                op = tokens.pop(0)
                if op == '+':
                    value += parse_term()
                elif op == '-':
                    value -= parse_term()
            return value
        
        def parse_term():
            value = parse_factor()
            while tokens and tokens[0] in ('*', '/'):
                op = tokens.pop(0)
                if op == '*':
                    value *= parse_factor()
                elif op == '/':
                    value /= parse_factor()
            return value
        
        def parse_factor():
            token = tokens.pop(0)
            if token == '(':
                value = get_next_value()
                tokens.pop(0)  
                return value
            elif token == '-':
                return -parse_factor()
            else:
                return float(token)
        
        return get_next_value()
    
    return parse_expression(expression)


expression = "(2 / (2 + 3.33) * 4) - -6"
result = calc(expression)
print(f"Hasil: {result}")
