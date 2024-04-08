let pokemonRepository = (function (){
    
    let repository = []; //create repository of pokemon to be called upon using the following functions

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; //references the pokemon database api

    function getAll(){ //allow code to call upon the repository
        return repository;
    }

    function add(pokemon) { //add new pokemon to the repository
        repository.push(pokemon);
    }

    function showModal(pokemon) { //displays a modal of the selected pokemon when clicked

        let modalContainer = document.querySelector('#modal-container')

        modalContainer.innerHTML = '';

        let modal = document.createElement('div');
        modal.classList.add('modal');

        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);

        let titleElement = document.createElement('h1');
        titleElement.innerText = pokemon.name;

        let heightElement = document.createElement('p');
        heightElement.innerText = 'Height: ' + pokemon.height;

        let imageElement = document.createElement('img');
        imageElement.src = pokemon.imageUrl;

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(heightElement);
        modal.appendChild(imageElement);
        modalContainer.appendChild(modal);

        modalContainer.classList.add('is-visible');

        modalContainer.addEventListener('click', (e) => {
            let target = e.target;
            if (target === modalContainer) {
                hideModal();
            }
        });

        document.querySelector('#show-modal').addEventListener('click', () => {
            showModal('Modal title', 'This is the modal content!');
          });
          
          function hideModal() {
            let modalContainer = document.querySelector('#modal-container');
            modalContainer.classList.remove('is-visible');
          
            window.addEventListener('keydown', (e) => {
              letModalContainer = document.querySelector('#modal-container');
              if (e.key = 'Escape' && modalContainer.classList.contains('is-visible')) {
                hideModal();
              }
            });
          }

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
        loadDetails(pokemon).then(function () {
            showModal(pokemon);
        })
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