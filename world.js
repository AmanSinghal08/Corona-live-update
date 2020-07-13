fetch('https://www.trackcorona.live/api/countries')
    .then(response => response.json())
    .then(result => {
        // console.log(result.data);
        result.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;
            cases = element.confirmed;
            if (cases > 100000) {
                color = "rgb(0,0,0)";
            } else if (cases < 100001 && cases > 50000) {
                color = `rgb(204,0,0)`;

            } else if (cases < 50001 && cases > 20000) {
                color = `rgb(230,0,0)`;

            } else if (cases < 20001 && cases > 10000) {
                color = `rgb(255,0,0)`;

            } else {
                color = `rgb(255,26,26)`;
            }
            new mapboxgl.Marker({

                    color: color
                })
                .setLngLat([longitude, latitude])

            .setPopup(new mapboxgl.Popup({ center: [11.255, 43.77], zoom: 0 }).setHTML(`<a style="color: blue;"><strong>country</strong> </a> <strong> ${element.location}</strong>  </br> <a style="color: red;">confirm </a> ${element.confirmed} </br><a style="color: red;">dead </a> ${element.dead}  </br><a style="color: green;">recovered </a> ${element.recovered}  `))

            .addTo(map);


        });
    })

//.setPopup(new mapboxgl.Popup().setHTML("country " + element.location + '</br>' + "confirm " + cases + '</br>' + "dead " + element.dead + '</br>' + "recovered " + element.recovered))