# -*- coding: utf-8 -*-
"""Gera og-image, favicons e icon-rounded-512 do site a partir da marca nova (AU-roxo-v2).

Fonte: Marca-Aumigao-Redesign/03-RECEBIDO-DO-APP/AU-roxo-v2.png (tile roxo 1024x1024,
cantos arredondados transparentes, símbolo AU creme com coração tangerina).

Uso:
    <backend/.venv>/Scripts/python.exe scripts/gen_brand_assets.py
"""
import os

from PIL import Image

SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP = os.path.dirname(SITE)
SRC = os.path.join(APP, "Marca-Aumigao-Redesign", "03-RECEBIDO-DO-APP", "AU-roxo-v2.png")
OUT = os.path.join(SITE, "public")

CREAM = (250, 244, 232)  # #faf4e8 — creme do sistema editorial


def make_og(src: Image.Image, width: int = 1200, height: int = 630) -> Image.Image:
    """OG image: fundo creme, tile da marca centralizado com respiro generoso."""
    og = Image.new("RGB", (width, height), CREAM)
    maxside = int(height * 0.56)
    tile = src.resize((maxside, maxside), Image.LANCZOS)
    og.paste(tile, ((width - maxside) // 2, (height - maxside) // 2), tile)
    return og


def main() -> None:
    src = Image.open(SRC).convert("RGBA")

    # 1. icon-rounded-512.png (o tile já tem cantos arredondados)
    icon512 = src.resize((512, 512), Image.LANCZOS)
    icon512.save(os.path.join(OUT, "icon-rounded-512.png"))
    print("ok  icon-rounded-512.png")

    # 2. apple-touch-icon-180.png — Apple prefere sem alpha: achata no roxo do tile
    flat = Image.new("RGB", (1024, 1024), (172, 78, 242))  # roxo do próprio tile
    flat.paste(src, (0, 0), src)
    flat.resize((180, 180), Image.LANCZOS).save(os.path.join(OUT, "apple-touch-icon-180.png"))
    print("ok  apple-touch-icon-180.png")

    # 3/4. favicon-32.png e favicon-16.png
    src.resize((32, 32), Image.LANCZOS).save(os.path.join(OUT, "favicon-32.png"))
    print("ok  favicon-32.png")
    src.resize((16, 16), Image.LANCZOS).save(os.path.join(OUT, "favicon-16.png"))
    print("ok  favicon-16.png")

    # 5. favicon.ico multi-size
    src.save(
        os.path.join(OUT, "favicon.ico"),
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
    )
    print("ok  favicon.ico")

    # 6. og-image.png 1200x630
    make_og(src).save(os.path.join(OUT, "og-image.png"), optimize=True)
    print("ok  og-image.png")

    print("\nPRONTO — assets gerados em site/public/")


if __name__ == "__main__":
    main()
