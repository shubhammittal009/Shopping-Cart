var Product = require("../models/product");

var mongoose = require("mongoose");

mongoose.connect(
  "mongodb://admin:admin009@ds155614.mlab.com:55614/shopping" ||
    "mongodb://localhost:27017/shopping",
  { useMongoClient: true }
);

var products = [
  new Product({
    imgPath: "/images/fifa.jpg",
    title: "FIFA 19",
    description: "Awesome Sports Game !!",
    price: 2799
  }),
  new Product({
    imgPath: "/images/gta5.jpg",
    title: "Grand Theft Auto V",
    description: "Action-adventure game by Rockstar Games",
    price: 2099
  }),
  new Product({
    imgPath: "/images/cod.jpg",
    title: "Call of Duty: Black Ops",
    description: "Amazing First-person shooter",
    price: 1499
  }),
  new Product({
    imgPath: "/images/farcry.jpg",
    title: "Far Cry 5",
    description: "Action-adventure first-person shooter game ",
    price: 2499
  }),
  new Product({
    imgPath: "/images/pubg.jpg",
    title: "PUBG PC",
    description: "Online multiplayer Battle royale game",
    price: 1199
  }),
  new Product({
    imgPath: "/images/awayout.jpg",
    title: "A Way Out",
    description: "Multiplayer Action-adventure game",
    price: 1999
  }),
  new Product({
    imgPath: "/images/minecraft.jpg",
    title: "MineCraft",
    description: "Sandbox survival game",
    price: 1799
  }),
  new Product({
    imgPath: "/images/tod.jpg",
    title: "Total Overdose",
    description: "Thrilling Third-person shooter",
    price: 399
  }),
  new Product({
    imgPath: "/images/halflife.jpg",
    title: "Half-Life 2",
    description: "First-person shooter video game",
    price: 899
  }),
  new Product({
    imgPath: "/images/fallout.jpg",
    title: "Fallout 4",
    description: "Post-apocalyptic action role-playing video game",
    price: 1099
  }),
  new Product({
    imgPath: "/images/hitman.jpg",
    title: "Hitman 2",
    description: "Stealth video game",
    price: 3499
  }),
  new Product({
    imgPath: "/images/warcraft.jpg",
    title: "World of Warcraft",
    description: "Massively multiplayer Online role-playing game",
    price: 399
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
