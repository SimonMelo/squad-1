export const formatDocument = (value) => {
    const cleanedValue = value.replace(/\D/g, '');
  
    let formattedValue = '';
    if (cleanedValue.length <= 11) {
        // Format as CPF
        for (let i = 0; i < cleanedValue.length; i++) {
            if (i === 3 || i === 6) {
                formattedValue += '.';
            } else if (i === 9) {
                formattedValue += '-';
            }
            formattedValue += cleanedValue[i];
        }
    } else {
        // Format as CNPJ
        for (let i = 0; i < cleanedValue.length; i++) {
            if (i === 2 || i === 5) {
                formattedValue += '.';
            } else if (i === 8) {
                formattedValue += '/';
            } else if (i === 12) {
                formattedValue += '-';
            }
            formattedValue += cleanedValue[i];
        }
    }
  
    return formattedValue;
};

export const matchDocument = (document) => {
    const cleanedDocument = document.replace(/\D/g, '')

    if (cleanedDocument.length === 11) {
        // CPF
        return matchCPF(cleanedDocument)
    } else if (cleanedDocument.length === 14) {
        // CNPJ
        return matchCNPJ(cleanedDocument)
    } else {
        return false
    }
}

const matchCPF = (cpf) => {
    const cpfDigits = cpf.split('').map(Number)

    if (cpfDigits.every(digit => digit === cpfDigits[0])) {
        return false
    }

    const sumFirstNine = cpfDigits.slice(0, 9).reduce((acc, digit, index) => acc + digit * (10 - index), 0)
    const firstRemainder = (sumFirstNine * 10) % 11
    const firstVerifierDigit = (firstRemainder === 10 || firstRemainder === 11) ? 0 : firstRemainder

    if (firstVerifierDigit !== cpfDigits[9]) {
        return false
    }

    const sumNextNine = cpfDigits.slice(0, 10).reduce((acc, digit, index) => acc + digit * (11 - index), 0)
    const secondRemainder = (sumNextNine * 10) % 11
    const secondVerifierDigit = (secondRemainder === 10 || secondRemainder === 11) ? 0 : secondRemainder

    if (secondVerifierDigit !== cpfDigits[10]) {
        return false
    }

    return true
}

const matchCNPJ = (cnpj) => {
    const cnpjDigits = cnpj.split('').map(Number)

    if (cnpjDigits.every(digit => digit === cnpjDigits[0])) {
        return false // CNPJ com todos os dígitos iguais é inválido
    }

    const sumFirstTwelve = cnpjDigits.slice(0, 12).reduce((acc, digit, index) => {
        const pos = index < 4 ? 5 - index : 13 - index
        return acc + digit * pos
    }, 0)
    const firstRemainder = sumFirstTwelve % 11
    const firstVerifierDigit = (firstRemainder < 2) ? 0 : 11 - firstRemainder

    if (firstVerifierDigit !== cnpjDigits[12]) {
        return false // Primeiro dígito verificador inválido
    }

    const sumNextTwelve = cnpjDigits.slice(0, 13).reduce((acc, digit, index) => {
        const pos = index < 5 ? 6 - index : 14 - index
        return acc + digit * pos
    }, 0)
    const secondRemainder = sumNextTwelve % 11
    const secondVerifierDigit = (secondRemainder < 2) ? 0 : 11 - secondRemainder

    if (secondVerifierDigit !== cnpjDigits[13]) {
        return false // Segundo dígito verificador inválido
    }

    return true
}
