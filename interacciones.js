module.exports = [

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

