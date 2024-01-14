import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

const url = "https://pixabay.com/api/";

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const q = event.currentTarget.elements[0].value;

    renderIMG(q);
    loader.classList.add('loading');
});

const getIMG = (q = "") => {
    return fetch(url + `?key=41729431-93e496ed3cd794296b45db789&q=${q}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(response => response.json())
        .then(data => {
            if (data.hits.length) {
                return data.hits;
            } else {
                iziToast.show({
                    title: 'Sorry, there are no images matching your search query. Please try again!Reqest is not ok',
                    titleColor: 'white',
                    color: 'white',
                    backgroundColor: 'red',
                    position: 'topRight',
                }); 
            }
         
        })
}

const getImageHTML = ({largeImageURL, webformatURL, tags, likes, views, comments, downloads}) => `           
    <li class="gallery-item">
        <div class=gallery-card>
            <a class="gallery-link" href="${largeImageURL}">
                <img class="gallery-image" src="${webformatURL}" alt="${tags}" width:"360" height:"200" />
            </a>

            <ul class="gallery-card-list">
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Likes</h2>
                    <p class="gallery-card-information">${likes}</p>
                </li>
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Views</h2>
                    <p class="gallery-card-information">${views}</p>
                </li>
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Comments</h2>
                    <p class="gallery-card-information">${comments}</p>
                </li>
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Downloads</h2>
                    <p class="gallery-card-information">${downloads}</p>
                </li>
            </ul>
        </div>
    </li>
`

function renderIMG(q) {
    getIMG(q)
        .then(images => {
            gallery.innerHTML = "";
            images.map(image => {
                gallery.insertAdjacentHTML("afterbegin", getImageHTML(image));
                const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
            })
            loader.classList.remove('loading');
        })
        .catch(error => console(error));
}



    











