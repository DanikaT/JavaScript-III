/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Principle 1: Window/Global Object Binding
When in the global scope, the value of “this” will be the window/console Object;
* 2. Principle 2: Implicit Binding
Whenever a function is called by a preceding dot, the object before that dot is this.
* 3. Principle 3: New binding
Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Principle 4: Explicit binding
Whenever JavaScript’s call or apply method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1
var WindowThis = this;
// code example for Window Binding

// Principle 2
var me = {
    name: 'Danika Thomson',
    speak: function () {
      return 'My name is ' + this.name;
    },
  };
// code example for Implicit Binding

// Principle 3
function MyPerson(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  var aPerson = new MyPerson('Charlie', 15, "male");
  console.log(aPerson.name);
// code example for New Binding

// Principle 4

// code example for Explicit Binding