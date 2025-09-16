
import requests # para requisições http
import json # para gerar JSON a partir de objetos do Python
from bs4 import BeautifulSoup # BeautifulSoup é uma biblioteca Python de extração de dados de arquivos HTML e XML.


requisicaoDePagina = requests.get('https://www.maxtitanium.com.br/produtos/proteinas')

conteudo = requisicaoDePagina.content

#mostra o tipo Pyhton da página
# print(type(requisicaoDePagina.content))

#joga para a variável site todo o conteúdo da página passada pelo requests.get()
site = BeautifulSoup(conteudo, 'html.parser')

#imprime o site inteiro, como o original 
# print(site)

#joga para a variável produtos todos os elementos "article", que é onde está cada produto
produtos = site.find_all("article")

#imprime tipo Python de produtos
# print(type(produtos))


# cria uma variável do tipo lista para guardar os dados em um JSON
resposta = []

for produto in produtos:

    if not 'product-card' in produto['class']: continue
    audRelative = produto.find("div", {'class': 'aud-relative'})
    a = audRelative.find("a") if audRelative else None
    link = a["href"]  if a else None
    figura = a.find("source")["srcset"] if a else None

    print(link)
    print(figura)

    h3 = produto.find("h3", {'class': 'product-card__title'})
    titulo =  h3.get_text(strip=True)

    print(titulo)


    spanPrecoAnterior = produto.find("span", {'class': 'product-card__pricefrom'})
    spanPrecoPrincipal = produto.find("span", {'class': 'product-card__priceper'})


    precoAnterior = spanPrecoAnterior.get_text(strip=True) if spanPrecoAnterior else None
    precoPrincipal = spanPrecoPrincipal.get_text(strip=True) if spanPrecoPrincipal else None 

    print(precoAnterior)
    print(precoPrincipal)

    parcelamentoDiv = produto.find("div", {"class": 'product-card__installments'})
    parcelamento = parcelamentoDiv.get_text(strip=True) if parcelamentoDiv else None 

    print(parcelamento)

    precoPixDiv = produto.find("div", {"class": 'aud-font-semibold'})
    precoPix = precoPixDiv.get_text(strip=True) if precoPixDiv else None 
    print(precoPix)



    dados = {
        'TITULO': titulo, 
        'LINK': link,
        'FIGURA': figura,
        'PRECO_ANTERIOR': precoAnterior,
        'PRECO_PRINCIPAL': precoPrincipal,
        'PARCELAMENTO': parcelamento,
        'PRECO_PIX': precoPix
    }

    resposta.append(dados)
    #um print para separar os produtos
    print("....")

# Converte os objetos Pyhton em objeto JSON e exporta para o noticias.json
with open('produtos.json', 'w') as arquivo:
  arquivo.write(str(json.dumps(resposta, indent=7)))
print("Created Json File")