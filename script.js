// converted time
function getTimeString(time){
  const hour = parseInt(time / 3600);
  const remainingTime = time % 3600;
  const minutes =  parseInt(remainingTime / 60);
  const seconds = remainingTime % 60;


  return `${hour} hour ${minutes} min ${seconds} sec ago`;
 
}



const loadCategories = () => {
  fetch(' https://openapi.programming-hero.com/api/phero-tube/categories')
  .then(res => res.json())
  .then(data => displayCategories(data.categories))
  .catch(err => console.log(err))
}

// load videos function==================
const loadVideos = () => {
  fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
  .then(res => res.json())
  .then(data =>displayVideos(data.videos))
  .catch(err => console.log(err))
}

// display videos card--=================
const displayVideos = (videos) => {
  console.log(videos);
  const videosContainer = document.getElementById('videos_container');
  videos.forEach((item) => {
    const card = document.createElement('div')
    card.classList = "card card-compact";
  card.innerHTML = `
 
  <figure class="h-[200px] py-2 relative">
    <img
    class="h-full w-full object-"
      src=${item.thumbnail}
      alt="Shoes" />
      ${item.others?.posted_date?.length == 0 ? '' : `<span class='absolute right-2 bottom-2 text-white bg-black rounded p-1 bg-opacity-20 text-opacity-50'>${getTimeString(item.others?.posted_date)} </span>` }
      
  </figure>
  <div class="flex gap-2">
  <div class=''>
<img class='w-10 h-10 rounded-full object-cover' src=${item.authors[0].profile_picture} alt="" />
</div>
<div>
<h2 class='font-bold'>${item.title} </h2>
<div>
<div class='flex gap-2 px-0 items-center'>
<p class='font-semibold text-gray-400'>${item.authors[0].profile_name}</p>

${item.authors[0].verified ? '<img class="h-5 w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" /> ': ''}

</div>
  
  
  <p>${item.others.views} views</p>
  

</div>
</div>
 
    
   
  </div>

  `
  videosContainer.append(card);
  })
}
 




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
loadVideos();