let addToy = false;

// document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
// });

// FETCH

fetch('http://localhost:3000/toys')
  .then((response) => response.json())
  .then((data) => renderToys(data))


function renderToys(toys) {
  // GRABBING PARENT DIV
  const toyParent = document.getElementById('toy-collection')
  console.log(toys)

  toys.forEach((toy) => {

    // CREATING NEW DIV
    const toyDiv = document.createElement('div')
    toyDiv.className = 'card'
    toyParent.appendChild(toyDiv)


    // NAMES
    const toyName = document.createElement('h2')
    toyName.textContent = toy.name
    toyDiv.append(toyName)

    console.log(toy.name)


    // IMAGES
    const toyImg = document.createElement('img')
    toyImg.className = 'toy-avatar'
    toyImg.src = toy.image
    toyImg.alt = `This is ${toyName}`
    toyDiv.append(toyImg)


    //LIKE BUTTON
    const likes = document.createElement('p')
    likes.textContent = toy.likes
    likes.style.color = 'white'
    toyDiv.append(likes)

    const likeButton = document.createElement('button')
    likeButton.textContent = 'Press for good time'
    likeButton.className = 'like-btn'
    likeButton.addEventListener('click', (e) => {
      likes.textContent = parseInt(likes.textContent) + 1
    })
    toyDiv.append(likeButton)

  })

}

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const newToy = {
    name : e.target.name.value,
    image : e.target.image.value,
    likes : 0
  }
  toyFormContainer.style.display = 'none'
  renderToys([newToy])
})