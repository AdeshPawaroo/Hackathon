from .db import db, environment, SCHEMA, add_prefix_for_prod


class Testimonial(db.Model):
    __tablename__ = 'testimonials'

    if environment == "production":
            __table_args__ = {'schema': SCHEMA}


    testimonial_id = db.Column(db.Integer, primary_key=True)
    testimonial_name = db.Column(db.String(255), nullable=False)
    testimonial_email_id = db.Column(db.String(255), nullable=False)
    testimonial_location = db.Column(db.String(255), nullable=False)
    phone_number = db.Column(db.Integer)
    description = db.Column(db.String(255), nullable=False)
    photos = db.Column(db.String(255))
    videos = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, nullable=False)

    def to_dict(self):
        return {
            'testimonial_id': self.testimonial_id,
            'testimonial_name': self.testimonial_name,
            'testimonial_email_id': self.testimonial_email_id,
            'testimonial_location': self.testimonial_location,
            'phone_number': self.phone_number,
            'description': self.description,
            'photos': self.photos,
            'videos': self.videos,
            'created_at': self.created_at.isoformat() if self.created_at else None
        }
