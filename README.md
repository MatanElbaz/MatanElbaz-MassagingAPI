# MatanElbaz-MassagingAPI
Start the program by "npm run start" (see "scripts" object to see the value).

The server started on port 8080

now we can send the http requests !

example:

-open Postman

-send "POST" request with "localhost:8080/send" URL.

-add the Body to the rquest: 

{

    "recipient":"Noa",
    
    "sender":"Matan",
    
    "message":"Hi Noa good morning!"
    
}

We will get a response body back with the saved object from the "DB.json".


Now,we can send '/recive' request:

-send "POST" request with "localhost:8080/recive" URL.

-add the Body to the rquest: 

{

    "recipient":"Noa"
    
}

We will get a response body back with all the massages of Noa.
