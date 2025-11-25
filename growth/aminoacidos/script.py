import requests  # para requisições http
import json  # para gerar JSON a partir de objetos do Python
import os
from bs4 import BeautifulSoup  # extrair dados de HTML
import re



headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36"
    
}

requisicaoDePagina = requests.get('https://www.gsuplementos.com.br/aminoacidos/', headers=headers)

conteudo = requisicaoDePagina.content

#mostra o tipo Pyhton da página
# print(type(requisicaoDePagina.content))

#joga para a variável site todo o conteúdo da página passada pelo requests.get()
site = BeautifulSoup(conteudo, 'html.parser')

#imprime o site inteiro, como o original 
# print(site)

#joga para a variável produtos todos os elementos "article", que é onde está cada produto

produtos = site.find_all('div', {'class': 'card-wrapper'})

resposta = []

for produto in produtos:
    a = produto.find('a')
    link = f'https://www.gsuplementos.com.br{a["href"]}' if a else None
    
    img = produto.find('img')
    figura = img['src']

    card_name = produto.find('a', {'class': 'card__name'})
    titulo = card_name.get_text(strip=True)

    ul = produto.find('ul', {'class': 'characteristics'})
    lis = ul.find_all('li')



    precoSpan = produto.find('span', {'class': 'price'})
    offSpan = produto.find('span', {'class':  'discount-percent'})

    off = offSpan.getText(strip=True)
    precoPix = precoSpan.getText(strip=True).replace(off, '')

    beneficios = []
    for li in lis:
        beneficios.append(li.get_text(strip=True).replace('\xa0', ' '))

    precoCartaoSpan = produto.find('p', {'class': 'card__prices-condition'})
    bs = precoCartaoSpan.find_all('b')

    precoCartao = bs[0].get_text(strip=True)
    parcelamento = 'Até ' + bs[1].get_text(strip=True)

    responseProduct = requests.get(link, headers=headers)
    productContent = responseProduct.content

    dados = {
        'TITULO': titulo,
        'LINK': link,
        'FIGURA': figura,
        'PRECO_PRINCIPAL': precoCartao,
        'PARCELAMENTO': parcelamento,
        'PRECO_PIX': precoPix,
        'OFF': off,
        'BENEFICIOS': beneficios,
    }

    resposta.append(dados)


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
path_arquivo = os.path.join(BASE_DIR, "produtos.json")

with open(path_arquivo, 'w', encoding='utf-8') as arquivo:
    json.dump(resposta, arquivo, indent=4, ensure_ascii=False)

print("Created Json File")
