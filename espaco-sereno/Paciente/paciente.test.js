const Paciente = require('./paciente');

// Mock para o objeto de aplicativo 
const mockApp = {
  enviarMensagemDePacienteParaPaciente: jest.fn(),
};

// Teste para conectar um psicólogo
test('Conectar psicólogo ao paciente', () => {
  const paciente = new Paciente('Ana');
  const psicologo = { nome: 'Dr. Silva' };

  // Conectar o psicólogo ao paciente
  paciente.conectarPsicologo(psicologo);

  // Verificar se o psicólogo está associado ao paciente
  expect(paciente.psicologo).toBe(psicologo);
});

// Teste para enviar mensagem
test('Enviar mensagem de paciente para paciente', () => {
  const paciente1 = new Paciente('Ana');
  const paciente2 = new Paciente('Carlos');

  // Conectar ambos os pacientes ao mesmo psicólogo
  const psicologo = { nome: 'Dr. Silva' };
  paciente1.conectarPsicologo(psicologo);
  paciente2.conectarPsicologo(psicologo);

  // Chamar o método enviarMensagem
  paciente1.enviarMensagem(paciente2, 'Olá, Carlos!', mockApp);

  // Verificar se o método de enviar mensagem foi chamado corretamente
  expect(mockApp.enviarMensagemDePacienteParaPaciente).toHaveBeenCalledWith(paciente1, paciente2, 'Olá, Carlos!');
});
