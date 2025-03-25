import requests
import base64
import os
from flask import Flask, jsonify, send_from_directory

app = Flask(__name__)

# Replace with your valid Stability AI API key
STABILITY_API_KEY = "sk-yqyv1bt4l0ibKuZ24jCTBnOjcSuaBYcm7N7svcmZDEA4YyjA"
API_URL = "https://api.stability.ai/v2beta/stable-image/generate/core"

headers = {
    "Authorization": f"Bearer {STABILITY_API_KEY}",
    "Accept": "application/json"
}

image_folder = "static/images"
os.makedirs(image_folder, exist_ok=True)

prompts = [
    "A modern luxury apartment with a beautiful city view",
    "A cozy minimalist apartment with wooden interior",
    "A futuristic high-tech apartment with smart lighting",
    "A spacious penthouse with a rooftop garden",
    "A stylish studio apartment with an open floor plan",
    "A beachfront villa with stunning ocean views"
]

image_urls = []

for i, prompt in enumerate(prompts):
    files = {
        'prompt': (None, prompt),
        'output_format': (None, 'png'),
        'cfg_scale': (None, '7'),
        'steps': (None, '30'),
        'samples': (None, '1')
    }

    response = requests.post(API_URL, headers=headers, files=files)

    # ✅ Debugging: Print API response
    print(f"🔄 Requesting image {i+1}...")
    print(f"📤 Request Headers: {headers}")
    print(f"📤 Request Payload: {files}")
    print(f"🔄 API Response Status: {response.status_code}")
    print(f"🔄 API Response Text: {response.text}")

    if response.status_code != 200:
        print(f"❌ API Error for prompt {i+1}: {response.status_code}, {response.text}")
        continue

    response_json = response.json()

    if "image" in response_json:
        base64_image = response_json["image"]

        image_path = os.path.join(image_folder, f"generated_image_{i+1}.png")

        with open(image_path, "wb") as f:
            f.write(base64.b64decode(base64_image))

        image_url = f"http://127.0.0.1:5000/static/images/generated_image_{i+1}.png"
        image_urls.append(image_url)
        print(f"✅ Image {i+1} generated: {image_url}")
    else:
        print(f"❌ No image found for prompt {i+1}. Response: {response_json}")

@app.route('/static/images/<filename>')
def get_image(filename):
    return send_from_directory("static/images", filename)

@app.route('/api/images', methods=['GET'])
def get_all_images():
    return jsonify({"images": image_urls})

if __name__ == "__main__":
    app.run(debug=True)
