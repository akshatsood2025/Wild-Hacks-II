
function degrees_to_radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

function radians_to_degrees(radians)
{
  var pi = Math.PI;
  return radians * (180/pi);
}

function nextPosition(latitude, longitude)
{
            var angle=degrees_to_radians(360*(Math.random()));

            var kmDistance=0.010*(Math.random());
            var radiusEarthKilometres = 6371.01;

            var distRatio = kmDistance / radiusEarthKilometres;
            var distRatioSine = Math.sin(distRatio);
            var distRatioCosine = Math.cos(distRatio);

            var startLatRad = degrees_to_radians(latitude);
            var startLonRad = degrees_to_radians(longitude);

            var startLatCos = Math.cos(startLatRad);
            var startLatSin = Math.sin(startLatRad);

            var endLatRads = Math.asin((startLatSin * distRatioCosine) + (startLatCos * distRatioSine * Math.cos(angle)));

            var endLonRads = startLonRad + Math.atan2(Math.sin(angle) * distRatioSine * startLatCos, distRatioCosine - startLatSin * Math.sin(endLatRads));

            newLat = radians_to_degrees(endLatRads);
            newLong = radians_to_degrees(endLonRads);

            return newLat, newLong;

}
var animalsAndLocation=[
    {_id : 1,name: "dear", latitude:25.262693922733305 ,longitude: 82.98359322670994},
    {_id : 2,name: "elephant", latitude: 25.26244650269777,longitude: 82.98622179156274},
    {_id : 3,name: "giraffe", latitude: 25.258369548764172,longitude: 82.99673179738711},
    {_id : 4,name: "leopard", latitude: 25.274208011191764,longitude: 82.99185541273202},
    {_id : 5,name: "lion", latitude: 25.25969381068562,longitude: 82.99361425320649},
    {_id : 6,name: "panda", latitude: 25.260955255997672,longitude: 82.98679732437036},
    {_id : 7,name: "peacock", latitude: 25.259858826110918,longitude: 82.98509143942505},
    {_id : 8,name: "rhino", latitude: 25.270123905069514,longitude: 82.98882099503187},
    {_id : 9,name: "tiger", latitude: 25.26776191489028,longitude: 82.99128084639021},
    {_id : 10,name: "zebra", latitude: 25.266334382450292,longitude: 82.9879424132993}
];

function changeLocation()
{
    for(let i=0;i<animalsAndLocation.length;i++)
    {
        animalsAndLocation[i].lat,animalsAndLocation[i].long=nextPosition(animalsAndLocation[i].lat,animalsAndLocation[i].long);
        console.log(animalsAndLocation[i]);


        fetch('https://example.com/profile', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(animalsAndLocation[i]),
        })
        .then((response) => response.json())
        .then((data) => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }

    

}

setInterval(changeLocation,5000);


changeLocation();