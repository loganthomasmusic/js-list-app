let pokemonRepository=function(){let t=[];function e(e){t.push(e)}function n(){return t}function o(t){return fetch(t.detailsUrl).then(function(t){return t.json()}).then(function(e){t.imageUrl=e.sprites.front_default,t.height=e.height,t.types=e.types}).catch(function(t){console.error(t)})}function i(t){o(t).then(function(){var e;let n,o,i;e=t,console.log("Showing modal for",e.name),n=document.querySelector(".modal-title"),o=document.querySelector(".modal-image"),document.querySelector(".modal-name"),i=document.querySelector(".modal-height"),document.querySelector(".modal-abilities"),n.innerText=e.name,o.setAttribute("src",e.imageUrl),i.innerText="Height: "+e.height+"m",$("#pokemonModal").modal()})}return{add:e,getAll:n,addListItem:function t(e){var n=document.querySelector(".pokemon-list"),o=document.createElement("li");o.classList.add("list-group-item","list-group-item-action"),o.setAttribute("role","listitem");var r=document.createElement("button");r.innerText=e.name,r.classList.add("btn","btn-secondary","btn-block"),r.setAttribute("type","button"),r.addEventListener("click",function(){i(e)}),o.appendChild(r),n.appendChild(o)},loadList:function t(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){e({name:t.name,detailsUrl:t.url})})}).catch(function(t){console.error(t)})},loadDetails:o,showDetails:i}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});