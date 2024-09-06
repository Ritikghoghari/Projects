const btn = document.getElementById("btn");
const uLocation = document.getElementById("user-location");
const uTime = document.getElementById("user-time");

async function getData(lat, long) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=c1c48b686498401582a214207241008&q=${lat}, ${long}&aqi=yes`
  );
  return await promise.json();
}

async function getLocation(position) {
  const result = await getData(
    position.coords.latitude,
    position.coords.longitude
  );
  uLocation.innerText = result.location.name;
  uTime.innerText = result.current.last_updated;
  console.log(result);
}

function failedToGet() {
  console.log("There was an Error");
}

btn.addEventListener("click", async () => {
  const newResult = navigator.geolocation.getCurrentPosition(
    getLocation,
    failedToGet
  );
});
