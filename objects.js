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

function keyDleter(obj) {
    delete obj.foo;
    delete obj.bar;
    return obj;
}


function makeStudentsReport(data) {
  return data.map(student => `${student.name}: ${student.grade}`);
 }
  