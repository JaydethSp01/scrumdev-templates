import os
import psycopg

DATABASE_URL = os.environ.get("DATABASE_URL")

try:
    conn = psycopg.connect(DATABASE_URL)
except Exception as e:
    print("Database connection failed, using in-memory database.", e)
    conn = None
