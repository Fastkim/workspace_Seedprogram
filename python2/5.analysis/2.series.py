import pandas as pd

df = pd.read_csv('gapminder.tsv', sep='\t')

print(df)

lifeExp = df['lifeExp']
print(lifeExp)

print(lifeExp.mean()) #평균값
print(lifeExp.median()) # 중앙값
print(lifeExp.min()) # 최솟값
print(lifeExp.max()) # 최댓값
print(lifeExp.std()) # 표준편차

print(lifeExp.describe()) # 위를 모아놓은 패키지

print(lifeExp.drop_duplicates()) # 중복되는 내용 제거

# csv (comma seperated value) : 각각의 값을 ,(컴마)로 구분해서 데이터에저장하는 방식 (보편적인 방식)
# tsv (tab seperated value) : 탭으로 구분
# 2차원 형태 데이터 타입 : dataFrame
# 1차원 형태 데이터 타입 : Series
# 둘다 분석을 하는 도구이며, 앱을 만드는 목적 : python , 보고서를 만드는데 쓰는 목적 : R

print(lifeExp[lifeExp > lifeExp.mean()]) # 조건문

print(lifeExp.sort_values()) # 오름차순 정렬
print(lifeExp.sort_values(ascending=False)) # 내림차순 정렬

print(lifeExp + 100)