document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("forecast_results.json");
    const data = await response.json();

    // Extract data
    const actualLoad = data.ActualLoad;
    const forecastedLoad = data.ForecastedLoad;
    const error = data.Error;
    const labels = Array.from({ length: actualLoad.length }, (_, i) => `T${i + 1}`);

    // Forecast vs Actual Load Chart
    const ctx1 = document.getElementById("loadChart").getContext("2d");
    new Chart(ctx1, {
        type: "line",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Actual Load",
                    data: actualLoad,
                    borderColor: "rgba(75, 192, 192, 1)",
                    fill: false,
                },
                {
                    label: "Forecasted Load",
                    data: forecastedLoad,
                    borderColor: "rgba(255, 99, 132, 1)",
                    fill: false,
                },
            ],
        },
    });

    // Error Chart
    const ctx2 = document.getElementById("errorChart").getContext("2d");
    new Chart(ctx2, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Error",
                    data: error,
                    backgroundColor: "rgba(255, 159, 64, 0.5)",
                },
            ],
        },
    });
});
