document.getElementById("country").onchange=display;

function display(){
    const country = document.getElementById("country").value;
    const url ="https://coronavirus-smartable.p.rapidapi.com/stats/v1/" + country + "/";
    check(url);
    // document.getElementById("id").innerHTML=options.stats.totalConfirmedCases;
    
   

  
}

function check(url){

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'coronavirus-smartable.p.rapidapi.com',
            'X-RapidAPI-Key': '5fb6cd0eaemsh07d74ba41c1436bp17ee3bjsnc0ce62eebc04'
        }
    };
    
    fetch(url, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            document.getElementById("id").innerHTML=response.stats.totalConfirmedCases;
            document.getElementById("id2").innerHTML=response.stats.totalDeaths;
            document.getElementById("id3").innerHTML=response.stats.totalRecoveredCases;
            document.getElementById("id4").innerHTML=response.stats.newlyConfirmedCases;
            document.getElementById("id5").innerHTML=response.stats.newDeaths;
            document.getElementById("id6").innerHTML=response.stats.newlyRecoveredCases;
        
        }   
        ).catch(err => console.error(err));
}
    

