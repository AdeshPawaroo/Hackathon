from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField, DateTimeField
from wtforms.validators import DataRequired, Email

class TestimonialForm(FlaskForm):
    testimonial_name = StringField('Testimonial Name', validators=[DataRequired()])
    testimonial_email_id = StringField('Testimonial Email', validators=[DataRequired()])
    testimonial_location = StringField('Testimonial Location', validators=[DataRequired()])
    phone_number = StringField('Phone Number')
    description = TextAreaField('Description', validators=[DataRequired()])
    photos = StringField('Photos')
    videos = StringField('Videos')
