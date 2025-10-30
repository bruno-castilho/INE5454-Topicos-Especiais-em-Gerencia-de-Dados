import json

# Nome do arquivo de entrada (o que você já tem)
entrada = "../max/aminoacidos/produtos.json"

# Nome do arquivo de saída (no formato aceito pelo json-server)
saida = "db.json"

# Lê o array do arquivo original
with open(entrada, "r", encoding="utf-8") as f:
    dados = json.load(f)

# Cria o objeto com raiz "produtos"
db = {"produtos": dados}

# Salva no novo arquivo
with open(saida, "w", encoding="utf-8") as f:
    json.dump(db, f, ensure_ascii=False, indent=4)

print(f"Arquivo '{saida}' gerado com sucesso!")
