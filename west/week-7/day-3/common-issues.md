# Common issues with classes in javascript (and their solutions)

## Forgetting to use new when creating an instance

If you don't use the new keyword, the constructor function will not create an instance of the class, and this will not be set correctly.

Incorrect:

```
const myCar = Car('Toyota', 'Camry', 2020); // Error
```

Correct:

```
const myCar = new Car('Toyota', 'Camry', 2020);
```

## Using the function keyword inside a class

In a class, methods do not require the function keyword.

Incorrect:

```
class Car {
  constructor(make, model, year) {
    // ...
  }

  function getInfo() { // Error
    // ...
  }
}
```

Correct:

```
class Car {
  constructor(make, model, year) {
    // ...
  }

  getInfo() {
    // ...
  }
}
```

## Returning a value from the constructor

If you return a value from the constructor, the newly created instance will not be returned as expected.

Incorrect:

```
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    return {message: 'Do not return this!'}; // Error
  }
}
```

Correct:

```
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}
```
