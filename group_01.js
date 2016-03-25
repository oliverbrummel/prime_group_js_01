var atticus = ['Atticus', '2405', '47000', 3];
var jem = ['Jem', '62347', '63500', 4];
var boo = ['Boo', '11435', '54000', 3];
var scout = ['Scout', '6243', '74750', 5];


function ObjectifyPerson(personArray) {
  this.firstName = personArray[0];
  this.employeeNum = personArray[1];
  this.startingSalary = personArray[2];
  this.numRating = personArray[3];
}

atticus = new ObjectifyPerson(atticus);
jem = new ObjectifyPerson(jem);
boo = new ObjectifyPerson(boo);
scout = new ObjectifyPerson(scout);

var employees = [atticus, jem, boo, scout];

for (var i = 0; i < employees.length; i++) {
  console.log('Your bonus', calculateBonus(employees[i]));
}

// console.log(atticus);
// console.log(jem);
// console.log(boo);
// console.log(scout);


function calculateBonus(person) {
  var bonus = 0;
  var empName = person.firstName;
  var empNumber = person.employeeNum;
  var salary = parseInt(person.startingSalary);
  var rating = person.numRating;

  switch (rating) {
    case 3:
      bonus = 4;
      break;
    case 4:
      bonus = 6;
      break;
    case 5:
      bonus = 10;
      break;
  }

  if (empNumber.length === 4) {
    bonus += 5;
  }

  //We added the bonus > 0 to prevent the possiblity of negative bonuses
  if (salary > 65000 && bonus > 0) {
    bonus -= 1;
  }

  if (bonus > 13) {
    bonus = 13;
  }

  // var result = [];
  var result = {};

  result.name = empName;
  // result.push(empName);
  result.bonus = (bonus.toString() + '%');
  // result.push(bonus.toString() + '%');

  var percentBonus = bonus / 100;
  result.endingSalary = ((salary * percentBonus) + salary).toString();
  // result.push('$' + ((salary * percentBonus) + salary).toString());

  result.bonusInDollars = (Math.round(salary * percentBonus).toString());
  // result.push('$' + (Math.round(salary * percentBonus).toString()));
  return result;
}
