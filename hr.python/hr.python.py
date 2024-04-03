import pandas as pd

while True:
    laborerData = pd.DataFrame()
    laborerDataRead = pd.read_csv('laborerData.csv', index_col=[0], sep=',')
    loopOut = 0

    def switch(key):
        if key == '1':
            laborerList()
        elif key == '2':
            laborerListAdd()
        elif key == '3':
            laborerListUpdate()
        elif key == '4':
            laborerListDelete()
        elif key == '0':
            global loopOut
            print('프로그램을 종료합니다.')
            loopOut = 1
            return
        else:
            print('1~5번 번호를 입력해주세요')
            
    def laborerList():
        if(laborerDataRead.empty):
            print('노동자가 없습니다.')
        else:
            print(laborerDataRead)

        
    def laborerListAdd():
        try:
            global laborerIdNumber
            global laborerName
            flag=False
            # laborerName= input('노동자명을 입력하세요: ')
            laborerName= input('노동자명을 입력하세요: ')
            if laborerName == '0':
                return
            while True:
                if(flag):
                    break
                    
                if(len(laborerName) > 5):
                    print('이름은 5글자 이내로 작성하세요')
                    laborerName= input('노동자명을 입력하세요: ')
                    if laborerName == '0':
                        return
                
                else:
                    startDateBefore = input('입사날짜를 입력해주세요: ')
                    if startDateBefore == '0':
                        return
                    startDate = pd.to_datetime(startDateBefore, format='%Y/%m/%d').date()
                    startDate = startDate.strftime("%Y-%m-%d")  
                    while True:
                        if(startDateBefore != startDate):
                            print('YYYY-MM-DD 형식으로 날짜를 입력해주세요. ')
                            startDateBefore = input('입사날짜를 입력해주세요: ')
                            if startDateBefore == '0':
                                return
                            startDate = pd.to_datetime(startDateBefore, format='%Y/%m/%d').date()
                            startDate = startDate.strftime("%Y-%m-%d")
                        else:
                            if(laborerDataRead.empty):
                                laborerIdNumber = 1
                            else:
                                laborerIdNumber = laborerDataRead.index.max() + 1
                            new_frame = {'laborerId': laborerIdNumber , 'laborerName':pd.Series([laborerName]), 'startDay': pd.Series([startDate])}
                            new_df = pd.DataFrame(new_frame)
                            new_df.to_csv('laborerData.csv' , mode='a', header=False, index=False)
                            print('등록을 완료하였습니다.')
                            flag = True
                            break
        except:
            print('오류가 발생하였습니다, 데이터를 타입에 맞게 다시 기입해주세요.')
            laborerListAdd()
    
        

    def laborerListUpdate():
        flag=False
        try:
            laborerId= input('변경할 계정의 ID 번호를 입력해주세요.: ')
            if laborerId == '0':
                return
            laborerName = input('변경할 이름을 입력하세요.: ')
            if laborerName == '0':
                return
            while True:
                if(flag):
                    break

                if(len(laborerName) > 5):
                    print('이름은 5글자 이내로 작성하세요')
                    laborerName= input('노동자명을 입력하세요: ')
                    if laborerName == '0':
                        return
                else:
                    startDateBefore = input('변경할 입사날짜를 입력해주세요: ')
                    if startDateBefore == '0':
                        return
                    startDate = pd.to_datetime(startDateBefore, format='%Y/%m/%d').date()
                    startDate = startDate.strftime("%Y-%m-%d")
                    while True:
                        if(startDateBefore != startDate):
                            print('YYYY-MM-DD 형식으로 날짜를 입력해주세요. ')
                            startDateBefore = input('변경할 입사날짜를 입력해주세요: ')
                            if startDateBefore == '0':
                                return
                            startDate = pd.to_datetime(startDateBefore, format='%Y/%m/%d').date()
                            startDate = startDate.strftime("%Y-%m-%d")
                        else:
                            laborerDataRead.loc[int(laborerId)] = [laborerName, startDate]
                            laborerDataRead['startDay'] = pd.to_datetime(laborerDataRead['startDay'])
                            laborerDataRead.to_csv('laborerData.csv' , mode='w')
                            print('수정을 완료하였습니다.')
                            flag=True
                            break
        except:
            print('오류가 발생하였습니다, 데이터를 타입에 맞게 다시 기입해주세요.')
            laborerListUpdate()
    
    
    def laborerListDelete():
        try:
            print(laborerDataRead)
            laborerId = input('삭제할 계정의 ID를 입력해주세요.: ')
            if laborerId == '0':
                return
            idx = laborerDataRead[laborerDataRead.index == int(laborerId)].index
            laborerDataRead.drop(idx, inplace=True)
            laborerDataRead.to_csv('laborerData.csv' , mode='w')
            print('삭제를 완료하였습니다.')
        except:
            print('오류가 발생하였습니다, 데이터를 타입에 맞게 다시 기입해주세요.')
            laborerListDelete()

    

    def menu():
        global number
        number = input('1.목록 2.추가 3.수정 4.삭제 0.종료: ')
        switch(number)

    menu()

    if(loopOut == 1):
        break



    




    
    
    
    