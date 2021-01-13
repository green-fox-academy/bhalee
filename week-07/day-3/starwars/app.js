// const xhr = new XMLHttpRequest();

// xhr.onload = () => {
//   let list = JSON.parse(xhr.response);
//   console.log(list.results);
//   for (let i = 0; i < list.results.length; i++) {
//     console.log(list.results[i]);
//   }
// };
// let method = 'GET';
// let endpoint = 'http://swapi.dev/api/people/';
// xhr.open(method, endpoint);

// xhr.send();

function addToList(name) {
  let list = document.querySelector('#list');
  let listElem = document.createElement('li');
  listElem.setAttribute('class', 'resultName');
  listElem.setAttribute('id', 'b1');
  listElem.innerHTML = `${name}`;
  list.appendChild(listElem);
}
function clearList() {
  let list = document.querySelector('#list');
  list.innerHTML = '';
}

function addDest(id,title,dest) {
  const character = document.querySelector(`#Luke`);
  console.log(character);
  let forTitle = document.createElement('p');
  let fordest = document.createElement('p');
  forTitle.innerHTML = title.toString()
  fordest.innerHTML = dest.toString()
  character.appendChild(forTitle)
  character.appendChild(fordest)
}

const button = document.querySelector('#add-expense');
const inputName = document.querySelector('#add-name');
button.onclick = () => {
  const xhr = new XMLHttpRequest();
  xhr.onload = () => {
    let list = JSON.parse(xhr.response);
    console.log(list.results);
    for (let i = 0; i < list.results.length; i++) {
      // console.log(list.results[i]);
    }

    clearList();
    let searchName = inputName.value.toLowerCase();

    for (let i = 0; i < list.results.length; i++) {
      let searchElem = list.results[i].name.toLowerCase();
      let splitElem = searchElem.split(' ');
      for (let j = 0; j < splitElem.length; j++) {
        if (searchName === searchElem || splitElem[j] === searchName) {
          addToList(list.results[i].name);
        }
      }
    }
    const listedElem = document.querySelectorAll('.resultName');
    for (let i = 0; i < listedElem.length; i++) {
      listedElem[i].onclick = () => {
        let searchName = listedElem[i].innerHTML;

        const xhr2 = new XMLHttpRequest();
        xhr2.onload = () => {
          let list2 = JSON.parse(xhr2.response);
          for (let t = 0; t < list2.results.length; t++) {
            if (searchName === list2.results[t].name) {
              
              for (let index = 0; index < list2.results[t].films.length; index++) {
                
                
                const xhr = new XMLHttpRequest();
                
                const character = document.querySelector('#b1');
                xhr.onload = () => {
                  
                  let filmList = JSON.parse(xhr.response);
                  // console.log(filmList.title);
                  // console.log(filmList.release_date);
                  // console.log(searchName);
                  // addDest(searchName, filmList.title,filmList.release_date)
                  // console.log(character);
                  let forTitle = document.createElement('p');
                  let fordest = document.createElement('p');
                  forTitle.innerHTML = filmList.title
                  fordest.innerHTML = filmList.release_date
                  character.appendChild(forTitle)
                  character.appendChild(fordest)


                }
                let method = 'GET';
                let endpoint = list2.results[t].films[index];
                xhr.open(method, endpoint);
                
                xhr.send();
              };

            }
          


            
          }
        };
        let method2 = 'GET';
        let endpoint2 = 'http://swapi.dev/api/people/';
        xhr2.open(method2, endpoint2);
        xhr2.send();
      };
    }
  };
  let method = 'GET';
  let endpoint = 'http://swapi.dev/api/people/';
  xhr.open(method, endpoint);
  xhr.send();
};
