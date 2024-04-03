import pickle

def save(val, filename='save.dat'):
    isGood = False 

    try:
        f = open(filename, 'wb')
        pickle.dump(val, f)
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
        val = pickle.load(f)
    except:
        pass

    return val
