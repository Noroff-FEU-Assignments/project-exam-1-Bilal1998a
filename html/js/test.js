const url ="https://www.bilalahmed.no/exam1/wp-json/wp/v2/posts?_embed=wp:featuredmedia";

fetch(url) 


 .then(response => response.json())

 .then(data => {

 console.log(data)
 })

.catch(error => console.error(error));


console.log(url)

