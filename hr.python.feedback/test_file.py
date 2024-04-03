import file

class Boy:
    pass

list = [2, 'world', False, Boy()]
file.save(list)
print(file.load())

file.save(101)
print(file.load())