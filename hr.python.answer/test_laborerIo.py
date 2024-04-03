from laborerDao import LaborerDao
from laborerIo import LaborerIo

LaborerIo = LaborerIo(LaborerDao())

LaborerIo.play()