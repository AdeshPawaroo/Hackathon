from flask.cli import AppGroup

from models.db import db, environment, SCHEMA
from .booking_seed import seed_bookings, undo_bookings
from .testimonial_seed import seed_testimonials, undo_testimonials
from .home_page_seed import seed_home_page, undo_home_page
from .user_seed import seed_user, undo_user
# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_testimonials()
        undo_bookings()
        undo_home_page()
        undo_user()
    seed_user()
    seed_home_page()
    seed_bookings()
    seed_testimonials()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_user()
    undo_home_page()
    undo_bookings()
    undo_testimonials()

    # Add other undo functions here
