import requests  # para requisições http
import json  # para gerar JSON a partir de objetos do Python
import re
from bs4 import BeautifulSoup  # extrair dados de HTML
import re



headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36"
    
}

requisicaoDePagina = requests.get('https://www.gsuplementos.com.br/proteina/', headers=headers)

conteudo = requisicaoDePagina.content

#mostra o tipo Pyhton da página
# print(type(requisicaoDePagina.content))

#joga para a variável site todo o conteúdo da página passada pelo requests.get()
site = BeautifulSoup(conteudo, 'html.parser')

#imprime o site inteiro, como o original 
# print(site)

#joga para a variável produtos todos os elementos "article", que é onde está cada produto

produtos = site.find_all('div', {'class': 'cardprod'})

resposta = []

for produto in produtos:
    a = produto.find('a')
    link = f'https://www.gsuplementos.com.br/{a["href"]}' if a else None
    
    img = produto.find('img')
    figura = img['src']

    h3 = produto.find('h3', {'class': 'cardprod-nomeProduto-t1'})
    titulo = h3.get_text(strip=True)

    ul = produto.find('ul', {'class': 'cardProd-descricaoProduto'})
    lis = ul.find_all('li')

    precoSpan = produto.find('span', {'class': 'cardprod-valor'})
    offSpan = precoSpan.find('span')

    off = offSpan.getText(strip=True)
    precoPix = precoSpan.getText(strip=True).replace(off, '')

    beneficios = []
    for li in lis:
        beneficios.append(li.get_text(strip=True).replace('\xa0', ' '))

    precoCartaoSpan = produto.find('span', {'class': 'cardprod-valorCartao'})
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


with open('produtos.json', 'w', encoding='utf-8') as arquivo:
    json.dump(resposta, arquivo, indent=4, ensure_ascii=False)

print("Created Json File")
