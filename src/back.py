from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Permet les requêtes CORS depuis votre frontend

@app.route('/')
def home():
    return jsonify({"message": "Welcome to the contact API!"})

@app.route('/Contact', methods=['POST'])
def Contact():
    data = request.get_json()
    print("Received data:", data)

    # Récupérez les détails du formulaire
    first_name = data.get('firstName')
    last_name = data.get('lastName')
    email = data.get('email')
    phone = data.get('phone')
    message = data.get('message')

    # Vérifiez que tous les champs sont remplis
    if not all([first_name, last_name, email, phone, message]):
        return jsonify({"code": 400, "message": "All fields are required."})

    try:
        sender_email = "hajarsouiyah08@gmail.com"  
        receiver_email = "hajarsouiyah08@gmail.com"
        password = "pwvh qcsh kmwy jdxl"

        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = receiver_email
        msg['Subject'] = "Nouveau message de contact"

        body = f"Nom: {first_name} {last_name}\nEmail: {email}\nTéléphone: {phone}\nMessage: {message}"
        msg.attach(MIMEText(body, 'plain'))

        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()  
            server.login(sender_email, password)
            server.send_message(msg)
        return jsonify({"code": 200, "message": "Message sent successfully"})

    except smtplib.SMTPAuthenticationError:
        return jsonify({"code": 401, "message": "Authentication failed, check your email and password."})
    except smtplib.SMTPConnectError:
        return jsonify({"code": 500, "message": "Failed to connect to the email server."})
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"code": 500, "message": "Something went wrong, please try again later."})

if __name__ == "__main__":
    app.run(debug=True)
