# Encapsulation in JavaScript

# Introduction

Encapsulation is a fundamental concept in object-oriented programming (OOP) that involves bundling data and behavior within a single unit, while hiding the inner workings of the unit from outside access. This allows for better organization, easier maintenance, and enhanced security of your code.

To help clarify this concept, let's consider an everyday example.

# Real-life Analogy

Think of your computer as an object in the realm of OOP. You use your computer to perform various tasks, like typing on a keyboard, without needing to understand every intricate detail about how the computer operates internally. The inner workings of the computer are encapsulated, allowing you to focus on the task at hand without worrying about the underlying complexity.

# Encapsulation in JavaScript

In JavaScript, encapsulation can be achieved using classes, objects, and closures. While JavaScript is not strictly an object-oriented programming language, it supports many OOP concepts, including encapsulation. Let's see how encapsulation can be implemented using classes and objects.

# Using Classes and Objects

In JavaScript, a class is a blueprint for creating objects with specific properties and methods. Here's an example of a simple class:

```
class Computer {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  getDetails() {
    return `This computer is a ${this.brand} ${this.model}.`;
  }
}
```

In this example, we define a Computer class with a constructor that accepts brand and model as arguments. The getDetails method returns a string with the computer's brand and model. The brand and model properties are encapsulated within the Computer class, and the getDetails method serves as the public API to access this information.

To create a new Computer object, we can use the new keyword:

```
const myComputer = new Computer('Apple', 'MacBook Pro');
console.log(myComputer.getDetails()); // This computer is an Apple MacBook Pro.
```

By utilizing encapsulation, we keep the inner workings of the Computer class hidden from the outside world, and only expose the necessary information through the public API.
