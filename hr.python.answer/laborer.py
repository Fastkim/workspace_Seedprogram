class Laborer:
    def __init__(self, laborerId, laborerName, hireDate):
        self.laborerId = laborerId
        self.laborerName = laborerName
        self.hireDate = hireDate
    
    def getLaborerId(self):
        return self.laborerId
    
    def getLaborerName(self):
        return self.laborerName

    def getHireDate(self):
        return self.hireDate
    
    def setLaborerId(self, laborerId):
        self.laborerId = laborerId
    
    def setLaborerName(self, laborerName):
        self.laborerName = laborerName

    def setHireDate(self, hireDate):
        self.hireDate = hireDate
    
    def __str__(self):
        return f'{self.laborerId:>3}    {self.laborerName:<5}   {self.hireDate}'


