var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('pelamar',['pelamar']);
var bodyParser = require('body-parser');


app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/pelamar',function(req,res){
	console.log("I received a GET requested")
db.pelamar.find(function(err,docs){
	console.log(docs);
	res.json(docs);
})

});

app.post('/pelamar',function(req,res){
	console.log(req.body);
	db.pelamar.insert(req.body,function(err,doc){
		res.json(doc);
	});
});

app.delete('/pelamar/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db.pelamar.remove({_id:mongojs.ObjectId(id)},function(err,doc){
		res.json(doc);
	});
});

app.get('/pelamar/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.pelamar.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});


app.put('/pelamar/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.nopol);
  db.pelamar.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {nopol: req.body.nopol, jenis: req.body.jenis}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});


app.listen(300);
console.log("server tun in 300");