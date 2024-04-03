import pandas as pd
from numpy import NaN, NAN, nan

print(nan == False)

print(pd.isnull(nan))
print(pd.isnull(0))

print(pd.notnull(nan))
print(pd.notnull(0))

df = pd.read_csv('country_timeseries.csv')
df.info()

print(df.iloc[0:5, 0:5]) # 0 이상 5 미만

print(df.fillna(0).iloc[:5, :5]) # nan이 0으로 바뀌었다.

print(df.fillna(method='ffill').iloc[0:5, :5]) # ffill : front fill , 앞의 값으로 NaN이 채워진다.
print(df.fillna(method='bfill').iloc[0:5, :5]) # bfill : back fill , 뒤의 값으로 NaN이 채워진다.

df['Date'] = pd.to_datetime(df['Date']) # date 포맷 변경
print(df.fillna(df.mean()).iloc[:5, :5]) # NaN을 평균값으로 채워라

date = ['2024/03/01', '2024/03/02', '2024/03/03', '2024/03/04']
date = pd.to_datetime(date, format='%Y/%m/%d')

values = [1, nan, nan, 10]
series = pd.Series(values, index=date)
print(series)

series = series.interpolate(method='time') # 값의 패턴을 임의적으로 만드는방법
print(series)

df = pd.read_csv('country_timeseries.csv')
print(df.dropna()) # NaN이 포함된 row는 모두 제거하고 NaN이 1개도 포함되지 않은 행만 출력

idx = df[df['Day'] > 100].index # 조건에 만족하는 index를 구하는것
print(idx)

print(df.drop(idx).iloc[:, :3])