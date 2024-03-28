import pickle

box = [1, 3, 5, 4, 2]

f = open('myData.dat', 'wb') # C:\DEV\workspace\python> 에 f 객체 생성
pickle.dump(box, f) # dumptruck의 dump이다. box데이터를 f에 덤프트럭에 담아서 보낸다
f.close() # myData.dat 파일은 binary타입이기때문에 vscode에서 볼수없음.(not text)
