import pandas as pd
import numpy as np
from sklearn.neighbors import KNeighborsRegressor
from sklearn.model_selection import train_test_split

samsung = pd.read_csv('full_samsung.csv', index_col='date')
samsung = samsung.sort_index()

data = []
target = []

for i in range(len(samsung) - 1):
    a = list(samsung.iloc[i])
    b = samsung.iloc[i+1, 0]
    data.append(a)
    target.append(b)
    # print(a, b)

data = np.array(data)
target = np.array(target)

train_input, test_input, train_target, test_target = train_test_split(data, target, test_size=0.2)
print(train_input.shape, test_input.shape)

knn = KNeighborsRegressor()
knn.fit(train_input, train_target) # fit이 모델을 학습시키는 명령어
print(knn.score(test_input, test_target))

# print(data)
# print(target)

# knn = KNeighborsRegressor()
# knn.fit(data, target)

# price = knn.predict([[72200, 1300, 71700, 72200, 71600, 12161798]])
# print(price)