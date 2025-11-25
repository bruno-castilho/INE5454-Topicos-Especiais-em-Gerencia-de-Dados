from playwright.sync_api import sync_playwright
from bs4 import BeautifulSoup
import json
import os

URL = "https://www.gsuplementos.com.br/moda/"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36")
    page.goto(URL)
    page.wait_for_selector(".card__prices", timeout=10000)

    html = page.content()
    soup = BeautifulSoup(html, "html.parser")

    produtos = soup.find_all('div', {'class': 'card-wrapper'})
    
    resposta = []

    for produto in produtos:
        a = produto.find('a')
        link = f'https://www.gsuplementos.com.br{a["href"]}' if a else None

        img = produto.find('img')
        figura = img['src'] if img else None

        card_name = produto.find('a', {'class': 'card__name'})
        if not card_name: continue
        titulo = card_name.get_text(strip=True)

        precoSpan = produto.find('span', {'class': 'price'})
        offSpan = produto.find('span', {'class':  'discount-percent'})

        off = offSpan.get_text(strip=True) if offSpan else ""
        precoPix = precoSpan.get_text(strip=True).replace(off, '') if precoSpan else ""

        ul = produto.find('ul', {'class': 'characteristics'})
        beneficios = []
        if ul:
            lis = ul.find_all('li')
            for li in lis:
                beneficios.append(li.get_text(strip=True).replace('\xa0', ' '))

        precoCartao = None
        parcelamento = None
        precoCartaoSpan = produto.find('p', {'class': 'card__prices-condition'})
        if precoCartaoSpan:
            bs = precoCartaoSpan.find_all('b')
            if len(bs) >= 2:
                precoCartao = bs[0].get_text(strip=True)
                parcelamento = 'Até ' + bs[1].get_text(strip=True)

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
