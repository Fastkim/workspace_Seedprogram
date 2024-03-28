def add(x, y):
    return x + y
result = add(1, 2)
print(result)

def say():
    return 'hi'
print(say())

#
def add(x, y):
    print(x + y) # return 하지 않는 function

add(1, 2) # 함수 호출

#
def assign():
    a = 5 # local scope

a = 0
assign()
print(a) # global scope

#
def assign2():
    global b
    b = 5

b = 0
assign2()
print(b)

#
def introduce(myName, age, gender=1):
    print(f'{age}살 {myName}입니다.', end=' ')
    if gender == 1: print('남자')
    else: print('여자')

# introduce('최한석') parameter가 부족함
introduce('최한석', 12) # gender=1 (default)
introduce('최한석', 12, 2)