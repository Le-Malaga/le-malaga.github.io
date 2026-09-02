from PIL import Image

# Open the original image
img = Image.open('public/design.jpeg')

# Recrop logo with wider boundaries to prevent cutting off
logo = img.crop((0, 0, 250, 150))
logo.save('public/images/logo.png')

print("Logo recropped successfully!")
