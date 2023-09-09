const countriesElem = document.querySelector(".countries");
const Dropdown = document.querySelector(".dropdown");
const dropElem =document.querySelector(".drop")
const region = document.querySelectorAll(".region");
const search = document.querySelector(".search");
const toggle = document.querySelector(".toggle");
const moon = document.querySelector(".moon");
async function getcountry(){
 const url = await fetch("https://restcountries.com/v3.1/all");
 const res = await url.json();
 console.log(res);
 res.forEach(element => {
    showcountry(element)
 });
//   showcountry(res)
}
getcountry()
function showcountry(data){
  const country = document.createElement("div")
   country.classList.add("country")
 country.innerHTML = ` <div class="country-img">
 <img src="${data.flags.png}" alt="">
  </div>
  <div class="country-info">
  <h5 class="countryName" >${data.name.official}</h5>
 <p><strong>Poppulation:</strong>${data.population}</p>
 <p class="regionName"><strong>Region:</strong>${data.region}</p>
 <p><strong>Capital</strong>${data.capital}</p>
  </div>`
 countriesElem.appendChild(country)
 country.addEventListener("click",()=>{
  showcountryDetail(data)
 })
}
Dropdown.addEventListener("click",()=>{
dropElem.classList.toggle("showDropDown")
console.log("hello");
})
const regionName = document.getElementsByClassName("regionName");
const countryName = document.getElementsByClassName("countryName");
region.forEach(element => {
  element.addEventListener("click",()=>{
    console.log(element);
   Array.from(regionName).forEach(elem=>{
    console.log(elem.innerText)
    if(elem.innerText.includes(element.innerText)||element.innerText=="All"){
      elem.parentElement.parentElement.style.display = "grid"
    }else{
      elem.parentElement.parentElement.style.display = "none"
    }
      // console.log(element);
    });
  })
});
search.addEventListener("input",()=>{
 console.log((search.value.toLowerCase()))
 Array.from(countryName).forEach(elem=>{
  // console.log(elem.innerText)
  if(elem.innerText.toLowerCase().includes(search.value.toLowerCase())){
    elem.parentElement.parentElement.style.display = "grid"
  }else{
    elem.parentElement.parentElement.style.display = "none"
  }
    // console.log(element);
  });
})
toggle.addEventListener("click",()=>{
  document.body.classList.toggle("dark")
  moon.classList.toggle("uil-sun")
})
// console.log(element.innerText)
// for back
// const countrymodal = document.querySelector(".countrymodal");
const countrymodal = document.querySelector(".countrymodal");
function showcountryDetail(data){
  countrymodal.classList.toggle("show")
  countrymodal.innerHTML = `<button class="back-end"> <i class="uil uil-arrow-left icon5">Back</i></button>
  <div class="modal">
      <div class="leftmodal">
          <img src="${data.flags.png}" alt="">
      </div>
      <div class="rightmodal">
          <h1>${data.name.official}</h1>
          <div class="modalinfo">
              <div class="innerleft inner">
                  <p><strong>Native Name:</strong>${data.nativeName}</p>
                  <p><strong>population:</strong>${data.population}</p>
                  <p><strong>Region:</strong>${data.region}</p>
                  <p><strong>Sub-region:</strong>${data.subregion}</p>
              </div>
              <div class="innerright inner">
                  <p><strong>capital:</strong>${data.capital}</p>
                  <p><strong>Top-level Domain:</strong>${data.area}</p>
                  <p><strong>Currencies</strong>${data.currencies}</p>
                  <p><strong>Languages</strong>${data.languages.eng}</p>
              </div>
          </div>
      </div>
  </div>`;
  const back = countrymodal.querySelector(".back-end")
 back.addEventListener("click",()=>{
  countrymodal.classList.toggle("show")
 })
}
// const back = document.querySelector(".back");
// const countrymodal = document.querySelector(".countrymodal");
// back.addEventListener("click",()=>{
// countrymodal.classList.toggle("show");
// })