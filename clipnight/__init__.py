import os
import sqlite3

from flask import Flask, render_template, request, Response, jsonify, json

def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # a simple page that says hello
    @app.route('/')
    def home():
        return render_template('home.html')

    @app.route('/newurl')
    def new_url():
        return render_template('url.html')

    @app.route('/addurl',methods = ['POST', 'GET'])
    def addurl():
        if request.method == 'POST':
            try:
                url = request.form['url']
                url = url.split('=')[1]
         
                con = sqlite3.connect("database.db")
                cur = con.cursor()
                cur.execute("INSERT INTO urls (url) VALUES (?)", (url,))
            
                con.commit()
                addmsg = "Record successfully added"
            except:
                con.rollback()
                addmsg = "error in insert operation"
      
            finally:
                return render_template("result.html", msg = addmsg)
                con.close()

    @app.route('/listurls')
    def list():
       con = sqlite3.connect("database.db")
       con.row_factory = sqlite3.Row
   
       cur = con.cursor()
       cur.execute("select * from urls")
   
       #rows = cur.fetchall();

       urls = []
       for row in cur:
           urls.append(row['url'])

       data = { 'url' : urls }

       resp = jsonify(data)
       resp.status_code = 200
       #resp.headers['Access-Control-Allow-Origin:'] = '*'
   
       return resp

    return app
