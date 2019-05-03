var mysql = require("mysql");
var inquirer = require("inquirer");
var colors = require('colors');
// const cTable = require('console.table');;

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Spring21",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  chooseItem();
});


// function displayItems() {
//   var table = mysql -uroot products --table < schema.sql;
// }

function chooseItem() {
  connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;
      // once you have the items, prompt the user for which they'd like to bid on
      inquirer.prompt([
                    {
                      type: 'input',
                      name: 'item',
                      message: 'Please enter the Item ID that you would like to purchase.',
                      filter: Number
                    },
                  ]).then(start) 
                    // switch (answer.input) {
                    //   case "How many do you need?":
                    //     start();
                    //     break;
                      
                    // })
  })
  };
              
function start() {
  inquirer.prompt([
		{
			type: 'input',
			name: 'Quantity',
      // message: 'How many do you need?',
		}
    ]).then(function(input) {
      console.log("You have selected: \n Item " + input.item + '\n Quantity ' + input.Quantity)
        });
      };
      
