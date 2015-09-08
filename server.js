var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('kendaraan',['kendaraan']);
var bodyParser = require('body-parser');


app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/kendaraan',function(req,res){
	console.log("I received a GET requested")
db.kendaraan.find(function(err,docs){
	console.log(docs);
	res.json(docs);
})

});

app.post('/kendaraan',function(req,res){
	console.log(req.body);
	db.kendaraan.insert(req.body,function(err,doc){
		res.json(doc);
	});
});

app.delete('/kendaraan/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db.kendaraan.remove({_id:mongojs.ObjectId(id)},function(err,doc){
		res.json(doc);
	});
});

app.get('/kendaraan/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.kendaraan.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});


app.put('/kendaraan/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.nopol);
  db.kendaraan.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {nopol: req.body.nopol, jenis: req.body.jenis}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});


app.listen(3001);
console.log("server tun in 3001");