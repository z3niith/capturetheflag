from flask import Flask, request, jsonify

app = Flask(__name__)

# List of valid flags (you can modify this list as needed)
VALID_FLAGS = [
    "CTF{lunar_codebreaker}", 
    "Codeintheschools", 
    "CTF{DarkNetSpecter}", 
    "10.0.0.130", 
    "Never gonna say goodbye", 
    "Last_one"
]

@app.route('/')
def home():
    return "Welcome to the CTF challenge!"

@app.route('/submit_flag', methods=['POST'])
def check_flag():
    # Get the flag from the incoming request (assuming JSON body)
    flag = request.json.get('flag')

    # Check if the flag is in the valid flags list
    if flag in VALID_FLAGS:
        return jsonify({"message": "Congratulations! Flag is correct!"}), 200
    else:
        return jsonify({"message": "An error occurred. Please try again."}), 400

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=3000)
