import requests  # para requisições http
import json  # para gerar JSON a partir de objetos do Python
import os
from bs4 import BeautifulSoup  # extrair dados de HTML
import re

requisicaoDePagina = requests.get('https://www.maxtitanium.com.br/produtos/aminoacidos')
conteudo = requisicaoDePagina.content

site = BeautifulSoup(conteudo, 'html.parser')

# pega todos os produtos
produtos = site.find_all("article")

resposta = []

for produto in produtos:
    if not 'product-card' in produto['class']:
        continue

    audRelative = produto.find("div", {'class': 'aud-relative'})
    a = audRelative.find("a") if audRelative else None
    link = f'https://www.maxtitanium.com.br{a["href"]}' if a else None
    figura = a.find("source")["srcset"] if a else None

    h3 = produto.find("h3", {'class': 'product-card__title'})
    titulo = h3.get_text(strip=True).replace('\xa0', ' ') if h3 else None

    spanPrecoAnterior = produto.find("span", {'class': 'product-card__pricefrom'})
    spanPrecoPrincipal = produto.find("span", {'class': 'product-card__priceper'})

    precoAnterior = spanPrecoAnterior.get_text(strip=True).replace('\xa0', ' ') if spanPrecoAnterior else None
    precoPrincipal = spanPrecoPrincipal.get_text(strip=True).replace('\xa0', ' ') if spanPrecoPrincipal else None

    if(not precoPrincipal): continue

    parcelamentoDiv = produto.find("div", {"class": 'product-card__installments'})
    parcelamento = parcelamentoDiv.get_text(strip=True).replace('\xa0', ' ') if parcelamentoDiv else None

    precoPixDiv = produto.find("div", {"class": 'aud-font-semibold'})
    precoPix = precoPixDiv.get_text(strip=True).replace('\xa0', ' ') if precoPixDiv else None

    offSpan = produto.find('span', {'class': 'tags-render__text'})
    off = offSpan.get_text() if offSpan else None

    responseProduct = requests.get(link)
    productContent = responseProduct.content

    soup = BeautifulSoup(productContent, 'html.parser')

    ref = soup.find('div', id=re.compile(r'-product-reference')).get_text()

    specifications = soup.find('div', id=re.compile(r'product-specifications'))
    descriptionDiv = specifications.find('div', {'class': 'content'})

    description = descriptionDiv.get_text() if descriptionDiv else ''


    div = soup.find('div', id='slot-5a3a63c9-a77f-4b0f-ae5e-797f77ac16ba')
    spans = div.find_all('span')

    benefits = []
    for span in spans:
        benefits.append(span.get_text())

    dados = {
        'TITULO': titulo,
        'LINK': link,
        'FIGURA': figura,
        'PRECO_ANTERIOR': precoAnterior,
        'PRECO_PRINCIPAL': precoPrincipal,
        'PARCELAMENTO': parcelamento,
        'PRECO_PIX': precoPix,
        'OFF': off,
        'REF': ref,
        'DESCRICAO': description,
        'BENEFICIOS': benefits,
    }

    resposta.append(dados)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
path_arquivo = os.path.join(BASE_DIR, "produtos.json")

with open(path_arquivo, 'w', encoding='utf-8') as arquivo:
    json.dump(resposta, arquivo, indent=4, ensure_ascii=False)

print("Created Json File")

