const Psicologo = require('./psicologo');

// Teste para conectar um paciente
test('Conectar paciente ao psicólogo', () => {
  const psicologo = new Psicologo('Dr. Silva');
  const paciente = { nome: 'Ana' };

  // Conectar o paciente ao psicólogo
  psicologo.conectarPaciente(paciente);

  // Verificar se o paciente está na lista de pacientes do psicólogo
  expect(psicologo.pacientes).toContain(paciente);
});