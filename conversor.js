const apiKey = `e97064e0a15ceefc5ce3d309`;
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;


// Função para buscar taxa de câmbio via API
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
async function geExchangeRate(daMoeda, paraMoeda){
    try{
        const response = await fetch(`${apiURL}${daMoeda}`);
        const data = await response.json();

        if(data.result === "sucess"){
            return data.conversation_rates[paraMoeda];
        }else{
            throw new Error('Erro ao buscar as taxas de câmbio');
        }
    }catch{

    }
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx