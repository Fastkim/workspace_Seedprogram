import pandas as pd

df =pd.read_csv('gapminder.tsv', sep='\t')
a = (df['country']) # column name이 1개, return type은 Series
b = (df[['country', 'year']]) # column name을 n개를 쓸때는 list로 표현, return type은 DataFrame

# 여러줄 주석 하기 : Ctrl + K + C, 여러줄 주석 해제 : Ctrl + K + U

print(df)
#       country continent  year  lifeExp       pop   gdpPercap
# 0     Afghanistan      Asia  1952   28.801   8425333  779.445314
# 1     Afghanistan      Asia  1957   30.332   9240934  820.853030
# 2     Afghanistan      Asia  1962   31.997  10267083  853.100710
# 3     Afghanistan      Asia  1967   34.020  11537966  836.197138
# 4     Afghanistan      Asia  1972   36.088  13079460  739.981106
# ...           ...       ...   ...      ...       ...         ...
# 1699     Zimbabwe    Africa  1987   62.351   9216418  706.157306
# 1700     Zimbabwe    Africa  1992   60.377  10704340  693.420786
# 1701     Zimbabwe    Africa  1997   46.809  11404948  792.449960
# 1702     Zimbabwe    Africa  2002   39.989  11926563  672.038623
# 1703     Zimbabwe    Africa  2007   43.487  12311143  469.709298

c = df.loc[0] # loc[row index], Name field value == 0 , loc : 특정 row값을 return
print(c)
# country      Afghanistan
# continent           Asia
# year                1952
# lifeExp           28.801
# pop              8425333
# gdpPercap     779.445314

d = df.iloc[0] # 0번째 row, return type Series, 행렬의 순번을 사용
print(d)
# country      Afghanistan
# continent           Asia
# year                1952
# lifeExp           28.801
# pop              8425333
# gdpPercap     779.445314
# Name: 0, dtype: object

e = df.loc[[0, 10, 100]]
print(e)
#          country continent  year  lifeExp       pop   gdpPercap
# 0    Afghanistan      Asia  1952   28.801   8425333  779.445314
# 10   Afghanistan      Asia  2002   42.129  25268405  726.734055
# 100   Bangladesh      Asia  1972   45.252  70759295  630.233627

f = df.iloc[[0, 10, 100]]
print(f)
#          country continent  year  lifeExp       pop   gdpPercap
# 0    Afghanistan      Asia  1952   28.801   8425333  779.445314
# 10   Afghanistan      Asia  2002   42.129  25268405  726.734055
# 100   Bangladesh      Asia  1972   45.252  70759295  630.233627

g = df.loc[[0, 10, 100], ['country', 'year']] # [[rows], [columns]]
print(g)
#          country  year
# 0    Afghanistan  1952
# 10   Afghanistan  2002
# 100   Bangladesh  1972

h = df.iloc[[0, 10, 100], [0, 2]] # iloc의 경우 index로 불러오기때문에 column도 index로 표현할수있다.
print(h)
#          country  year
# 0    Afghanistan  1952
# 10   Afghanistan  2002
# 100   Bangladesh  1972

print(df['year'].mean()) # 1979.5
print(df[df['year'] > df['year'].mean()])

# 데이터 통합
df1 = pd.read_csv('concat_1.csv')
df2 = pd.read_csv('concat_2.csv')
df3 = pd.read_csv('concat_3.csv')

result = pd.concat((df1, df2, df3)) # 데이터 통합하기, name field는 통합안됨. 0 1 2 3 0 1 2 3
print(result)

result = pd.concat([df1, df2, df3], ignore_index=True) # name field도 통합 0 1 2 3 4 5 6 7
print(result)

result = pd.concat([df1, df2, df3], axis=1) # axis=1 중심축을 column으로, axis=0 중심축을 행으로
print(result)

result = pd.concat([df1, df2, df3], axis=1, ignore_index=True)
print(result)

site = pd.read_csv('site.csv')
visited = pd.read_csv('visited.csv')

result = visited.merge(site, left_on='site', right_on='name') # join site == name 일때 출력, sql에서는 innerjoin이라고 함.
print(result)
