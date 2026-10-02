import express from "express";
import employees from "#db/employees";

const app = express();

app.route("/").get((req, res) => {
    res.send("Hello employees!");
});

app.route("/employees/random").get((req, res) => {
    const max = employees.length;
    const min = 1;
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    // console.log(max);
    // console.log(randomInt);
    res.send(employees[randomInt]);

});

app.route("/employees").get((req, res) => {
    res.send(employees);
});

app.route("/employees/:id").get((req, res) => {
    // res.send(employees);
    const { id } = req.params;
    const employee = employees.find((emp) => (emp.id) === Number(id));

    employee ? res.send(employee) : res.status(404).send("There is no employee with that id.");
});



export default app;