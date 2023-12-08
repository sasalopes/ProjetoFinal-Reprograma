const Psicologo = require('./psicologo')
const Paciente = require ('./paciente')

class EspacoSereno {
  constructor() {
    // Inicializa o aplicativo com listas vazias de psicólogos, pacientes e mensagens.
    this.psicologos = [];
    this.pacientes = [];
    this.mensagens = [];
  }

  // Cadastra um novo psicólogo e o adiciona à lista de psicólogos.
  cadastrarPsicologo(nome) {
    const psicologo = new Psicologo(nome);
    this.psicologos.push(psicologo);
    return psicologo;
  }

  // Cadastra um novo paciente e o adiciona à lista de pacientes.
  cadastrarPaciente(nome) {
    const paciente = new Paciente(nome);
    this.pacientes.push(paciente);
    return paciente;
  }

  // Associa um paciente a um psicólogo.
  associarPacienteComPsicologo(paciente, psicologo) {
    paciente.conectarPsicologo(psicologo);
    psicologo.conectarPaciente(paciente);
  }

  // Envia uma mensagem de um paciente para outro paciente.
  enviarMensagemDePacienteParaPaciente(origem, destino, conteudo) {
    this.mensagens.push({ origem, destino, conteudo });
  }

  // Envia uma mensagem de um paciente para outro paciente.
  enviarMensagem(pacienteDestino, conteudo, app) {
    if (this.psicologo !== null) {
      app.enviarMensagemDePacienteParaPaciente(this, pacienteDestino, conteudo);
    } else {
      console.log('Erro: Paciente não associado a um psicólogo.');
    }
  }
}
module.exports =  EspacoSereno ;