const countriesBox = document.querySelector(".conSection-3");
const filter = document.querySelector(".filter")
const dropElem = document.querySelector(".dropDownArrow")
const region = document.querySelectorAll(".region")
const search = document.querySelector(".search")
const toggle = document.querySelector(".toggle")
const moon = document.querySelector(".moon")


// async function getCountry() {
//     const url= await fetch("https://restcountries.com/v3.1/all");

//     const res= await url.json();

//     console.log(res);
//     showCountries(res)
//     res.forEach(country => {
//         showCountries(country)
//     });
// }

// getCountry();

// function showCountries(data) {

//    const country = document.createElement("div")    
//    country.classList.add("countryCard")
//    country.innerHTML = `
//    <div class="country-img">
//         <img src="${data.flag}"alt="">
//    </div>
//    <div class="countryDetails">
//         <h2>
//             ${data.name}
//         </h2>
//         <ul>
//             <li><strong>Population: </strong>${data.population} </li>
//             <li><strong>Region: </strong>${data.region} </li>
//             <li><strong>Capital: </strong>${data.capital} </li>
//         </ul>
// </div>
//    `
//    countriesBox.appendChild(country); 
//  }



async function getCountry() {
    const url = await fetch("https://restcountries.com/v3.1/all");
    const res = await url.json();
    // test to see if data from api is coming up
    console.log(res);
    // display each country now
    res.forEach(element => {
        showCountry(element)
        // console.log(element);
    });

}
getCountry()

function showCountry(data) {
    const country = document.createElement("div")
    country.classList.add("countryCard")
    country.innerHTML = `
       <div class="country-img">
            <img src="${data.flags.png}"alt="country's flag">
       </div>
       <div class="countryDetails">
            <h3 class= "countryName">
            
               ${data.name.common}
            </h3>
            <ul>
                <li><strong>Population: </strong>${data.population} </li>
                <li class=regionName><strong>Region: </strong>${data.region} </li>
                <li><strong>Capital: </strong>${data.capital} </li>
            </ul>
    </div>`;
    countriesBox.appendChild(country);
    country.addEventListener("click", () => {
        showCountryDetail(data)
    })
}

filter.addEventListener("click", () => {
    dropElem.classList.toggle("showDropDown")
    // console.log("hello");

})
const regionName = document.getElementsByClassName("regionName")

const countryName = document.getElementsByClassName("countryName")
region.forEach(element => {
    element.addEventListener("click", () => {
        console.log(element);
        Array.from(regionName).forEach(eleRN => {
            console.log(eleRN.innerText);
            if (eleRN.innerText.includes(element.innerText) || element.innerText == "All") {
                eleRN.parentElement.parentElement.parentElement.style.display = "grid"
                // }
            } else {
                eleRN.parentElement.parentElement.parentElement.style.display = "none"
            }
        })
    })

});

search.addEventListener("input", () => {
    console.log(search.value.toLowerCase());
    Array.from(countryName).forEach(eleRN => {
        // console.log(eleRN.innerText);
        if (eleRN.innerText.toLowerCase().includes(search.value.toLowerCase())) {
            eleRN.parentElement.parentElement.style.display = "grid"
            // }
        } else {
            eleRN.parentElement.parentElement.style.display = "none"
        }
    });
})

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    moon.classList.toggle("fas")
})

const countryModal = document.querySelector(".countryModal")
function showCountryDetail(data) {
    countryModal.classList.toggle("show")
    countryModal.innerHTML = `
    <button class="back"><ion-icon name="arrow-back-outline"></ion-icon> Back</button>
    <div class="modal">
        <div class="leftModal">
        <img src="${data.flags.png}"alt="country's flag">
        </div>
        
        <div class="rightModal">
            <h2 class= "countryName">${data.name.common}</h2>
            <div class="modalInfo">
                <div class="innerLeft inner">
                    <ul>
                        <li><strong>Native Name: </strong>${data.name.nativeName.ara.common} </li>
                        <li><strong>Population: </strong>${data.population} </li>
                        <li class=regionName><strong>Region: </strong>${data.region} </li>
                        <li class=regionName><strong>Sub Region: </strong>${data.subregion} </li>
                        <li><strong>Capital: </strong>${data.capital} </li>
                    </ul>
                </div>
                <div class="innerRight inner ">
                    <ul>
                        <li><strong>Top Level Domain: </strong>${data.tld[0]} </li>
                        <li class=><strong>Currencies: </strong>${data.currencies.SAR.name} </li>
                        <li><strong>Languages: </strong>${data.languages.ara} </li>
                    </ul>
                </div>
            </div>

        </div>   
        
         
    </div>
    `



    

    const back = countryModal.querySelector(".back")
    back.addEventListener("click", () => {
        countryModal.classList.toggle("show")
    })

}

