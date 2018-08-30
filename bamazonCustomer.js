var mysql = require("mysql");
var inquirer = require('inquirer');
require("console.table"); //formats data into table

var connection = mysql.createConnection({
   host: "localhost",
   port: 3306,
   user: "root",
   password: "hellosql",
   database: "bamazon_db"
});

// connection.connect(function(err){
//    if(err){
//        throw err; 
   
//    else{
//        console.log("connected as " + connection.threadId);
//        loadProducts();
//    }
// });

// Creates the connection with the server and loads the product data upon a successful connection
connection.connect(function(err) {
   if (err) {
     console.error("error connecting: " + err.stack);
   }
   loadProducts();
 });

function loadProducts(){
   connection.query("SELECT * FROM products", function(err,response){
      if(err) throw err;
      console.table(response);

      promptForItem(); 
   });
}

function promptForItem(inventory){
   inquirer
      .prompt([
         {
            type: "input",
            name: "choice",
            message: "What is the id of the item you want to purchase? [quit with Q]",
            validate: function(val){
               return !isNaN(val)||val.toLowerCase()==="q"
            }
         }
      ])
      .then(function(val){
         checkIfShouldExit(val.choice)
      })
}