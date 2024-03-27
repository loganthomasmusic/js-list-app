let pokemonRepository = (function (){
    
    let pokemonList = [
    let repository = [ //create repository of pokemon to be called upon using the following functions

        {
            name: 'Bulbasour',
            height: 7,
            type: 'grass'
        },

        { 
            name: 'Charmander',
            height: 6,
            type: 'fire'
        },

        {
            name: 'Squirtle',
            height: 5,
            type: 'water'
        }

    ];

    function getAll(){
        return pokemonList;
    function getAll(){ //allow code to call upon the repository
        return repository;
    }

    function add(pokemon) { //add new pokemon to the repository
        repository.push(pokemon);
    }

    function add(pokemon) {
        pokemonList.push(pokemon);
    function addListItem(pokemon) { //creates new pokemon
        let pokemonList = document.querySelector('.pokemon-list'); //select the pokemon list from html file
        let listPokemon = document.createElement('li'); //create new list item for the new pokemon
        let button = document.createElement('button'); //create button for the new pokemon list item
        button.innerText = pokemon.name; //display pokemon name in the button
        button.classList.add('button-class'); //add class name to button
        listPokemon.appendChild(button); //add button to pokemone list item
        pokemonList.appendChild(listPokemon); //add pokemon to list
    }

    return {
        add,
        getAll,
    return { //return data from IIFE functions
        add: add,
        getAll: getAll,
        addListItem: addListItem
      };

})();

//creates database of pokemon for use in the following code

pokemonRepository.getAll().forEach(function (pokemon) {

    document.write(pokemon.name + ' (height: ' + pokemon.height + ') ');

    if (pokemon.height > 6) {
            document.write("Wow, that's big!")
        };

    document.write('<br>')
    
});

/*implements a looped function that does the following:
        lists the pokemon by name and height on the DOM
        specifies pokemon with height of over 6 as "big"
        adds a line break between each object
*/    pokemonRepository.addListItem(pokemon);
});