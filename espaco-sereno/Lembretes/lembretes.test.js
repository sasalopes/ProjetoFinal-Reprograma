const Lembretes = require('./lembretes');

// Mock para console.log
console.log = jest.fn();

describe('Lembretes', () => {
  test('Configurar e Emitir Lembrete', () => {
    const lembretes = new Lembretes();
    
    // Configurar lembrete para 2 segundos no futuro
    const dataLembrete = new Date(Date.now() + 2000);
    lembretes.configurarLembrete('Consulta médica', dataLembrete);

    // Emitir lembretes
    lembretes.emitirLembretes();

    // Esperar 3 segundos para garantir que o lembrete tenha sido emitido
    return new Promise(resolve => {
      setTimeout(() => {
        // Verificar se console.log foi chamado com a mensagem correta
        expect(console.log).toHaveBeenCalledWith(`Lembrete: Consulta médica às ${dataLembrete}`);
        resolve();
      }, 3000);
    });
  });
});