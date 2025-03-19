// class User {
//   #name;
//   #id;
//   constructor() {
//     this.#name = "";
//     this.#id = "";
//   }

//   getData(name, id) {
//     this.#name = name;
//     this.#id = id;
//     this.#sayHello();
//   }

//   #sayHello() {
//     console.log(`Hello ${this.name}, your userId is ${this.id}`);
//   }

//   getName() {
//     return this.#name;
//   }
//   getId() {
//     return this.#id;
//   }
// }

// class Role extends User {
//   constructor(role) {
//     super();
//     this.role = role;
//   }

//   display() {
//     console.log(
//       `Hi ${this.getName()}, ${this.getId()}, your role is ${this.role}`
//     );
//   }
// }

// const user = new Role("User");
// user.getData("Deepali", "12Deep");
// user.display();

class MyClass {
  static counter = 0;
  static #instance = null;

  constructor() {
    if (!MyClass.#instance) {
      MyClass.#instance = this;
      MyClass.counter++;
    }
    console.log(MyClass.counter);
    return MyClass.#instance;
  }
  // static getData() {
  //   if (!MyClass.#instance) {
  //     MyClass.#instance = new MyClass();
  //   }
  //   return MyClass.#instance;
  // }
}

const instanceOne = new MyClass();
const instanceTwo = new MyClass();
