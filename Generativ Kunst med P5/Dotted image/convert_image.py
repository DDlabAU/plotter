
#%%
from PIL import Image
import numpy as np
import json

# Load the image
image_path = 'image.jpg'  # Change this to the path of your image
image = Image.open(image_path)

image_resized = image.resize((45, 60))

# Converts the image to an RGB image (if not already) to ensure consistency
image_RGB = image_resized.convert('RGB')

# Converts the image to a numpy array
np_array = np.array(image_RGB)

# Converts numpy array to a list 
list_image = np_array.tolist()

# Saves the list to a JSON file
json_path = 'image.json' 

with open(json_path, 'w') as f:
    json.dump(list_image, f)

print(f"Image data saved to {json_path}")

