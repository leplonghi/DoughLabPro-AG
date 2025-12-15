
import json
import os

# Define the ads data
ads_catalog = {
    "ooni_koda_16": {
        "title": "Ooni Koda 16 Gas Powered Pizza Oven",
        "description": "Cook stone-baked fresh pizza in just 60 seconds.",
        "ctaText": "Shop Ooni"
    },
    "caputo_00_flour": {
        "title": "Antimo Caputo Pizzeria 00 Flour",
        "description": "The gold standard for Neapolitan pizza dough.",
        "ctaText": "Buy Now"
    },
    "gozney_dome": {
        "title": "Gozney Dome",
        "description": "The professional outdoor oven. Roast, smoke, steam or bake.",
        "ctaText": "Discover Dome"
    },
    "challenger_bread_pan": {
        "title": "Challenger Bread Pan",
        "description": "Bake the perfect loaf of sourdough bread at home.",
        "ctaText": "Get the Pan"
    }
}

ads_catalog_pt = {
    "ooni_koda_16": {
        "title": "Forno de Pizza a Gás Ooni Koda 16",
        "description": "Asse pizza fresca na pedra em apenas 60 segundos.",
        "ctaText": "Comprar Ooni"
    },
    "caputo_00_flour": {
        "title": "Farinha Antimo Caputo Pizzeria 00",
        "description": "O padrão ouro para massa de pizza Napolitana.",
        "ctaText": "Comprar Agora"
    },
    "gozney_dome": {
        "title": "Gozney Dome",
        "description": "O forno externo profissional. Asse, defume, cozinhe no vapor ou asse pães.",
        "ctaText": "Descubra o Dome"
    },
    "challenger_bread_pan": {
        "title": "Panela de Pão Challenger",
        "description": "Asse o pão de fermentação natural perfeito em casa.",
        "ctaText": "Comprar a Panela"
    }
}

base_path = r'c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\public\locales'

def update_json(lang, ads_data):
    file_path = os.path.join(base_path, lang, 'marketing.json')
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # Ensure 'marketing' key exists (it should)
        if 'marketing' not in data:
            data['marketing'] = {}
            
        # Add 'ads' catalog
        data['marketing']['ads'] = {
            "catalog": ads_data
        }
        
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"Updated {lang} marketing.json")
    except Exception as e:
        print(f"Error updating {lang}: {e}")

update_json('en', ads_catalog)
update_json('pt', ads_catalog_pt)
