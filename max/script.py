import subprocess

scripts = [
    "growth/aminoacidos/script.py",
    "growth/carboidratos/script.py",
    "growth/pre-treino/script.py",
    "growth/proteinas/script.py",
    "growth/termogenico/script.py",
    "growth/vitaminas/script.py",
    "growth/outlet/script.py",
]

for s in scripts:
    subprocess.run(["python3", s])