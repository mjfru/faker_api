const express = require("express");
const { faker, fakerDE_CH } = require('@faker-js/faker');
const app = express();
const port = 8000;

const createUser = () => {
  const newUser = {
    _id : faker.number.int({ max: 100 }),
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 10 }),
    phoneNumber: faker.phone.number( '555-555-####' )
  };
  return newUser
};

const newFakeUser = createUser();
console.log(newFakeUser)

const createCompany = () => {
  const newCompany = {
    _id: faker.number.int( { max: 500 }),
    companyName: faker.company.name(),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country()
    }
  }
  return newCompany
}

const newFakeCompany = createCompany();
console.log(newFakeCompany);

app.get("/api", (req, res) => {
  res.json({ message: "Hello There!" })
});

app.get("/api/users/new", (req, res) => {
  res.json( newFakeUser )
});

app.get("/api/companies/new", (req, res) => {
  res.json( newFakeCompany )
})

app.get("/api/user/company", (req, res) => {
  const both = {
    user: newFakeUser,
    company: newFakeCompany
  }
  res.json( both )
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );