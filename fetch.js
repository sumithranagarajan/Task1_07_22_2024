function sateliteDetails() {
  const fetch_satelite = document.getElementsByClassName("satelite-details")[0];
  const url = "https://isro.vercel.app/api/customer_satellites";

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {

      data.customer_satellites.forEach((element) => {
        const div_creation = document.createElement("div");
        div_creation.setAttribute("class", "card");
        div_creation.setAttribute("style", "width: 18rem;");
        div_creation.innerHTML += `
                <div class="card-body text-bg-info">
                  <h5 class="card-title text-dark fs-5 font-weight-bold">Country Name: ${element.country}</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">Launch date: ${element.launch_date}</h6>
                  <p class="card-text">Mass : ${element.mass} Kilograms</p>
                  <p class="card-text">Launcher : ${element.launcher}</p>
                  </div>`;
                  fetch_satelite.append(div_creation);
      });
    }).catch((error)=>console.log(error))
}

sateliteDetails();