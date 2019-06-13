const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');


const options = {
    swaggerDefinition: {
        info: {
            title: 'API za November',
            version: '1.0.0', 
            description: 'API za November',
        },
        host : 'https://si2019november.herokuapp.com',
        basePath: '/',
        "paths": {
            "/November/login": {
               "post": {
                  "summary": "Prijavljuje korisnika na aplikaciju",
                  "description": "Prijavljuje korisnika na aplikaciju",
                  "parameters": [
                     {
                        "in": "body",
                        "name": "body",
                        "description": "Korisnikovi podaci",
                        "required": true,
                        "schema": {
                           "type": "object",
                           "properties": {
                              "username": {
                                 "type": "string",
                                 "example": "korisnik"
                              },
                              "password": {
                                 "type": "string",
                                 "example": "sifra"
                              }
                           }
                        }
                     }
                  ],
                  "responses": {
                     "200": {
                        "description": "Uspješan login"
                     },
                     "400": {
                        "description": "Greška"
                     }
                  }
               }
            },
            "/November/logout": {
               "post": {
                  "summary": "Odjavljuje korisnika sa aplikacije",
                  "description": "Odjavljuje korisnika sa aplikacije",
                  "parameters": [
                     {
                        "in": "body",
                        "name": "body",
                        "description": "Korisnikovi podaci",
                        "required": true,
                        "schema": {
                           "type": "object",
                           "properties": {
                              "id": {
                                 "type": "integer",
                                 "example": "idstudenta"
                              }
                           }
                        }
                     }
                  ],
                  "responses": {
                     "200": {
                        "description": "Uspješan logout"
                     },
                     "400": {
                        "description": "Greška"
                     }
                  }
               }
            },
            "/November/novosti": {
               "get": {
                  "summary": "Dohvaća novosti",
                  "description": "Dohvaća novosti",
                  "parameters": [
                     {
                        "name": "idStudenta",
                        "in": "query",
                        "required": true,
                        "type": "integer"
                     }
                  ],
                  "responses": {
                     "200": {
                        "description": "Novosti"
                     },
                     "400": {
                        "description": "Greška"
                     }
                  }
               }
            },
            "/November/predmeti": {
               "get": {
                  "summary": "Dohvaća trenutne predmete",
                  "description": "Dohvaća trenutne predmete",
                  "parameters": [
                     {
                        "name": "idStudenta",
                        "in": "query",
                        "required": true,
                        "type": "integer"
                     }
                  ],
                  "responses": {
                     "200": {
                        "description": "Lista predmeta"
                     },
                     "400": {
                        "description": "Greška"
                     }
                  }
               }
            },
            "/November/odslusaniPredmeti": {
               "get": {
                  "summary": "Dohvaća odslušane predmete",
                  "description": "Dohvaća odslušane predmete",
                  "parameters": [
                     {
                        "name": "idStudenta",
                        "in": "query",
                        "required": true,
                        "type": "integer"
                     }
                  ],
                  "responses": {
                     "200": {
                        "description": "Lista odslušanih predmeta"
                     },
                     "400": {
                        "description": "Greška"
                     }
                  }
               }
            },
            "/November/predmetStudent": {
               "get": {
                  "summary": "Dohvaća podatke o predmetu za studenta",
                  "description": "Dohvaća podatke o predmetu za studenta",
                  "parameters": [
                     {
                        "name": "idStudenta",
                        "in": "query",
                        "required": true,
                        "type": "integer"
                     },
                     {
                        "name": "idPredmeta",
                        "in": "query",
                        "required": true,
                        "type": "integer"
                     }
                  ],
                  "responses": {
                     "200": {
                        "description": "Podaci o predmetu za datog studenta"
                     },
                     "400": {
                        "description": "Greška"
                     }
                  }
               }
            },
            "/November/dohvatiPodatke": {
               "get": {
                  "summary": "Dohvaća sve lične podatke za studenta",
                  "description": "Dohvaća sve lične podatke za studenta",
                  "parameters": [
                     {
                        "name": "idStudenta",
                        "in": "query",
                        "required": true,
                        "type": "integer"
                     }
                  ],
                  "responses": {
                     "200": {
                        "description": "Lični podaci za datog studenta"
                     },
                     "400": {
                        "description": "Greška"
                     }
                  }
               }
            },
            "/November/dohvatiProsjeke": {
               "get": {
                  "summary": "Dohvaća prosjeke za studenta",
                  "description": "Dohvaća prosjeke za studenta",
                  "parameters": [
                     {
                        "name": "idStudenta",
                        "in": "query",
                        "required": true,
                        "type": "integer"
                     }
                  ],
                  "responses": {
                     "200": {
                        "description": "Podaci o ostvarenim prosjecima za datog studenta"
                     },
                     "400": {
                        "description": "Greška"
                     }
                  }
               }
            },
            "/November/dohvatiIspite": {
               "get": {
                  "summary": "Dohvaća sve ispite za studenta",
                  "description": "Dohvaća sve ispite za studenta",
                  "parameters": [
                     {
                        "name": "idStudenta",
                        "in": "query",
                        "required": true,
                        "type": "integer"
                     }
                  ],
                  "responses": {
                     "200": {
                        "description": "Podaci o polaganim ispitima za datog studenta"
                     },
                     "400": {
                        "description": "Greška"
                     }
                  }
               }
            },
            "/November/dohvatiZadace": {
               "get": {
                  "summary": "Dohvaća sve bodove na zadaćama za studenta",
                  "description": "Dohvaća sve bodove na zadaćama za studenta",
                  "parameters": [
                     {
                        "name": "idStudenta",
                        "in": "query",
                        "required": true,
                        "type": "integer"
                     }
                  ],
                  "responses": {
                     "200": {
                        "description": "Podaci o bodovima na zadaće za datog studenta"
                     },
                     "400": {
                        "description": "Greška"
                     }
                  }
               }
            },
            "/November/dohvatiUpisane": {
               "get": {
                  "summary": "Dohvaća sve upisane predmete i ocjene za studenta",
                  "description": "Dohvaća sve upisane predmete i ocjene za studenta",
                  "parameters": [
                     {
                        "name": "idStudenta",
                        "in": "query",
                        "required": true,
                        "type": "integer"
                     }
                  ],
                  "responses": {
                     "200": {
                        "description": "Podaci o upisanim predmetima i odgovarajućim ocjenama za datog studenta"
                     },
                     "400": {
                        "description": "Greška"
                     }
                  }
               }
            },
            "/November/dohvatiPrisustvo": {
               "get": {
                  "summary": "Dohvaća sva prisustva za datog studenta",
                  "description": "Dohvaća sva prisustva za datog studenta",
                  "parameters": [
                     {
                        "name": "idStudenta",
                        "in": "query",
                        "required": true,
                        "type": "integer"
                     }
                  ],
                  "responses": {
                     "200": {
                        "description": "Podaci o bodovima za prisustvo za datog studenta"
                     },
                     "400": {
                        "description": "Greška"
                     }
                  }
               }
            },
            "/November/dohvatiUkupneBodove": {
               "get": {
                  "summary": "Dohvaća ukupan broj bodova na trenutnim predmetima za datog studenta",
                  "description": "Dohvaća ukupan broj bodova na trenutnim predmetima za datog studenta",
                  "parameters": [
                     {
                        "name": "idStudenta",
                        "in": "query",
                        "required": true,
                        "type": "integer"
                     }
                  ],
                  "responses": {
                     "200": {
                        "description": "Podaci o ukupno ostvarenom broju bodova na pojedinim predmetima za datog studenta"
                     },
                     "400": {
                        "description": "Greška"
                     }
                  }
               }
            },
            "/November/dohvatiPrveParcijale": {
               "get": {
                  "summary": "Dohvaća bodove na prvom parcijalnom ispitu za sve predmete za datog studenta",
                  "description": "Dohvaća bodove na prvom parcijalnom ispitu za sve predmete za datog studenta",
                  "parameters": [
                     {
                        "name": "idStudenta",
                        "in": "query",
                        "required": true,
                        "type": "integer"
                     }
                  ],
                  "responses": {
                     "200": {
                        "description": "Podaci o ostvarenom broju bodova na prvim parcijalama po predmetima za datog studenta"
                     },
                     "400": {
                        "description": "Greška"
                     }
                  }
               }
            },
            "/November/dohvatiDrugeParcijale": {
               "get": {
                  "summary": "Dohvaća bodove na drugom parcijalnom ispitu za sve predmete za datog studenta",
                  "description": "Dohvaća bodove na drugom parcijalnom ispitu za sve predmete za datog studenta",
                  "parameters": [
                     {
                        "name": "idStudenta",
                        "in": "query",
                        "required": true,
                        "type": "integer"
                     }
                  ],
                  "responses": {
                     "200": {
                        "description": "Podaci o ostvarenom broju bodova na drugim parcijalama po predmetima za datog studenta"
                     },
                     "400": {
                        "description": "Greška"
                     }
                  }
               }
            },
            "/November/dohvatiZavrsne": {
               "get": {
                  "summary": "Dohvaća bodove na završnom ispitu za sve predmete za datog studenta",
                  "description": "Dohvaća bodove na završnom ispitu za sve predmete za datog studenta",
                  "parameters": [
                     {
                        "name": "idStudenta",
                        "in": "query",
                        "required": true,
                        "type": "integer"
                     }
                  ],
                  "responses": {
                     "200": {
                        "description": "Podaci o ostvarenom broju bodova na završnim ispitima po predmetima za datog studenta"
                     },
                     "400": {
                        "description": "Greška"
                     }
                  }
               }
            },
            "/November/dohvatiPolozene": {
               "get": {
                  "summary": "Dohvaća sve položene predmete za tekuću godinu",
                  "description": "Dohvaća sve položene predmete za tekuću godinu",
                  "parameters": [
                     {
                        "name": "idStudenta",
                        "in": "query",
                        "required": true,
                        "type": "integer"
                     }
                  ],
                  "responses": {
                     "200": {
                        "description": "Lista svih položenih predmeta u tekućoj godini"
                     },
                     "400": {
                        "description": "Greška"
                     }
                  }
               }
            },
            "/November/dohvatiNepolozene": {
               "get": {
                  "summary": "Dohvaća sve nepoložene predmete za tekuću godinu",
                  "description": "Dohvaća sve nepoložene predmete za tekuću godinu",
                  "parameters": [
                     {
                        "name": "idStudenta",
                        "in": "query",
                        "required": true,
                        "type": "integer"
                     }
                  ],
                  "responses": {
                     "200": {
                        "description": "Lista svih nepoloženih predmeta u tekućoj godini"
                     },
                     "400": {
                        "description": "Greška"
                     }
                  }
               }
            }
         },
        servers : [ {
            url : 'http://localhost:3000',
            description : "Frontend server koji koristi ovaj rest api."
        }]
    },
    // List of files to be processes. You can also set globs './routes/*.js'
    apis: ['./server.js'],
};


const specs = swaggerJsdoc(options);

module.exports = (app) => {
    app.use('/swagger-json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(specs);
    })
    app.use('/', swaggerUi.serve, swaggerUi.setup(specs));
}