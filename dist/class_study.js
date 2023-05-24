class Department {
    constructor(id, n) {
        this.employees = [];
        this.id = id;
        this.name = n;
    }
    describe() {
        console.log('department:' + this.name);
    }
    addEmployee(employ_name) {
        this.employees.push(employ_name);
    }
}
let salse = new Department('1', 'sales');
console.log(salse);
salse.describe();
salse.addEmployee('max');
console.log(salse);
salse.employees.push('kevin');
console.log(salse);
//# sourceMappingURL=class_study.js.map