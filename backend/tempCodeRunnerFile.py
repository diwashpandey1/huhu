from flask import Flask, request, jsonify
from flask_cors import CORS
from db import insert_document  # Assuming this function handles MongoDB insertion

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Route to insert data into MongoDB
@app.route('/api/document', methods=['POST'])
def add_document():
    try:
        # Get data from the request body (in JSON format)
        data = request.get_json()

        if not data:
            return jsonify({"error": "No data provided"}), 400

        # Example: Validate specific required fields in the input
        required_fields = ['field1', 'field2']  # Replace with actual required fields
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

if __name__ == '__main__':
    app.run(debug=True, use_reloader=False, port=5001)

