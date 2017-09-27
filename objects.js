//1

function createMyObject() {
    object = {
        foo: 'bar',
        answerToUnivers: 42,
        'olly olly': 'oxen free',
        sayHello: function() {
            return 'hello';
        };
    }
    return object;
}

//2

function updateObject(obj) {
    obj.foo = 'foo';
    obj.bar = 'bar';
    obj.bizz = 'bizz';
    obj.bang = 'bang';

    return obj;
}

//3

function personMaker() {
    const person = {
      firstName: 'Paul',
      lastName: 'Jones',
      fullName: function() {
          return `${this.firstName} ${this.lastName}`;
      }
    };
    return person;
}

function keyDeleter(obj) {
    delete obj.foo;
    delete obj.bar;
    return obj;
}

//Second Exercise

//1

function makeStudentsReport(data) {
  return data.map(student => `${student.name}: ${student.grade}`);
 }

//2 (First Solution)

function enrollInSummerSchool(students) {
  for (let i = 0; i < students.length; i++) {
    for (let key in students[i]) {
      students[i].status = 'In Summer school';
    }
  }
  return students;
}

//2 (Second Solution)

function enrollInSummerSchool(students) {
  students.forEach(student => console.log(student.status = 'In summer School'));
  return students;
}

//3

function findById(items, idNum) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === idNum) {
      return items[i];
    }
  }
}

//4

function validateKeys(object, expectedKeys) {
  const keys = Object.keys(object);

  if (keys.length !== expectedKeys.length) {
    return false;
  }
  
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === expectedKeys[i]) {
      return true;
    }
    
    else {
      return false;
    }
  }
}

