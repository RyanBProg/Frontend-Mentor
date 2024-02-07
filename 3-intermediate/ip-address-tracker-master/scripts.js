const form = document.querySelector("#form");
const searchInput = document.querySelector("#search-input");
const ipElement = document.querySelector("#ip");
const locationElement = document.querySelector("#location");
const timezoneElement = document.querySelector("#timezone");
const ispElement = document.querySelector("#isp");

// geolocation
const apiKey = "at_sIiAxc1SkdzBbNGNSaCBaCTBsFzuf";
let ipAddress = "";

const getLocation = async (apiKey, ipAddress) => {
    try {
        const apiUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`;
        const locationData = await fetch(apiUrl);
        const locationDataJson = await locationData.json();
        return locationDataJson;
    } catch {
        alert("the location you have searched for does not exist");
    }
};

const createMap = (lat, long, mapRemove) => {
    if (mapRemove === true) {
        map.remove();
    }
    map = L.map("map").setView([lat, long], 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    let marker = L.marker([lat, long]).addTo(map);
    marker.bindPopup("<b>Here's where you are!</b>").openPopup();
};

const renderPage = async (apiKey, ipAddress, mapRemove) => {
    try {
        // get location data
        const locationData = await getLocation(apiKey, ipAddress);

        // update dashboard
        const locationText = `${locationData.location.city}, ${locationData.location.region} ${locationData.location.postalCode}`;
        ipElement.innerText = locationData.ip;
        locationElement.innerText = locationText;
        timezoneElement.innerText = locationData.location.timezone;
        ispElement.innerText = locationData.isp;

        // create a map
        let map = createMap(
            locationData.location.lat,
            locationData.location.lng,
            mapRemove
        );
    } catch {
        alert("Cannot render page data");
    }
};

renderPage(apiKey, ipAddress, false);

// form submittion
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchVal = searchInput.value;
    renderPage(apiKey, searchVal, true);
});
