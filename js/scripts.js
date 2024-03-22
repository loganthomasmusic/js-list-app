let pokemonList = [

for (let i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') ');

    if (pokemonList[i].height > 6) {
        document.write("Wow, that's big!")
    };

    document.write('<br>')

}
//lists the pokemon by name and height on the DOM, specifying pokemon with over height of 6 as "big" and adding a line break between each object