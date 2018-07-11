import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import TextBox from '../components/textbox';
import { recipes } from '../data/recipes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes,
      recipeName: '',
      recipeIngredients: ''
    };
    this.handleAddRecipe = this.handleAddRecipe.bind(this);
    this.handleRecipeNameChange = this.handleRecipeNameChange.bind(this);
  }

  handleAddRecipe() {
    const newRecipes = JSON.parse(JSON.stringify(this.state.recipes));
    // const newRecipes = [ ...this.state.recipes ];
    newRecipes.push({ name: this.state.recipeName, ingredients: ['chicken', 'stuff']});
    this.setState({
      recipes: newRecipes,
      recipeName: ''
    });
  }

  handleRecipeNameChange(recipeName) {
    this.setState({
      recipeName,
    });
  }

  render() {
    const recipeElements = this.state.recipes.map((recipe, index) => {
      return (
        <div key={index}>{recipe.name} : {recipe.ingredients}</div>
      )
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <TextBox placeholderTxt="Recipe Name" onRecipeChange={this.handleRecipeNameChange} />
          <TextBox placeholderTxt="Recipe Ingredients" />
          { recipeElements }
          <button onClick={this.handleAddRecipe}>Add a recipe</button>
        </div>
      </div>
    );
  }
}

export default App;
