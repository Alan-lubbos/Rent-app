from flask_sqlalchemy import SQLAlchemy # type: ignore

db = SQLAlchemy()

class PropertyType(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    count = db.Column(db.Integer, nullable=False)

    def to_dict(self):
        return {"id": self.id, "name": self.name, "count": self.count}
