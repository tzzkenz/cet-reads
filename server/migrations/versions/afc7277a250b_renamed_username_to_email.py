"""Renamed username to email

Revision ID: afc7277a250b
Revises: 
Create Date: 2025-01-28 22:13:25.895100

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'afc7277a250b'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.alter_column('users', 'username', new_column_name='email')



def downgrade():
    op.alter_column('users', 'email', new_column_name='username')

