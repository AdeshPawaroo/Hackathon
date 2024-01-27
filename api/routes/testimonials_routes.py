from flask import Blueprint, jsonify
from models import Testimonial

testimonials_routes = Blueprint('testimonials', __name__)


@testimonials_routes.route('/')
def testimonials():
    """
    Query for all testimonials and returns them in a list of testimonials dictionaries
    """
    testimonials = Testimonial.query.all()
    return {'testimonials': [testimonial.to_dict() for testimonial in testimonials]}
 