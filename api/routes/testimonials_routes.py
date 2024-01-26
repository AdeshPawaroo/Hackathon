from flask import Blueprint, jsonify, request
from models import Testimonial, db
from forms import TestimonialForm

testimonials_routes = Blueprint('testimonials', __name__)


@testimonials_routes.route('/')
def testimonials():
    """
    Query for all testimonials and returns them in a list of testimonials dictionaries
    """
    testimonials = Testimonial.query.all()
    return {'testimonials': [testimonial.to_dict() for testimonial in testimonials]}

 # POST route to create a new testimonial
@testimonials_routes.route('/', methods=['POST'])
def create_testimonial():
    form = TestimonialForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate():
        new_testimonial = Testimonial(
            testimonial_name=form.testimonial_name.data,
            testimonial_email_id=form.testimonial_email_id.data,
            testimonial_location=form.testimonial_location.data,
            phone_number=form.phone_number.data,
            description=form.description.data,
            photos=form.photos.data,
            videos=form.videos.data
            # You may need to add 'created_at' depending on your model
        )

        db.session.add(new_testimonial)
        db.session.commit()

        return jsonify({'message': 'Testimonial created successfully', "testimonial" : new_testimonial.to_dict()}), 201

    return jsonify({'errors' : form.errors})

# DELETE route to delete a testimonial by ID
@testimonials_routes.route('/<int:testimonial_id>', methods=['DELETE'])
def delete_testimonial(testimonial_id):
    try:
        testimonial = Testimonial.query.get(testimonial_id)

        if not testimonial:
            return jsonify({'error': 'Testimonial not found'}), 404

        db.session.delete(testimonial)
        db.session.commit()

        return jsonify({'message': 'Testimonial deleted successfully'}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500
