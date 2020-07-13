fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then(result => {
        //console.log(result);
        //console.log(result.Global.NewConfirmed)
        result.Countries.forEach(element => {

            if (element.CountryCode == "IN") {
                //console.log(element);
                newconfirmcon = element.NewConfirmed;
                totalconfirmcon = element.TotalConfirmed;
                newdeadcon = element.NewDeaths;
                totaldeadcon = element.TotalDeaths;

                newrecovercon = element.NewRecovered;
                totalrecovercon = element.TotalRecovered;
                document.getElementById('indiacase').innerHTML = ` <a style="color:red;">New confirm </a><span style="background-color:white; color:#0d0d0d;" class="badge badge-secondary">${newconfirmcon}</span></br> <a style="color:red;"> Total confirm </a><span style="background-color:white; color:#0d0d0d;" class="badge badge-secondary">${element.TotalConfirmed}</span> </br><a style="color:#CC0000;">New death </a><span style="background-color:white; color:#0d0d0d;" class="badge badge-secondary">${newdeadcon}</span></br> <a style="color: #FF0000;">total death </a><span style="background-color:white; color:#0d0d0d;" class="badge badge-secondary">${totaldeadcon}</span></br><a style="color:lime;">New recovered </a><span style="background-color:white; color:#0d0d0d;" class="badge badge-secondary">${newrecovercon}</span></br><a style="color:lime;">Total recovered </a><span style="background-color:white; color:#0d0d0d;" class="badge badge-secondary"> ${totalrecovercon}</span>`
                document.getElementById('worldcase').innerHTML = ` <a style="color:red;">New confirm    </a><span style="background-color:white; color:#0d0d0d;" class="badge badge-secondary">${result.Global.NewConfirmed}</span> </br><a style="color:red;"> Total confirm </a><span style="background-color:white; color:#0d0d0d;" class="badge badge-secondary">${result.Global.TotalConfirmed}</span> </br><a style="color:#CC0000;">New death </a><span style="background-color:white; color:#0d0d0d;" class="badge badge-secondary">${result.Global.NewDeaths}</span> </br><a style="color: #FF0000;">total death </a><span style="background-color:white; color:#0d0d0d;" class="badge badge-secondary">${result.Global.TotalDeaths}</span></br><a style="color:lime;">New recovered </a><span style="background-color:white; color:#0d0d0d;" class="badge badge-secondary">${result.Global.NewRecovered}</span></br><a style="color:lime;">Total recovered </a><span style="background-color:white; color:#0d0d0d;" class="badge badge-secondary"> ${result.Global.TotalRecovered}</span>`
            }

        });

        // console.log(newconfirmcon);

    })