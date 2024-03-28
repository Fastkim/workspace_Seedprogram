class Parent: #init 생성자는 자동으로 만들어주었다.
    def sing(self):
        print('la la')

father = Parent()
mother = Parent()

father.sing()
mother.sing()