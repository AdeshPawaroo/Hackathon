from models import db, Testimonial, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime


def seed_testimonials():
    testimonial1 = Testimonial(
        testimonial_id=1,
        testimonial_name='Happy Customer',
        testimonial_email_id='happy.customer@example.com',
        testimonial_location='City A',
        phone_number="1234567890",
        description='This is a great product!',
        photos='path/to/photo1.jpg',
        videos='path/to/video1.mp4',
        created_at=datetime.utcnow()
    )

    testimonial2 = Testimonial(
        testimonial_id=2,
        testimonial_name='Satisfied User',
        testimonial_email_id='satisfied.user@example.com',
        testimonial_location='City B',
        phone_number="9876543210",
        description='Highly recommend!',
        photos='path/to/photo2.jpg',
        videos='path/to/video2.mp4',
        created_at=datetime.utcnow()
    )

    testimonial3 = Testimonial(
        testimonial_id=3,
        testimonial_name='Pleased Client',
        testimonial_email_id='pleased.client@example.com',
        testimonial_location='City C',
        description='Excellent service!',
        photos='path/to/photo3.jpg',
        videos='path/to/video3.mp4',
        created_at=datetime.utcnow()
    )


    db.session.add(testimonial1)
    db.session.add(testimonial2)
    db.session.add(testimonial3)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_testimonials():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.testimonials RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM testimonials"))

    db.session.commit()
