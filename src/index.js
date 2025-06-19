function getCreditCardBrand(number) {
    const sanitized = number.replace(/\D/g, '');

    const patterns = [
        { name: 'MasterCard', regex: /^(5[1-5][0-9]{14}|2(2[2-9][0-9]{12}|[3-6][0-9]{13}|7[01][0-9]{12}|720[0-9]{12}))$/ },
        { name: 'Visa', regex: /^4[0-9]{15}$/ }, // 16 digits
        { name: 'American Express', regex: /^3[47][0-9]{13}$/ },
        { name: 'Diners Club', regex: /^3(0[0-5]|[68][0-9])[0-9]{11}$/ },
        { name: 'Discover', regex: /^6(011|5[0-9]{2})[0-9]{12}$/ },
        { name: 'EnRoute', regex: /^(2014|2149)[0-9]{11}$/ },
        { name: 'JCB', regex: /^(352[89]|35[3-8][0-9])[0-9]{12}$/ },
        { name: 'Voyager', regex: /^8699[0-9]{11}$/ },
        { name: 'HiperCard', regex: /^(606282\d{10}(\d{3})?)$/ },
        { name: 'Aura', regex: /^50[0-9]{14,17}$/ }
    ];

    for (const pattern of patterns) {
        if (pattern.regex.test(sanitized)) {
            return pattern.name;
        }
    }
    return 'Unknown';
}

// Example usage:ra
console.log(getCreditCardBrand('4111 1111 1111 1111')); // Visa
console.log(getCreditCardBrand('6011 0009 9013 9424')); // Discover
console.log(getCreditCardBrand('3782 8224 6310 005')); // American Express
console.log(getCreditCardBrand('5105 1051 0510 5100')); // MasterCard
console.log(getCreditCardBrand('3530 1113 3330 0000')); // JCB
console.log(getCreditCardBrand('3802 758056 2527')); // Diners Club
console.log(getCreditCardBrand('8699 1234 5678 9012')); // Voyager
console.log(getCreditCardBrand('6062 8200 0000 0000')); // HiperCard
console.log(getCreditCardBrand('5067 1234 5678 9012')); // Aura
console.log(getCreditCardBrand('1234 5678 9012 3456')); // Unknown

