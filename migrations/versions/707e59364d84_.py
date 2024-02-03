"""empty message

Revision ID: 707e59364d84
Revises: 
Create Date: 2024-02-03 15:19:06.666455

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '707e59364d84'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('about_pages',
    sa.Column('about_page_id', sa.Integer(), nullable=False),
    sa.Column('first_para', sa.String(length=255), nullable=False),
    sa.Column('second_para', sa.String(length=255), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('about_page_id')
    )
    op.create_table('bookings',
    sa.Column('booking_id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=False),
    sa.Column('email_id', sa.String(length=255), nullable=False),
    sa.Column('add_guest', sa.String(length=255), nullable=True),
    sa.Column('special_notes', sa.String(length=255), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('booking_id')
    )
    op.create_table('contact_pages',
    sa.Column('contact_page_id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=50), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('contact_page_id')
    )
    op.create_table('faq_pages',
    sa.Column('faq_page_id', sa.Integer(), nullable=False),
    sa.Column('question', sa.String(length=255), nullable=False),
    sa.Column('answer', sa.String(length=255), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('faq_page_id')
    )
    op.create_table('home_pages',
    sa.Column('home_page_id', sa.Integer(), nullable=False),
    sa.Column('site_title', sa.String(length=255), nullable=False),
    sa.Column('site_subtitle', sa.String(length=255), nullable=False),
    sa.Column('page_text', sa.String(length=255), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('home_page_id')
    )
    op.create_table('resource_pages',
    sa.Column('resource_page_id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=255), nullable=False),
    sa.Column('url', sa.String(length=255), nullable=False),
    sa.Column('description', sa.String(length=255), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('resource_page_id')
    )
    op.create_table('service_pages',
    sa.Column('service_page_id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=255), nullable=False),
    sa.Column('description', sa.String(length=255), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('service_page_id')
    )
    op.create_table('testimonial_pages',
    sa.Column('testimonial_page_id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=False),
    sa.Column('review', sa.String(length=255), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('testimonial_page_id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=50), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    op.drop_table('testimonial_pages')
    op.drop_table('service_pages')
    op.drop_table('resource_pages')
    op.drop_table('home_pages')
    op.drop_table('faq_pages')
    op.drop_table('contact_pages')
    op.drop_table('bookings')
    op.drop_table('about_pages')
    # ### end Alembic commands ###
