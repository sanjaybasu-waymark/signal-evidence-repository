import os
from dotenv import load_dotenv
from src.web.app import app

if __name__ == "__main__":
    load_dotenv()
    port = int(os.getenv("WEB_PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
