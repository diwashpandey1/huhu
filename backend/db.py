from pymongo import MongoClient
import certifi

uri = "mongodb+srv://diwash:diwash7890@learn-db.xn5nc.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(uri, tls=True, tlsCAFile=certifi.where())

db = client['mydb']
collection = db['dbcollection']  # Define the collection here

def insert_document(data):
    try:
        # Insert the data into MongoDB
        result = collection.insert_one(data)
        return result.inserted_id
    except Exception as e:
        return str(e)
