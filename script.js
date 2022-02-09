"use strict";
const imgContainer = document.querySelector(".img-container");
let result = {
  img: [],
};
const getData = async function () {
  const res = await fetch(
    `https://api.unsplash.com/photos/?client_id=CfwIRurFMXSkezH69Zo059-H8zyIqn3zUiy8x44bgls;`
  );
  const data = await res.json();
  console.log(data);
  data.forEach((el) => {
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
  console.log(imgContainer);
};
getData();
