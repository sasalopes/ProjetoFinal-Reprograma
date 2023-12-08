const AvaliacaoRiscos = require('./AvaliacaoRiscos');

// Teste para paciente com baixo risco
test('Avaliar paciente de baixo risco', () => {
  const paciente = { estadoEmocional: 'calmo', comportamentoRecente: 'rotina' };
  const resultado = AvaliacaoRiscos.avaliarRisco(paciente);
  expect(resultado).toBe('Baixo Risco');
});

// Teste para paciente com alto risco
test('Avaliar paciente de alto risco', () => {
  const paciente = { estadoEmocional: 'instavel', comportamentoRecente: 'preocupante' };
  const resultado = AvaliacaoRiscos.avaliarRisco(paciente);
  expect(resultado).toBe('Alto Risco');
});