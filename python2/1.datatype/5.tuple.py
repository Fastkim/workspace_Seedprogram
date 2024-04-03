box = (1, 3, 5, 4, 2)

# indexing
print(box[0])
print(box[-1])

# slicing
print(box[2:4])
print(box[1:])
print(box[:3])


# box.append(10) # tuple에서는 append가 불가능, list로 변환해서 삽입해야함.
# print(box)


box = list(box) #casting, tuple -> list
box.append(10)
print(box)

box = tuple(box)
print(box)
