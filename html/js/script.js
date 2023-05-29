const url = 'https://www.bilalahmed.no/exam1/wp-json/wp/v2/posts?_embed=wp:featuredmedia&per_page=10';
const slider = document.querySelector(".card-container")

fetch(url)
.then(response => response.json())
.then(data => {
renderBlogPosts(data)
})
.catch(error => console.log(error))

function renderBlogPosts(data) {

    slider.innerHTML = "";

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
            
            <a href="/blogspess.html?id=${id}" class="blogspes">MORE</a>
            
            
      </div>
    ` })
}

