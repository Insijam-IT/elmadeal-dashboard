$(document).ready(function() {
    let dataSet = [  
           {  
              "id":2,
              "email":"diallo@elmadeal.com",
              "first_name":"Diallo",
              "last_name":"Diallo",
              "phone_number":"+221 11-111-11-12",
              "city":"Dakar",
              "address":"Omael beauty, dakar ",
              "birthday":null,
              "created_at":"2019-01-16T23:10:38.584Z",
              "updated_at":"2019-01-16T23:10:38.584Z"
           },
           {  
              "id":6,
              "email":"marieme@elmadeal.com",
              "first_name":"Marieme",
              "last_name":"Marieme",
              "phone_number":"+221 11-111-11-16",
              "city":"Dakar",
              "address":"dakar",
              "birthday":null,
              "created_at":"2019-01-16T23:10:39.160Z",
              "updated_at":"2019-01-16T23:10:39.160Z"
           },
           {  
              "id":7,
              "email":"anne@elmadeal.com",
              "first_name":"Anne",
              "last_name":"Anne",
              "phone_number":"+221 11-111-11-17",
              "city":"Dakar",
              "address":"Point E",
              "birthday":null,
              "created_at":"2019-01-16T23:10:39.307Z",
              "updated_at":"2019-01-16T23:10:39.307Z"
           },
           {  
              "id":8,
              "email":"marie@elmadeal.com",
              "first_name":"Marie",
              "last_name":"Marie",
              "phone_number":"+221 11-111-11-18",
              "city":"Dakar",
              "address":"Liberté 6 extension",
              "birthday":null,
              "created_at":"2019-01-16T23:10:39.463Z",
              "updated_at":"2019-01-16T23:10:39.463Z"
           }];
    $('#clients').DataTable( {
        "data": dataSet,//"http://kartti.com/clients.txt",
        "columns": [
            { "data": "email", title: "Email" },
            { "data": "first_name", title: "Nom" },
            { "data": "last_name", title: "Prénom" },
            { "data": "phone_number", title: "Teléphonne" },
            { "data": "address", title: "Adresse" },
            { "data": "city", title: "Ville" }
        ],
        "deferRender": true
    } );
    
} );