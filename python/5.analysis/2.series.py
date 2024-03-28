import pandas as pd

df = pd.read_csv('gapminder.tsv', sep='\t')

print(df)

lifeExp = df['lifeExp']
print(lifeExp)

print(lifeExp.mean()) # 평균값
print(lifeExp.median()) # 중앙값
print(lifeExp.min()) # 최솟값
print(lifeExp.max()) # 최댓값
print(lifeExp.std()) # 표준편차

print(lifeExp.describe())

print(lifeExp.drop_duplicates())

# csv (comma seperated value) : 각각의 값을 ,(컴마)로 구분해서 데이터저장하는 방식 (보편적인 방식)
# tsv (tab seperated value) : 탭으로 구분
# 2차원 형태 데이터 타입 : dataframe
# 1차원 형태 데이터 타입 : Series
# 둘다 분석을 하는 도구, 앱을만드는 목적 : python , 보고서를 만드는데 목적 : R

print(lifeExp[lifeExp > lifeExp.mean() ]) # 조건문, 조건문은 자주사용한다.

print(lifeExp.sort_values()) # 오름차순 정렬
print(lifeExp.sort_values(ascending=False)) # 내림차순 정렬

print(lifeExp + 100)
