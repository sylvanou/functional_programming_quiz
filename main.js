const employees = [
    {name: "Sylvano Umbac", hourlyRate: 50.50, hoursWorked: 65},
    {name: "Ronald McDonald", hourlyRate: 7.75, hoursWorked: 80},
    {name: "Mark Zuckerburg", hourlyRate: 100.89, hoursWorked: 28}
]

class Payroll {
    constructor(employees){
        this.employees = employees
        this.names = this.getNames(this.employees)
        // this.fullTime = this.getFullTime(this.employees)
    }
    getNames(employees){
        let names = employees
        return names.map((name) =>{
            return names.sort(names.name)
        })
    }
    getFullTime(employees){
        return employees.hoursWorked.filter((hours) =>{
            return (employees > 60) ? 1 :0
        })
    }
    getTotalLabor(employees){
        return employees.reduce((acc, cur, index) =>{
            return (index === employees.length - 1) ? acc * cur + employees
        })
    }
}

let readyMart = new Payroll(employees)
console.log(readyMart.employees)
console.log(readyMart.names)