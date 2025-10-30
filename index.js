import{S as f,i as n}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/",y="52985657-6fa5448d905561c90358ed2ab";async function g(s){const o=new URLSearchParams({key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=await fetch(`${m}?${o}`);if(!t.ok)throw new Error(t.statusText);return await t.json()}function h(s){const o=document.querySelector(".js-gallery");if(!o){console.error("Gallery element .js-gallery not found.");return}const t=s.map(({webformatURL:a,largeImageURL:e,tags:r,likes:i,views:c,comments:u,downloads:d})=>`
        <li class="gallery-card">
          <a href="${e}">
            <img class="gallery-img" src="${a}" alt="${r}" loading="lazy" />
          </a>
          <ul class="info">
            <li><b>Likes:</b> ${i}</li>
            <li><b>Views:</b> ${c}</li>
            <li><b>Comments:</b> ${u}</li>
            <li><b>Downloads:</b> ${d}</li>
          </ul>
        </li>
      `).join("");o.insertAdjacentHTML("beforeend",t)}function p(){document.querySelector(".js-gallery").innerHTML=""}const l={form:document.querySelector(".js-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader")},b=new f(".js-gallery a",{captionsData:"alt",captionDelay:250});l.form.addEventListener("submit",L);async function L(s){s.preventDefault();const o=s.target.elements.user_query.value.trim();if(!o){n.warning({title:"Oops!",message:"Please enter a search term.",position:"topRight"});return}p(),w();try{const t=await g(o);if(t.hits.length===0){n.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits),b.refresh()}catch(t){n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(t)}finally{S(),s.target.reset()}}function w(){l.loader.classList.remove("hidden")}function S(){l.loader.classList.add("hidden")}
//# sourceMappingURL=index.js.map
