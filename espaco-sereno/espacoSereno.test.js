const EspacoSereno  = require('./espacoSereno');
const Psicologo = require('./psicologo'); 
const Paciente = require('./paciente'); 

// Testa a funcionalidade de enviar mensagem entre pacientes
test('Enviar mensagem de paciente para paciente', () => {
  // Cria uma instância do aplicativo EspacoSereno
  const app = new EspacoSereno();

  // Cadastra dois pacientes e um psicólogo
  const paciente1 = app.cadastrarPaciente('Ana');
  const paciente2 = app.cadastrarPaciente('Carlos');
  const psicologo = app.cadastrarPsicologo('Dr. Silva');

  // Associa ambos os pacientes ao psicólogo
  app.associarPacienteComPsicologo(paciente1, psicologo);
  app.associarPacienteComPsicologo(paciente2, psicologo);

  // Envia uma mensagem de paciente1 para paciente2
  paciente1.enviarMensagem(paciente2, 'Olá, Carlos!', app);

  // Verifica se a mensagem foi enviada corretamente
  expect(app.mensagens.length).toBe(1);
  expect(app.mensagens[0].origem).toBe(paciente1);
  expect(app.mensagens[0].destino).toBe(paciente2);
  expect(app.mensagens[0].conteudo).toBe('Olá, Carlos!');
});