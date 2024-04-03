from laborerDao import LaborerDao
from laborerIo import LaborerIo

laborerIo = LaborerIo(LaborerDao())

laborerIo.play()
