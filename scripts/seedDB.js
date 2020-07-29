const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactrecipes"
);

const foodSeed = [
  {
    name: "Cereal",
    mealType: "Main Meal",
    foodGroup: [
      "Grains/Carbs"
    ],
    cooked: false,
    ingredients: [
      "cereal",
      "milk",
      
    ]
  },
  {
    name: "Fruit Pouch",
    mealType: "Snack",
    foodGroup: [
      "Fruit"
    ],
    cooked: false,
    ingredients: [
      "fruit pouch"
    ]
  },
  {
    name: "Nuts",
    mealType: "Snack",
    foodGroup: [
      "Protein"
    ],
    cooked: false,
    ingredients: [
      "nuts"
    ]
  },
  {
    name: "Stringers",
    mealType: "Snack",
    foodGroup: [
      "Calcium"
    ],
    cooked: false,
    ingredients: [
      "stringers"
    ]
  },
  {
    name: "Cup-A-Soup",
    mealType: "Snack",
    foodGroup: [
      "Grains/Carbs"
    ],
    cooked: true,
    ingredients: [
      "cup-a-soup"
    ]
  },
  {
    name: "2 Minute Noodles",
    mealType: "Small Meal",
    foodGroup: [
      "Grains/Carbs"
    ],
    cooked: true,
    ingredients: [
      "2 minute noodles"
    ]
  },
  {
    name: "Corn Chips",
    mealType: "Snack",
    foodGroup: [
      "Grains/Carbs"
    ],
    cooked: false,
    ingredients: [
      "corn chips"
    ]
  },
  {
    name: "Popcorn",
    mealType: "Snack",
    foodGroup: [
      "Grains/Carbs"
    ],
    cooked: false,
    ingredients: [
      "popcorn"
    ]
  },
  {
    name: "Watermelon",
    mealType: "Snack",
    foodGroup: [
      "Fruit"
    ],
    cooked: false,
    ingredients: [
      "watermelon"
    ]
  },
  {
    name: "Watermelon Slushy",
    mealType: "Snack",
    foodGroup: [
      "Fruit"
    ],
    cooked: false,
    ingredients: [
      "watermelon",
      "ice cubes",
      "lemon sorbet",
      "water"
    ]
  },
  {
    name: "Yo-Go's",
    mealType: "Snack",
    foodGroup: [
      "Calcium"
    ],
    cooked: false,
    ingredients: [
      "yo-go"
    ]
  },
  {
    name: "Frozen Yogurt Paddle-Pop",
    mealType: "Snack",
    foodGroup: [
      "Calcium"
    ],
    cooked: false,
    ingredients: [
      "frozen yogurt paddle-pop"
    ]
  },
  {
    name: "Lettuce and Cheese Wrap",
    mealType: "Main Meal",
    foodGroup: [
      "Grains/Carbs",
      "Vegtable",
      "Calcium"
    ],
    cooked: false,
    ingredients: [
      "iceberg lettuce",
      "wraps x2",
      "cheese"
    ]
  },
  {
    name: "Butter and Vegimite Corn Thins",
    mealType: "Snack",
    foodGroup: [
      "Grains/Carbs"
    ],
    cooked: false,
    ingredients: [
      "corn thins",
      "vegimite",
      "butter"
    ]
  },
  {
    name: "Chicken Noodle Soup",
    mealType: "Main Meal",
    foodGroup: [
      "Grains/Carbs",
      "Vegtable",
      "Protein"
    ],
    cooked: true,
    ingredients: [
      "egg noodles",
      "chicken stock",
      "jarred garlic",
      "jarred ginger",
      "soy sauce",
      "sesame oil",
      "shallots",
      "baby corn",
      "chicken"
    ]
  },
  {
    name: "Honey Soy Noodles",
    mealType: "Small Meal",
    foodGroup: [
      "Grains/Carbs"
    ],
    cooked: true,
    ingredients: [
      "udon noodles",
      "fresh garlic",
      "soy sauce",
      "honey"
    ]
  },
  {
    name: "Garlic Bread",
    mealType: "Small Meal",
    foodGroup: [
      "Grains/Carbs"
    ],
    cooked: true,
    ingredients: [
      "garlic bread"
    ]
  },
  {
    name: "Marinater Chicken with Pasta",
    mealType: "Main Meal",
    foodGroup: [
      "Grains/Carbs",
      "Protein"
    ],
    cooked: true,
    ingredients: [
      "chicken(marinated)",
      "pasta",
    ]
  },
  {
    name: "Steak with Pasta",
    mealType: "Main Meal",
    foodGroup: [
      "Grains/Carbs",
      "Protein"
    ],
    cooked: true,
    ingredients: [
      "fillet steak",
      "pasta",
    ]
  },
  {
    name: "Sausages in a Bun",
    mealType: "Main Meal",
    foodGroup: [
      "Grains/Carbs",
      "Protein"
    ],
    cooked: true,
    ingredients: [
      "sausage x2",
      "bun x2",
    ]
  },
  {
    name: "Spaghetti Bolognaise",
    mealType: "Main Meal",
    foodGroup: [
      "Grains/Carbs",
      "Protein"
    ],
    cooked: true,
    ingredients: [
      "spaghetti",
      "bolognaise sauce"    
    ]
  },
  {
    name: "Tortellini",
    mealType: "Main Meal",
    foodGroup: [
      "Grains/Carbs",
      "Protein"
    ],
    cooked: true,
    ingredients: [
      "tortellini",
      "latina sauce"    
    ]
  },
  {
    name: "Mango Chicken Curry",
    mealType: "Main Meal",
    foodGroup: [
      "Grains/Carbs",
      "Protein",
    ],
    cooked: true,
    ingredients: [
      "mango chicken",
      "rice"    
    ]
  },
  {
    name: "Beef Stir Fry",
    mealType: "Main Meal",
    foodGroup: [
      "Grains/Carbs",
      "Protein",
      "Vegtable"
    ],
    cooked: true,
    ingredients: [
      "beef",
      "shallots",
      "brocolini",
      "baby corn",
      "carrot",
      "fresh garlic",
      "oyster sauce",
      "rice"    
    ]
  },
  {
    name: "Peas",
    mealType: "Meal Ad-On",
    foodGroup: [
      "Vegtable"
    ],
    cooked: true,
    ingredients: [
      "peas"   
    ]
  },
  {
    name: "Broccoli",
    mealType: "Meal Ad-On",
    foodGroup: [
      "Vegtable"
    ],
    cooked: true,
    ingredients: [
      "broccoli"   
    ]
  },
  {
    name: "Carrots",
    mealType: "Meal Ad-On",
    foodGroup: [
      "Vegtable"
    ],
    cooked: true,
    ingredients: [
      "carrots"   
    ]
  },
  {
    name: "Celery",
    mealType: "Meal Ad-On",
    foodGroup: [
      "Vegtable"
    ],
    cooked: false,
    ingredients: [
      "celery"   
    ]
  },
  {
    name: "Lettuce",
    mealType: "Meal Ad-On",
    foodGroup: [
      "Vegtable"
    ],
    cooked: false,
    ingredients: [
      "lettuce"   
    ]
  },
  {
    name: "Cucumber",
    mealType: "Meal Ad-On",
    foodGroup: [
      "Vegtable"
    ],
    cooked: false,
    ingredients: [
      "cucumber"   
    ]
  },
  {
    name: "Potato",
    mealType: "Meal Ad-On",
    foodGroup: [
      "Vegtable"
    ],
    cooked: true,
    ingredients: [
      "potato"   
    ]
  },
  {
    name: "Corn-on-the-Cob",
    mealType: "Meal Ad-On",
    foodGroup: [
      "Vegtable"
    ],
    cooked: true,
    ingredients: [
      "Corn"   
    ]
  },
  {
    name: "Broccolini",
    mealType: "Meal Ad-On",
    foodGroup: [
      "Vegtable"
    ],
    cooked: true,
    ingredients: [
      "broccolini",
      "fresh garlic",
      "chili flakes"   
    ]
  },
];

db.Food.remove({})
  .then(() => db.Food.collection.insertMany(foodSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
