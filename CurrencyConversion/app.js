const URL = "https://api.frankfurter.dev/v1/latest"


async function getExchangeRate(){
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        return result;

    }catch (error) {
    console.error(error.message);
    throw error
    }
}

async function sourceToDestExchange(source, Dest, amount){
    const baseRates = await getExchangeRate();
    sourceRate= baseRates["rates"][source];
    DestRate =baseRates["rates"][Dest];
    convertedRate = (amount * DestRate )/sourceRate;
    console.log("Source rate is "+sourceRate + source)
    console.log("Dest rate is "+DestRate+ Dest)
    console.log(amount+" "+source+" in "+Dest+ "is "+ convertedRate + Dest);
    

}
let x ='INR'
let y= 'USD'
sourceToDestExchange(y,x,100);

