'use strict';
// //1

// function createMyObject() {
//     object = {
//         foo: 'bar',
//         answerToUnivers: 42,
//         'olly olly': 'oxen free',
//         sayHello: function() {
//             return 'hello';
//         };
//     }
//     return object;
// }

// //2

// function updateObject(obj) {
//     obj.foo = 'foo';
//     obj.bar = 'bar';
//     obj.bizz = 'bizz';
//     obj.bang = 'bang';

//     return obj;
// }

// //3

// function personMaker() {
//     const person = {
//       firstName: 'Paul',
//       lastName: 'Jones',
//       fullName: function() {
//           return `${this.firstName} ${this.lastName}`;
//       }
//     };
//     return person;
// }

// function keyDeleter(obj) {
//     delete obj.foo;
//     delete obj.bar;
//     return obj;
// }

// //Second Exercise

// //1

// function makeStudentsReport(data) {
//   return data.map(student => `${student.name}: ${student.grade}`);
//  }

// //2 (First Solution)

// function enrollInSummerSchool(students) {
//   for (let i = 0; i < students.length; i++) {
//     for (let key in students[i]) {
//       students[i].status = 'In Summer school';
//     }
//   }
//   return students;
// }

// //2 (Second Solution)

// function enrollInSummerSchool(students) {
//   students.forEach(student => console.log(student.status = 'In summer School'));
//   return students;
// }

// //3

// function findById(items, idNum) {
//   for (let i = 0; i < items.length; i++) {
//     if (items[i].id === idNum) {
//       return items[i];
//     }
//   }
// }

// //4

// function validateKeys(object, expectedKeys) {
//   const keys = Object.keys(object);

//   if (keys.length !== expectedKeys.length) {
//     return false;
//   }
  
//   for (let i = 0; i < keys.length; i++) {
//     if (keys[i] === expectedKeys[i]) {
//       return true;
//     }
    
//     else {
//       return false;
//     }
//   }
// }

// const loaf = {
//   flour: 300,
//   water: 210
// };

// // console.log(loaf.flour, loaf.water);

// const loaf = {
//   flour: 300,
//   water: 210,
//   hydration: function() {
//     return (this.water / this.flour )*100;
//   }
// }

// // console.log(loaf.hydration());

// //2

// const obj1 = {
//   foo: 'a',
//   bar: 'b',
//   fum: 'c',
//   quux: 'd',
//   spam: 'e'
// };

// for (let key in obj1) {
//   console.log(`${key} ${obj1[key]}`);
// }

// const foodTime = { 
//   meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
// };

// console.log(foodTime.meals[3]);

//4

// const luke = {
//   name: 'Luke Skywalker',
//   job_title: 'jedi'
// };

// const harry = {
//   name: 'Harry Potter',
//   job_title: 'wizard',
//   boss: luke.name
// };

// const sam = {
//   name: 'Sam McSamface',
//   job_title: 'accountant',
//   boss: luke.name
// };

// const array = [luke, harry, sam];

// for (let i = 0; i < array.length; i++) {
//   console.log(`${array[i].name}: ${array[i].job_title}`);
// }

// for (let i = 0; i < array.length; i++) {
//   if (array[i].boss) {
//     console.log(`${array[i].job_title} ${array[i].name} reports to ${array[i].boss}.`);
//   } 
//   else {
//     console.log(`${array[i].job_title} ${array[i].name} doesn't report to anybody.`);
//   }
   
// }

// Cracking the Code

// const cypher = {
//   a: 2,
//   b: 3,
//   c: 4,
//   d: 5
// };

// function decode(sentence) {
//   const array = sentence.split(' ');
//   let decoded = '';

//   array.map(word => {
//     if (cypher[word[0]]) {
//       decoded = decoded + word[cypher[word[0]] - 1];
//     }

//     else {
//       decoded = decoded + ' ';
//     }
//   });

//   return decoded;
// }


// decode('craft block argon meter bells brown croon droop');




// function createCharacter(name, nickname, race, origin, attack, defense) {
//   const factFile =  {
//     name,
//     nickname,
//     race,
//     origin,
//     attack,
//     defense,
//     describe: function() {
//       console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
//     },
//     evaluateFight: function(character) {
//       let x = this.attack-character.defense;
//       let y = character.attack-this.defense;

//       if (x < 0) {
//         x = 0;
//       }

//       if (y < 0) {
//         y = 0;
//       }
//       console.log(`Your opponent takes ${x} damage and you receive ${y} damage`);
//     }
//   };
//   return factFile;
// }

// const characters = 
// [
//   createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
//   createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
//   createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
//   createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
//   createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
// ];
// //const characters = createCharater('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6);


// //console.log(characters);
// //console.log(characters[0].evaluateFight(characters[1]));
// //console.log(characters[0].describe());

// characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 10, 7));
// // console.log(characters);

// // const findCharacter = characters.find(character => {
// //   if (character.nickname === 'aragorn') {
// //     return character;
// //   }
// // });

// // console.log(findCharacter);

// // const filterCharacter = characters.filter(character => {
// //   if (character.race === 'Hobbit') {
// //     return character;
// //   }
// // });

// // console.log(filterCharacter);


// // const filterCharacterAttack = characters.filter(character => {
// //   if (character.attack > 5) {
// //     return character;
// //   }
// // });

// // console.log(filterCharacterAttack);

// //createCharacter.factFile.describe();

// function addWeapon(arr, nick, weapon) {
//   return arr.filter(char => {
//     if (char.nickname === nick) {
//       return char.weapon = weapon;
//     }
//   });
// }

// addWeapon(characters, 'gandalf', 'a wizard staff');
// addWeapon(characters, 'bilbo', 'the ring');
// addWeapon(characters, 'frodo', 'a String and Barrow blade');
// addWeapon(characters, 'aragorn', 'Anduril');
// addWeapon(characters, 'legolas', 'a Bow and Arrow');
// addWeapon(characters, 'arwen', 'Hadhafang');

// // console.log(characters);

// characters.forEach(char => {
//   char.describe = function() {
//     console.log(`${this.name} is a ${this.race} of the ${this.origin} who uses ${this.weapon}`);
//   };
// });

// characters[0].describe();



// const HEROES = [
//   { id: 1, name: 'Captain America', squad: 'Avengers' },
//   { id: 2, name: 'Iron Man', squad: 'Avengers' },
//   { id: 3, name: 'Spiderman', squad: 'Avengers' },
//   { id: 4, name: 'Superman', squad: 'Justice League' },
//   { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
//   { id: 6, name: 'Aquaman', squad: 'Justice League' },
//   { id: 7, name: 'Hulk', squad: 'Avengers' },
// ];

const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne(query) {
    let hero = null;
    let minIndex = this.store.heroes.length;
    for (let i = 0; i < this.store.heroes.length; i++) {
      // Object.keys(query).forEach(key => {
  
      // })
      for (const key in query) {
        if (query[key] === this.store.heroes[i][key]) {
          if (query.id === this.store.heroes[i].id) {
            //console.log(this.store.heroes[i]);
            hero = this.store.heroes[i];
           // console.log(hero);
          } else {
            minIndex = minIndex > i ? i : minIndex;
            hero = this.store.heroes[minIndex];
          }
        } else {
          hero = null;
         }
      } 
    }
    return hero;
  }
};

console.log(Database.findOne({ id: 3}));



function findOne(arr, query) {
  let hero = {};
  let minIndex = arr.length;
  for (let i = 0; i < arr.length; i++) {
    // Object.keys(query).forEach(key => {

    // })
    for (const key in query) {
      if (query[key] === arr[i][key]) {
        if (query.id === arr[i].id) {
          hero = arr[i];
        } else {
          minIndex = minIndex > i ? i : minIndex;
          hero = arr[minIndex];
        }
      } else {
        hero = null;
      }
    } 
  }
  return hero;
}

//console.log(findOne(HEROES, {id: 3}));
//console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));
//console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));

//console.log(Database.findOne({ id: 2 }));