let inputarray=[];

let data;
//every item is goes to its initial state after refresh.

export const salad = async()=>{
let input = "salad";
try {

let response = await fetch(`https://www.edamam.com/api/recipes/v2?q=${input}&_cont=CHcVQBtNNQphDmgVQntAEX4Ba0t2BwYARWNCC2MSYVJ6BxEbUWUTVWcXN1IhBgAOQWAVBjcXZlwhAlEDFjRAAWRFMQMiFm4bUTMCXD8BaVdzGBFEEjMVcDNPPBcqUUBlEjsXVnAZKBg-&type=public&_=1687105680295`);
response = await response.json();
return response;
} catch (error) {
console.error(error);
}

}

export const cake = async()=>{
    let input = "cake";
    try {
    
    let response = await fetch(`https://www.edamam.com/api/recipes/v2?q=${input}&_cont=CHcVQBtNNQphDmgVQntAEX4Ba0t2BwYARWNCC2MSYVJ6BxEbUWUTVWcXN1IhBgAOQWAVBjcXZlwhAlEDFjRAAWRFMQMiFm4bUTMCXD8BaVdzGBFEEjMVcDNPPBcqUUBlEjsXVnAZKBg-&type=public&_=1687105680295`);
    response = await response.json();
    return response;
    } catch (error) {
    console.error(error);
    }
    
    }

    export const chicken = async()=>{
        let input = "chicken";
        try {
        
        let response = await fetch(`https://www.edamam.com/api/recipes/v2?q=${input}&_cont=CHcVQBtNNQphDmgVQntAEX4Ba0t2BwYARWNCC2MSYVJ6BxEbUWUTVWcXN1IhBgAOQWAVBjcXZlwhAlEDFjRAAWRFMQMiFm4bUTMCXD8BaVdzGBFEEjMVcDNPPBcqUUBlEjsXVnAZKBg-&type=public&_=1687105680295`);
        response = await response.json();
        return response;
        } catch (error) {
        console.error(error);
        }
        
        }

