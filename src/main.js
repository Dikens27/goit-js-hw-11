import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

form.addEventListener("submit", (event) => {
    event.preventDefault();
    showLoader();
    gallery.innerHTML = "";

    const q = event.currentTarget.elements.search.value.trim();
   
    if (q.length === 0) {
        showErrorToast("Sorry, there are no images matching your search query. Please try again!Reqest is not ok");
        hideLoader();
    } else {
        renderIMG(q);
    }
});

const getIMG = (query = "") => {
    const url = "https://pixabay.com/api/";
    const searchParams = new URLSearchParams({
        key: "41729431-93e496ed3cd794296b45db789",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true"
    });

    return fetch(`${url}?${searchParams}`)
        .then(response => {
            if (!response.ok) {
                showErrorToast("Sorry, there are no images matching your search query. Please try again!Reqest is not ok");
                return;
            }
            return response.json();
        })
        .then(data => {
            if (data.hits.length) {
                return data.hits;
            } else {
                showErrorToast("Sorry, there are no images matching your search query. Please try again!Reqest is not ok");
                hideLoader();
            }
        })
        .finally(hideLoader);
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
            if (images === undefined) {
                return;
            } else {
                const markup = images.map((image => {
                    return getImageHTML(image);
                })).join("");

                gallery.insertAdjacentHTML("beforeend", markup);
                lightbox.refresh();         
                hideLoader();
            }
        })
        .catch(error => {
            console.log(error);
            hideLoader();
            showErrorToast("Sorry, there are no images matching your search query. Please try again!Reqest is not ok");
        });
}

function showLoader() {
    loader.classList.add('loading');
}

function hideLoader() {
    loader.classList.remove('loading');
}

function showErrorToast(message) {
    iziToast.show({
        title: message,
        titleColor: 'white',
        color: 'white',
        backgroundColor: 'red',
        position: 'topRight',
    });
}
