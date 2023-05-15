const Room = require("./room");
class Kitchen extends Room {
  constructor(type, wall_color, size) {
    super(type, wall_color, size);

    // Writing defaults that users cannot access
    this.includesAppliances = true;
    this.appliances = ["oven", "refrigerator", "sink"];
  }

  //   Alter getFurniture() to also receive the appliances

  getFurniture() {
    const current_furniture = this.furniture;

    if (current_furniture) {
      return this.appliances.concat(...current_furniture);
    } else {
      return this.appliances;
    }
  }
}

module.exports = Kitchen;
