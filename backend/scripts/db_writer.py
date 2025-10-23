import sqlite3
import json
from datetime import datetime

#Creating a Database
conn=sqlite3.connect("cases.db")

#Creating a Table
c=conn.cursor()
c.execute('''CREATE TABLE IF NOT EXISTS ukut_cases
            (id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            neutral_citation TEXT,
            category TEXT,
            subcategory TEXT,
            decision_date DATETIME,
            html_link TEXT,
            pdf_link TEXT)''')
conn.commit()

#Getting data from a JSON file
"""
fieldnames = [
"title", 
"neutral_citation", 
"category", 
"subcategory",
"decision_date", 
"html_url", 
"pdf_url"]
"""
with open('uk_caselaw_ukut_lc.json', 'r', encoding="utf-8") as f:
    data = json.load(f)



# Inserting data into the database
for item in data:  

    subject = item.get("subject", "")

    #Normalising dashes
    normalized = subject.replace("—", "–").replace("-", "–").strip()

    # Split on the en dash
    split_subjects = [s.strip() for s in normalized.split("–") if s.strip()]

    # Getting Category and Subcategory with fallbacks
    category = split_subjects[0] if len(split_subjects) > 0 else "Unknown"
    subcategory = split_subjects[1] if len(split_subjects) > 1 else "Unknown"

    # Converting ISO to SQL format
    iso_date = item['decision_date']
    dt = datetime.fromisoformat(iso_date.replace("Z", "+00:00"))
    sql_date = dt.strftime("%Y-%m-%d %H:%M:%S")

    # Testing output
    # print(f"""
    #     {item['title']}
    #     Citation {item['neutral_citation']}
    #     Category {category}
    #     Subcategory {subcategory}
    #     Decision Date {sql_date}
    #     HTML Link {item['html_url']}
    #     PDF Link {item['pdf_url']}
    #     """)

    # Insert into database
    c.execute('''INSERT INTO ukut_cases 
                 (title, neutral_citation, category, subcategory, decision_date, html_link, pdf_link)
                 VALUES (?, ?, ?, ?, ?, ?, ?)''',
              (item['title'], item['neutral_citation'], category, subcategory, sql_date, item['html_url'], item['pdf_url']))

conn.commit()
