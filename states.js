fetch('https://www.trackcorona.live/api/provinces')


.then(response => response.json())
    .then(result => {

        result.data.forEach(element => {
            if (element.country_code == "in") {
                // console.log(element)
                document.getElementById('statecard').innerHTML += ` <div class="col-sm-4 asd" > 
                <div class="card st" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${element.location}</h5>
                <a style="color:red;">Confirm </a><span class="badge badge-secondary">${element.confirmed} </span></br>
                <a style="color:red;">Death </a><span class="badge badge-secondary">${element.dead} </span><br>
                <a style="color:lime;">Recovered </a><span class="badge badge-secondary">${element.recovered} </span>
                </div>
              </div></br></div>`
            } else {

            }

        });
    })