from .db import db, environment, SCHEMA, add_prefix_for_prod



class Booking(db.Model):
    __tablename__ = 'bookings'

    if environment == "production":
            __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String(255), nullable=False)
    email_id = db.Column(db.String(255), nullable=False)
    add_guest = db.Column(db.String(255))
    special_notes = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'customer_id': self.customer_id,
            'name': self.name,
            'email_id': self.email_id,
            'add_guest': self.add_guest,
            'special_notes': self.special_notes,
            'created_at': self.created_at.isoformat() if self.created_at else None
        }
