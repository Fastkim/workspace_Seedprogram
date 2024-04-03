import pickle

box = [1, 3, 5, 4, 2]

# myData.dat 파일은 binary타입이기때문에 vscode에서 볼수없음.(not text)
f = open('myData.dat', 'wb') # c:\DEB\workspace\python> 에 f 객체 생성 , write binary(wb)
pickle.dump(box, f) # dumptruck의 dump이다. box데이터를 f에 덤프트럭에 담아서 보낸다.
f.close() # f객체를 닫는다. 죽기직전에 자신의 내용을 'myData.dat'에 다 쏟아낸다.