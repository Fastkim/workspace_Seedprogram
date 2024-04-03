def forward(pos):
    return pos + 20

position = forward(0)
print(position)

class SuperMario:
    def __init__(self): #constructor (생성자), init function을 생략할경우 자동으로 생성해줌.
        self.position = 0

    def forward(self):
        self.position = self.position + 20 # member variable , write = read + 20

mario = SuperMario() # 객체생성
mario.forward() # mario.forward(mario) 의미
print(mario.position)