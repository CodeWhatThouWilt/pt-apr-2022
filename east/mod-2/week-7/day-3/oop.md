# Javascript Classes

## Creating a new class

A class outlines the properties and behaviors of an object type. In JavaScript, classes are made with the class keyword, the class name, and curly braces.

The constructor function utilizes the constructor keyword. This constructor generates object instances based on the class definition.

Here's a Car object example with a constructor function:

```
class Car {
    constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    }
}
```

Class names should start with a capital letter to distinguish them as classes.

Creating a Class Instance
To generate a class instance, use the new keyword:

```
const myCar = new Car('Toyota', 'Camry', 2020);
console.log(myCar);
```

This will output:

```
Car {
    make: 'Toyota',
    model: 'Camry',
    year: 2020
}
```

## Adding Instance Methods

Instance methods are functions that belong to the class and perform actions. They are typically called on a specific instance of the class stored in a variable.

For example, you can add a getInfo() method to the Car class:

```
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `${this.make} ${this.model} (${this.year})`;
    }
}

const myCar = new Car('Toyota', 'Camry', 2020);
console.log(myCar.getInfo()); // Output: Toyota Camry (2020)
```

## instanceOf

The instanceof operator can verify if an object is an instance of a particular class.

```
console.log(myCar instanceof Car); // Output: true
```
