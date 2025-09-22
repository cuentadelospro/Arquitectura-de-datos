from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    """Página principal con información básica y bienvenida"""
    return render_template('index.html')

@app.route('/bordados')
def bordados():
    """Apartado de bordados personalizados"""
    return render_template('bordados.html')

@app.route('/precios')
def precios():
    """Apartado de precios con tabla de servicios"""
    return render_template('precios.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)