from flask import Flask, jsonify, request
from flask_cors import CORS 
import os
import sqlite3

app = Flask(__name__)
CORS(app)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, '..', '..', 'cases.db')

def get_db_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/cases', methods=['GET'])
def get_cases():
    category = request.args.get('category', '').strip()
    subcategory = request.args.get('subcategory', '').strip()
    title = request.args.get('title', '').strip()
    neutral_citation = request.args.get('neutral_citation', '').strip()
    from_date = request.args.get('from_date')
    to_date = request.args.get('to_date')

    conn = get_db_connection()
    query = """
    SELECT title,
           neutral_citation,
           decision_date,
           category,
           subcategory,
           html_link AS html_url,
           pdf_link AS pdf_url
    FROM ukut_cases
    WHERE 1=1
    """
    params = []

    if category:
        query += " AND category LIKE ?"
        params.append(f"%{category}%")

    # Only filter if subcategory is not ALL/empty
    if subcategory and subcategory.upper() != "ALL":
        query += " AND subcategory LIKE ?"
        params.append(f"%{subcategory}%")

    if title:
        query += " AND title LIKE ?"
        params.append(f"%{title}%")

    if neutral_citation:
        query += " AND neutral_citation LIKE ?"
        params.append(f"%{neutral_citation}%")

    if from_date:
        query += " AND decision_date >= ?"
        params.append(from_date)

    if to_date:
        query += " AND decision_date <= ?"
        params.append(to_date)

    query += " ORDER BY decision_date DESC"

    data = conn.execute(query, params).fetchall()
    conn.close()

    return jsonify([dict(row) for row in data])



if __name__ == '__main__':
    app.run(debug=True)
