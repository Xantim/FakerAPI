const express = require("express"),
  app = express();
  cors = require('cors'),
  port = 8000;
  faker = require('faker'),
  server = app.listen(port, ()=> (`Listening on port ${port}`));

app.use(cors());
app.use(express.json());

class Vehicle{
  constructor(){
    this.vehicle = faker.vehicle.vehicle();
    this.manufacturer = faker.vehicle.manufacturer();
    this.model = faker.vehicle.model();
    this.type = faker.vehicle.type();
    this.fuel = faker.vehicle.fuel();
    this.vin = faker.vehicle.vin();
    this.color = faker.vehicle.color();
  }
}

class Name{
  constructor(){
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.jobTitle = faker.name.jobTitle();
    this.gender = faker.name.gender();
    this.company = {
      company : faker.company.companyName()
    }
  }
}

class Company{
  constructor(){
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.bs = faker.company.bs();
    this.bsAdjective = faker.company.bsAdjective();
  }
}


app.get('/vehicle/new',(req,res) => {
  res.json({"result":new Vehicle()})
})

app.get('/name/new',(req,res) => {
  res.json({"result":new Name()}) 
})

app.get('/company/new',(req,res) => {
  res.json({"result":new Company()})
})

app.get('/name/company/new',(req,res) => {
  res.json({"result":new Company()})
})

var car = new Vehicle();
console.log(car);

var name = new Name();
console.log(name)

var company = new Company();
console.log(company)


// const server = app.listen(8000, () =>
//   console.log(`Server is locked and loaded on port ${server.address().port}!`)
// );
