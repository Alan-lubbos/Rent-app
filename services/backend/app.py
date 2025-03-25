from flask import Flask, jsonify  # type: ignore
from flask_sqlalchemy import SQLAlchemy  # type: ignore
from flask_cors import CORS  # type: ignore
import os

app = Flask(__name__)
CORS(app)  # ✅ Enable CORS for frontend communication

# ✅ Database Configuration
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///rentup.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

# ✅ PropertyType Model
class PropertyType(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    count = db.Column(db.Integer, nullable=False)

    def to_dict(self):
        return {"id": self.id, "name": self.name, "count": self.count}

# ✅ Property Model
class Property(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    property_type = db.Column(db.String(100), nullable=False)
    image_url = db.Column(db.String(500), nullable=True)

    def to_dict(self):
        # ✅ Generate a sequential image filename
        image_filename = f"generated_image_{self.id}.png"
        image_full_url = f"http://127.0.0.1:5000/static/images/{image_filename}"
        
        return {
            "id": self.id,
            "title": self.title,
            "address": self.address,
            "price": self.price,
            "property_type": self.property_type,
            "image_url": image_full_url,
        }

#  Location Model
class Location(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    villas = db.Column(db.Integer, nullable=False)
    offices = db.Column(db.Integer, nullable=False)
    apartments = db.Column(db.Integer, nullable=False)
    image_url = db.Column(db.String(500), nullable=True)

    def to_dict(self):
        image_filename = f"generated_image_{self.id}.png"
        image_full_url = f"http://127.0.0.1:5000/static/images/{image_filename}"
        return {
            "id": self.id,
            "name": self.name,
            "villas": self.villas,
            "offices": self.offices,
            "apartments": self.apartments,
            "image_url": image_full_url,
        }

#  Create database tables
with app.app_context():
    db.create_all()

#  API Route to Get All Property Types
@app.route('/property-types', methods=['GET'])
def get_property_types():
    property_types = PropertyType.query.all()
    return jsonify([ptype.to_dict() for ptype in property_types])

# ✅ API Route to Get All Properties
@app.route('/properties', methods=['GET'])
def get_properties():
    properties = Property.query.all()
    formatted_properties = [prop.to_dict() for prop in properties]
    return jsonify(formatted_properties)

# ✅ API Route to Get All Locations
@app.route('/locations', methods=['GET'])
def get_locations():
    locations = Location.query.all()
    return jsonify([loc.to_dict() for loc in locations])

if __name__ == '__main__':
    print("🚀 Running Flask server on http://127.0.0.1:5000")
    app.run(debug=True, host="0.0.0.0", port=5000)
