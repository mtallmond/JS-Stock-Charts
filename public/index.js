//retrieve stock data from http://twelvedata.com/
//make sure to read documentation https://twelvedata.com/docs#stocks
//Make sure to use the api secret to
let api_base_url = "https://twelvedata.com"
async function getStocksFromApi(){
    try {
        let response = fetch(api_base_url, {
            headers:{
                //pass api secret here
            }
        })

        let data = null
    
        //change shape of response and return data to caller
        return  [data.GME, data.MSFT, data.DIS, data.BTNX]   
    } catch (error) {
        console.error("error getting stocks from api",error)
    }
    
}

//helper function used to display chart color
function getColor(stock){
    if(stock === "GME"){
        return 'rgba(61, 161, 61, 0.7)'
    }
    if(stock === "MSFT"){
        return 'rgba(209, 4, 25, 0.7)'
    }
    if(stock === "DIS"){
        return 'rgba(18, 4, 209, 0.7)'
    }
    if(stock === "BNTX"){
        return 'rgba(166, 43, 158, 0.7)'
    }
}

async function main() {    
    //pulling the mock data temporarily from our file
    const { GME, MSFT, DIS, BNTX } = mockData;

    const stocks = [GME, MSFT, DIS, BNTX];
    //when you finish api use this line instead
    //const stocks = await getStocksFromApi()

    //print out the GME stock prices
    console.log(stocks[0].values)

    const timeChartCanvas = document.querySelector('#time-chart');
    stocks.forEach(stock => stock.values.reverse())
    new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
            labels: stocks[0].values.map(value => value.datetime),
            datasets: stocks.map( stock => ({
                label: stock.meta.symbol,
                data: stock.values.map(value => parseFloat(value.high)),
                backgroundColor:  getColor(stock.meta.symbol),
                borderColor: getColor(stock.meta.symbol),
            }))
        }
    });
    
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    stocks.forEach(stock => stock.values.reverse())

    new Chart(highestPriceChartCanvas, {
        type: 'bar',
        data: {
            labels: stocks.map(stock => stock.meta.symbol),
            datasets: [{
                label: 'Highest',
                backgroundColor: stocks.map(stock => (
                    getColor(stock.meta.symbol)
                )),
                borderColor: stocks.map(stock => (
                    getColor(stock.meta.symbol)
                )),
                data: stocks.map(stock => (
                    findHighest(stock.values)
                ))
            }]
        }
    });
    function findHighest(values) {
        let highest = 0;
        values.forEach(value => {
            if (parseFloat(value.high) > highest) {
                highest = value.high
            }
        })
        return highest
    }

    const averagePriceChartCanvas = document.querySelector('#average-price-chart');
    //this is the bonus you don't have to do it

}

main()