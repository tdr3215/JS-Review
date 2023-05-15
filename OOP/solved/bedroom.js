const Room = require("./room");

class Bedroom extends Room {
  constructor(type, wall_color, size) {
    super(type, wall_color, size);
    this.hasBathroom = false;
  }

  //   Altered an existing method from Room class
  getFurniture() {
    if (this.furniture) {
      return this.furniture.concat(["bed1,lamp1"]);
    } else {
      console.log("Each bedroom comes with a bed and a lamp");
    }
  }

  //   Added method that's specific to bedrooms
  includesBathroom() {
    return this.hasBathroom;
  }
}

module.exports = Bedroom;
