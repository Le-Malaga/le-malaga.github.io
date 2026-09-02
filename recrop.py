from PIL import Image

img = Image.open('public/design.jpeg')
# A very generous crop for the top-left logo to ensure nothing is cut off
logo = img.crop((0, 0, 450, 180))
logo.save('public/images/logo.png')
print("Logo recropped generously.")
