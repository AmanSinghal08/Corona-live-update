fetch('https://www.trackcorona.live/api/provinces')


.then(response => response.json())
    .then(result => {
        // console.log(result.data);
        result.data.forEach(element => {
            if (element.country_code == "in") {
                latitude = element.latitude;
                longitude = element.longitude;
                cases = element.confirmed;
                new mapboxgl.Marker()
                    .setLngLat([longitude, latitude])

                .setPopup(new mapboxgl.Popup({ center: [11.255, 43.77], zoom: 0 }).setHTML(`<a style="color: blue;"><strong>state</strong> </a> <strong> ${element.location}</strong>  </br> <a style="color: red;">confirm </a> ${element.confirmed} </br><a style="color: red;">death </a> ${element.dead}  </br><a style="color: green;">recovered </a> ${element.recovered}  `))
                    .addTo(map);
            } else {

            }

        });
    })

//.setPopup(new mapboxgl.Popup().setHTML("country " + element.location + '</br>' + "confirm " + cases + '</br>' + "dead " + element.dead + '</br>' + "recovered " + element.recovered))