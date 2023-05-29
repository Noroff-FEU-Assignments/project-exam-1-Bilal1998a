const url = 'https://www.bilalahmed.no/exam1/wp-json/wp/v2/posts?_embed=wp:featuredmedia&per_page=12';
const slider = document.querySelector(".card-container1")
const loadMoreBtn = document.querySelector(".button1")
fetch(url)
.then(response => response.json())
.then(data => {
renderBlogPosts(data)
})
.catch(error => console.log(error))

function renderBlogPosts(data) {

 data.map((value, index)=> {

const {title, id, _embedded} = value;
const featured_image = _embedded["wp:featuredmedia"][0].source_url;
if(index < 9) {
    const featured_image = _embedded["wp:featuredmedia"][0].source_url;
    slider.innerHTML +=` 
    <div class="card">
    <img src="${featured_image}" alt="Image 1" />
    <h2>${title.rendered}</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
      velit dolores ab ducimus at quia amet harum rem dolore fugiat
      pariatur
    </p>
    
     <a href="./blogspess.html?id=${id}" class="blogspes">MORE</a>
     </div>` 
}
function loadMoreCards(){
if(index > 9){
    slider.innerHTML +=` 
    <div class="card">
    <img src="${featured_image}" alt="Image 1" />
    <h2>${title.rendered}</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
      velit dolores ab ducimus at quia amet harum rem dolore fugiat
      pariatur
    </p>
    
     <a href="./blogspess.html?id=${id}" class="blogspes">MORE</a>
     </div>`
loadMoreBtn.remove()
}


}
loadMoreBtn.addEventListener("click", loadMoreCards)




 })   
    
/* 
    data.forEach(post => {
        const {
            id, title, excerpt, _embedded
        } = post; 

        const featured_image = _embedded["wp:featuredmedia"][0].source_url;
    slider.innerHTML +=` 
    <div class="card">
    <img src="${featured_image}" alt="Image 1" />
    <h2>${title.rendered}</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
      velit dolores ab ducimus at quia amet harum rem dolore fugiat
      pariatur
    </p>
    
     <a href="/html/blogspess.html?id=${id}" class="blogspes">MORE</a>
     
     
    
</div>

    ` }) */
}

