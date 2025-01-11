from flask import Flask, request, jsonify
from flask_cors import CORS
from db import insert_document  # Assuming this function handles MongoDB insertion
from werkzeug.security import check_password_hash  # For password hashing
from db import collection  # Import the MongoDB collection from your db.py

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

@app.route('/')
def home():
    return 'Flask app connected to MongoDB!'

# Route to insert data into MongoDB
@app.route('/api/document', methods=['POST'])
def add_document():
    try:
        # Get data from the request body (in JSON format)
        data = request.get_json()

        if not data:
            return jsonify({"error": "No data provided"}), 400

        # Example: Validate specific required fields in the input
        required_fields = ['name', 'email', 'phone', 'gender', 'password']
        missing_fields = [field for field in required_fields if field not in data]

        if missing_fields:
            return jsonify({"error": f"Missing fields: {', '.join(missing_fields)}"}), 400

        # Insert the document into MongoDB
        inserted_id = insert_document(data)

        if isinstance(inserted_id, str):  # Assuming errors from `insert_document` are returned as strings
            return jsonify({"error": inserted_id}), 500
        else:
            return jsonify({"message": "Document added successfully", "id": str(inserted_id)}), 201

    except Exception as e:
        return jsonify({"error": f"An unexpected error occurred: {str(e)}"}), 500

@app.route('/api/userdata', methods=['GET'])
def fetch_user_data():
    try:
        # Fetch all documents from the MongoDB collection
        users = list(collection.find({}, {'_id': 0}))  # Exclude the MongoDB `_id` field from the results

        if not users:
            return jsonify({"message": "No users found"}), 404

        return jsonify(users), 200

    except Exception as e:
        return jsonify({"error": f"An unexpected error occurred: {str(e)}"}), 500


if __name__ == '__main__':
    app.run(debug=True, use_reloader=False, port=5001)
