# Hello World!
print("Hello, World!")

# Variables and Data Types
int_var = 10
float_var = 10.5
string_var = "Hello, Python!"
list_var = [1, 2, 3, 4]
tuple_var = (1, 2, 3, 4)
dict_var = {"key1": "value1", "key2": "value2"}
set_var = {1, 2, 3, 4}

# Basic Operators
a = 10
b = 5
print("Arithmetic Operators:")
print(f"a + b = {a + b}")
print(f"a - b = {a - b}")
print(f"a * b = {a * b}")
print(f"a / b = {a / b}")

print("Comparison Operators:")
print(f"a == b: {a == b}")
print(f"a != b: {a != b}")

print("Logical Operators:")
print(f"a > b and b > 0: {a > b and b > 0}")
print(f"a > b or b < 0: {a > b or b < 0}")

# Control Flow
if a > b:
    print("a is greater than b")
elif a < b:
    print("a is less than b")
else:
    print("a is equal to b")

# Loops
print("For Loop:")
for i in range(5):
    print(i)

print("While Loop:")
i = 0
while i < 5:
    print(i)
    i += 1

# Functions
def add(x, y):
    return x + y

result = add(10, 20)
print(f"Function result: {result}")

# Error Handling
try:
    division = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
finally:
    print("Error handling complete.")

# Lists
list_var.append(5)
print("List after appending:", list_var)
print("List slicing:", list_var[1:4])

# Tuples
print("Tuple:", tuple_var)
print("Tuple index 2:", tuple_var[2])

# Dictionaries
dict_var["key3"] = "value3"
print("Dictionary after adding:", dict_var)
print("Dictionary value for 'key1':", dict_var["key1"])

# Sets
set_var.add(5)
print("Set after adding:", set_var)
print("Set union with {6, 7}:", set_var.union({6, 7}))

# Classes and Objects
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."

person = Person("Alice", 30)
print(person.greet())

# Inheritance
class Employee(Person):
    def __init__(self, name, age, employee_id):
        super().__init__(name, age)
        self.employee_id = employee_id

    def greet(self):
        return f"Hello, I am employee {self.employee_id}. {super().greet()}"

employee = Employee("Bob", 28, "E123")
print(employee.greet())

# Polymorphism
class Animal:
    def speak(self):
        return "Animal speaks"

class Dog(Animal):
    def speak(self):
        return "Dog barks"

animal = Animal()
dog = Dog()

print(animal.speak())
print(dog.speak())

# Encapsulation
class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # Private attribute

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            return f"Deposited {amount}, new balance is {self.__balance}"
        return "Invalid amount"

    def get_balance(self):
        return self.__balance

account = BankAccount(100)
print(account.deposit(50))
print("Balance:", account.get_balance())

# Abstraction
from abc import ABC, abstractmethod

class AbstractShape(ABC):
    @abstractmethod
    def area(self):
        pass

class Rectangle(AbstractShape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

rect = Rectangle(5, 10)
print(f"Rectangle area: {rect.area()}")
