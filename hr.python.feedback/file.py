import pickle

def save(val, filename='save.dat'):
    isGood = False # flag

    try:
        f = open(filename, 'wb') # wb = write binary
        pickle.dump(val, f) # dump() : dumptruck에 실어서 데이터 보내기
        isGood = True
    except:
        pass

    if isGood: result = '성공'
    else: result = '실패'

    print(f'{filename} 저장 {result}했습니다.')
    
def load(filename='save.dat'):
    val = None

    try:
        f = open(filename, 'rb')
        val = pickle.load(f) # load() : 데이터 불러오기
    except:
        pass # 예외가 발생하였을때 어떤 처리를 하지않고 지나가는것

    return val