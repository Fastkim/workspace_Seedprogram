from datetime import datetime

def err(msg):
    print(f'ERROR] {msg}')

def inNum(msg):
    val = None
    while True:
        val = input(msg + '\n> ').strip()
        if val.isdecimal():
            val = int(val)
            break
        else:
            err('0 또는 자연수가 아닙니다.')
    return val

def inStr(msg, length=1):
    val = None
    while True:
        val = input(msg + '\n> ').strip()
        if val.isalnum and len(val) <= length:
            break
        else:
            err(f'{length}자 이하 문자가 아닙니다.')
    return val

def inDate(msg):
    val = None
    isGood = False
    while not isGood:
        val = input(msg + '\n> ')
        try:
            datetime.strptime(val, '%Y-%m-%d')
            isGood = True
        except:
            err('날짜 형식(yyyy-mm-dd)이 아닙니다.')
    return val

