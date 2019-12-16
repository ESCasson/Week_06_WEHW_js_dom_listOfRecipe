document.addEventListener('DOMContentLoaded', () => {
  console.log('JS loaded')

  const newRecipe = document.querySelector('#addRecipe');
  newRecipe.addEventListener('submit', handleNewRecipeFormSubmit)

  const deleteAllButton = document.querySelector('#deleteAll');
deleteAllButton.addEventListener('click', handleDeleteAllClick);

  })

  const handleNewRecipeFormSubmit = function (event) {
    event.preventDefault();
      console.log('add new item')


      const recipeListItem = createRecipeListItem(event.target);
      const recipeList = document.querySelector('ul');
      recipeList.appendChild(recipeListItem);


        event.target.reset();
  };



  const createRecipeListItem = function (form) {
    const recipeListItem = document.createElement('li');
    recipeListItem.classList.add = '#recipeElement'

    const name = document.createElement('h3');
    name.textContent = form.name.value;
    recipeListItem.appendChild(name);

    const cuisine = document.createElement('h4');
    cuisine.textContent = form.cuisine.value;
    recipeListItem.appendChild(cuisine);

    const url = document.createElement('a');
    url.href = form.url.value;
    url.target = "_blank"
    url.textContent = `Link to Recipe`;
    recipeListItem.appendChild(url);


      const formInRecipeItem = document.createElement('form');
      formInRecipeItem.classContent = 'haveMadeDifferculty';
      const labelInFormYes = document.createElement('label');
      labelInFormYes.textContent = 'Have you made this recipe? Yes';
      const haveMadeRadioYes = document.createElement('input');
        haveMadeRadioYes.type ='radio';
        haveMadeRadioYes.name ='haveMade';
        haveMadeRadioYes.value ='yes';
        haveMadeRadioYes.textContent = 'Yes';
      const labelInFormNo = document.createElement('label');
      labelInFormNo.textContent = 'No';

      const haveMadeRadioNo = document.createElement('input');
        haveMadeRadioNo.type ='radio';
        haveMadeRadioNo.name ='haveMade';
        haveMadeRadioNo.value ='no';
        haveMadeRadioNo.textContent = 'No';

    recipeListItem.appendChild(formInRecipeItem);
    formInRecipeItem.appendChild(labelInFormYes);
    formInRecipeItem.appendChild(haveMadeRadioYes);
    formInRecipeItem.appendChild(labelInFormNo);
    formInRecipeItem.appendChild(haveMadeRadioNo);


    return recipeListItem;
  }





  const handleDeleteAllClick = function (event) {
    const recipeList = document.querySelector('ul');
    recipeList.innerHTML = '';
  }
