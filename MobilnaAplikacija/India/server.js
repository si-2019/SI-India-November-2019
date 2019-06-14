var express = require("express");
var app = express();
const port=31909;

app.get('/izdanepotvrde/:id', function(req, res)
{
    var id1 = req.params.id;
    var podaci2 = [];

        ZahtjevZaPotvrdu.findAll({where: {idStudenta:id1}}).then(function(potvrde){
            potvrde.forEach(potvrda => {
                SvrhaPotvrde.findOne({where: {id: potvrda.idSvrhe}}).then(function(svrhica){
                podaci2.push(svrhica.nazivSvrhe);
                podaci2.push(potvrda.datumZahtjeva);
                podaci2.push(potvrda.obradjen);
            });
        });
    });

        res.send(podaci2);

    });

app.get('/danasnjezadace/:id', function(req, res) {
//dodati studentid u zadace i pretrazivati po njemu!!
    var zadacice = [];
    var today = Date.now();

  Zadaca.findAll({where: {rokZaPredaju: today}}).then(function(zadace){
    zadaca.forEach(zadaca => {
        zadacice.push(zadaca.naziv);
        zadacice.push(zadaca.idPredmet);
    });
});

    res.send(zadacice);

});

app.get('/obradjenZahtjev/:id', function(req, res) {

    var id1 = req.params.id;

    ZahtjevZaPotvrdu.findOne({where: {id:id1}}).then(function(zahtjevcic){
        zahtjevcic.update({    
            obradjen: 1
        })
        Student.findOne({where: {id:zahtjevcic.idStudenta}}).then(function(studentic){
            var broj = studentic.brojbesplatnih-1;
        studentic.update({
            brojbesplatnih: broj
        })
        SvrhaPotvrde.findOne({where: {id: zahtjevcic.idSvrhe}}).then(function(svrhica){
        alert("Uspješno je obrađen zahtjev" + svrhica.naziv);
            });
        });
    });
});



app.listen(port, () => console.log(`Server pokrenut na portu ${port}!`))