// helpers/displayCurrency.js
const displayINRCurrency = (num) => {
    if (!num) return "৳0";

    const formatter = new Intl.NumberFormat('en-BD', { 
        style: 'currency', 
        currency: 'BDT', 
        minimumFractionDigits: 0 
    });

    return formatter.format(num);
}

export default displayINRCurrency;
