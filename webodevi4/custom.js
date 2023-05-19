var listele =document.getElementById("album")
let data=fetch("https://jsonplaceholder.typicode.com/photos")
.then(response =>response.json())
.then(veri=>{
    veri.forEach(element =>{
        //console.log(element.id);
        if(element.id<=6)
        {
            listele.innerHTML+=`<img src="${element.url}"/>`
        }
    });
});