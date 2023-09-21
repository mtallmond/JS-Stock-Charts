//retrieve stock data from http://twelvedata.com/
//make sure to read documentation https://twelvedata.com/docs#stocks
//Make sure to use the api secret to
async function getStocksFromApi(){
    try {
        let response = null

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
    //Start coding the first chart here since it references the canvas on line 3   
    
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    //build your second chart

    const averagePriceChartCanvas = document.querySelector('#average-price-chart');
    //this is the bonus you don't have to do it

}

main()