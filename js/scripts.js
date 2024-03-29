let pokemonRepository = (function (){
    
    let repository = []; //create repository of pokemon to be called upon using the following functions

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; //references the pokemon database api

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
        loadDetails(pokemon).then (function () {
            console.log(pokemon);
        });
    } //log pokemon to console when function is called upon

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }

    return { //return data from IIFE functions
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
      };

})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});