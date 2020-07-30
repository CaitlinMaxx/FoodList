const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/FoodList"
);

const foodSeed = [
  {
    name: "Cereal",
    mealType: "Main Meal",
    foodGroup: [
      "Grains/Carbs"
    ],
    cooked: "no",
    ingredients: [
      "cereal ",
      "milk ",
      
    ]
  },
  {
    name: "Fruit Pouch",
    mealType: "Snack",
    foodGroup: [
      "Fruit "
    ],
    cooked: "no",
    ingredients: [
      "fruit pouch "
    ]
  },
  {
    name: "Nuts",
    mealType: "Snack",
    foodGroup: [
      "Protein "
    ],
    cooked: "no",
    ingredients: [
      "nuts "
    ]
  },
  {
    name: "Stringers",
    mealType: "Snack",
    foodGroup: [
      "Calcium "
    ],
    cooked: "no",
    ingredients: [
      "stringers "
    ]
  },
  {
    name: "Cup-A-Soup",
    mealType: "Snack",
    foodGroup: [
      "Grains/Carbs "
    ],
    cooked: "yes",
    ingredients: [
      "cup-a-soup "
    ]
  },
  {
    name: "2 Minute Noodles",
    mealType: "Small Meal",
    foodGroup: [
      "Grains/Carbs "
    ],
    cooked: "yes",
    ingredients: [
      "2 minute noodles "
    ]
  },
  {
    name: "Corn Chips",
    mealType: "Snack",
    foodGroup: [
      "Grains/Carbs "
    ],
    cooked: "no",
    ingredients: [
      "corn chips "
    ]
  },
  {
    name: "Popcorn",
    mealType: "Snack",
    foodGroup: [
      "Grains/Carbs "
    ],
    cooked: "no",
    ingredients: [
      "popcorn "
    ]
  },
  {
    name: "Watermelon",
    mealType: "Snack",
    foodGroup: [
      "Fruit "
    ],
    cooked: "no",
    ingredients: [
      "watermelon "
    ]
  },
  {
    name: "Watermelon Slushy",
    mealType: "Snack",
    foodGroup: [
      "Fruit "
    ],
    cooked: "no",
    ingredients: [
      "watermelon ",
      "ice cubes ",
      "lemon sorbet ",
      "water "
    ]
  },
  {
    name: "Yo-Go's",
    mealType: "Snack",
    foodGroup: [
      "Calcium "
    ],
    cooked: "no",
    ingredients: [
      "yo-go "
    ]
  },
  {
    name: "Frozen Yogurt Paddle-Pop",
    mealType: "Snack",
    foodGroup: [
      "Calcium "
    ],
    cooked: "no",
    ingredients: [
      "frozen yogurt paddle-pop "
    ]
  },
  {
    name: "Lettuce and Cheese Wrap",
    mealType: "Main Meal",
    foodGroup: [
      "Grains/Carbs ",
      "Vegetable ",
      "Calcium "
    ],
    cooked: "no",
    ingredients: [
      "iceberg lettuce ",
      "wraps x2 ",
      "cheese "
    ]
  },
  {
    name: "Butter and Vegimite Corn Thins",
    mealType: "Snack",
    foodGroup: [
      "Grains/Carbs "
    ],
    cooked: "no",
    ingredients: [
      "corn thins ",
      "vegimite ",
      "butter "
    ]
  },
  {
    name: "Chicken Noodle Soup",
    mealType: "Main Meal",
    foodGroup: [
      "Grains/Carbs ",
      "Vegetable ",
      "Protein "
    ],
    cooked: "yes",
    ingredients: [
      "egg noodles ",
      "chicken stock ",
      "jarred garlic ",
      "jarred ginger ",
      "soy sauce ",
      "sesame oil ",
      "shallots ",
      "baby corn ",
      "chicken "
    ]
  },
  {
    name: "Honey Soy Noodles",
    mealType: "Small Meal",
    foodGroup: [
      "Grains/Carbs "
    ],
    cooked: "yes",
    ingredients: [
      "udon noodles ",
      "fresh garlic ",
      "soy sauce ",
      "honey "
    ]
  },
  {
    name: "Garlic Bread",
    mealType: "Small Meal",
    foodGroup: [
      "Grains/Carbs "
    ],
    cooked: "yes",
    ingredients: [
      "garlic bread "
    ]
  },
  {
    name: "Marinater Chicken with Pasta",
    mealType: "Main Meal",
    foodGroup: [
      "Grains/Carbs ",
      "Protein "
    ],
    cooked: "yes",
    ingredients: [
      "chicken(marinated) ",
      "pasta ",
    ]
  },
  {
    name: "Steak with Pasta",
    mealType: "Main Meal",
    foodGroup: [
      "Grains/Carbs ",
      "Protein "
    ],
    cooked: "yes",
    ingredients: [
      "fillet steak ",
      "pasta ",
    ]
  },
  {
    name: "Sausages in a Bun",
    mealType: "Main Meal",
    foodGroup: [
      "Grains/Carbs ",
      "Protein "
    ],
    cooked: "yes",
    ingredients: [
      "sausage x2 ",
      "bun x2 ",
    ]
  },
  {
    name: "Spaghetti Bolognaise",
    mealType: "Main Meal",
    foodGroup: [
      "Grains/Carbs ",
      "Protein "
    ],
    cooked: "yes",
    ingredients: [
      "spaghetti ",
      "bolognaise sauce "    
    ]
  },
  {
    name: "Tortellini",
    mealType: "Main Meal",
    foodGroup: [
      "Grains/Carbs ",
      "Protein "
    ],
    cooked: "yes",
    ingredients: [
      "tortellini ",
      "latina sauce "    
    ]
  },
  {
    name: "Mango Chicken Curry",
    mealType: "Main Meal",
    foodGroup: [
      "Grains/Carbs ",
      "Protein ",
    ],
    cooked: "yes",
    ingredients: [
      "mango chicken ",
      "rice "    
    ]
  },
  {
    name: "Beef Stir Fry",
    mealType: "Main Meal",
    foodGroup: [
      "Grains/Carbs ",
      "Protein ",
      "Vegetable "
    ],
    cooked: "yes",
    ingredients: [
      "beef ",
      "shallots ",
      "brocolini ",
      "baby corn ",
      "carrot ",
      "fresh garlic ",
      "oyster sauce ",
      "rice "    
    ]
  },
  {
    name: "Peas",
    mealType: "Meal Ad-On",
    foodGroup: [
      "Vegetable "
    ],
    cooked: "yes",
    ingredients: [
      "peas "   
    ]
  },
  {
    name: "Broccoli",
    mealType: "Meal Ad-On",
    foodGroup: [
      "Vegetable "
    ],
    cooked: "yes",
    ingredients: [
      "broccoli "   
    ]
  },
  {
    name: "Carrots",
    mealType: "Meal Ad-On",
    foodGroup: [
      "Vegetable "
    ],
    cooked: "yes",
    ingredients: [
      "carrots "   
    ]
  },
  {
    name: "Celery",
    mealType: "Meal Ad-On",
    foodGroup: [
      "Vegetable "
    ],
    cooked: "no",
    ingredients: [
      "celery "   
    ]
  },
  {
    name: "Lettuce",
    mealType: "Meal Ad-On",
    foodGroup: [
      "Vegetable "
    ],
    cooked: "no",
    ingredients: [
      "lettuce "   
    ]
  },
  {
    name: "Cucumber",
    mealType: "Meal Ad-On",
    foodGroup: [
      "Vegetable "
    ],
    cooked: "no",
    ingredients: [
      "cucumber "   
    ]
  },
  {
    name: "Potato",
    mealType: "Meal Ad-On",
    foodGroup: [
      "Vegetable "
    ],
    cooked: "yes",
    ingredients: [
      "potato "   
    ]
  },
  {
    name: "Corn-on-the-Cob",
    mealType: "Meal Ad-On",
    foodGroup: [
      "Vegetable "
    ],
    cooked: "yes",
    ingredients: [
      "Corn "   
    ]
  },
  {
    name: "Broccolini",
    mealType: "Meal Ad-On",
    foodGroup: [
      "Vegetable"
    ],
    cooked: "yes",
    ingredients: [
      "broccolini ",
      "fresh garlic ",
      "chili flakes "   
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
