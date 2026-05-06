async function getWeather(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m`;

    try {
        console.log(`Pobieranie danych dla współrzędnych: ${lat}, ${lon}...`);

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Błąd HTTP! Status: ${response.status}`);
        }

        const data = await response.json();

        const {temperature_2m, wind_speed_10m} = data.current;
        const unitTemp = data.current_units.temperature_2m;
        const unitWind = data.current_units.wind_speed_10m;

        console.log("--- AKTUALNA POGODA ---");
        console.log(`Temperatura:    ${temperature_2m}${unitTemp}`);
        console.log(`Prędkość wiatru: ${wind_speed_10m} ${unitWind}`);
        console.log("-----------------------");

    } catch (error) {
        console.error("BŁĄD PODCZAS POBIERANIA POGODY:");
        console.error(`Komunikat: ${error.message}`);
    }
}

getWeather(50.29, 19.10);