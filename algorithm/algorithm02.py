list1 = [] # list�� ������ ������ ����
list2 = []


value = 1
for i in range(0, 3):
    for k in range(0, 4):
        list1.append(value)
        value +=1
    list2.append(list1)
    list1 = []


for i in range(0, 3):
    for k in range(0, 4):
        print("%3d"%list2[i][k], end = " ")
    print(" ")

sum = 0
for i in range(0, 3):
    for k in range(0, 4):
        sum += list2[i][k]

print("�迭�� �հ� ==>", sum)