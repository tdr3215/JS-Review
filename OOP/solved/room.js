class Room {
  constructor(type, wall_color, size) {
    this.type = type;
    this.wall_color = wall_color;
    this.size = size;

    //   Starting under the assumption that the room is empty
    this.furniture = [];
  }

  printInfo() {
    console.log(
      `Here are the room stats:\ntype=${this.type}\nwall color=${this.wall_color}\nsize=${this.size} `
    );
  }

  //   Can I add furniture to the room?
  addFurniture(...items) {
    this.furniture.push(...items);
    items.forEach((item) => {
      console.log(`Sucessfully added the following item: ${item}.`);
    });
  }

  getFurniture() {
    // If the furniture array is NOT empty
    if (this.furniture) {
      // Loop over the array
      this.furniture.forEach((item) => console.log(item));
    } else {
      console.log("Please add furniture and try again later");
    }
  }
}
module.exports = Room;
