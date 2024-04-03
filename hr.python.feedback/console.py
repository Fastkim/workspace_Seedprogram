from datetime import datetime

def err(msg):
    print(f'ERROR] {msg}')

def inNum(msg):
    val = None # None 객체는 유일한값이므로 모든 None은 같은 None이다, variable을 초기화해주는 과정.
    while True:
        val = input(msg + '\n> ').strip()
        if val.isdecimal(): # isdecimal() : 문자열이 0~9까지의 수로 이루어져있는지 검사한다, 즉 int로 바로변환가능한 문자인지 검사
            val = int(val)
            break
        else:
            err('0 또는 자연수가 아닙니다.')
    return val

def inStr(msg, length=1): # 노동자명을 입력받는 함수, default=1 inStr('', 5) 5글자 이하로 데이터를 받게끔
    val = None
    while True:
        val = input(msg + '\n> ').strip()
        if val.isalnum() and len(val) <= length: # isalnum() : 문자열이 영어,한글,숫자로 되어있으면 참 리턴,아니면 거짓 리턴.
            break
        else:
            err(f'{length}자 이하 문자가 아닙니다.')
    return val

def inDate(msg): # 입사날짜 데이터 입력받는 함수
    val = None
    isGood = False
    while not isGood:
        val = input(msg + '\n> ').strip() # strip() : 공백 제거
        try:
            datetime.strptime(val, '%Y-%m-%d') # strptime() : 날짜와 시간 형식의 문자열을 datetime으로 변환한다.
            isGood = True
        except:
            err('날짜 형식(yyyy-mm-dd)이 아닙니다') 
    return val
