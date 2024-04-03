from laborerDao import LaborerDao
from laborer import Laborer

laborerDao = LaborerDao()

laborerDao.insertLaborer('terry', '2024-04-04')
laborerDao.insertLaborer('scott', '2025-05-05')
laborerDao.insertLaborer('adam', '2026-06-06')

for laborer in laborerDao.selectLaborers():
    print(laborer)

print()
laborerDao.updateLaborer(Laborer(2, 'hoi', '2027-07-07'))

print()
laborerDao.deleteLaborer(2)

for laborer in laborerDao.selectLaborers():
    print(laborer)
