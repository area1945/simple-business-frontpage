const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

app.get("/", (req, res) => {
    res.send("Started Working, Express!");
});

app.get("/contact", (req, res) => {

    let contacts = []

    for(let i = 1; i <= 1000; i++){
        let contact = {
            name: faker.person.fullName(),
            email:faker.internet.email().toLowerCase(),
            phone:faker.phone.number(),
            address: faker.location.streetAddress({ useFullAddress: true })
        }
        contacts.push(contact)
    }

    let response = {
        data: contacts,
        status: "ok",
        message: "List contacts has been fetched"
    }

    res.send(response)
});

app.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
});