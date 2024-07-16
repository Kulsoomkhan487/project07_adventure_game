// import inquirer from "inquirer";
// import Chalk from "chalk";

// // Classes Player & Opponent
// class Player {
//   name: string;
//   fuel: number = 100;

//   constructor(name: string) {
//     this.name = name;
//   }

//   fuelDecrease() {
//     this.fuel -= 25;
//   }

//   fuelIncrease() {
//     this.fuel = 100;
//   }
// }

// class Opponent {
//   name: string;
//   fuel: number = 100;

//   constructor(name: string) {
//     this.name = name;
//   }

//   fuelDecrease() {
//     this.fuel -= 25;
//   }
// }

// // Player Name & Opponent Select
// let player = await inquirer.prompt([
//   {
//     name: "name",
//     type: "input",
//     message: "Please Enter Your Name",
//   },
// ]);

// let opponent = await inquirer.prompt({
//   name: "Select",
//   type: "list",
//   message: "Select Your Opponent",
//   choices: ["Skeleton", "Zombie", "Assassin"],
// });

// // Gathered Data
// let P1 = new Player(player.name);
// let O1 = new Opponent(opponent.Select);

// do {

//   // Skeleton
//   let ask = await inquirer.prompt({
//     name: "Option",
//     type: "list",
//     message: "Choose your action",
//     choices: ["Attack", "Drink Potion", "Run For Your Life"],
//   });

//   if (ask.Option === "Attack") {
//     console.log("Attack");
//     let num = Math.floor(Math.random() * 2);
//     if (num > 0) {
//       P1.fuelDecrease();
//       console.log(Chalk.bold.red(`${P1.name} fuel is ${P1.fuel}`));
//       console.log(Chalk.bold.green(`${O1.name} fuel is ${O1.fuel}`));
//       if (P1.fuel <= 0) {
//         console.log(Chalk.bold.red.italic(`${player.name}, You Lose This Game, Better Luck Next Time...` ));
//         process.exit()
//       } 
//     } 
//     else {
//       O1.fuelDecrease();
//       console.log(Chalk.bold.green(`${P1.name}'s fuel is ${P1.fuel}`));
//       console.log(Chalk.bold.red(`${O1.name}'s fuel is ${O1.fuel}`));
//       if (O1.fuel <= 0) {
//         console.log(Chalk.bold.red.italic(`${opponent.Select}, You Lose This Game, Better Luck Next Time...` ));
//         process.exit()
      
//       }
//     }
//   }

//   if (ask.Option === "Drink Potion") {
//     P1.fuelIncrease();
//     console.log(Chalk.bold.italic.green(`You Drink Health Potion, Your Fuel is ${P1.fuel} `));
//   }

//   if (ask.Option === "Run For Your Life") {
//     console.log(Chalk.bold.red.italic("You Lose This Game, Better Luck Next Time"));
//   }

// // Assasin

// if (ask.Option === "Assassin") {
//   console.log("Attack");
//   let num = Math.floor(Math.random() * 2);
//   if (num > 0) {
//     P1.fuelDecrease();
//     console.log(Chalk.bold.red(`${P1.name} fuel is ${P1.fuel}`));
//     console.log(Chalk.bold.green(`${O1.name} fuel is ${O1.fuel}`));
//     if (P1.fuel <= 0) {
//       console.log(Chalk.bold.red.italic(`${player.name}, You Lose This Game, Better Luck Next Time...` ));
//       process.exit()
//     } 
//   } 
//   else {
//     O1.fuelDecrease();
//     console.log(Chalk.bold.green(`${P1.name}'s fuel is ${P1.fuel}`));
//     console.log(Chalk.bold.red(`${O1.name}'s fuel is ${O1.fuel}`));
//     if (O1.fuel <= 0) {
//       console.log(Chalk.bold.red.italic(`${opponent.Select}, You Lose This Game, Better Luck Next Time...` ));
//       process.exit()
    
//     }
//   }
// }

// if (ask.Option === "Drink Potion") {
//   P1.fuelIncrease();
//   console.log(Chalk.bold.italic.green(`You Drink Health Potion, Your Fuel is ${P1.fuel} `));
// }

// if (ask.Option === "Run For Your Life") {
//   console.log(Chalk.bold.red.italic("You Lose This Game, Better Luck Next Time"));
// }


// //Zombie
// if (ask.Option === "Zombie") {
//   console.log("Attack");
//   let num = Math.floor(Math.random() * 2);
//   if (num > 0) {
//     P1.fuelDecrease();
//     console.log(Chalk.bold.red(`${P1.name} fuel is ${P1.fuel}`));
//     console.log(Chalk.bold.green(`${O1.name} fuel is ${O1.fuel}`));
//     if (P1.fuel <= 0) {
//       console.log(Chalk.bold.red.italic(`${player.name}, You Lose This Game, Better Luck Next Time...` ));
//       process.exit()
//     } 
//   } 
//   else {
//     O1.fuelDecrease();
//     console.log(Chalk.bold.green(`${P1.name}'s fuel is ${P1.fuel}`));
//     console.log(Chalk.bold.red(`${O1.name}'s fuel is ${O1.fuel}`));
//     if (O1.fuel <= 0) {
//       console.log(Chalk.bold.red.italic(`${opponent.Select}, You Lose This Game, Better Luck Next Time...` ));
//       process.exit()
    
//     }
//   }
// }

// if (ask.Option === "Drink Potion") {
//   P1.fuelIncrease();
//   console.log(Chalk.bold.italic.green(`You Drink Health Potion, Your Fuel is ${P1.fuel} `));
// }

// if (ask.Option === "Run For Your Life") {
//   console.log(Chalk.bold.red.italic("You Lose This Game, Better Luck Next Time"));
// }


// } while (true);



import inquirer from "inquirer";
import Chalk from "chalk";

// Classes Player & Opponent
class Player {
  name: string;
  fuel: number = 100;

  constructor(name: string) {
    this.name = name;
  }

  fuelDecrease() {
    this.fuel -= 25;
  }

  fuelIncrease() {
    this.fuel = 100;
  }
}

class Opponent {
  name: string;
  fuel: number = 100;

  constructor(name: string) {
    this.name = name;
  }

  fuelDecrease() {
    this.fuel -= 25;
  }
}

// Player Name & Opponent Select
let player = await inquirer.prompt([
  {
    name: "name",
    type: "input",
    message: "Please Enter Your Name",
  },
]);

let opponent = await inquirer.prompt({
  name: "Select",
  type: "list",
  message: "Select Your Opponent",
  choices: ["Skeleton", "Zombie", "Assassin"],
});

// Gathered Data
let P1 = new Player(player.name);
let O1 = new Opponent(opponent.Select);

do {
  let ask = await inquirer.prompt({
    name: "Option",
    type: "list",
    message: "Choose your action",
    choices: ["Attack", "Drink Potion", "Run For Your Life"],
  });

  if (ask.Option === "Attack") {
    console.log("Attack");
    let num = Math.floor(Math.random() * 2);
    if (num > 0) {
      P1.fuelDecrease();
      console.log(Chalk.bold.red(`${P1.name} fuel is ${P1.fuel}`));
      console.log(Chalk.bold.green(`${O1.name} fuel is ${O1.fuel}`));
      if (P1.fuel <= 0) {
        console.log(Chalk.bold.red.italic(`${player.name}, You Lose This Game, Better Luck Next Time...`));
        process.exit();
      }
    } else {
      O1.fuelDecrease();
      console.log(Chalk.bold.green(`${P1.name}'s fuel is ${P1.fuel}`));
      console.log(Chalk.bold.red(`${O1.name}'s fuel is ${O1.fuel}`));
      if (O1.fuel <= 0) {
        console.log(Chalk.bold.green.italic(`${opponent.Select} loses. You win!`));
        process.exit();
      }
    }
  }

  if (ask.Option === "Drink Potion") {
    P1.fuelIncrease();
    console.log(Chalk.bold.italic.green(`You Drink Health Potion, Your Fuel is ${P1.fuel} `));
  }

  if (ask.Option === "Run For Your Life") {
    console.log(Chalk.bold.red.italic("You Lose This Game, Better Luck Next Time"));
    process.exit();
  }

} while (true);
