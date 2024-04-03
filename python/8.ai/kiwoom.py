from PyQt5.QAxContainer import QAxWidget
from PyQt5.QtCore import QEventLoop
from PyQt5.QtWidgets import QApplication
import time
import pandas as pd
import numpy as np
import fidDic
from sklearn.ensemble import RandomForestRegressor

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
        self.OnReceiveTrData.connect(self.onResponse)
        self.OnReceiveMsg.connect(self.onMsg)


    def onResponse(self, screeno, rqname, trcode, rname, next):
        rowCnt = self.GetRepeatCnt(trcode, rqname)

        if next == '2': self.isnext = True # isnext , 600개가 넘는다면 next가 2가 되고, 안넘는다면 next는 0이된다.
        else: self.isnext = False

        if rqname == '일봉': # 분기작업, HR에서 했던
            candles = []
            for i in range(rowCnt): # range : list 자동생성
                date = self.GetCommData(trcode, rqname, i, '일자').strip() # trcode(transaction code), rqname(request name), 외부에서 건너오는 데이터는 일단 strip
                close = self.GetCommData(trcode, rqname, i, '현재가').strip()
                open = self.GetCommData(trcode, rqname, i, '시가').strip()
                high = self.GetCommData(trcode, rqname, i, '고가').strip()
                low = self.GetCommData(trcode, rqname, i, '저가').strip()
                volume = self.GetCommData(trcode, rqname, i, '거래량').strip()
                candles.append([date, close, open, high, low, volume])
            self.response = candles
        elif rqname == '예수금':
            deposit = self.GetCommData(trcode, rqname, 0, '주문가능금액')
            self.response = int(deposit)
        elif rqname == '주문':
            box = []
            for i in range(rowCnt):
                stockCode = self.GetCommData(trcode, rqname, i, '종목코드')
                stockName = self.GetCommData(trcode, rqname, i, '종목명')
                orderNo = self.GetCommData(trcode, rqname, i, '주문번호')
                orderStatus = self.GetCommData(trcode, rqname, i, '주문상태')
                orderQ = self.GetCommData(trcode, rqname, i, '주문수량')
                orderP = self.GetCommData(trcode, rqname, i, '주문가격')
                currentP = self.GetCommData(trcode, rqname, i, '현재가')
                orderType = self.GetCommData(trcode, rqname, i, '주문구분')
                leftQ = self.GetCommData(trcode, rqname, i, '미체결수량')
                executedQ = self.GetCommData(trcode, rqname, i, '체결량')
                orderTime = self.GetCommData(trcode, rqname, i, '시간')
                fee = self.GetCommData(trcode, rqname, i, '당일매매수수료')
                tax = self.GetCommData(trcode, rqname, i, '당일매매세금')

                stockCode = stockCode.strip()
                stockName = stockName.strip()
                orderNo = str(int(orderNo.strip()))
                orderStatus = orderStatus.strip()
                orderQ = int(orderQ.strip())
                orderP = int(orderP.strip())
                currentP = int(currentP.strip().lstrip('+').lstrip('-'))
                orderType = orderType.strip().lstrip('+').lstrip('-')
                leftQ = int(leftQ.strip())
                executedQ = int(executedQ.strip())
                orderTime = orderTime.strip()
                fee = int(fee)
                tax = int(tax)

                box.append([stockCode, stockName, orderNo, orderStatus, orderQ, orderP,
                            currentP, orderType, leftQ, executedQ, orderTime, fee, tax])
            self.response = box

        elif rqname == '잔고':
            box = []
            for i in range(rowCnt):
                stockCode = self.GetCommData(trcode, rqname, i, '종목번호')
                stockName = self.GetCommData(trcode, rqname, i, '종목명')
                quantity = self.GetCommData(trcode, rqname, i, '보유수량')
                buyP = self.GetCommData(trcode, rqname, i, '매입가')
                returnRate = self.GetCommData(trcode, rqname, i, '수익률(%)')
                currentP = self.GetCommData(trcode, rqname, i, '현재가')
                totBuyP = self.GetCommData(trcode, rqname, i, '매입금액')
                availableQ = self.GetCommData(trcode, rqname, i, '매매가능수량')

                stockCode = stockCode.strip()[1:]
                stockName = stockName.strip()
                quantity = int(quantity)
                buyP = int(buyP)
                returnRate = float(returnRate)
                currentP = int(currentP)
                toBuyP = int(totBuyP)
                availableQ = int(availableQ)

                box.append([stockCode, stockName, quantity, buyP, returnRate, currentP, toBuyP, availableQ])
            self.response = box

        self.el.exit() # 창 닫기
        time.sleep(1) # 1초동안 잠들게, request를 쉼없이 보내면 키움에서 차단당함.
    
    def getCandles(self, stockCode):
        self.SetInputValue('종목코드', stockCode)
        self.SetInputValue('수정추가구분', '1')
        self.CommRqData('일봉', 'opt10081', 0, '0001') # request 보내기.
        self.el.exec() # 창을하나 보내기, el(event loop), loop를 시작, javascript의 away 기능을 함.
        candles = self.response
        time.sleep(1)

        while self.isnext: # 600개가 넘으면 이 while문에 들어온다.
            self.SetInputValue('종목코드', stockCode)
            self.SetInputValue('수정추가구분', '1')
            self.CommRqData('일봉', 'opt10081', 2, '0001')
            candles += self.response
            time.sleep(1)
        
        df = pd.DataFrame(candles, columns=['date', 'close', 'open', 'high', 'low', 'volume']).set_index('date')
        df = df.drop_duplicates() # 중복제거
        df = df.sort_index() # 날짜로 정렬
        return df # 일봉으로 채워진 테이블이 return


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
    
    def getStockName(self, stockCode):
        return self.GetMasterCodeName(stockCode)
    
    def buy(self, stockCode):
        candles = self.getCandles(stockCode)

        if not candles.empty:
            data = []
            target = []

            for i in range(len(candles) - 1):
                a = list(candles.iloc[i])
                b = candles.iloc[i+1, 0]
                data.append(a)
                target.append(b)

            data = np.array(data)
            target = np.array(target)

            rf = RandomForestRegressor(oob_score=True)
            rf.fit(data, target) # fit : 훈련시키기

            lastedCandle = list(candles.iloc[-1])
            predictPrice = round(int(rf.predict([lastedCandle])[0]), -2)

            closePrice = int(candles.iloc[-1][0])
            if closePrice < predictPrice:
                stockName = self.getStockName(stockCode)
                print(f'{stockName}: {closePrice} -> {predictPrice}원 추천합니다.')
    

    def onMsg(self, screenno, rqname, trcode, msg):
        print(f'<{rqname}>: {msg}')