function calculateNumber(type, a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Parameters must be numbers');
    }

    const roundedA = Math.round(a);
    const roundedB = Math.round(b);

    switch (type) {
        case 'SUM':
            return roundedA + roundedB;
        case 'SUBTRACT':
            return roundedA - roundedB;
        case 'DIVIDE':
            if (roundedB === 0) {
                return 'Error';
            }
            return roundedA / roundedB;
        default:
            return 0
    }
}

module.exports = calculateNumber;
