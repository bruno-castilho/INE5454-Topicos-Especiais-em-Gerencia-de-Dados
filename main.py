import subprocess

scripts = [
    "./growth/script.py",
    "./integralmedica/script.py",
    "./max/script.py",
]

for s in scripts:
    subprocess.run(["python3", s])