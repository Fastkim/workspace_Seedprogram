import pickle
# binary 타입 파일(myData.dat)을 읽어오는 방법

f = open('myData.dat', 'rb') # f객체가 디스크상의 파일하고 대화를 하고, 개발자는 f객체를 활용해서 read write한다.
data = pickle.load(f)

print(data)