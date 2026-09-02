from PIL import Image

# Open the original image
img = Image.open('public/design.jpeg')
width, height = img.size

# Logo (approx top left)
logo = img.crop((0, 0, 160, 120))
logo.save('public/images/logo.png')

# Hero background (approx right side of hero section)
# Let's just crop a large section of the top right
hero = img.crop((width//2 - 50, 80, width, 450))
hero.save('public/images/hero-bg.jpg')

# Aiga Stories images
story1 = img.crop((300, 1160, 480, 1260))
story1.save('public/images/story1.jpg')

story2 = img.crop((510, 1160, 690, 1260))
story2.save('public/images/story2.jpg')

story3 = img.crop((720, 1160, 900, 1260))
story3.save('public/images/story3.jpg')

print("Cropped successfully!")
