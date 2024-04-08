from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

def create_connection():
    """Create a database connection to the SQLite database."""
    db_file = "/users.db"
    conn = None
    try:
        conn = sqlite3.connect(db_file)
        return conn
    except sqlite3.Error as e:
        print(e)
    return conn

def create_user(user):
    """
    Create a new user in the Users table.
    :param user: A tuple containing user details.
    :return: The ID of the created user.
    """
    conn = create_connection()  # Make sure to call create_connection each time to get a fresh connection.
    if conn is not None:
        sql = ''' INSERT INTO Users(username,password,email,companyName) VALUES(?,?,?,?) '''
        cur = conn.cursor()
        cur.execute(sql, user)
        conn.commit()
        user_id = cur.lastrowid
        conn.close()  # Close the connection after operation
        return user_id
    else:
        return None

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    username = data['username']
    password = data['password']  # In a real app, ensure to hash passwords
    email = data['email']
    companyName = data.get('companyName', '')  # companyName is optional
    
    # Inserts the user into the database and returns the newly created user ID
    user_id = create_user((username, password, email, companyName))
    
    if user_id:
        return jsonify({"id": user_id}), 200
    else:
        return jsonify({"error": "Failed to create user"}), 500

if __name__ == '__main__':
    app.run(debug=True)
