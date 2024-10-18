//hello test
//ejnfiernf
const user = {
  name: 'John',
  email: 'john@example.com',
  cookingSkill: 'Intermediate',
  dietaryRestrictions: [],  
  allergens: ['Peanuts'],  
  preferences: ['Low-carb'],  
};

class FoodItem {
  constructor(name, expiration, quantity) {
      this.name = name;
      this.expiration = expiration;
      this.quantity = quantity;
  }
}

class Recipe {
  constructor(name, ingredients, timeToMake, skillLevel, dietaryRestrictions) {
      this.name = name;
      this.ingredients = ingredients;
      this.timeToMake = timeToMake;
      this.skillLevel = skillLevel;
      this.dietaryRestrictions = dietaryRestrictions;  
  }

  meetsDietaryRestrictions(user) {
      return user.dietaryRestrictions.every(restriction => 
          this.dietaryRestrictions.includes(restriction)
      );
  }

  containsAllergens(user) {
      return this.ingredients.some(ingredient => 
          user.allergens.includes(ingredient)
      );
  }

  meetsSkillLevel(user) {
      const skillLevels = ['Beginner', 'Intermediate', 'Advanced'];
      return skillLevels.indexOf(this.skillLevel) <= skillLevels.indexOf(user.cookingSkill);
  }

  canBeMadeWithIngredients(foodItems) {
      const foodNames = foodItems.map(item => item.name);
      return this.ingredients.every(ingredient => foodNames.includes(ingredient));
  }

  isSuitableForUser(user, foodItems) {
      const suitableDietary = this.meetsDietaryRestrictions(user);  
      const containsNoAllergens = !this.containsAllergens(user);   
      const skillLevelMatch = this.meetsSkillLevel(user);
      const ingredientsAvailable = this.canBeMadeWithIngredients(foodItems);

      return suitableDietary && containsNoAllergens && skillLevelMatch && ingredientsAvailable;
  }
}


const foodItems = [
  new FoodItem('Carrots', '2024-11-01', 10),
  new FoodItem('Broccoli', '2024-10-20', 5),
  new FoodItem('Peanut Butter', '2024-12-10', 1),
  new FoodItem('Eggs', '2024-10-15', 12),
  new FoodItem('Chicken Breast', '2024-10-17', 3),
  new FoodItem('Rice', '2024-12-25', 20),
  new FoodItem('Tomatoes', '2024-10-18', 6),
  new FoodItem('Cheese', '2024-11-05', 2),
  new FoodItem('Lettuce', '2024-10-22', 4),
  new FoodItem('Salmon', '2024-10-18', 2),
  new FoodItem('Bread', '2024-10-15', 5),
];

const recipes = [
  new Recipe('Vegetarian Stir-fry', ['Carrots', 'Broccoli', 'Soy Sauce'], 30, 'Beginner', ['Vegetarian']),
  new Recipe('Peanut Butter Sandwich', ['Peanut Butter', 'Bread'], 5, 'Beginner', []),
  new Recipe('Omelette', ['Eggs', 'Cheese'], 10, 'Intermediate', []),
  new Recipe('Chicken Salad', ['Chicken Breast', 'Lettuce', 'Tomatoes'], 20, 'Intermediate', []),
  new Recipe('Grilled Salmon', ['Salmon', 'Lettuce'], 25, 'Intermediate', ['Pescatarian']),
  new Recipe('Tomato Rice', ['Rice', 'Tomatoes'], 40, 'Beginner', ['Vegetarian', 'Gluten-free']),
  new Recipe('Cheesy Broccoli', ['Broccoli', 'Cheese'], 15, 'Beginner', ['Vegetarian']),
  new Recipe('Rice and Chicken', ['Rice', 'Chicken Breast'], 30, 'Intermediate', []),
];

//food inventory
const foodItemsInUserRefrigerator = [
    

]

const foodItemsInUserPantry = [

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

function generateRecipeRecommendations(user, foodItems) {
  const recommendedRecipes = recipes.filter(recipe => recipe.isSuitableForUser(user, foodItems));
  return recommendedRecipes;
}

function setupRecipeGeneration() {
  const generateButton = document.getElementById('generate-recipes');
  const recipeOutput = document.getElementById('recipe-output');

  generateButton.addEventListener('click', () => {
      const cookingSkill = document.getElementById('cooking-skill').value;
      const dietaryRestrictions = Array.from(document.getElementById('dietary-restrictions').selectedOptions).map(option => option.value);
      const allergens = Array.from(document.getElementById('allergens').selectedOptions).map(option => option.value);
      user.cookingSkill = cookingSkill;
      user.dietaryRestrictions = dietaryRestrictions;
      user.allergens = allergens;

      const recommendedRecipes = generateRecipeRecommendations(user, foodItems);
      recipeOutput.innerHTML = '';
      document.getElementById('favorite-recipes-output').style.display = 'none';
      recipeOutput.style.display = 'block';
      if (recommendedRecipes.length > 0) {
          const recipeList = recommendedRecipes.map((recipe,index) => `
          <li id="recipe-${index}">
           ${recipe.name}(Skill Level: ${recipe.skillLevel}, Time: ${recipe.timeToMake} mins)
           <span class="favorite-star" data-recipe-id="${index}" onclick="toggleFav(${index})">☆</span>
           </li>`).join('');
          recipeOutput.innerHTML = `<h3>Recommended Recipes:</h3><ul>${recipeList}</ul>`;
      } else {
          recipeOutput.innerHTML = '<p>No suitable recipes found based on your preferences.</p>';
      }
  });
}
let favoriteRecipes = [];

function toggleFav(recipeId){
    const recipe = recipes[recipeId];
    const star = document.querySelector(`#recipe-${recipeId} .favorite-star`);

    const isFavorited = favoriteRecipes.some(favRecipe => favRecipe.name === recipe.name);
    // Remove from favorites
    if(isFavorited){
        favoriteRecipes = favoriteRecipes.filter(favRecipe => favRecipe != recipe.name);
        star.innerHTML = '☆'; // Empty
    }else{
        favoriteRecipes.push(recipe)
        star.innerHTML = '★'; // Filled in
    }

    updateFavorites();
}

function updateFavorites(){
    const favoriteOutput = document.getElementById('favorite-recipes-output');
    // if there is at least one favorited recipe
    if (favoriteRecipes.length > 0){
        const favoriteList = favoriteRecipes.map(recipe => `<li>${recipe.name}</li>`).join('');
        favoriteOutput.innerHTML = `<h3>Your Favorite Recipes:</h3><ul>${favoriteList}</ul>`;
    }else{
        favoriteOutput.innerHTML = '<p>No favorite recipes added yet.</p>'
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


//add to refrigerator

function showAddToRefrigeratorForm(page) {
    window.location.href = page; 
}

function returnToMainPage(){
    window.history.back();
}

document.getElementById('new-food-form').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    console.log(name);
    const num = parseInt(document.getElementById('quantity').value);
    const date = document.getElementById('date').value;

    const food = new FoodItem(name, date, num);
    foodItemsInUserRefrigerator.push(food);

    console.log('Current food items in the refrigerator:', foodItemsInUserRefrigerator);

    document.getElementById('new-food-form').reset();
    alert(`Successfully added ${name} to the refrigerator!`);
});
