from PyQt5.QAxContainer import QAxWidget
from PyQt5.QtCore import QEventLoop
from PyQt5.QtWidgets import QApplication
import sys

class Kiwoom(QAxWidget):
    def __init__(self):
        super().__init__() #  super() : 부모를 나타냄
        self.regKey()
        self.regHandlers()
        self.login() # 생성자에서 자동으로 call하도록 추가

    def regKey(self):
        self.setControl('KHOPENAPI.KHOpenAPICtrl.1')

    def regHandlers(self):
        self.OnEventConnect.connect(self.onLogin)

    def onLogin(self, status):
        result = '키움증권 연결'
        if status == 0: result += '성공'
        else: result += '실패'
        print(f'{result}했습니다.')
        self.el.exit() # Eventloop 종료

    def login(self):
        self.CommConnect() # QAxWidget 에서 상속받은 메서드
        self.el = QEventLoop()
        self.el.exec()

    def getAccNo(self):
        accountNo = self.GetLoginInfo('ACCNO').split(';')[0]
        return accountNo
    
    def getStockCodes(self, marketType):
        return self.GetCodeListByMarket(marketType).split(';')[:-1] # 코스피에 있는 종목들
    
    
app = QApplication(sys.argv)
kiwoom = Kiwoom()

# print(kiwoom.getStockCodes('0')) # 코스피
print(kiwoom.getStockCodes('10')) # 코스닥

app.exec()
    