import { getProperties } from "../services/PropertiesServices.js";

let query = {}

document.getElementById("typeOfOperation").addEventListener( "change", (element) => {
  query.typeOperation = element.target.value;
});

document.getElementById("typeOfProperty").addEventListener( "change", () => {
  query.typeOfProperty = element.target.value;
});

document.getElementById("region").addEventListener( "change", () => {
  query.region = element.target.value;

});

document.getElementById("commune").addEventListener( "change", () => {
  query.commune = element.target.value;
});

document.getElementById("min_price").addEventListener( "change", () => {
  query.min_price = element.target.value;
});

document.getElementById("max_price").addEventListener( "change", () => {
  query.max_price = element.target.value;
});

document.getElementById("bathrooms").addEventListener( "change", () => {
  query.bathrooms = element.target.value;
});

document.getElementById("bedrooms").addEventListener( "change", () => {
  query.bedrooms = element.target.value;
});

document.getElementById("surface_m2").addEventListener( "change", () => {
  query.surface_m2 = element.target.value;
});

document.getElementById("buscar").addEventListener( "click", async() => {
  let {typeOperation, typeOfProperty, region, commune, min_price, max_price, bathrooms, bedrooms, surface_m2} = query;
  let {data} = await getProperties(1, 10, typeOperation, typeOfProperty, region, commune, min_price, max_price, bathrooms, bedrooms, surface_m2)
  console.log(query);
  console.log(data);

  document.getElementById('container-cards').innerHTML = data.map(data => 
    `<div class="col-4 mt-3">
      <div class="card" style="width: 100%;height: 100%; margin: 0 auto;">
        <a href="propiedad.html" style="color: gray">
        <span class="uf-item-price">Venta</span>
        <div class="image-wrapper">
          <img src="${data.image}"  class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title text-bold">${data.title}</h5>
          <p class="card-text mb-0"><i class="fa-solid fa-location-dot"></i>${data?.city}, ${data?.commune} </p>
          <p class="card-text" style="font-weight: bold ;">${data.currency.isoCode} $ ${data.price}</p>
          <hr style="border-bottom: 3px solid black;" />
          <div class="d-flex justify-content-around">
            <p style="font-weight: bold;">M&sup2 ${data.surface_m2}</p>
            <p><i class="fa-solid fa-bed"></i> ${data.bedrooms}</p>
            <p><i class="fa-solid fa-toilet"></i> ${data.bathrooms}</p>
            <p><i class="fa-solid fa-car"></i> ${data.coveredParkingLots}</p>
          </div>
        </div>
      </a>
      </div>
    </div>`
  ).join('') 
});