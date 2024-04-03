import file
from laborer import Laborer


class LaborerDao:
    def __init__(self):
        self.laborers = file.load('laborers.dat')
        self.laborerIdSeq = file.load('laborerIdSeq.dat')

        if not self.laborers: self.laborers = []
        if not self.laborerIdSeq: self.laborerIdSeq = 0
    
    def __del__(self):
        file.save(self.laborers, 'laborers.dat')
        file.save(self.laborerIdSeq, 'laborerIdSeq.dat')
    
    def selectLaborers(self):
        return self.laborers
    
    def selectLaborer(self, laborerId):
        laborer = None
        laborers = list(filter(lambda laborer:
                               laborer.getLaborerId() == laborerId, self.laborers))
        
        if laborers:
            laborer = laborers[0]

        return laborer
    
    def insertLaborer(self, laborerName, hireDate):
        self.laborerIdSeq += 1
        self.laborers.append(Laborer(self.laborerIdSeq, laborerName, hireDate))
    
    def updateLaborer(self, laborer):
        laborerTmp = self.selectLaborer(laborer.getLaborerId())
        if laborerTmp:
            laborerTmp.setLaborerName(laborer.getLaborerName())
            laborerTmp.setHireDate(laborer.getHireDate())
        else: raise LookupError()
    
    def deleteLaborer(self, laborerId):
        laborer = self.selectLaborer(laborerId)
        if laborer:
            self.laborers.remove(laborer)
        else: raise LookupError()