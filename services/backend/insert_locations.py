from app import app, db, Location

# ✅ Insert locations inside app context
with app.app_context():
    db.session.add_all([
        Location(
            id=1,
            name="Downtown Dubai",
            villas=50,
            offices=100,
            apartments=200,
            image_url="http://127.0.0.1:5000/static/images/generated_image_1.png"
        ),
        Location(
            id=2,
            name="Palm Jumeirah",
            villas=80,
            offices=30,
            apartments=40,
            image_url="http://127.0.0.1:5000/static/images/generated_image_2.png"
        ),
        Location(
            id=3,
            name="Business Bay",
            villas=20,
            offices=150,
            apartments=120,
            image_url="http://127.0.0.1:5000/static/images/generated_image_3.png"
        ),
        Location(
            id=4,
            name="Dubai Marina",
            villas=35,
            offices=50,
            apartments=150,
            image_url="http://127.0.0.1:5000/static/images/generated_image_4.png"
        ),
        Location(
            id=5,
            name="Jumeirah Beach",
            villas=60,
            offices=20,
            apartments=90,
            image_url="http://127.0.0.1:5000/static/images/generated_image_5.png"
        ),
        Location(
            id=6,
            name="Al Barsha",
            villas=40,
            offices=60,
            apartments=110,
            image_url="http://127.0.0.1:5000/static/images/generated_image_6.png"
        ),
    ])
    db.session.commit()

print("✅ 6 locations inserted successfully!")
