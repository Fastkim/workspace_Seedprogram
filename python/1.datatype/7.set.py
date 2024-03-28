# set은 키가없다.
a = set([1, 2, 3]) # key가 없으므로 index도 없다.
print(a)

b = set('hello world') # parameter 는 list
print(b)

a = set([1, 2, 3])
b = set([3, 4, 5])
print(a & b) # 교집합
print(a | b) # 합집합
print(a - b) # 차집합

a.add(7)
print(a)

b.update([7, 8])
print(b) # 합집합

b.remove(7)
print(b)