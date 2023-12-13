$(document).ready(function() {
    const apiKey = '1ZXLMM9RJI02FO5Z';

    $('#getStockBtn').on('click', function() {
        const symbol = $('#symbolInput').val();

        if (symbol) {
            getStockData(symbol);
        } else {
            alert('Please enter a stock symbol.');
        }
    });

    function getStockData(symbol) {
        const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;

        $.ajax({
            url: apiUrl,
            type: 'GET',
            success: function(data) {
                displayStockData(data);
            },
            error: function() {
                alert('Error fetching stock data. Please try again.');
            }
        });
    }

    function displayStockData(data) {
        const stockInfo = `
            <h2>${data['Global Quote']['01. symbol']}</h2>
            <p>Open: ${data['Global Quote']['02. open']}</p>
            <p>High: ${data['Global Quote']['03. high']}</p>
            <p>Low: ${data['Global Quote']['04. low']}</p>
            <p>Price: ${data['Global Quote']['05. price']}</p>
            <p>Volume: ${data['Global Quote']['06. volume']}</p>
            <p>Last Updated: ${data['Global Quote']['07. latest trading day']}</p>
        `;

        $('#stockInfo').html(stockInfo);
    }
});
