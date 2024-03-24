let pokemonList = [
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
//creates database of pokemon for use in the following code

pokemonList.forEach(function(pokemon) {

    document.write(pokemon.name + ' (height: ' + pokemon.height + ') ');

    if (pokemon.height > 6) {
            document.write("Wow, that's big!")
        };

    document.write('<br>')
    
})

/*implements a looped function that does the following:
        lists the pokemon by name and height on the DOM
        specifies pokemon with height of over 6 as "big"
        adds a line break between each object
*/