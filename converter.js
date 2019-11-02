converter = (currency) => {
    if (typeof currency === 'number')
        return `$${(currency * 0.033).toFixed(2)}`
    else
        return "Error"
}
module.exports = converter;
//Bussakorn Saetiew 5735512033
