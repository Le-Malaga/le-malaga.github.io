from PIL import Image

img = Image.open('public/design.jpeg')
width, height = img.size

# The women are on the right side. Let's crop generously from the center-left to the far right, and top to bottom of the hero section.
# Previous crop was (width//2 - 50, 80, width, 450)
# Let's try (width//2 - 150, 0, width, 550) to make sure we get the subjects centered properly
hero = img.crop((width//2 - 100, 40, width, 520))
hero.save('public/images/hero-bg.jpg')

print("Hero recropped successfully!")
