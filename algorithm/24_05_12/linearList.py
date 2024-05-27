katok = ["다현", "정연", "쯔위", "사나", "지효"]


def insert_data(position, friend):

    if position<0 or position> len(katok):
        print("데이터를 삽입할 범위를 벗어났습니다.")
        return
    
    katok.append(None)       # 빈칸 추가
    kLen = len(katok)        # 배열의 현재크기

    for i in range(kLen-1, position, -1):
        katok[i] = katok[i-1]
        katok[i-1] = None
    
    katok[position] = friend  # 지정한 위치에 친구 추가

insert_data(2, '솔라')
print(katok)
insert_data(6, '문별')
print(katok)

def delete_data(position):

    if position < 0 or position > len(katok):
        print("데이터를 삭제할 범위를 벗어났습니다.")
        return
    
    kLen = len(katok)
    katok[position] = None # position 자리 값 없애고

    for i in range(position+1, kLen):
        katok[i-1] = katok[i] # 한칸씩 땡겨와
        katok[i] = None # 땡겨온 자리 값 비우고
    
    del(katok[kLen-1])

delete_data(1)
print(katok)
delete_data(3)
print(katok)
    
