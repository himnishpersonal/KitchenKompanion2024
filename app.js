const user = {
  name: 'John',
  email: 'john@example.com',
  cookingSkill: 'Intermediate',
  dietaryRestrictions: [],  
  allergens: ['Peanuts'],  
  preferences: ['Low-carb'],  
};

class FoodItem {
  constructor(name, expiration, quantity, allergen) {
      this.name = name;
      this.expiration = expiration;
      this.quantity = quantity;
      this.allergen = allergen;
  }
}

class Recipe {
  constructor(name, ingredients, timeToMake, skillLevel, dietaryRestrictions, allergens) {
      this.name = name;
      this.ingredients = ingredients;
      this.timeToMake = timeToMake;
      this.skillLevel = skillLevel;
      this.dietaryRestrictions = dietaryRestrictions;  
      this.allergens = allergens;
  }
}



const recipes = [
    new Recipe('Vegetarian Stir-fry', ['Carrots', 'Broccoli', 'Soy Sauce'], 30, 'Beginner', ['Vegetarian'], ['None']),
    new Recipe('Peanut Butter Sandwich', ['Peanut Butter', 'Bread'], 5, 'Beginner', [], ['Peanuts', 'Gluten']),
    new Recipe('Omelette', ['Eggs', 'Cheese'], 10, 'Intermediate', [], ['Dairy']),
    new Recipe('Chicken Salad', ['Chicken Breast', 'Lettuce', 'Tomatoes'], 20, 'Intermediate', [], ['None']),
    new Recipe('Grilled Salmon', ['Salmon', 'Lettuce'], 25, 'Intermediate', ['Pescatarian'], ['None']),
    new Recipe('Tomato Rice', ['Rice', 'Tomatoes'], 40, 'Beginner', ['Vegetarian', 'Gluten-free'], ['None']),
    new Recipe('Cheesy Broccoli', ['Broccoli', 'Cheese'], 15, 'Beginner', ['Vegetarian'], ['Dairy']),
    new Recipe('Rice and Chicken', ['Rice', 'Chicken Breast'], 30, 'Intermediate', [], ['None']),
    new Recipe('Spaghetti with Tomato Sauce', ['Pasta', 'Canned Tomatoes', 'Olive Oil', 'Salt'], 20, 'Beginner', ['Vegetarian'], ['Gluten']),
    new Recipe('Rice and Beans', ['Rice', 'Black Beans', 'Olive Oil', 'Salt'], 25, 'Beginner', ['Vegetarian', 'Gluten-free'], ['None']),
    new Recipe('Broccoli and Cheese Omelette', ['Eggs', 'Broccoli', 'Cheese'], 15, 'Intermediate', ['Vegetarian'], ['Dairy']),
    new Recipe('Chicken and Rice Salad', ['Chicken Breast', 'Rice', 'Lettuce'], 30, 'Intermediate', [], ['None']),
    new Recipe('Shrimp Stir-fry', ['Shrimp', 'Broccoli', 'Carrots', 'Olive Oil'], 25, 'Intermediate', ['Pescatarian'], ['Shellfish']),
    new Recipe('Apple and Peanut Butter Toast', ['Apples', 'Peanut Butter', 'Bread'], 5, 'Beginner', [], ['Peanuts', 'Gluten']),
    new Recipe('Grilled Cheese Sandwich', ['Bread', 'Cheese', 'Butter'], 10, 'Beginner', [], ['Dairy', 'Gluten']),
    new Recipe('Greek Yogurt Parfait', ['Yogurt', 'Honey', 'Almonds'], 10, 'Beginner', [], ['Dairy', 'Peanuts']),
    new Recipe('Spinach and Egg Scramble', ['Spinach', 'Eggs', 'Butter'], 15, 'Beginner', ['Vegetarian'], ['Dairy']),
    new Recipe('Ground Beef and Rice', ['Ground Beef', 'Rice'], 30, 'Intermediate', [], ['None']),
    new Recipe('Tomato and Cheese Salad', ['Tomatoes', 'Cheese', 'Lettuce'], 15, 'Beginner', ['Vegetarian'], ['Dairy'])
];


//food inventory
const foodItemsInUserRefrigerator = [
    new FoodItem('Carrots', '2024-11-01', 10, 'None'),
    new FoodItem('Broccoli', '2024-10-20', 5, 'None'),
    new FoodItem('Eggs', '2024-10-15', 12, 'None'),
    new FoodItem('Chicken Breast', '2024-10-17', 3, 'None'),
    new FoodItem('Tomatoes', '2024-10-18', 6, 'None'),
    new FoodItem('Cheese', '2024-11-05', 2, 'Dairy'),
    new FoodItem('Lettuce', '2024-10-22', 4, 'None'),
    new FoodItem('Salmon', '2024-10-18', 2, 'None'),
    new FoodItem('Bread', '2024-10-15', 5, 'Gluten'),
    new FoodItem('Milk', '2024-10-12', 2, 'Dairy'),
    new FoodItem('Yogurt', '2024-10-25', 6, 'Dairy'),
    new FoodItem('Butter', '2024-11-10', 1, 'Dairy'),
    new FoodItem('Spinach', '2024-10-14', 3, 'None'),
    new FoodItem('Ground Beef', '2024-10-19', 4, 'None'),
    new FoodItem('Shrimp', '2024-10-20', 2, 'Shellfish'),
    new FoodItem('Apples', '2024-10-15', 8, 'None'),
    new FoodItem('Grapes', '2024-10-16', 5, 'None')
]

const foodItemsInUserPantry = [
    new FoodItem('Peanut Butter', '2024-12-10', 1, 'Peanuts'),
    new FoodItem('Rice', '2024-12-25', 20, 'None'),
    new FoodItem('Pasta', '2024-12-30', 10, 'Gluten'),
    new FoodItem('Canned Tomatoes', '2025-01-15', 6, 'None'),
    new FoodItem('Olive Oil', '2025-06-01', 1, 'None'),
    new FoodItem('Flour', '2025-05-10', 4, 'Gluten'),
    new FoodItem('Sugar', '2025-03-18', 3, 'None'),
    new FoodItem('Salt', '2025-07-20', 1, 'None'),
    new FoodItem('Black Beans', '2025-01-01', 5, 'None'),
    new FoodItem('Chickpeas', '2025-01-01', 5, 'None'),
    new FoodItem('Oats', '2025-04-10', 4, 'None'),
    new FoodItem('Honey', '2025-09-10', 1, 'None'),
    new FoodItem('Almonds', '2025-02-05', 3, 'Tree nuts'),
    new FoodItem('Cereal', '2025-01-20', 2, 'Gluten'),
    new FoodItem('Spaghetti Sauce', '2025-02-15', 2, 'None')
]

function openTab(tabNumber) {
    document.getElementById('hamburger_main').style.display = 'none'
    console.log("open tab called")
    if (tabNumber === 1) {
        document.getElementById('tab_one').style.display = 'block'; 
        document.getElementById('tab_two').style.display = 'none'; 
        document.getElementById('tab_three').style.display = 'none'; 
        document.getElementById('tab_four').style.display = 'none'; 
        document.getElementById('tab_five').style.display = 'none'; 
    }else if(tabNumber === 2){
        document.getElementById('tab_one').style.display = 'none'; 
        document.getElementById('tab_two').style.display = 'block'; 
        document.getElementById('tab_three').style.display = 'none'; 
        document.getElementById('tab_four').style.display = 'none'; 
        document.getElementById('tab_five').style.display = 'none'; 
    }else if(tabNumber === 3){
        document.getElementById('tab_one').style.display = 'none'; 
        document.getElementById('tab_two').style.display = 'none'; 
        document.getElementById('tab_three').style.display = 'block'; 
        document.getElementById('tab_four').style.display = 'none'; 
        document.getElementById('tab_five').style.display = 'none'; 
    }else if(tabNumber === 4){
        document.getElementById('tab_one').style.display = 'none'; 
        document.getElementById('tab_two').style.display = 'none'; 
        document.getElementById('tab_three').style.display = 'none'; 
        document.getElementById('tab_four').style.display = 'block'; 
        document.getElementById('tab_five').style.display = 'none'; 
    }else if(tabNumber === 5){
        document.getElementById('tab_one').style.display = 'none'; 
        document.getElementById('tab_two').style.display = 'none'; 
        document.getElementById('tab_three').style.display = 'none'; 
        document.getElementById('tab_four').style.display = 'none'; 
        document.getElementById('tab_five').style.display = 'block'; 
    }
    
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    tabs[tabNumber - 1].classList.add('active');
}

function toggleHamburgerMenu() {
    if(document.getElementById('hamburger_main').style.display == 'none'){
        document.getElementById('hamburger_main').style.display = 'block'
        return
    }
    document.getElementById('hamburger_main').style.display = 'none'
}

function generateRecipeRecommendations({ cookingSkill, dietaryRestrictions, allergens }, foodItems) {
    let recipeList = [];
    const availableFoodNames = foodItems.map(item => item.name.toLowerCase());
    for (let i = 0; i < recipes.length; i++) {
        let recipe = recipes[i];
        let allIngredientsAvailable = true; 
        for (let j = 0; j < recipe.ingredients.length; j++) {
            let ingredient = recipe.ingredients[j].toLowerCase();
            if (!availableFoodNames.includes(ingredient)) {
                allIngredientsAvailable = false;
                break;
            }
        }
        if (allIngredientsAvailable) {
            recipeList.push(recipe);
        }
    }
    let allowedSkillLevels = [];
    if (cookingSkill === 'Beginner') {
        allowedSkillLevels = ['Beginner'];
    } else if (cookingSkill === 'Intermediate') {
        allowedSkillLevels = ['Beginner', 'Intermediate'];
    } else if (cookingSkill === 'Advanced') {
        allowedSkillLevels = ['Beginner', 'Intermediate', 'Advanced'];
    }
    recipeList = recipeList.filter(recipe => allowedSkillLevels.includes(recipe.skillLevel));
    if (!dietaryRestrictions.includes('None')) {
        recipeList = recipeList.filter(recipe => {
            return recipe.dietaryRestrictions.some(restriction => 
                dietaryRestrictions.includes(restriction)
            );
        });
    }
    if (!allergens.includes('None')) {
        recipeList = recipeList.filter(recipe => {
            return !recipe.allergens.some(allergen => allergens.includes(allergen));
        });
    }
    console.log(recipeList);
    return recipeList;
}


function setupRecipeGeneration() {
    const generateButton = document.getElementById('generate-recipes');
    const recipeOutput = document.getElementById('recipe-output');
    generateButton.addEventListener('click', () => {
        const cookingSkill = document.getElementById('cooking-skill').value;
        const dietaryRestrictions = Array.from(document.getElementById('dietary-restrictions').selectedOptions).map(option => option.value);
        const allergens = Array.from(document.getElementById('allergens').selectedOptions).map(option => option.value);
        const combinedFoodItems = [...foodItemsInUserRefrigerator, ...foodItemsInUserPantry];
        const recommendedRecipes = generateRecipeRecommendations({
            cookingSkill,
            dietaryRestrictions,
            allergens
        }, combinedFoodItems);
        const recipeOutput = document.getElementById('recipe-output');
        recipeOutput.innerHTML = '';
        document.getElementById('favorite-recipes-output').style.display = 'none';
        recipeOutput.style.display = 'block';
        if (recommendedRecipes.length > 0) {
            const recipeList = recommendedRecipes.map((recipe, index) => `
                <li id="recipe-${index}">
                    ${recipe.name} (Skill Level: ${recipe.skillLevel}, Time: ${recipe.timeToMake} mins)
                    <span class="favorite-star" data-recipe-id="${index}" onclick="toggleFav(${index})">☆</span>
                </li>`).join('');
            recipeOutput.innerHTML = `<h3>Recommended Recipes:</h3><ul>${recipeList}</ul>`;
        } else {
            recipeOutput.innerHTML = '<p>No suitable recipes found based on your selections.</p>';
        }
    });
}

const favoriteButton = document.getElementById('favorite-recipes');
const favoriteOutput = document.getElementById('favorite-recipes-output');

favoriteButton.addEventListener('click', function() {
    if (favoriteRecipes.length > 0) {
        favoriteOutput.style.display = 'block'; 
    } else {
        favoriteOutput.style.display = 'none'; 
    }
});

  
let favoriteRecipes = [];
function toggleFav(recipeId) {
    const recipe = recipes[recipeId];
    const star = document.querySelector(`#recipe-${recipeId} .favorite-star`);

    const isFavorited = favoriteRecipes.some(favRecipe => favRecipe.name === recipe.name);

    if (isFavorited) {
        favoriteRecipes = favoriteRecipes.filter(favRecipe => favRecipe.name !== recipe.name);
        star.innerHTML = '☆'; 
    } else {
        favoriteRecipes.push(recipe);
        star.innerHTML = '★'; 
    }
    updateFavorites();
}



function updateFavorites() {
    const favoriteOutput = document.getElementById('favorite-recipes-output');
    if (favoriteRecipes.length > 0) {
        const favoriteList = favoriteRecipes.map(recipe => `<li>${recipe.name}</li>`).join('');
        favoriteOutput.innerHTML = `<h3>Your Favorite Recipes:</h3><ul>${favoriteList}</ul>`;
    } else {
        favoriteOutput.innerHTML = '<p>No favorite recipes added yet.</p>';
    }
}


function setupFavorites(){
    const favoriteButton = document.getElementById('favorite-recipes');
    const recipeOutput = document.getElementById('recipe-output');
    const favoriteOutput = document.getElementById('favorite-recipes-output');

    favoriteButton.addEventListener('click', () => {
        recipeOutput.innerHTML = '';
        recipeOutput.style.display = 'none';
        favoriteOutput.style.display = 'block';
        updateFavorites();
    });
}

setupFavorites();

function setUserDetailsInUI(){
    Array.from(document.getElementsByClassName('cur_user_name_instance')).forEach(instance =>
        instance.textContent = user.name
    )
    Array.from(document.getElementsByClassName('cur_user_email_instance')).forEach(instance =>
        instance.textContent = user.email
    )
}

function initializeHamburgerListener(){
    const hamburgerMenu = document.getElementById('hamburger-menu')
    hamburgerMenu.addEventListener("click", toggleHamburgerMenu);
    Array.from(hamburgerMenu.children).forEach(child =>
        child.addEventListener('click', function(event) {
            event.stopPropagation(); //this sucks.
        }));
}

function setUserEmail(){
    user.email = document.getElementById('email_input').value
    setUserDetailsInUI()
}

function setUserName(){
    user.name = document.getElementById('name_input').value
    setUserDetailsInUI()
}

document.addEventListener('DOMContentLoaded', function() {
    initializeHamburgerListener()
    setUserDetailsInUI()

    openTab(1); 
});


//add to refrigerator/pantry

document.getElementById('new-food-form').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const num = parseInt(document.getElementById('quantity').value);
    const expiration = document.getElementById('date').value;
    const allergens = document.getElementById('allergens').value;


    //  constructor(name, expiration, quantity, allergen) {
    //     this.name = name;
    //     this.expiration = expiration;
    //     this.quantity = quantity;
    //     this.allergen = allergen;
    // }

    const pantryOrRef = document.getElementById('pantryOrRefrigerator').value;

    const food = new FoodItem(name, expiration, num, allergens);

    console.log('Current food items in the refrigerator:', foodItemsInUserRefrigerator);

    document.getElementById('new-food-form').reset();
    if (pantryOrRef === 'refrigerator') {
        foodItemsInUserRefrigerator.push(food);
    } else if (pantryOrRef === 'pantry') {
        foodItemsInUserPantry.push(food);
    }

    displayFood(pantryOrRef)
    document.getElementById('new-food-form').reset();


});


function displayFood (pantryOrRef){
    const displayFoodScroll = document.getElementById('food-input-scroll');
    displayFoodScroll.innerHTML = '';

    let toDisplay = [];

    if (pantryOrRef === 'refrigerator') {
        itemsToDisplay = foodItemsInUserRefrigerator;
    } else if (pantryOrRef === 'pantry') {
        itemsToDisplay = foodItemsInUserPantry;
    }

    itemsToDisplay.forEach(function(food) {
        const foodItem = document.createElement('p');
        foodItem.textContent = food.name;
        displayFoodScroll.appendChild(foodItem);
    });

    
}


