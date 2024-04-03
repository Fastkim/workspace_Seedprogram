import pickle

f = open('myData.dat', 'rb') # read binary(rb), f객체는 중간매개체
data = pickle.load(f)

print(data)
