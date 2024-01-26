from flask import Blueprint, jsonify
from models import Booking

bookings_routes = Blueprint('bookings', __name__)


@bookings_routes.route('/')
def bookings():
    """
    Query for all bookings and returns them in a list of bookings dictionaries
    """
    bookings = Booking.query.all()
    return {'bookings': [booking.to_dict() for booking in bookings]}
