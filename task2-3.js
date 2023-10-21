const fetch_url="https://restcountries.com/v3.1/all";
const myreq= new XMLHttpRequest();
myreq.addEventListener("load",function(){
 const obj=JSON.parse(this.response)
 for(let val of obj){
    console.log('Flag: '+val.flags.png);
    console.log('country name: '+ val.continents);
    console.log('region: '+ val.region);
    console.log('subregion: '+ val.subregion);
    console.log('population: '+ val.population);
 }
});
myreq.open("GET",fetch_url);
myreq.send();