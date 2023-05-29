
const slider = document.querySelector(".card-container")
const queryString = document.location.search;
const blogContainer = document.querySelector(".blogspes")

const params = new URLSearchParams(queryString);

const id = params.get('id');
const url = `https://www.bilalahmed.no/exam1/wp-json/wp/v2/posts/${id}?_embed=wp:featuredmedia`;
console.log(id)


fetch(url)
.then(response => response.json())
.then(data => {
specific(data)

})
.catch(error => console.log(error))





function specific(data){
const {title, _embedded, excerpt, content} = data
const media = _embedded["wp:featuredmedia"][0].source_url;
console.log(media)
console.log(excerpt.rendered)

blogContainer.innerHTML = `
<img class="expo" src="${media}" alt="blog picture" />
      <section>
        <h1 class="expotext">${title.rendered}</h1>
        
        

        <p class="specific-text">
        ${content.rendered}
        </p>
        

`

}

