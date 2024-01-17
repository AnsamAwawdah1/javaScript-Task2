document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('convertForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const amount = parseFloat(document.getElementById('amount').value);
        const currency = document.getElementById('exchange').value;
        const result = document.getElementById('result');

       
        const rates = {
            dollar: 3.7,
            dinar: 5,  
            nis: 1      
        };

        
        if (!isNaN(amount)) {
            const convertedAmount = (amount * rates[currency]).toFixed(2);
            result.textContent = `Converted amount: ${convertedAmount} ${currency}`;
        } else {
            result.textContent = 'Please enter a valid number.';
        }
    });
});