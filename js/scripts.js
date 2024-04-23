let pokemonRepository = (function (){
    
    let repository = []; //create repository of pokemon to be called upon using the following functions

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; //references the pokemon database api

    function add(pokemon) { //add new pokemon to the repository
        repository.push(pokemon);
    }

    function getAll(){ //allow code to call upon the repository
        return repository;
    }

    function addListItem(pokemon) {
        var pokemonList = document.querySelector('.pokemon-list');
        var listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'list-group-item-action'); // Adding Bootstrap classes
        listItem.setAttribute('role', 'listitem'); // Adding ARIA role
    
        // Creating a button element with Bootstrap button utility classes
        var button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('btn', 'btn-secondary', 'btn-block'); // Adding Bootstrap button classes
        button.setAttribute('type', 'button'); // Setting button type to 'button' to prevent form submission
    
        button.addEventListener('click', function () {
          showDetails(pokemon);
        });
    
        listItem.appendChild(button); // Appending the button to the list item
        pokemonList.appendChild(listItem); // Appending the list item to the Pokemon list
      }

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

    function showDetails(pokemon) { 
        loadDetails(pokemon).then(function () {
            showModal(pokemon);
        });
    } //log pokemon to console when function is called upon

    function showModal(pokemon) {
        console.log('Showing modal for', pokemon.name);
        let modalTitle = document.querySelector('.modal-title');
        let modalImage = document.querySelector('.modal-image');
        let modalName = document.querySelector('.modal-name');
        let modalHeight = document.querySelector('.modal-height');
        let modalAbilities = document.querySelector('.modal-abilities');
    
        modalTitle.innerText = pokemon.name;
        modalImage.setAttribute('src', pokemon.imageUrl);
        modalHeight.innerText = 'Height: ' + pokemon.height + 'm';

        $("#pokemonModal").modal()
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