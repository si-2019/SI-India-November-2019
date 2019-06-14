
const express = require('express');
const app = express();
const https = require('https');
const request = require('request');
const axios = require('axios');
const swagger_document=require('./swagger-document.js');

var PORT = process.env.PORT || 31914;

//Vraca sve o predmetima koje student trenutno slusa
//Potrebno pokrenuti Sierra i Lima server
app.get('/predmeti/:idstudenta', (req, res) => {
    idstudenta=req.params.idstudenta;
    mainResponse="";
axios.get('http://localhost:31918/predmeti/trenutni/'+idstudenta) //grupa Sierra //poziv vraca nazive svih predmeta
  .then(response => {
    brojPredmeta=response.data.trenutniPredmeti.length;
    i=0;
    let nizPedmeta=response.data.trenutniPredmeti
    axios.get('http://localhost:31918/studenti/'+idstudenta) //grupa Sierra //trazimo indeks studenta na osnovi id-a
    .then(response => {
        indeks=response.data[0].indeks;
        //console.log(indeks);
    //Prolazimo kroz sve vraćene predmete za studenta sa pronadjenim indeksom
    nizPedmeta.forEach(function(element) {
      //Poziv apija za svaki predmet
    axios.get('http://localhost:31912/izvjestaj/'+ indeks +'/'+element.naziv+'/bodovi') //grupa Lima //poziv vraca sve bodove na predmetu koji se salje kao parametar pored indeksa
    .then(response => {    
      i++;
      pomJSON=response.data;
      pomJSON['bodovi'].push({'predmet':element.naziv})
      //sve smjestamo u mainResponse
      if (i!=1) mainResponse=mainResponse+","+JSON.stringify(pomJSON);
      else mainResponse='['+JSON.stringify(pomJSON);
      if(i==brojPredmeta) {
        mainResponse=mainResponse+"]"
        res.json(JSON.parse(mainResponse));
      }

    })
    .catch(error => {
      console.log(error);
    });
  });
  })
  .catch(error => {
    console.log(error);
  });
})
.catch(error => {
  console.log(error);
});


  //Ovaj api vraća podatke o predmetu u sljedećem formatu
  /*
  [{"bodovi":
  [{"postojiStudent":true,"slusaPredmet":true,"prisustvo":10,"moguciBodPrisus":10,"prviParcijalni":10,"moguciBodPrve":20,"drugiParcijalni":"/",
  "moguciBodDruge":0,"zavrsni":"/","moguciBodZavrsnog":0,"zadaca":"/","moguciBodZad":1,"projekat":"/","moguciBodPro":14707,"ocjena":"/"},
  {"predmet":"Projektovanje informacionih sistema"}]},
  {"bodovi":[{"postojiStudent":true,"slusaPredmet":true,"prisustvo":10,"moguciBodPrisus":10,"prviParcijalni":"/","moguciBodPrve":0,
  "drugiParcijalni":"/","moguciBodDruge":0,"zavrsni":"/","moguciBodZavrsnog":0,"zadaca":"/","moguciBodZad":0,"projekat":"/","moguciBodPro":1387,
  "ocjena":"/"},{"predmet":"DS"}]}...
  ...
  ]
  */
});

//ISto samo za odslusane predmete
app.get('/odslusani/:idstudenta', (req, res) => {
  idstudenta=req.params.idstudenta;
  mainResponse="";
axios.get('http://localhost:31918/predmeti/odslusani/'+idstudenta) //grupa Sierra //poziv vraca nazive svih predmeta
.then(response => {
  brojPredmeta=response.data.odslusaniPredmeti.length;
  i=0;
  if(brojPredmeta==0) 
  res.json(JSON.parse("[]"));
  let nizPedmeta=response.data.odslusaniPredmeti
  axios.get('http://localhost:31918/studenti/'+idstudenta) //grupa Sierra //trazimo indeks studenta na osnovi id-a
  .then(response => {
      indeks=response.data[0].indeks;
      //console.log(indeks);
  //Prolazimo kroz sve vraćene predmete za studenta sa pronadjenim indeksom
  nizPedmeta.forEach(function(element) {
    //Poziv apija za svaki predmet
  axios.get('http://localhost:31912/izvjestaj/'+ indeks +'/'+element.naziv+'/bodovi') //grupa Lima //poziv vraca sve bodove na predmetu koji se salje kao parametar pored indeksa
  .then(response => {    
    i++;
    pomJSON=response.data;
    pomJSON['bodovi'].push({'predmet':element.naziv})
    //sve smjestamo u mainResponse
    if (i!=1) mainResponse=mainResponse+","+JSON.stringify(pomJSON);
    else mainResponse='['+JSON.stringify(pomJSON);
    if(i==brojPredmeta) {
      mainResponse=mainResponse+"]"
      res.json(JSON.parse(mainResponse));
    }

  })
  .catch(error => {
    console.log(error);
  });
});
})
.catch(error => {
  console.log(error);
});
})
.catch(error => {
console.log(error);
});
});



//Vraca ukupan br bodova po predmetima koje student trenutno slusa i koje je slusao
//Potrebno pokrenuti Sierra i Lima server

app.get('/predmeti/:idstudenta/ukupnoBodova', (req, res) => {
  idstudenta=req.params.idstudenta;
  resp="[";
axios.get('http://localhost:31914/predmeti/'+idstudenta) 
.then(response => {
  brojPredmeta=response.data.length;
    i=0;
    let nizPedmeta=response.data
    nizPedmeta.forEach(function(element) {
      //mainResponse=mainResponse+"\""+element.bodovi[1].predmet+"\":"+"\""+element[0].bodovi.prisustvo+"\"";
      ukupnoBodova=0;
      if(element.bodovi[0].prisustvo!="/") ukupnoBodova=ukupnoBodova+element.bodovi[0].prisustvo;
      if(element.bodovi[0].prviParcijalni!="/") ukupnoBodova=ukupnoBodova+element.bodovi[0].prviParcijalni;
      if(element.bodovi[0].drugiParcijalni!="/") ukupnoBodova=ukupnoBodova+element.bodovi[0].drugiParcijalni;
      if(element.bodovi[0].zavrsni!="/") ukupnoBodova=ukupnoBodova+element.bodovi[0].zavrsni;
      if(element.bodovi[0].zadaca!="/") ukupnoBodova=ukupnoBodova+element.bodovi[0].zadaca;
      if(element.bodovi[0].projekat!="/") ukupnoBodova=ukupnoBodova+element.bodovi[0].projekat;
      //console.log(ukupnoBodova + element.bodovi[1].predmet);
      resp=resp+"{\"predmet\":\""+element.bodovi[1].predmet+"\",\"bodovi\":\""+ukupnoBodova+"\"},"
    })
    axios.get('http://localhost:31914/odslusani/'+idstudenta) 
.then(response => {
  brojPredmeta=response.data.length;
    i=0;
    let nizPedmeta=response.data
    nizPedmeta.forEach(function(element) {
      //mainResponse=mainResponse+"\""+element.bodovi[1].predmet+"\":"+"\""+element[0].bodovi.prisustvo+"\"";
      ukupnoBodova=0;
      if(element.bodovi[0].prisustvo!="/") ukupnoBodova=ukupnoBodova+element.bodovi[0].prisustvo;
      if(element.bodovi[0].prviParcijalni!="/") ukupnoBodova=ukupnoBodova+element.bodovi[0].prviParcijalni;
      if(element.bodovi[0].drugiParcijalni!="/") ukupnoBodova=ukupnoBodova+element.bodovi[0].drugiParcijalni;
      if(element.bodovi[0].zavrsni!="/") ukupnoBodova=ukupnoBodova+element.bodovi[0].zavrsni;
      if(element.bodovi[0].zadaca!="/") ukupnoBodova=ukupnoBodova+element.bodovi[0].zadaca;
      if(element.bodovi[0].projekat!="/") ukupnoBodova=ukupnoBodova+element.bodovi[0].projekat;
      //console.log(ukupnoBodova + element.bodovi[1].predmet);
      resp=resp+"{\"predmet\":\""+element.bodovi[1].predmet+"\",\"bodovi\":\""+ukupnoBodova+"\"},"
    })
    
    resp=resp.replace(/.$/,"]") //mijenjamo zadnji znak u ] kako bi bilo u json formatu
    res.json(JSON.parse(resp));
})
.catch(error => {
console.log(error);
});
})
.catch(error => {
console.log(error);
});

//Ovaj api vraća podatke o predmetu u sljedećem formatu
/*
[{"predmet":"ARM","bodovi":"10"},{"predmet":"Projektovanje informacionih sistema","bodovi":"20"},
{"predmet":"IEK","bodovi":"10"},{"predmet":"SI","bodovi":"28"}]
*/
});
app.get('/predmeti/:idstudenta/prviParcijalni', (req, res) => {
  res.json(MOCK_DATA_PRVI_PARCIJALNI);
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