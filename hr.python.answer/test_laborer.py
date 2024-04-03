from laborer import Laborer

laborer = Laborer(10, 'scott', '2025-05-05')
print(laborer)

laborer.setLaborerId(1)
laborer.setLaborerName('terry')
laborer.setHireDate('2024-04-04')

print(laborer.getLaborerId(), laborer.getLaborerName(), laborer.getHireDate())
print(laborer)