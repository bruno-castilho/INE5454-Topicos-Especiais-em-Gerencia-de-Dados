import subprocess
import json
import os

scripts = [
    "./growth/script.py",
    "./integralmedica/script.py",
    "./max/script.py",
]

for s in scripts:
    subprocess.run(["python3", s])

jsons_growth = [
    "./growth/acessorios/produtos.json",
    "./growth/aminoacidos/produtos.json",
    "./growth/carboidratos/produtos.json",
    "./growth/outlet/produtos.json",
    "./growth/pre-treino/produtos.json",
    "./growth/proteinas/produtos.json",
    "./growth/termogenico/produtos.json",
    "./growth/vitaminas/produtos.json",
]

jsons_max = [
    "./max/aminoacidos/produtos.json",
    "./max/carboidratos/produtos.json",
    "./max/outlet/produtos.json",
    "./max/pre-treino/produtos.json",
    "./max/proteinas/produtos.json",
    "./max/termogenico/produtos.json",
    "./max/vitaminas/produtos.json",
]

jsons_integralmedica = [
    "./integralmedica/acessorios/produtos.json",
    "./integralmedica/aminoacidos/produtos.json",
    "./integralmedica/carboidratos/produtos.json",
    "./integralmedica/outlet/produtos.json",
    "./integralmedica/pre-treino/produtos.json",
    "./integralmedica/proteinas/produtos.json",
    "./integralmedica/termogenico/produtos.json",
    "./integralmedica/vitaminas/produtos.json",
]


categorias = {
    'aminoacidos': 'AMINOACIDOS',
    'acessorios': 'ACESSORIOS',
    'carboidratos': 'CARBOIDRATOS',
    'outlet': 'OUTLET',
    'pre-treino': 'PRETREINO',
    'proteinas': 'PROTEINAS',
    'termogenico': 'TERMOGENICOS',
    'vitaminas': 'VITAMINAS',
}

produtos = []

for caminho in jsons_growth:  
    print(caminho)    
    
    with open(caminho, "r", encoding="utf-8") as f:
        conteudo = json.load(f)
        categoria = caminho.split("/")[2]

        for item in conteudo:
            item["MARCA"] = "GROWTH"
            item['CATEGORIA'] = categorias[categoria]

        produtos.extend(conteudo)

for caminho in jsons_max:  
    print(caminho)    
    
    with open(caminho, "r", encoding="utf-8") as f:
        conteudo = json.load(f)
        categoria = caminho.split("/")[2]

        for item in conteudo:
            item["MARCA"] = "MAX"
            item['CATEGORIA'] = categorias[categoria]

        produtos.extend(conteudo)

for caminho in jsons_integralmedica:  
    print(caminho)    
    
    with open(caminho, "r", encoding="utf-8") as f:
        conteudo = json.load(f)
        categoria = caminho.split("/")[2]

        for item in conteudo:
            item["MARCA"] = "INTEGRALMEDICA"
            item['CATEGORIA'] = categorias[categoria]

        produtos.extend(conteudo)

        
print("Total de produtos:", len(produtos))

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
path_arquivo = os.path.join(BASE_DIR, "produtos.json")

with open(path_arquivo, 'w', encoding='utf-8') as arquivo:
    json.dump(produtos, arquivo, indent=4, ensure_ascii=False)