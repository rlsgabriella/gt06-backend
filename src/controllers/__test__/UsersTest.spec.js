const operacoes = require('../OperacoesController')

test('1 + 2 deve ser igual a 3', () => {
    const result = 3

    expect(operacoes.soma(1,2)).toBe(result)
})
