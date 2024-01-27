from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField, DateTimeField
from wtforms.validators import DataRequired, Email

class TestimonialForm(FlaskForm):
    testimonial_id = IntegerField('Testimonial ID', validators=[DataRequired()])
    testimonial_name = StringField('Testimonial Name', validators=[DataRequired()])
    testimonial_email_id = StringField('Testimonial Email', validators=[DataRequired(), Email()])
    testimonial_location = StringField('Testimonial Location', validators=[DataRequired()])
    phone_number = IntegerField('Phone Number')
    description = TextAreaField('Description', validators=[DataRequired()])
    photos = StringField('Photos')
    videos = StringField('Videos')
    created_at = DateTimeField('Created At', format='%Y-%m-%dT%H:%M:%S', validators=[DataRequired()])
