from PyQt5.QAxContainer import QAxWidget
from PyQt5.QtCore import QEventLoop
from PyQt5.QtWidgets import QApplication
import sys, time
import pandas as pd

class kiwoom(QAxWidget):
    def __init__(self):
        super().__init__()
        self.regKey()
        self.regHandlers()
        self.login()
    
    def regKey(self):
        self.setControl('KHOPENAPI.KHOpenAPICtrl.1')

    def regHandlers(self):
        self.OnEventConnect.connect(self.onLogin)
        self.OnReceiveTrData.connect(self.onResponse)

    def onResponse(self, screenno, rqname, trcode, rname, next):
        if next == '2': self.isnext = True
        else: self.isnext = False

        if rqname == '일봉':
            candles = []
            for i in range(self.GetRepeatCnt(trcode, rqname)):
                date = self.GetCommData(trcode, rqname, i, '일자').strip()
                close = self.GetCommData(trcode, rqname, i, '현재가').strip()
                open = self.GetCommData(trcode, rqname, i, '시가').strip()
                high = self.GetCommData(trcode, rqname, i, '고가').strip()
                low = self.GetCommData(trcode, rqname, i, '저가').strip()
                vol = self.GetCommData(trcode, rqname, i, '거래량').strip()
                candles.append([date, close, open, high, low, vol])
            self.response = candles
        
        self.el.exit()
        time.sleep(1) # 너무 빠르게 데이터를 불러오면 차단당함.

    def getCandles(self, stockCode):
        self.SetInputValue('종목코드', stockCode)
        self.SetInputValue('수정주가구분', '1')
        self.CommRqData('일봉', 'opt10081', 0, '0001')
        self.el.exec()
        candles = self.response
        time.sleep(1)

        while self.isnext:
            self.SetInputValue('종목코드', stockCode)
            self.SetInputValue('수정주가구분', '1')
            self.CommRqData('일봉', 'opt10081', 2, '0001')
            self.el.exec()
            candles += self.response
            time.sleep(0.3)
        
        df = pd.DataFrame(candles, columns=['date', 'close', 'open', 'high', 'low', 'vol']).set_index('date')
        df = df.drop_duplicates() # 중복데이터 제거
        df = df.sort_index() # 오름차순 정렬
        return df
        

    def onLogin(self, status):
        result = '키움증권 연결 '
        if status == 0: result += '성공'
        else: result += '실패'
        print(f'{result}했습니다.')
        self.el.exit()

    def login(self):
        self.CommConnect()
        self.el = QEventLoop()
        self.el.exec()

    def getAccNo(self):
        accNo = self.GetLoginInfo('ACCNO').split(';')[0]
        return accNo

    def getStockCodes(self, marketType): # marketType : cospi, cosdaq
        return self.GetCodeListByMarket(marketType).split(';')[:-1] # list의 마지막은 쓰레기이므로, 마지막 바로 전까지 [:-1]
    
    def getStockName(self, stockCode):
        return self.GetMasterCodeName(stockCode)

app = QApplication(sys.argv) # 부모창
kiwoom = kiwoom()

print(kiwoom.getCandles('005930')) #kcc code , 삼성전자 : 005930

app.exec()