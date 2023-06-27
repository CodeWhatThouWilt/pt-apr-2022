const Employee = require("./employee.js");

class Manager extends Employee {
	constructor(name, title, salary, manager, employees = []) {
		super(name, title, salary, manager);
		this.employees = employees;
	}

	addEmployee(employee) {
		this.employees.push(employee);
	}

	calculateBonus(multiplier) {
		return multiplier * (this.salary + this._totalSubSalary());
	}

	_totalSubSalary() {
		let sum = 0;

		this.employees.forEach((employee) => {
			if (employee instanceof Manager) {
				sum += employee.salary + employee._totalSubSalary();
			} else {
				sum += employee.salary;
			}
		});

		return sum;
	}

	// With reduce ;)
	// _totalSubSalary() {
	// 	return this.employees.reduce((acc, employee) => {
	// 		if (employee instanceof Manager) {
	// 			return acc + employee.salary + employee._totalSubSalary();
	// 		} else {
	// 			return acc + employee.salary;
	// 		}
	// 	}, 0);
	// }
}

module.exports = Manager;
