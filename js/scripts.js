let pokemonRepository = (function (){
    
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

    function getAll(){ //allow code to call upon the repository
        return repository;
    }

    function add(pokemon) { //add new pokemon to the repository
        repository.push(pokemon);
    }

    function addListItem(pokemon) { //creates new pokemon
        let pokemonList = document.querySelector('.pokemon-list'); //select the pokemon list from html file
        let listPokemon = document.createElement('li'); //create new list item for the new pokemon
        let button = document.createElement('button'); //create button for the new pokemon list item
        button.addEventListener('click', function(event) { //listen for click event
            showDetails(pokemon) //call upon function listed below
        })
        button.innerText = pokemon.name; //display pokemon name in the button
        button.classList.add('button-class'); //add class name to button
        listPokemon.appendChild(button); //add button to pokemone list item
        pokemonList.appendChild(listPokemon); //add pokemon to list
    }

    function showDetails(pokemon) { 
        console.log(pokemon) //log pokemon to console when function is called upon
    }

    return { //return data from IIFE functions
        add: add,
        getAll: getAll,
        addListItem: addListItem
      };

})();

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});