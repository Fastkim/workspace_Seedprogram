import menu
import console
from laborer import Laborer

class LaborerIo:
    def __init__(self, laborerDao):
        self.laborerDao = laborerDao
        menuTmp = ''
        for key, val in menu.menu.items():
            menuTmp += f'{key}.{val}    '
        self.menu = menuTmp
    
    def choose(self):
        choice = 0

        while True:
            choice = console.inNum(self.menu)
            if choice >= len(menu.menu):
                console.err('없는 메뉴 번호입니다.')
            else:
                break
        return choice
    
    def play(self):
        while True:
            choice = self.choose()
            if choice:
                if choice == 1: self.listLaborers()
                elif choice == 2: self.addLaborer()
                elif choice == 3: self.fixLaborer()
                elif choice == 4: self.delLaborer()
            else:
                break
    
    def listLaborers(self):
        laborers = self.laborerDao.selectLaborers()

        print('ID   이름    입사일')
        print('--------------------')

        if laborers:
            for laborer in laborers:
                print(laborer)
        else: print('노동자가 없습니다.')
    
    def addLaborer(self):
        laborerName = console.inStr('노동자명을 입력하세요.', 5)

        if laborerName != '0':
            hireDate = console.inDate('입사일을 입력하세요.')
            self.laborerDao.insertLaborer(laborerName, hireDate)
            print('노동자를 추가했습니다.')
        else: print('추가 취소합니다.')
    
    def fixLaborer(self):
        laborerId = console.inNum('노동자 ID를 입력하세요.')

        if laborerId:
            try:
                laborerName = console.inStr('노동자명을 입력하세요.', 5)
                hireDate = console.inDate('입사일을 입력하세요.')
                self.laborerDao.updateLaborer(Laborer(laborerId, laborerName, hireDate))
                print('노동자를 수정했습니다.')
            except LookupError: console.err('해당 노동자가 없습니다.')
        else: print('추가 취소합니다.')

    def delLaborer(self):
        laborerId = console.inNum('노동자 ID를 입력하세요.')

        if laborerId:
            try:
                self.laborerDao.deleteLaborer(laborerId)
                print('노동자를 삭제했습니다.')
            except LookupError: console.err('해당 노동자가 없습니다.')
        else: print('삭제 취소합니다.')