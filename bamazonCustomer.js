var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "Spring21",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  start();
});

function start() {
  inquirer.prompt([
		{
			type: 'input',
			name: 'item',
      message: 'Please enter the Item ID that you would like to purchase.',
			filter: Number
		},
		{
			type: 'input',
			name: 'quantity',
      message: 'How many do you need?',
			filter: Number
		}
    ]).then(function(input) {
      console.log("You have selected:" + input.item + input.quantity)
        // based on their answer, either call the bid or the post functions
        // if (answer.postOrBid === "POST") {
        //   postAuction();
        // }
        // else if(answer.postOrBid === "BID") {
        //   bidAuction();
        // } else{
        //   connection.end();
        // }
      });
    };
  
  // function bidAuction() {
  //   // query the database for all items being auctioned
  //   connection.query("SELECT * FROM auctions", function(err, results) {
  //     if (err) throw err;
  //     // once you have the items, prompt the user for which they'd like to bid on
  //     inquirer
  //       .prompt([
  //         {
  //           name: "choice",
  //           type: "rawlist",
  //           choices: function() {
  //             var choiceArray = [];
  //             for (var i = 0; i < results.length; i++) {
  //               choiceArray.push(results[i].item_name);
  //             }
  //             return choiceArray;
  //           },
  //           message: "What auction would you like to place a bid in?"
  //         },
  //         {
  //           name: "bid",
  //           type: "input",
  //           message: "How much would you like to bid?"
  //         }
  //       ])
  //       .then(function(answer) {
  //         // get the information of the chosen item
  //         var chosenItem;
  //         for (var i = 0; i < results.length; i++) {
  //           if (results[i].item_name === answer.choice) {
  //             chosenItem = results[i];
  //           }
  //         }
  
  //         // determine if bid was high enough
  //         if (chosenItem.highest_bid < parseInt(answer.bid)) {
  //           // bid was high enough, so update db, let the user know, and start over
  //           connection.query(
  //             "UPDATE auctions SET ? WHERE ?",
  //             [
  //               {
  //                 highest_bid: answer.bid
  //               },
  //               {
  //                 id: chosenItem.id
  //               }
  //             ],
  //             function(error) {
  //               if (error) throw err;
  //               console.log("Bid placed successfully!");
  //               start();
  //             }
  //           );
  //         }
  //         else {
  //           // bid wasn't high enough, so apologize and start over
  //           console.log("Your bid was too low. Try again...");
  //           start();
  //         }
  //       });
  //   });
  // }
  