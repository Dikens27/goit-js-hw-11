import{S as h,i as s}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const g=document.querySelector(".form"),c=document.querySelector(".gallery"),d=document.querySelector(".loader"),u=new h(".gallery a",{captionsData:"alt",captionDelay:250});g.addEventListener("submit",l=>{l.preventDefault();const t=l.currentTarget.elements.search.value.trim();t.length==0?s.show({title:"Sorry, there are no images matching your search query. Please try again!Reqest is not ok",titleColor:"white",color:"white",backgroundColor:"red",position:"topRight"}):(f(t),p())});const y=(l="")=>{const t="https://pixabay.com/api/",a=new URLSearchParams({key:"41729431-93e496ed3cd794296b45db789",q:`${l}`,image_type:"photo",rientation:"horizontal",safesearch:"true"});return fetch(t+"?"+a).then(o=>(o.ok||s.show({title:"Sorry, there are no images matching your search query. Please try again!Reqest is not ok",titleColor:"white",color:"white",backgroundColor:"red",position:"topRight"}),o.json())).then(o=>{if(o.hits.length)return o.hits;s.show({title:"Sorry, there are no images matching your search query. Please try again!Reqest is not ok",titleColor:"white",color:"white",backgroundColor:"red",position:"topRight"}),n()})},m=({largeImageURL:l,webformatURL:t,tags:a,likes:o,views:e,comments:r,downloads:i})=>`           
    <li class="gallery-item">
        <div class=gallery-card>
            <a class="gallery-link" href="${l}">
                <img class="gallery-image" src="${t}" alt="${a}" width:"360" height:"200" />
            </a>

            <ul class="gallery-card-list">
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Likes</h2>
                    <p class="gallery-card-information">${o}</p>
                </li>
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Views</h2>
                    <p class="gallery-card-information">${e}</p>
                </li>
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Comments</h2>
                    <p class="gallery-card-information">${r}</p>
                </li>
                <li class="gallery-card-item">
                    <h2 class="gallery-card-title">Downloads</h2>
                    <p class="gallery-card-information">${i}</p>
                </li>
            </ul>
        </div>
    </li>
`;function f(l){y(l).then(t=>{c.innerHTML="",t.map(a=>{c.insertAdjacentHTML("beforeend",m(a)),u.refresh()}),n()}).catch(t=>console.log(t),n())}function p(){d.classList.add("loading")}function n(){d.classList.remove("loading")}
//# sourceMappingURL=commonHelpers.js.map
