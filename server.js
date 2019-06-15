
const express = require('express');
const app = express();
const https = require('https');
const request = require('request');
const axios = require('axios');
const swagger_document=require('./swagger-document.js');
var cors = require("cors");

app.use(cors());


var PORT = process.env.PORT || 31914;


app.get('/predmeti/:idstudenta/prviParcijalni', (req, res) => {
  res.json(MOCK_DATA_PRVI_PARCIJALNI);
});

app.get('/predmeti/:idstudenta/drugiParcijalni', (req, res) => {
  res.json(MOCK_DATA_DRUGI_PARCIJALNI);
});

app.get('/November/novosti', (req, res) => {
  res.json(MOCK_DATA_NOVOSTI);
});
app.get('/November/predmeti', (req, res)=>{
  res.json(MOCK_DATA_PREDMETI);
});
app.get('/November/dohvatiPrveParcijale',(req, res)=>{
  res.json(MOCK_DATA_PRVI_PARCIJALNI);
});
app.get('/November/dohvatiDrugeParcijale',(req, res)=>{
  res.json(MOCK_DATA_DRUGI_PARCIJALNI);
});
app.get('/predmeti/:idstudenta/zavrsni', (req, res) => {
  res.json(MOCK_DATA_ZAVRSNI);
});
app.get('/November/dohvatiZavrsne',(req, res)=>{
  res.json(MOCK_DATA_ZAVRSNI);
});

app.get('/November/dohvatiPodatke/:idStudenta',(req, res)=>{
  idstudenta=req.params.idStudenta;
  axios.get('https://si2019siera.herokuapp.com/studenti/'+idstudenta) 
  .then(response => {
  if (response.data.userAutorizacija==false) res.json(MOCK_DATA_PODACI_O_STUDENTU); //PRIVREMENO
  else if(response.data.user) res.json(response.data.user);
  else res.json(response.data);
})
  .catch(error => {
  res.json(error);
  console.log("error");
  });
  
});
app.get('/November/dohvatiUkupneBodove/:idStudenta',(req, res)=>{
  idstudenta=req.params.idStudenta;
  resp = [];
  MOCK_DATA_PREDMETI.forEach(function(element) {
      var res1={}
    res1.predmet=element.title;
    prviParc=0;
    drugiParc=0;
    element.ispiti.forEach(function(el){
      if(el.naziv=='Prvi parcijalni') prviParc=el.bodovi;
      if(el.naziv=='Drugi parcijalni') drugiParc=el.bodovi;
    })
    zadace=0;
    element.zadace.forEach(function(el){
      zadace=el.bodovi+zadace;
    })
    res1.bodovi=prviParc+drugiParc+zadace+element.prisustvo;
    resp.push(res1);
    })  
    res.json(resp)
});






swagger_document(app);


app.listen(PORT,function(){ console.log('server successfully started on port '+PORT); });

const MOCK_DATA_NOVOSTI= [
  { naziv: "Obavijesti1", tekst: "Obavijest1 tekst" },
  { naziv: "Obavijest2", tekst: "Lorem ipsum dui s apien eget mi proin sed libero enim sed faucibus Laoreet id donec ultrices tincidunt. Sagittis id consectetur purus ut faucibus pulvinar. Dui sapien eget mi proin sed libero enim sed faucibus Laoreet id donec ultrices tincidunt. Sagittis id consectetur purus ut faucibus pulvinar. Dui sapien eget mi proin sed libero enim sed faucibusLaoreet id donec ultrices tincidunt. Sagittis id consectetur purus ut faucibus pulvinar. Dui sapien eget mi proin sed libero enim sed faucibus. Eros donec ac odio tempor orci dapibus. Senectus et netus et malesuada fames. Auctor elit sed vulputate mi sit amet."},
  { naziv: "Obavijest3", tekst: "Obavijest3 tekst" },
  { naziv: "Obavijest4", tekst: "Obavijest3 tekst" },
  { naziv: "Obavijest5", tekst: "Obavijest3 tekst" },
  { naziv: "Obavijest6", tekst: "Obavijest3 tekst" },
  { naziv: "Obavijest7", tekst: "Obavijest3 tekst" },
  { naziv: "Obavijest8", tekst: "Obavijest3 tekst" },
  { naziv: "Obavijest9", tekst: "Lorem ipsum dui s apien eget mi proin sed libero enim sed faucibus Laoreet id donec ultrices tincidunt. Sagittis id consectetur purus ut faucibus pulvinar. Dui sapien eget mi proin sed libero enim sed faucibus Laoreet id donec ultrices tincidunt. Sagittis id consectetur purus ut faucibus pulvinar. Dui sapien eget mi proin sed libero enim sed faucibusLaoreet id donec ultrices tincidunt. Sagittis id consectetur purus ut faucibus pulvinar. Dui sapien eget mi proin sed libero enim sed faucibus. Eros donec ac odio tempor orci dapibus. Senectus et netus et malesuada fames. Auctor elit sed vulputate mi sit amet."}];

 const MOCK_DATA_PRVI_PARCIJALNI= [
  {
    predmet: "Administracija racunarskih mreza",
    bodovi : 6
  },
  {
    predmet: "Vještačka inteligencija",
    bodovi : 13
  },
  {
    predmet: "Softver inženjering",
    bodovi : 17
  }
];

const MOCK_DATA_DRUGI_PARCIJALNI = [
  {
    predmet: "Administracija racunarskih mreza",
    bodovi : 7
  },
  {
    predmet: "Vještačka inteligencija",
    bodovi : 18
  },
  {
    predmet: "Softver inženjering",
    bodovi : 15
  },
  {
    predmet: "Projektovanje informacionih sistema",
    bodovi : 14
  }
];

const MOCK_DATA_PREDMETI = [
  {
    id: 1,
    title: "Organizacija softverskog projekta",
    profesor: "Profesor OSP",
    ECTS: "4",
    asistenti: "Asistent",
    ispiti: [
      { naziv: "Prvi parcijalni", datum: "11/11/2019", bodovi: 13 },
      { naziv: "Prvi parcijalni", datum: "11/11/2019", bodovi: 15 },
      { naziv: "Drugi parcijalni", datum: "24/11/2019", bodovi: 13 }
    ],
    zadace: [
      { naziv: "Zadaća 1", bodovi: 3 },
      { naziv: "Zadaća 2", bodovi: 4 },
      { naziv: "Zadaća 3",bodovi: 2 },
      { naziv : "Zadaća 4", bodovi : 5}
    ],
    prisustvo:10
  },
  {
    id: 2,
    title: "Projektovanje informacionih sistema",
    profesor: "Profesor PIS",
    ECTS: "4",
    asistenti: "Asistent",
    ispiti: [
      { naziv: "Prvi parcijalni", datum: "11/11/2019", bodovi: 13 },
      { naziv: "Prvi parcijalni", datum: "11/11/2019", bodovi: 15 },
      { naziv: "Drugi parcijalni", datum: "24/11/2019", bodovi: 13 }
    ],
    zadace: [
      { naziv: "Zadaća 1", bodovi: 5 },
      { naziv: "Zadaća 2", bodovi: 4 },
      { naziv: "Zadaća 3",bodovi: 3 }
    ],
    prisustvo:10
  },
  {
    id: 3,
    title: "Softver inženjering",
    profesor: "Profesor SI",
    ECTS: "4",
    asistenti: "Asistent",
    ispiti: [
      { naziv: "Prvi parcijalni", datum: "11/11/2019", bodovi: 13 },
      { naziv: "Prvi parcijalni", datum: "11/11/2019", bodovi: 15 },
      { naziv: "Drugi parcijalni", datum: "24/11/2019", bodovi: 13 }
    ],
    zadace: [
      { naziv: "Zadaća 1", bodovi: 5 },
      { naziv: "Zadaća 2", bodovi: 8 },
      { naziv: "Zadaća 3",bodovi: 10 },
      { naziv : "Zadaća 4", bodovi : 10}
    ],
    prisustvo:10
  },
  {
    id: 4,
    title: "Vještačka inteligencija",
    profesor: "Profesor VI",
    ECTS: "4",
    asistenti: "Asistent",
    ispiti: [
      { naziv: "Prvi parcijalni", datum: "11/11/2019", bodovi: 13 },
      { naziv: "Prvi parcijalni", datum: "11/11/2019", bodovi: 15 },
      { naziv: "Drugi parcijalni", datum: "24/11/2019", bodovi: 13 }
    ],
    zadace: [
      { naziv: "Zadaća 1", bodovi: 1 },
      { naziv: "Zadaća 2", bodovi: 2 },
      { naziv: "Zadaća 3",bodovi: 2 },
      { naziv : "Zadaća 4", bodovi : 1},
      { naziv: "Zadaća 5",bodovi: 2 },
      { naziv : "Zadaća 6", bodovi : 2}
    ],
    prisustvo:10
  }
];

const MOCK_DATA_PODACI_O_STUDENTU=[
  {
    "id":2,
    "ime":"John",
    "prezime":"Wick",
    "adresa":"Marsovska 21",
    "ciklus":null,
    "datumRodjenja":"1993-04-05",
    "drzavljanstvo":"marsovac",
    "email":"string",
    "fotografija":"",
    "imePrezimeMajke":"string",
    "imePrezimeOca":"string",
    "indeks":null,
    "kanton":"string",
    "linkedin":"string",
    "mjestoRodjenja":"string",
    "password":"ea110dfdeb4b966c81f7d786df7b1192",
    "semestar":"1",
    "spol":true,
    "telefon":"string",
    "titula":null,
    "username":"stest1",
    "website":"string",
    "idOdsjek":1,
    "idUloga":1
  }
];

const MOCK_DATA_ZAVRSNI= [
  {
    predmet: "Administracija računarskih mreža",
    bodovi : 30
  },
  {
    predmet: "Vještačka inteligencija",
    bodovi : 40
  },
  {
    predmet: "Softver inženjering",
    bodovi : 20
  },
  {
    predmet: "Projektovanje informacionih sistema",
    bodovi: 35
  }
];