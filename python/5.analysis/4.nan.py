import pandas as pd
from numpy import NaN, NAN, nan

print(nan == False)

print(pd.isnull(nan))
print(pd.isnull(0))

print(pd.notnull(nan))
print(pd.notnull(0))

df = pd.read_csv('country_timeseries.csv')
df.info()

print(df.iloc[0:5, 0:5]) # 0 이상 5미만

print(df.fillna(0).iloc[:5, :5]) # nan이 0으로 바뀌었다.

print(df.fillna(method='ffill').iloc[0:5, :5]) # ffill : front fill , 앞의 값으로 NaN이 채워진다.
print(df.fillna(method='bfill').iloc[0:5, :5]) # bfill : back fill , 뒤의 값으로 NaN이 채워진다.


df['Date'] = pd.to_datetime(df['Date']) # date 포맷 변경
print('여기야')
print(df['Date'])
print(df.fillna(df.mean()).iloc[:5, :5]) # NaN을 평균값으로 채워라

date = ['20240301', '2024/03/02', '2024/03/03', '2024/03/04', '2024/03/03']
date = pd.to_datetime(date, format='%Y/%m/%d')
print(date)
print('여기')
values = [1, nan, nan, 10,'dsa']
series = pd.Series(values, index=date)
print(series)

series = series.interpolate(method='time')
print(series)

df = pd.read_csv('country_timeseries.csv')
print(df.dropna())
print(df['Day'])
idx = df[df['Day'] == 100].index # 조건에 만족하는 index를 구하는것
print(idx)

print(df.drop(idx).iloc[:, :3])
