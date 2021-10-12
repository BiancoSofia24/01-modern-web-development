/*
The following code will be refactored when:
 * Use template strings - do not use + to concatenate strings [+]
 * Do not use var anywhere in your code - only use let and const [+]
 * Use arrow functions where necessary - anonymous functions should be arrow functions [+]
 * Declare defaults in function signatures - don't use || to declare a value [+]
 * Use object shorthand to setup objects 
 * Use destructuring in function signatures and in the function body [+]
 * Use the spread and rest operators [+]
 * Use modules to organize your code [+]
*/

import people from './people.js';

const isActive = person => person.isActive;

const getEmails = (people, { withNames = false, onlyActive = false } = {}) => {
  if (onlyActive) {
    people = people.filter(isActive)
  }
  
  return people.map(({ name, email } = person) => {
    let result = ''
    
    if (withNames) {
      result = `${name} <${email}>` 
    } else {
      result = email
    }
    
    return result
  }).join(', ')
}

const getAddresses = (people, { onlyActive = false } = {}) => {
  if (onlyActive) {
    people = people.filter(isActive)
  }

  return people.map(({ name, address: { line1, line2, city, state } } = person) => {
    let fullAddress = `${name}\n${line1}\n`

    if (line2) {
      fullAddress += `${line2}\n`
    }

    fullAddress += `${city}, ${state}`
    return fullAddress
  }).join('\n\n')
}

const getYoungest = people => {
  const [youngest, ...others] = people.sort((personA, personB) => personA.age - personB.age)

  return { youngest, others }
}

// these function calls should still work after the refactor!
const emails = getEmails(people, {
  withNames: true,
});
console.log(emails);

const addresses = getAddresses(people, {
  onlyActive: true,
});
console.log(addresses);

const youngest = getYoungest(people);
console.log(youngest);