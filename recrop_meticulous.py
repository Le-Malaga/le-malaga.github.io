from PIL import Image

img = Image.open('public/design.jpeg')

# Logo: Start at x=5, y=5 to avoid any grey drop shadows from the mockup frame.
# Crop tightly around the logo.
logo = img.crop((5, 5, 410, 95))
logo.save('public/images/logo.png')

# Hero: Women are on the right. Let's crop x=450 to 1000 to avoid any right-side border.
# y=100 to 420 is safe.
hero = img.crop((450, 100, 1000, 440))
hero.save('public/images/hero-bg.jpg')

print("Assets recropped meticulously (avoiding grey borders).")
