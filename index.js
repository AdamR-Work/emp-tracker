const express = require('express');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const mysql = require('mysql');
const app = express();
const mysql2 = require('mysql2');
const figlet = require('figlet');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "2121Jodie",
    database: "emptrack_db"
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connected to DB");
    questions();

});

//HERO
console.log(figlet.textSync('EMP Tracker', {
    font: 'standard',
    horizontalLayout: 'fitted',
    verticalLayout: 'default',
    width: 100,
    whitespaceBreak: true
}));

// QUESTIONS PROMPT
const questions = () => {

    return inquirer.prompt([
        {
            type: 'rawlist',
            name: 'option',
            message: `Please make a selection.`,
            choices: ['Show all departments', 'Show all roles', 'Show all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employee role', 'Remove employee', 'Exit']
        }
    ])
        .then(({ option }) => {
            if (option === 'Show all departments') {
                allDepartments()
            }
            else if (option === 'Show all roles') {
                allRoles()
            }
            else if (option === 'Show all employees') {
                allEmployees()
            }
            else if (option === 'Add a department') {
                addDepartment()
            }
            else if (option === 'Add a role') {
                addRole()
            }
            else if (option === 'Add an employee') {
                addEmployee()
            } 
            else if (option === 'Update employee role') {
                updateEmployee()
            }
             else if (option === 'Remove employee') {
                removeEmployee()
            }
            else {
                db.end;
                return;
            }
        })

};

// Show department function
const allDepartments = () => {
    db.query(`SELECT * FROM department`, function (err, res) {
        if (err) {
            console.log("Opps error when showing all departments")
        } else {
            console.table('DEPARTMENT', res);
            questions()
        }

    })
};

// Show roles function
const allRoles = () => {

    db.query(`SELECT title, salary, department_name FROM role
    JOIN department
    WHERE department_id = department.id`, function (err, res) {
        if (err) {
            console.log("Opps error when showing all roles")
        } else {
            console.table('ROLE', res);
            questions()
        }

    })
};

// VIEW ALL EMPLOYEEES
const allEmployees = () => {
    db.query(`SELECT * FROM employee
    JOIN role
    WHERE role_id = role.id`, function (err, res) {

        if (err) {
            console.log("Opps error when trying to view all employees")
        } else {
            console.table('EMPLOYEE', res);
            questions()
        }

    })
};

// ADD A NEW DEPARTMENT
const addDepartment = () => {

    db.query("SELECT * FROM department", function (err, res) {
        if (err) {
            console.log("Opps error when creating new department")
        } else {
            console.table('DEPARTMENT', res);
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'department',
                    message: 'Please enter new department name (Required)',
                    validate: departmentInput => {
                        if (departmentInput) {
                            return true;
                        } else {
                            console.log("We need a name for the new Department");
                            return false;
                        }
                    }
                },

            ])
                .then(function (answer) {
                    db.query("INSERT INTO department (department_name ) VALUES (?)", [answer.department, answer.departmentId,], function (err, res) {
                        if (err) throw err;
                        console.log("You created a new departement, "+ answer.department +",now get some workers")
                        questions();
                    })

                })

        };
    });
};

// Add new Role
const addRole = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter new role (Required)',
            validate: titleInput => {
                if (titleInput) {
                    
                    return true;
                } else {
                    console.log("Whats the role in this company");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Please enter a salary (Required)',
            validate: salaryInput => {
                if (salaryInput) {
              
                return true;
                } else {
                    console.log("How much are they going to get paid");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'departmentId',
            message: 'Please enter department ID (Required)',
            validate: departmentIdInput => {
                if (departmentIdInput) {
                    
                    return true;
                } else {
                    console.log("Please enter department ID!");
                    return false;
                }
            }
        }
    ])
   
        .then(function (answer) {
            db.query("INSERT INTO role (title, salary, department_id) VALUES (?,?,?)", [ answer.title, answer.salary, answer.departmentId], function (err, res) {
                if (err) throw err;
                console.log("You created a new Role, "+ answer.title +",lets get some workers!")
                questions();
            })})

};

// Add new Employee
const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'empFirstName',
            message: "Please enter employee's first name (Required)",
            validate: empFirstNameInput => {
                if (empFirstNameInput) {
                    return true;
                } else {
                    console.log("Shirley you must have a first name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'empLastName',
            message: "Please enter employee's last name (Required)",
            validate: empLastNameInput => {
                if (empLastNameInput) {
                    return true;
                } else {
                    console.log("You must have a last name, what is it?");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'empRoleId',
            message: "Please enter employee's role ID (Required)",
            validate: empRoleIdInput => {
                if (empRoleIdInput) {
                    return true;
                } else {
                    console.log("Please enter your employee role ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'empManagerId',
            message: "Please enter your managers ID",
            validate: empManagerIdInput => {
                if (empManagerIdInput) {
                    return true;
                } else {
                    console.log("Please enter your managers ID");
                    return false;
                }
            }
           
        },

    ])
        .then(function (answer) {
            db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)", [answer.empFirstName, answer.empLastName, answer.empRoleId, answer.empManagerId ], function (err, res) {
                if (err) throw err;
                console.log("New Employee "+ answer.empFirstName +" has been added. Lets make sure they feel welcomed")
                questions();
            })

        })
};

// Update current Emp
const updateEmployee = () => {

    db.query(`SELECT concat(first_name, ' ' ,last_name) as employeeName, id FROM employee`,
        function (err, employeeName) {

            if (err) throw err;
     
            employeeName = employeeName.map(employee => {
                return {
                    name: employee.employeeName,
                    value: employee.id
                }
            })

            return inquirer.prompt({
                type: 'list',
                name: 'option',
                message: 'Please choose an employee to edit',
                choices: employeeName
            })
            .then(function (answer) {
                console.log(answer);
                let id = answer.option
                return inquirer.prompt([
                        {
                            type: 'input',
                            name: 'employeeRole',
                            message: 'Enter employees new role id',
                        }
                    ]).then(function (answer) {
                            db.query(`UPDATE employee SET role_id = "${answer.employeeRole}" WHERE id = ${id}`, function (err) {
                                if (err) throw err;
                                console.log("The new role has been applied ")
                                questions()
                            })});
                })
        });
};

// Remove Employee
const removeEmployee = () => {
    db.query(`SELECT concat(first_name, ' ' ,last_name) as employeeName, id FROM employee`, function (err, employeeName) {
        if (err) throw err;
        employeeName = employeeName.map(employee => {
            return {
                name: employee.employeeName,
                value: employee.id
            }
        })

        return inquirer.prompt({
            type: 'list',
            name: 'option',
            message: 'Please choose an employee to remove',
            choices: employeeName

        }).then(function (answer) {
                let id = answer.option
                let sql = `DELETE FROM employee WHERE id = ?`

                db.query(sql, [id], function (err, res) {
                    if (err) throw err;
                    // console.log(res);
                    console.log("Employee has been terminated")
                    questions();
                })
            });
    })

};

// NEW DB
app.get('/createdb', (req, res) => {
    let sql = `CREATE DATABASE emptrack_db`
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('database created');
    });
});

// PORT
app.listen('3001', () => {
    console.log('Server started on port 3001');
});
