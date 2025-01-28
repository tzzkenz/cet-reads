from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
import uuid

db = SQLAlchemy()

# to generate the secret key
def get_uuid():
    return uuid4().hex

# Definin User model
class User(UserMixin, db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String(30), nullable=False) # limit bcrypt password hash 30
    #books = db.relationship('Book', backref='owner', lazy=True)

# # Definin Book model
# class Book(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String(150), nullable=False)
#     author = db.Column(db.String(150), nullable=False)
#     status = db.Column(db.String(50), default='available')  # 'available' or 'lent'
#     #user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

# # Definin BookRequest model
# class BookRequest(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     #book_id = db.Column(db.Integer, db.ForeignKey('book.id'), nullable=False)
#     borrower_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
#     status = db.Column(db.String(50), default='pending')  # 'pending', 'approved', or 'rejected'
