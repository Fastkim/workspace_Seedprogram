import pandas as pd # pandas 모듈의 별칭을 pd로 설정

s = pd.Series([10, 20, 30]) # Series로 순수한 list를 랩핑
print(s)

s = pd.Series([1, 2, 3], index=['a', 'b', 'c']) # index 값이 Series의 key로 사용, key를 직접 지정할 수 있음, 주식에서 Series 사용 : 날짜(key)와 주가(value)
print(s)

#날짜를 key로 사용할 예정
date = ['2024/04/01', '2024/04/02', '2024/04/03']
date = pd.to_datetime(date, format='%Y/%m/%d') # 날짜타입은 숫자나 문자가 아니므로 format으로 알려주어야함.
print(date)
# to_datetime, Series 모두 pandas 모듈 개발자가 만든 function과 클래스, 파이썬이 아니다.
price = [50000, 55000, 60000]

stock = pd.Series(price, index=date)
print(stock)

print(stock.index)
print(stock.values)