box = [1, 2, 3]
for num in box:
    # print(num) , 세로로 출력
    print(num, end=' ') # 가로로 출력

print() # 줄바꿈
for num in [1, 2, 3]:
    print(num, end=',')

print()
for num in range(1, 4): # 1이상 4미만
    print(num, end=' ')

print()
for num in range(1, 5, 2): #range(1, 5, 1= default)
    print(num, end=' ')

print()
dic = {'월드콘': 2000, '붕어': 3000, '메로나': 1000}
for key in dic: # dictionary 상태에서는 key, value를 모두 얻어낼수는 없다.
    print(key, end=' ')

print()
for key, val in dic.items(): # key,value를 얻기위해 items를 사용
    print(key, val, end=',')