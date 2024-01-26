from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField, DateTimeField
from wtforms.validators import DataRequired, Email

class BookingForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    email_id = StringField('Email', validators=[DataRequired(), Email()])
    add_guest = StringField('Additional Guest')
    special_notes = TextAreaField('Special Notes')
    created_at = DateTimeField('Created At', format='%Y-%m-%dT%H:%M:%S', validators=[DataRequired()])
