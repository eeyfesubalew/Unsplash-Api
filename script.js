"use strict";
const imgContainer = document.querySelector(".img-container");
const btnSearch = document.querySelector(".btn-search");
const searchInput = document.querySelector(".search-input");
let result = {
  img: [],
  qeury: "",
};
const getData = async function (query) {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=CfwIRurFMXSkezH69Zo059-H8zyIqn3zUiy8x44bgls;`
  );
  const data = await res.json();
  data.results.forEach((el) => {
    result.img.push(el.links.download);
  });
  result.img.forEach((el) => {
    const markup = `
           <figure class="img-fgr">
             <img src="${el}" alt="" />
           </figure>
         `;

    imgContainer.insertAdjacentHTML("afterbegin", markup);
  });
};

btnSearch.addEventListener("click", function (e) {
  e.preventDefault();
  result.qeury = searchInput.value;
  searchInput.value = "";
  getData(result.qeury);
});

btnSearch.addEventListener("keydown", function (e) {
  e.preventDefault();
  if (e.key === "Enter") result.qeury = searchInput.value;
  searchInput.value = "";
  getData(result.qeury);
});
