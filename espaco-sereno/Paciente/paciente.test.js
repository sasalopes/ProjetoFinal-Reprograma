const Paciente = require('./paciente');

describe('Paciente', () => {
  it('deve criar um paciente com nome padrão quando não fornecido', () => {
    const paciente = new Paciente();
    expect(paciente.nome).toBe('Anônimo');
  });


  it('deve criar um paciente com o nome fornecido', () => {
    const nome = 'João';
    const paciente = new Paciente(nome);
    expect(paciente.nome).toBe(nome);
  });

  it('deve conectar a um psicólogo', () => {
    const paciente = new Paciente('Maria');
    const psicologo = { nome: 'Dr. Silva' };

    paciente.conectarPsicologo(psicologo);

    expect(paciente.psicologo).toBe(psicologo);
  });

  it('deve definir um novo nome para o paciente', () => {
    const paciente = new Paciente('Carlos');
    const novoNome = 'Carlos Silva';

    paciente.nome = novoNome;

    expect(paciente.nome).toBe(novoNome);
  });

  it('deve enviar mensagem para outro paciente se associado a um psicólogo', () => {
    const pacienteRemetente = new Paciente('Fernanda');
    const pacienteDestino = new Paciente('Lucas');
    const mockApp = {
      enviarMensagemDePacienteParaPaciente: jest.fn(),
    };

    pacienteRemetente.conectarPsicologo({ nome: 'Dr. Souza' });
    pacienteRemetente.enviarMensagem(pacienteDestino, 'Olá', mockApp);

    expect(mockApp.enviarMensagemDePacienteParaPaciente).toHaveBeenCalledWith(
      pacienteRemetente,
      pacienteDestino,
      'Olá'
    );
  });

it('deve exibir um erro ao tentar enviar mensagem sem estar associado a um psicólogo', () => {
    const pacienteRemetente = new Paciente('Ana');
    const pacienteDestino = new Paciente('José');
    const mockConsoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

    pacienteRemetente.enviarMensagem(pacienteDestino, 'Oi', {});

    expect(mockConsoleError).toHaveBeenCalledWith('Erro: Paciente não associado a um psicólogo.');

    // Restaura a implementação original do console.error
    mockConsoleError.mockRestore();
  });
});