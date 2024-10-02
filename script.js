console.log('from script');
const loadCategories = () => {
  fetch(' https://openapi.programming-hero.com/api/phero-tube/categories')
  .then(res => res.json())
  .then(data => displayCategories(data.categories))
  .catch(err => console.log(err))
}

// load videos function==================
const loasVideos = () => {
  fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
}

// display videos card--=================
const 
 

const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById('categories_container')
 categories.map((item) => {
  console.log(item);
  const button = document.createElement('button');
  button.classList = 'btn, hover:bg-pink-400 hover:p-2 hover:rounded-md transition:200 font-semibold text-xl hover:text-white shadow-md p-2 rounded-md';
  button.innerText = item.category;
  categoriesContainer.append(button)

 })

}

loadCategories();