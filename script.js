const accessKey = "bqk4mUjzWZUsS6I033a3T8Y7kppfDx5q4jz5Zz5nz9E";
const serachForm = document.getElementById("search-form");
const serachBox = document.getElementById("search-box");
const serachResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImage()
{
    keyword = serachBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
      
    if (page === 1) {
        serachResult.innerHTML = "";
    }


    const results = data.results;

    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        serachResult.appendChild(imageLink);
    })

    showMoreBtn.style.display = "block";
    
}

serachForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImage();
})



showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImage();
})