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
            message: "What is the ID of the item you want to purchase? [type Q to quit]",
            validate: function(val){
               return !isNaN(val)||val.toLowerCase()==="q"
            }
         }
      ]).then(function(val){
         checkIfShouldExit(val.choice);
         var choiceID = parseInt(val.choice);
         var product = checkInventory(choiceID,inventory);

         // If there is a product with the id the user chose, prompt the customer for a desired quantity
         if (product) {
            // Pass the chosen product to promptForQuantity
            promptForQuantity(product);
         }
         else {
            // Otherwise let them know the item is not in the inventory, re-run loadProducts
            console.log("\nThat item is not in the inventory.");
            loadProducts();
         }
      });
 }

 // Prompt the customer for a product quantity
function promptForQuantity(product){
   inquirer.prompt([
      {
         type: "input",
         name: "choice",
         message: "How many do you want to purchase? [type Q to quit]",
         validate: function(val){
            return ~isNaN(val)||val.toLowerCase()==="q"
         }
      }
   ]).then(function(val){
      checkIfShouldExit(val.choice);
      var choiceQuantity = parseInt(val.choice);

   })
}


// Purchase the desired quantity of the desired item
function makePurchase(product, quantity) {
   connection.query(
     "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",























// Check to see if the product the user chose exists in the inventory
function checkInventory(choiceId, inventory) {
   for (var i = 0; i < inventory.length; i++) {
     if (inventory[i].item_id === choiceId) {
       // If a matching product is found, return the product
       return inventory[i];
     }
   }
   // Otherwise return null
   return null;
 }
 
 // Check to see if the user wants to quit the program
 function checkIfShouldExit(choice) {
   if (choice.toLowerCase() === "q") {
     // Log a message and exit the current node process
     console.log("Goodbye!");
     process.exit(0);
   }
 }