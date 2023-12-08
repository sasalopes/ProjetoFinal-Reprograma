const AcompanharProgresso = require('./acompanharProgresso');

// Mock para console.log
console.log = jest.fn();

test('Definir Meta', () => {
  const acompanhamento = new AcompanharProgresso();
  const paciente = { nome: 'João' };

  acompanhamento.definirMeta(paciente, 50);

  expect(acompanhamento.metas.get(paciente)).toBe(50);
});

test('Registrar Marco e Avaliar Progresso', () => {
  const acompanhamento = new AcompanharProgresso();
  const paciente = { nome: 'Maria' };

  acompanhamento.definirMeta(paciente, 100);
  acompanhamento.registrarMarco(paciente, 25);

  // Filtra chamadas de console.log relacionadas ao teste específico
  const chamadasDeLogRelacionadasAoTeste = console.log.mock.calls.filter(call =>
    call[0].startsWith('Progresso para Maria:')
  );

  // Verifica se o progresso foi calculado corretamente
  // (25 / 100) * 100 = 25%
  expect(chamadasDeLogRelacionadasAoTeste.length).toBe(1);
  expect(chamadasDeLogRelacionadasAoTeste[0][0]).toBe('Progresso para Maria: 25.00%');
});