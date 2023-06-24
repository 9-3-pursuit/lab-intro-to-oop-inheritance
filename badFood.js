const Food =  require("./food.js")
const donut = [
    {
      name: "Sprinkle Spray",
      hitPoints: 3,
    },
    {
      name: "Icing Deluge",
      hitPoints: 4,
    },
    {
      name: "Sugar Shock",
      hitPoints: 5,
    },
  ];
  const pizza = [
    {
      name: "Mouth Burn",
      hitPoints: 3,
    },
    {
      name: "Hot Pepper Storm",
      hitPoints: 4,
    },
    {
      name: "Cheese Grease",
      hitPoints: 5,
    },
  ];
  
  class BadFood extends Food {
    constructor(name, daysToSpoil, fresh = true, weapons) {
      super(name, daysToSpoil, fresh);
      this.weapons = weapons;
    }
    isFeresh() {}
    prepare() {}
    fight() {}
  }