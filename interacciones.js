module.exports = [

  //Precio
  {
    ruta: '/precio',
    metodo: 'get',
    funcion: function (req, res) {

      // esta linea es mugre, porque deberia sacarlo de la base de datos
      var tiempo_img = new Date(2016, 9, 19, 16, 0, 0);
      console.log(tiempo_img);

      // obtengo la diferencia en segundos
      var tiempo_inicial = new Date() - tiempo_img;

      var precio = 1000 - tiempo_inicial/1000/100;

      var obj = {
        precio: precio
      };

      res.json( obj )
    }
  },


  //-----------------------Ejemplos--------------------------

  // Time
  {
    ruta: '/time',
    metodo: 'get',
    funcion: function (req, res) {

      // Get the documents collection
      var collection = db.collection('inserts');

      // Find some documents
      collection.find({}).toArray(function(err, docs) {

        // respuesta
        res.json(docs);
      });

    }
  },
  {
    ruta: '/time',
    metodo: 'post',
    funcion: function (req, res) {

      //Obtener data
      var algo = req.body.algo;

      // Insert a single document
      self.db.collection('inserts').insertOne({a:1, askj:12}, function(err, r) {
      });

      // Insert multiple documents
      self.db.collection('inserts').insertMany([{a:2}, {a:3}], function(err, r) {
      });
    }
  }


];

