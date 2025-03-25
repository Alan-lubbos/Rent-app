from app import app, db, Property

# ✅ Insert additional properties inside app context
with app.app_context():
    db.session.add_all([
        Property(
            id=4,
            title="Skyline View Apartment",
            address="Sheikh Zayed Road, Dubai, UAE",
            price=5000,
            property_type="Apartment",
            image_url="http://127.0.0.1:5000/static/images/generated_image_4.png"
        ),
        Property(
            id=5,
            title="Garden Villa",
            address="Palm Jumeirah, Dubai, UAE",
            price=15000,
            property_type="Villa",
            image_url="http://127.0.0.1:5000/static/images/generated_image_5.png"
        ),
        Property(
            id=6,
            title="Luxury Office Space",
            address="Downtown Dubai, UAE",
            price=8000,
            property_type="Commercial",
            image_url="http://127.0.0.1:5000/static/images/generated_image_6.png"
        ),
    ])
    db.session.commit()

print("✅ 3 more properties inserted successfully!")
