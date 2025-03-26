from flask_sqlalchemy import SQLAlchemy  # type: ignore

db = SQLAlchemy()

class PropertyType(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    count = db.Column(db.Integer, nullable=False)

    def to_dict(self):
        return {"id": self.id, "name": self.name, "count": self.count}

class Property(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    property_type = db.Column(db.String(100), nullable=False)
    image_url = db.Column(db.String(500), nullable=True)

    def to_dict(self):
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
