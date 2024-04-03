box = [1, 2, 3]
print(box)

# indexing
print(box[0])
print(box[-1])

box[0] = 10
print(box)

# slicing
print(box[1:3]) #[이상 : 미만]
print(box[1:])
print(box[:3])

# append
box.append(5) # list 끝에 원소가 추가됨.
print(box)

# insert
box.insert(1, 1) # insert(index, 삽입할 값)
print(box)

# del
del box[0] # index
print(box)

box.append(3)
print(box)
box.remove(3) # value, 처음만나는 3만 제거
print(box)

# max, min
print(max(box))
print(min(box))

# sort
box = [3, 10, 4, 2]
box.sort() # 오름차순 정렬
print(box)

box.sort(reverse=True) # 내림차순 정렬
print(box)

box = ['car', 'apple', 'banana'] # a, b, c 순서
box.sort()
print(box)