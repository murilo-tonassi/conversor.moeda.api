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
    }catch {error}{
        console.error{"Erro", error};
        return null;
    }

}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
document.getElementById('currency-form').addEventListener('submit', async function (event){
    event.preventDefault();
 
    const valor = parseFloat(document.getElementById('amount').value);
    const daMoeda = docuemnt.getElementById('daMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;
    //Busca taxa e câmbio API
    const exchangerate = getExchangeRate(daMoeda, paraMoeda);
 
    if(ExchangeRate){
        const converteValue = valor * exchangerate;
 
        // Exibir resultado
        const conversao = document.getElementById('conversao');
        conversao.textContent = ´Resultado: ${converteValue.toFixed(2)}$(paraMoeda)´;
    }else{
        alert('Erro ao buscar a cotação. Tente novamente.');
    }
   
})