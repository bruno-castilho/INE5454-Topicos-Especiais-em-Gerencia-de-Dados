import requests  # para requisições http
import json  # para gerar JSON a partir de objetos do Python
from bs4 import BeautifulSoup  # extrair dados de HTML
import os


requisicaoDePagina = requests.get('https://www.integralmedica.com.br/termogenico')

conteudo = requisicaoDePagina.content

#mostra o tipo Pyhton da página
# print(type(requisicaoDePagina.content))

#joga para a variável site todo o conteúdo da página passada pelo requests.get()
site = BeautifulSoup(conteudo, 'html.parser')

#imprime o site inteiro, como o original 
# print(site)

#joga para a variável produtos todos os elementos "article", que é onde está cada produto
produtos = site.find_all("section", class_='vtex-product-summary-2-x-container')

#imprime tipo Python de produtos
# print(type(produtos))


# cria uma variável do tipo lista para guardar os dados em um JSON
resposta = []

for produto in produtos:
    a = produto.find('a', {'class': 'vtex-product-summary-2-x-clearLink'})
    link = f'https://www.integralmedica.com.br{a["href"]}' if a else None

    img = produto.find('img')
    figura = img['src'] if img else None

    h2 = produto.find('h2')
    titulo = h2.get_text()

    spanPrecoAnterior = produto.find('span', {'class': 'vtex-product-price-1-x-listPriceValue'})
    precoAnterior = spanPrecoAnterior.get_text(strip=True).replace('\xa0', ' ') if spanPrecoAnterior else None
    
    spanPrecoPrincipal = produto.find('span', {'class': 'vtex-product-price-1-x-sellingPriceValue'})
    precoPrincipal = spanPrecoPrincipal.get_text(strip=True).replace('\xa0', ' ') if spanPrecoPrincipal else None

    if(not precoPrincipal): continue
    
    spanParcelamento = produto.find("span", {"class": 'vtex-product-price-1-x-installments'})
    parcelamento = spanParcelamento.get_text(strip=True).replace('\xa0', ' ') if spanParcelamento else None

    spanOff = produto.find("span", {'class': 'vtex-product-price-1-x-savingsPercentage'})
    off = spanOff.get_text() if spanOff else ''

    spans = produto.find_all('span', {'class': 'integralmedica-store-components-1-x-truncatedText'})

    benefits = []
    for span in spans:
        benefits.append(span.get_text())



    responseProduct = requests.get(link)
    productContent = responseProduct.content

    soup = BeautifulSoup(productContent, 'html.parser')


    descricaoP = soup.find('p', {'class': 'lh-copy integralmedica-store-components-1-x-paragraph'})
    descricao = descricaoP.get_text()


    selectTamanho = soup.find("select", id='Tamanho')
    tamanhosOptions = selectTamanho.find_all('option')

    tamanhos = []
    for tamanhoOption in tamanhosOptions:
        option = tamanhoOption.get_text()
        if option == 'Selecione': continue
        
        tamanhos.append(option)


    selectSabor = soup.find("select", id='Sabor')
    saboresOptions = selectSabor.find_all('option')


    sabores = []
    for saborOption in saboresOptions:
        option = saborOption.get_text()
        if option == 'Selecione': continue
    
        sabores.append(option)

    dados = {
        'TITULO': titulo,
        'LINK': link,
        'FIGURA': figura,
        'PRECO_ANTERIOR': precoAnterior,
        'PRECO_PRINCIPAL': precoPrincipal,
        'PARCELAMENTO': parcelamento,
        'OFF': off,
        'BENEFICIOS': benefits,
        'DESCRICAO': descricao,
        'TAMANHOS': tamanhos,
        'SABORES': sabores,

    }

    resposta.append(dados)
   


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
path_arquivo = os.path.join(BASE_DIR, "produtos.json")

with open(path_arquivo, 'w', encoding='utf-8') as arquivo:
    json.dump(resposta, arquivo, indent=4, ensure_ascii=False)

print("Created Json File")
