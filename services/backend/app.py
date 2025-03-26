from flask import Flask, jsonify  # type: ignore
from flask_sqlalchemy import SQLAlchemy  # type: ignore
from flask_cors import CORS  # type: ignore
from models import db, PropertyType, Property, Location  
app = Flask(__name__)
CORS(app)  #  Enable CORS

#  Database Configuration
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///rentup.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)  #  Bind SQLAlchemy to the Flask app

#  Create database tables
with app.app_context():
    db.create_all()

#  API Route to Get All Property Types
@app.route('/property-types', methods=['GET'])
def get_property_types():
    property_types = PropertyType.query.all()
    return jsonify([ptype.to_dict() for ptype in property_types])

#  API Route to Get All Properties
@app.route('/properties', methods=['GET'])
def get_properties():
    properties = Property.query.all()
    return jsonify([prop.to_dict() for prop in properties])

#  API Route to Get All Locations
@app.route('/locations', methods=['GET'])
def get_locations():
    locations = Location.query.all()
    return jsonify([loc.to_dict() for loc in locations])

if __name__ == '__main__':
    print("🚀 Running Flask server on http://127.0.0.1:5000")
    app.run(debug=True, host="0.0.0.0", port=5000)
