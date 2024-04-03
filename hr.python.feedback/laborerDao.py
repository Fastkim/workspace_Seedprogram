import file
from laborer import Laborer

class LaborerDao: #Dao : Data access object
    def __init__(self): # 객체가 생성될때 자동으로 call 되는 init
        self.laborers = file.load('laborers.dat') # 하드코딩 : 'laborers.dat' 변수가 아닌 고정되어있다.
        self.laborerIdSeq = file.load('laborerIdSeq.dat')

        if not self.laborers: self.laborers = [] # Seq : sequence => 순차적으로 값을 생성한다는 의미.
        if not self.laborerIdSeq: self.laborerIdSeq = 0

    def __del__(self):   # 죽기전에 실행되는 녀석
        file.save(self.laborers, 'laborers.dat')
        file.save(self.laborerIdSeq, 'laborerIdSeq.dat')

    def selectLaborers(self):
        return self.laborers
    
    def selectLaborer(self, laborerId):  # 값이 변하지않을것같은 data를 key로 설정한다.(laborerId)
        laborer = None
        laborers = list(filter(lambda laborer:
                               laborer.getLaborerId() == laborerId, self.laborers))
        
        if laborers:
            laborer = laborers[0]

        return laborer
    
    def insertLaborer(self, laborerName, hireDate):
        self.laborerIdSeq += 1 # Id 번호 +1 추가
        self.laborers.append(Laborer(self.laborerIdSeq, laborerName, hireDate))
        
    def updateLaborer(self, laborer):
        laborerTmp = self.selectLaborer(laborer.getLaborerId()) # Tmp(temporary) : 임시적인 
        if laborerTmp:
            laborerTmp.setLaborerName(laborer.getLaborerName())
            laborerTmp.setHireDate(laborer.getHireDate())
        else: raise LookupError() # raise : error를 발생시키고 싶을때 사용, LookupError() : 매핑 또는 시퀀스에 사용된 키 또는 인덱스가 잘못되었을때 발생하는 예외 클래스
    
    def deleteLaborer(self, laborerId):
        laborer = self.selectLaborer(laborerId)
        if laborer:
            self.laborers.remove(laborer)
        else: raise LookupError()
        
    