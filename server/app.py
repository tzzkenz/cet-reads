from flask import Flask, jsonify, request, session
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_session import Session
from config import ApplicationConfig
from flask_cors import CORS
from models import db, User
from flask_migrate import Migrate

app = Flask(__name__)
CORS(app, supports_credentials=True) # enable CORS to allow communication with React
bcrypt = Bcrypt(app)
migrate = Migrate(app, db)


app.config.from_object(ApplicationConfig)
db.init_app(app)
with app.app_context():
    db.create_all()



# sign up functionality
@app.route('/signup', methods=['POST'])
def signup():
    email = request.json['email']
    password = request.json['password']
    
    user_exists = User.query.filter_by(email=email).first() is not None
    
    if user_exists:
        return jsonify({"error": "User already exists"}), 409
    
    
    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    session["user_id"] = new_user.id
    
    return jsonify({
        "id":new_user.id, 
        "email": new_user.email
    })

if __name__ == "__main__":
    app.run(debug=True)