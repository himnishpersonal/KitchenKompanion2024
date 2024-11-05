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
  constructor(name, ingredients, timeToMake, skillLevel, dietaryRestrictions, allergens,instructions) {
      this.name = name;
      this.ingredients = ingredients;
      this.timeToMake = timeToMake;
      this.skillLevel = skillLevel;
      this.dietaryRestrictions = dietaryRestrictions;  
      this.allergens = allergens;
      this.instructions = instructions;
  }
}



const recipes = [
    new Recipe('Vegetarian Stir-fry', 
        ['Carrots', 'Broccoli', 'Soy Sauce'], 
        30, 'Beginner', ['Vegetarian'], ['None'], 
        'Chop the carrots and broccoli. Stir-fry in a pan with soy sauce until tender.'
    ),
    new Recipe('Peanut Butter Sandwich', 
        ['Peanut Butter', 'Bread'], 
        5, 'Beginner', [], ['Peanuts', 'Gluten'], 
        'Spread peanut butter on one slice of bread. Top with the other slice and enjoy.'
    ),
    new Recipe('Omelette', 
        ['Eggs', 'Cheese'], 
        10, 'Intermediate', [], ['Dairy'], 
        'Whisk the eggs, pour into a heated pan, and cook until set. Sprinkle cheese before folding.'
    ),
    new Recipe('Chicken Salad', 
        ['Chicken Breast', 'Lettuce', 'Tomatoes'], 
        20, 'Intermediate', [], ['None'], 
        'Cook and dice the chicken breast. Combine with lettuce and tomatoes in a bowl.'
    ),
    new Recipe('Grilled Salmon', 
        ['Salmon', 'Lettuce'], 
        25, 'Intermediate', ['Pescatarian'], ['None'], 
        'Season salmon and grill for 10 minutes per side. Serve on a bed of lettuce.'
    ),
    new Recipe('Tomato Rice', 
        ['Rice', 'Tomatoes'], 
        40, 'Beginner', ['Vegetarian', 'Gluten-free'], ['None'], 
        'Cook the rice. Dice tomatoes and mix with rice before serving.'
    ),
    new Recipe('Cheesy Broccoli', 
        ['Broccoli', 'Cheese'], 
        15, 'Beginner', ['Vegetarian'], ['Dairy'], 
        'Steam broccoli until tender, then sprinkle with cheese to melt.'
    ),
    new Recipe('Rice and Chicken', 
        ['Rice', 'Chicken Breast'], 
        30, 'Intermediate', [], ['None'], 
        'Cook the rice. Grill the chicken, dice, and serve over the rice.'
    ),
    new Recipe('Spaghetti with Tomato Sauce', 
        ['Pasta', 'Canned Tomatoes', 'Olive Oil', 'Salt'], 
        20, 'Beginner', ['Vegetarian'], ['Gluten'], 
        'Boil pasta until tender. Heat tomatoes with olive oil, season, and combine with pasta.'
    ),
    new Recipe('Rice and Beans', 
        ['Rice', 'Black Beans', 'Olive Oil', 'Salt'], 
        25, 'Beginner', ['Vegetarian', 'Gluten-free'], ['None'], 
        'Cook rice. Mix with black beans and season with salt and olive oil.'
    ),
    new Recipe('Broccoli and Cheese Omelette', 
        ['Eggs', 'Broccoli', 'Cheese'], 
        15, 'Intermediate', ['Vegetarian'], ['Dairy'], 
        'Whisk eggs, add steamed broccoli and cheese, and cook until set.'
    ),
    new Recipe('Chicken and Rice Salad', 
        ['Chicken Breast', 'Rice', 'Lettuce'], 
        30, 'Intermediate', [], ['None'], 
        'Cook rice and grill chicken. Mix with lettuce and serve chilled.'
    ),
    new Recipe('Shrimp Stir-fry', 
        ['Shrimp', 'Broccoli', 'Carrots', 'Olive Oil'], 
        25, 'Intermediate', ['Pescatarian'], ['Shellfish'], 
        'Stir-fry shrimp with broccoli and carrots in olive oil until cooked.'
    ),
    new Recipe('Apple and Peanut Butter Toast', 
        ['Apples', 'Peanut Butter', 'Bread'], 
        5, 'Beginner', [], ['Peanuts', 'Gluten'], 
        'Spread peanut butter on toast. Slice apples and place on top.'
    ),
    new Recipe('Grilled Cheese Sandwich', 
        ['Bread', 'Cheese', 'Butter'], 
        10, 'Beginner', [], ['Dairy', 'Gluten'], 
        'Butter the bread, add cheese between slices, and grill until golden.'
    ),
    new Recipe('Greek Yogurt Parfait', 
        ['Yogurt', 'Honey', 'Almonds'], 
        10, 'Beginner', [], ['Dairy', 'Peanuts'], 
        'Layer yogurt with honey and almonds in a bowl or glass.'
    ),
    new Recipe('Spinach and Egg Scramble', 
        ['Spinach', 'Eggs', 'Butter'], 
        15, 'Beginner', ['Vegetarian'], ['Dairy'], 
        'Sauté spinach in butter, add eggs, and scramble until cooked.'
    ),
    new Recipe('Ground Beef and Rice', 
        ['Ground Beef', 'Rice'], 
        30, 'Intermediate', [], ['None'], 
        'Cook rice. Brown the ground beef and serve over rice.'
    ),
    new Recipe('Tomato and Cheese Salad', 
        ['Tomatoes', 'Cheese', 'Lettuce'], 
        15, 'Beginner', ['Vegetarian'], ['Dairy'], 
        'Chop tomatoes and cheese. Toss with lettuce and serve.'
    )
];



//food inventory
let foodItemsInUserRefrigerator = [
    new FoodItem('Carrots', '2028-11-01', 10, 'None'),
    new FoodItem('Broccoli', '2028-10-20', 5, 'None'),
    new FoodItem('Eggs', '2028-10-15', 12, 'None'),
    new FoodItem('Chicken Breast', '2028-10-17', 3, 'None'),
    new FoodItem('Tomatoes', '2028-10-18', 6, 'None'),
    new FoodItem('Cheese', '2028-11-05', 2, 'Dairy'),
    new FoodItem('Lettuce', '2028-11-01', 4, 'None'),
    new FoodItem('Salmon', '2028-10-18', 2, 'None'),
    new FoodItem('Bread', '2028-10-15', 5, 'Gluten'),
    new FoodItem('Milk', '2028-10-29', 2, 'Dairy'),
    new FoodItem('Yogurt', '2028-10-25', 6, 'Dairy'),
    new FoodItem('Butter', '2028-11-10', 1, 'Dairy'),
    new FoodItem('Spinach', '2028-10-14', 3, 'None'),
    new FoodItem('Ground Beef', '2028-10-19', 4, 'None'),
    new FoodItem('Shrimp', '2028-10-20', 2, 'Shellfish'),
    new FoodItem('Apples', '2028-10-15', 8, 'None'),
    new FoodItem('Grapes', '2028-10-16', 5, 'None')
]

let foodItemsInUserPantry = [
    new FoodItem('Peanut Butter', '2028-12-10', 1, 'Peanuts'),
    new FoodItem('Rice', '2028-12-25', 20, 'None'),
    new FoodItem('Pasta', '2028-12-30', 10, 'Gluten'),
    new FoodItem('Canned Tomatoes', '2028-01-15', 6, 'None'),
    new FoodItem('Olive Oil', '2028-06-01', 1, 'None'),
    new FoodItem('Flour', '2028-05-10', 4, 'Gluten'),
    new FoodItem('Sugar', '2028-03-18', 3, 'None'),
    new FoodItem('Salt', '2028-07-20', 1, 'None'),
    new FoodItem('Black Beans', '2028-01-01', 5, 'None'),
    new FoodItem('Chickpeas', '2028-01-01', 5, 'None'),
    new FoodItem('Oats', '2028-04-10', 4, 'None'),
    new FoodItem('Honey', '2028-09-10', 1, 'None'),
    new FoodItem('Almonds', '2028-02-05', 3, 'Tree nuts'),
    new FoodItem('Cereal', '2028-01-20', 2, 'Gluten'),
    new FoodItem('Spaghetti Sauce', '2028-02-15', 2, 'None')
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

document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll('.tab-bar button');
    function selectTab(event) {
        tabButtons.forEach(button => button.classList.remove('selected'));
        event.currentTarget.classList.add('selected');
    }
    tabButtons.forEach(button => button.addEventListener('click', selectTab));
});


function toggleHamburgerMenu() {
    if(document.getElementById('hamburger_main').style.display == 'none'){
        document.getElementById('hamburger_main').style.display = 'block'
        return
    }
    document.getElementById('hamburger_main').style.display = 'none'
}

function openRecipeDetails(recipeId) {
    localStorage.setItem('selectedRecipe', JSON.stringify(recipes[recipeId]));
    window.location.href = 'recipeDetailsPage/recipeDetails.html';
}


function generateRecipeRecommendations({ cookingSkill, dietaryRestrictions, allergens }, foodItems) {
    let recipeList = [];
    const availableFoodNames = foodItems
    .filter(item => !isExpired(item))  
    .map(item => item.name.toLowerCase());
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
                <li id="recipe-${index}" onclick="openRecipeDetails(${index})">
                    ${recipe.name} (Skill Level: ${recipe.skillLevel}, Time: ${recipe.timeToMake} mins)
                    <span class="favorite-star" data-recipe-id="${index}" onclick="toggleFav(${index}); event.stopPropagation();">☆</span>
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


    const pantryOrRef = document.getElementById('pantryOrRefrigerator').value;

    const food = new FoodItem(name, expiration, num, allergens);

    console.log('Current food items in the refrigerator:', foodItemsInUserRefrigerator);

    document.getElementById('new-food-form').reset();
    if (pantryOrRef === 'refrigerator') {
        foodItemsInUserRefrigerator.push(food);
    } else if (pantryOrRef === 'pantry') {
        foodItemsInUserPantry.push(food);
    }
    //display item

    document.getElementById('new-food-form').reset();

    const addedMessage = document.getElementById('added-message');
    addedMessage.textContent = `${name} successfully added, click to see all foods`;
    addedMessage.style.display = 'block';

    addedMessage.addEventListener('click', function() {
        openTab(1);  
        document.getElementById('tab_one').style.display = 'block'; 
        document.getElementById('tab_two').style.display = 'none'; 
        document.getElementById('tab_three').style.display = 'none'; 
        document.getElementById('tab_four').style.display = 'none'; 
        document.getElementById('tab_five').style.display = 'none'; 
        addedMessage.style.display = 'none'; 
    });
});



function isExpired(food){
    const today = new Date();
    if(food.expiration - today <= 0){
        return true
    }
    return false
}

function generateMainItemDeleteButton(foodName, container, displayFoodScroll, displayOrExpiry){
    let deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.classList.add('delete-button');

        deleteButton.addEventListener('click', function() {
            //remove food from display and data
            displayFoodScroll.removeChild(container);
            if(foodItemsInUserPantry.includes(foodName, 0)){

                //this is just for removing. what a PITA !!!!
                let removeAt = foodItemsInUserPantry.findIndex(food => food.name === foodName);
                if (removeAt !== -1) {
                    foodItemsInUserPantry.splice(removeAt, 1);
                }

            } else {

                //this is just for removing
                let removeAt = foodItemsInUserRefrigerator.findIndex(food => food.name === foodName);
                if (removeAt !== -1) {
                    foodItemsInUserRefrigerator.splice(removeAt, 1);
                }

            }

            //refresh food from other display on main screen
            if(displayOrExpiry == 'display'){
                displayExpiringFood()
            } else {
                displayFoodMain()
            }

        });

    return deleteButton
}

function displayExpiringFood(){
    const displayFoodScroll = document.getElementById('food-display-expiring');
    //for refreshing the display
    displayFoodScroll.innerHTML = '';

    let allFoods = [...foodItemsInUserPantry, ...foodItemsInUserRefrigerator]

    //for sorting by proximity to expiration
    let sortedFoods = allFoods.sort((a, b) => new Date(b.expiration) - new Date(a.expiration));

    sortedFoods.forEach(function(food) {
        let expiry = new Date(food.expiration);
        const today = new Date();

        let day_diff = Math.floor((expiry - today)/(1000*60*60*24));
        let foodItemContainer = document.createElement('div');
        foodItemContainer.classList.add("food-display-scroll-container")
        let foodItem = document.createElement('p');

        if(day_diff > 0 && day_diff < 11) {
            foodItem.innerHTML = "<strong>(Expiring in "+day_diff+" days)</strong> " + food.name;
        } else if(day_diff <= 0) { 
            foodItem.innerHTML = "<strong>(PAST EXPIRATION DATE)</strong> " + food.name;
        } else { 
            return;
        }

        let deleteButton = generateMainItemDeleteButton(food.name, foodItemContainer, displayFoodScroll, 'expiry')

        foodItemContainer.appendChild(foodItem);
        foodItemContainer.appendChild(deleteButton);
        
        displayFoodScroll.appendChild(foodItemContainer);
    });
}

displayExpiringFood()

function displayFoodMain (pantryOrRef){
    const displayFoodScroll = document.getElementById('food-display-main');
    //for refreshing the display
    displayFoodScroll.innerHTML = '';

    if (pantryOrRef === 'refrigerator') {
        itemsToDisplay = foodItemsInUserRefrigerator;
    } else if (pantryOrRef === 'pantry') {
        itemsToDisplay = foodItemsInUserPantry;
    }

    itemsToDisplay.forEach(function(food) {
        const foodItemContainer = document.createElement('div')
        foodItemContainer.classList.add("food-display-scroll-container")
        const foodItem = document.createElement('p');
        foodItem.textContent = food.name;

        let deleteButton = generateMainItemDeleteButton(food.name, foodItemContainer, displayFoodScroll, 'display')

        foodItemContainer.appendChild(foodItem);
        foodItemContainer.appendChild(deleteButton)
        displayFoodScroll.appendChild(foodItemContainer)
    });

}

displayFoodMain('refrigerator')

const locationSelector = document.getElementById('food-location-select');

locationSelector.addEventListener('change', function() {
    const locationChosen = locationSelector.value;
    displayFoodMain(locationChosen)
});

//Keyboard functionality
const nameField = document.getElementById('name');
const shoppingItemInputField = document.getElementById('shopping-item-input');
const keyboardImage = document.getElementById('keyboard-image');

nameField.addEventListener('focus', function() {
    keyboardImage.style.display = 'block'; 
});

nameField.addEventListener('blur', function() {
    keyboardImage.style.display = 'none'; 
});

shoppingItemInputField.addEventListener('focus', function() {
    keyboardImage.style.display = 'block'; 
});

shoppingItemInputField.addEventListener('blur', function() {
    keyboardImage.style.display = 'none'; 
});
