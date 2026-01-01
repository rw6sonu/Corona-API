fetch('https://api.rootnet.in/covid19-in/stats/latest')
.then(res => res.json())
.then(response => {

    const summary = response.data.summary;

    document.getElementById("coronaDetail").innerHTML = `
        <h2 class="mb-4">Official Data</h2>
         <p style="color:white;" class="m-2">Total :- ${summary.total}</p>
         <p style="color:white;"class="m-2">confirmedCasesIndian :-  ${summary.confirmedCasesIndian}</p>
         <p style="color:white;"class="m-2">confirmedCasesForeign :-  ${summary.confirmedCasesForeign}</p>
         <p style="color:white;"class="m-2">discharged :-  ${summary.discharged}</p>
         <p style="color:white;"class="m-2">deaths :-  ${summary.deaths}</p>
         <p style="color:white;"class="m-2">confirmedButLocationUnidentified :-  ${summary.confirmedButLocationUnidentified}</p>
         
    `;
}); 

function covidinfo(){
    const stats =  document.getElementById("stats").value;

    if(stats===""){
        alert("Please Enter The state Name ");
        return;
    }

    fetch(`https://api.rootnet.in/covid19-in/stats/latest`)
    .then(res => res.json())
    .then(response =>{

        const regional = response.data.regional;

        const result= regional.find(item => item.loc.toLowerCase() === stats.toLowerCase());

         if (!result) {
                document.getElementById("covidstats").innerHTML =
                    `<p style="color:red;">No data found for "${stats}"</p>`;
                return;
            }

        document.getElementById("covidstats").innerHTML= `
             <h3 style="color:black;" class="mb-4">location :-  ${result.loc}</h3>
                <p style="color:black;">confirmedCasesIndian:- ${result.confirmedCasesIndian}</p>
                <p style="color:black;">confirmedCasesForeign:- ${result.confirmedCasesForeign}</p>
                <p style="color:black;">discharged:- ${result.discharged}</p>
                <p style="color:black;"> deaths:- ${result.deaths}</p>
                <p style="color:black;"> totalConfirmed :- ${result.totalConfirmed}</p>
        `
    });
}

