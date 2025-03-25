from app import app, db, PropertyType

# ✅ Use app context to avoid RuntimeError
with app.app_context():
    db.session.add_all([
        PropertyType(name="Apartment", count=120),
        PropertyType(name="Villa", count=80),
        PropertyType(name="Office Space", count=50),
        PropertyType(name="Shop", count=30),
    ])
    db.session.commit()

print("✅ Sample property types inserted!")
