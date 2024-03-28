class Parent:
    def sing(self):
        print('la la.')

class Child(Parent):
    pass


boy = Child() # 객체생성
boy.sing() # 상속하여 부모함수를 사용