
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


app.get('/November/odslusaniPredmeti/:idStudenta', function(req, res){
  res.json(MOCK_DATA_ODSLUSANIPREDMETI); 
});

app.get('/November/dajOdslusani/:s/:p', function(req,res){
/*
  var idStudenta = req.params.idStudenta;
  var nazivPredmeta = req.params.nazivPredmeta;
  axios.get('https://si2019delta.herokuapp.com/dohvatiIDPredmeta/'+nazivPredmeta).then(function(response){
      var idPredmeta = response.data;


  });
*/
  res.json(MOCK_DATA_ODSLUSANIPREDMET);
});

app.get('/November/dohvatiPrisustvo/:idStudenta', function(req, res){
  res.json(MOCK_DATA_IZVJESTAJPRISUSTVO); 
});

app.get('/November/dohvatiZadace/:idStudenta', function(req, res){
  res.json(MOCK_DATA_IZVJESTAJZADACE); 
});

app.get('/November/dohvatiPolozene/:idStudenta', function(req, res){
  res.json(MOCK_DATA_IZVJESTAJPOLOZENI); 
});

app.get('/November/dohvatiNepolozene/:idStudenta', function(req, res){
  res.json(MOCK_DATA_IZVJESTAJNEPOLOZENI); 
});

app.get('/November/dohvatiProsjeke/:idStudenta', function(req, res){

  var a=
  {"userAutorizacija":true,"success":true,
  "ocjene":[[{"AkademskaGodina":"2017/18","Ocjene":
  [{"Predmet":"Novi predmet neki","Ocjena":null},
  {"Predmet":"Predmettt","Ocjena":null},
  {"Predmet":"zlatin Predmet","Ocjena":null}]}],
  [{"AkademskaGodina":"2018/19","Ocjene":
  [{"Predmet":"Softver inzenjering","Ocjena":10},
  {"Predmet":"Tehnike programiranja","Ocjena":null},
  {"Predmet":"Organizacija softverskog projekta","Ocjena":null}]}]]};

  var idStudenta = req.params.idStudenta;
  axios.get('https://si2019siera.herokuapp.com/studenti/'+idStudenta).then(function(response){
  var pom={}
  resp1=response.ocjene;
  i=0;
  resp1.forEach(function(element){
    //var pom={};
    niz=[];

    element[0].Ocjene.forEach(function(el) {
      if(el.Ocjena==null) niz.push(0)
      else niz.push(el.Ocjena)
    })
    if(i==0) {
      pom.prva=niz;
      pom.druga=[0];
      pom.treca=[0];
    }
    else if (i==1) {
    pom.druga=niz;
    pom.treca=[0];
    }
    else pom.treca=niz;
    i++;
  })
  pom.godine=MOCK_DATA_PROSJECI[3].godine;
  pom.semestri=MOCK_DATA_PROSJECI[4].semestri;
  console.log(pom);
  res.json(pom);
  }).catch(error => {
  res.json(MOCK_DATA_PROSJECI);
  console.log("error");
  });
});

app.get('/November/predmetStudent/:idPredmeta/:idStudenta', function(req, res){
  res.json(MOCK_DATA_ODSLUSANIPREDMET); 
});

app.get('/November/dohvatiIspite/:idStudenta', function(req, res){
  res.json(MOCK_DATA_ISPITI); 
});

app.get('/November/dohvatiUpisane/:idStudenta', function(req, res){
  res.json(MOCK_DATA_UPISANI); 
});


swagger_document(app);


app.listen(PORT,function(){ console.log('server successfully started on port '+PORT); });

const MOCK_DATA_IZVJESTAJPRISUSTVO =
[
  {
    predmet: "Administracija racunarskih mreza",
    bodovi : 10
  },
  {
    predmet: "Vještačka inteligencija",
    bodovi : 10
  },
  {
    predmet: "Softver inženjering",
    bodovi : 10
  }
];

const MOCK_DATA_IZVJESTAJZADACE =
[
  {
    predmet: "Administracija racunarskih mreza",
    bodovi : 15
  },
  {
    predmet: "Vještačka inteligencija",
    bodovi : 12
  },
  {
    predmet: "Softver inženjering",
    bodovi : 0
  }
];

const MOCK_DATA_IZVJESTAJPOLOZENI =
[
  {
     key:"1",
     naziv:"Projektovanje informacionih sistema"
  },
  {
     key:"2",
     naziv:"Projektovanje i sinteza digitalnih sistema"
  }
];

const MOCK_DATA_UPISANI =
[
  {
     key:"1",
     naziv:"Projektovanje informacionih sistema"
  },
  {
     key:"2",
     naziv:"Projektovanje i sinteza digitalnih sistema"
  }
];

const MOCK_DATA_IZVJESTAJNEPOLOZENI =
[
  {
     key:"1",
     naziv:"Softver inženjering"
  },
  {
     key:"2",
     naziv:"Vještačka inteligencija"
  }
];


const MOCK_DATA_ODSLUSANIPREDMET =
{
    id: 1,
      title: "Neki predmet",
      profesor: "Profesor",
      ECTS: "5",
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
};

const MOCK_DATA_ODSLUSANIPREDMETI =
[
  {
     Naziv:"Zimski semestar 2016/2017",
     Predmeti:
     [
         {predmet: "Inženjerska matematika 1"},
         {predmet: "Inženjerska fizika 1"},
         {predmet: "Linearna algebra geometrija"},
         {predmet: "Osnove elektrotehnike"},
         {predmet: "Osnove računarstva"}
     ]
  },
  {
   Naziv:"Ljetni semestar 2016/2017",
   Predmeti:
   [
       {predmet: "Inženjerska matematika 2"},
       {predmet: "Tehnike programiranja"},
       {predmet: "Vjerovatnoća i statistika"},
       {predmet: "Matematička logika i teorija izračunljivosti"},
       {predmet: "Operativni sistemi"}
   ]
}
];


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

const MOCK_DATA_PROSJECI= [
  {
  prva: [6, 6, 6, 7, 6, 9, 8, 8, 8, 6] 
  },
  {
  druga: [6, 7, 8, 8, 7, 9, 7, 8, 8, 7, 7, 9] 
  },
  {
  treca: [10, 9, 9, 8, 7, 7, 9, 8, 7, 6] 
  },
  {
  godine: 
  [
  {
      id: 1,
      title: 'Prva'
  },
  {
      id: 2,
      title: 'Druga'
  },
  {
      id: 3,
      title: 'Treća'
  }
  ]
  },
  {
    semestri: 
    [
      {
        id: 1,
        title: '1.'
    },
    {
        id: 2,
        title: '2.'
    },
    {
        id: 3,
        title: '3.'
    },
    {
        id: 4,
        title: '4.'
    },
    {
        id: 5,
        title: '5.'
    }
    ]
  }
];
const MOCK_DATA_ISPITI = [
  {
    predmet: "Administracija racunarskih mreza",
    datum : "2019-06-05"
  },
  {
    predmet: "Vještačka inteligencija",
    bodovi : "2019-06-09"
  },
  {
    predmet: "Softver inženjering",
    bodovi : "2019-06-09"
  },
  {
    predmet: "Projektovanje informacionih sistema",
    bodovi : "2019-06-11"
  }
];