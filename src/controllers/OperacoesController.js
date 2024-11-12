const soma = ( n1, n2 ) => {
    try{ 
        const total = n1 + n2
        return total
    } catch (error) {
        return `Deu ruim: ${error}`
    }
}

module.exports = {
    soma
}