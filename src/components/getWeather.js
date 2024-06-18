const apiKey = "80e69416d4724ab9923103051232309";

const getWeather = (city) =>
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`, { mode: "cors" })
        .then((response) => response.json())
        .then((response) => {
            const wantedLocationData = Object.keys(response.location).reduce((acc, key) => {
                if (["name", "region", "country", "localtime"].includes(key)) {
                    acc[key] = response.location[key];
                }
                return acc;
            }, {});

            const wantedCurrentData = Object.keys(response.current).reduce((acc, key) => {
                if (
                    [
                        "temp_c",
                        "temp_f",
                        "condition",
                        "wind_kph",
                        "wind_degree",
                        "wind_mph",
                        "humidity",
                        "feelslike_c",
                        "feelslike_f",
                    ].includes(key)
                ) {
                    acc[key] = response.current[key];
                }
                return acc;
            }, {});
            const allData = { ...wantedLocationData, ...wantedCurrentData };

            return { ...allData };
        });

export default getWeather;
