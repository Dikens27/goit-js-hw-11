import{S as u,i as h}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g=document.querySelector(".form"),c=document.querySelector(".gallery"),d=document.querySelector(".loader"),y=new u(".gallery a",{captionsData:"alt",captionDelay:250});g.addEventListener("submit",l=>{l.preventDefault(),L();const r=l.currentTarget.elements.search.value.trim();r.length===0?n("Sorry, there are no images matching your search query. Please try again!Reqest is not ok"):p(r)});const m=(l="")=>{const r="https://pixabay.com/api/",o=new URLSearchParams({key:"41729431-93e496ed3cd794296b45db789",q:l,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${r}?${o}`).then(a=>{if(!a.ok){n("Sorry, there are no images matching your search query. Please try again!Reqest is not ok");return}return a.json()}).then(a=>{if(a.hits.length)return a.hits;n("Sorry, there are no images matching your search query. Please try again!Reqest is not ok"),i()}).finally(i)},f=({largeImageURL:l,webformatURL:r,tags:o,likes:a,views:e,comments:t,downloads:s})=>`           
    <li class="gallery-item">
        <div class=gallery-card>
            <a class="gallery-link" href="${l}">
                <img class="gallery-image" src="${r}" alt="${o}" width:"360" height:"200" />
            </a>

            <ul class="gallery-card-list">
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Likes</h2>
                    <p class="gallery-card-information">${a}</p>
                </li>
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Views</h2>
                    <p class="gallery-card-information">${e}</p>
                </li>
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Comments</h2>
                    <p class="gallery-card-information">${t}</p>
                </li>
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Downloads</h2>
                    <p class="gallery-card-information">${s}</p>
                </li>
            </ul>
        </div>
    </li>
`;function p(l){m(l).then(r=>{if(c.innerHTML="",r!==void 0){const o=r.map(a=>f(a)).join("");c.insertAdjacentHTML("beforeend",o),y.refresh(),i()}}).catch(r=>{console.log(r),i(),n("Sorry, there are no images matching your search query. Please try again!Reqest is not ok")})}function L(){d.classList.add("loading")}function i(){d.classList.remove("loading")}function n(l){h.show({title:l,titleColor:"white",color:"white",backgroundColor:"red",position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
