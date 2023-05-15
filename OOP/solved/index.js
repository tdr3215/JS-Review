const Bedroom = require("./bedroom");
const Kitchen = require("./kitchen");
const Room = require("./room");

const bathroom = new Room("bathroom", "green", "medium");

console.log(JSON.stringify(bathroom));

bathroom.addFurniture("shower curtains", "toilet", "shower");
bathroom.getFurniture();

const kid_bedroom = new Bedroom("kid", "pink", "large", true);
kid_bedroom.getFurniture();

kid_bedroom.addFurniture("Couch");
kid_bedroom.getFurniture();

kid_bedroom.printInfo();
kid_bedroom.includesBathroom();

const kitchenette = new Kitchen("kitchenette", "green", "small");
kitchenette.getFurniture();
kitchenette.printInfo();
