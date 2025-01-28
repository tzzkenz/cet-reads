from flask import Flask, render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'   
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///instance/database.db'
db = SQLAlchemy(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'

from models import User, Book, BookRequest   

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


# Route for homepage
@app.route('/')
def home():
    books = Book.query.all()  # Fetch books from the database
    return render_template('index.html', books=books)


# Route for login page (plis add logic for actual login functionality)
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # Retrieve form data
        username = request.form.get('username')
        password = request.form.get('password')
         # Query the User model for the provided username
        user = User.query.filter_by(username=username).first()
        # Check if user exists and the password matches
        if user and user.password == password:  # assuming plain text; use hashing for security in production
            # Log the user in (you may want to add session management here)
            flash("Login successful!")
            return redirect(url_for('home'))
        else:
            flash("Invalid username or password. Please try again.", "danger")
    return render_template('login.html')

# Route for adding books 
@app.route('/add_book', methods=['GET', 'POST'])
@login_required  # Require the user to be logged in
def add_book():
    if request.method == 'POST':
        book_name = request.form['book_name']
        book_author = request.form['book_author']
        
        new_book = Book(name=book_name, author=book_author, owner=current_user.id)
        db.session.add(new_book)
        db.session.commit()
        flash('Book added successfully!')
        return redirect(url_for('home'))
    
    return render_template('add_book.html')
@app.route('/test', methods=['GET'])
def test():
    # Create a test user and book, then create a book request
    user = User(username='testuser', password='testpwd')
    db.session.add(user)
    db.session.commit()
    
    book = Book(title='Test Book', author='Test Author', user_id=user.id)
    db.session.add(book)
    db.session.commit()

    # Create a book request
    book_request = BookRequest(book_id=book.id, borrower_id=user.id)
    db.session.add(book_request)
    db.session.commit()

    return "Test route accessed, BookRequest created!"


if __name__ == "__main__":
    app.run(debug=True)

