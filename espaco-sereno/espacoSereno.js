const Psicologo = require('./psicologo');
const Paciente = require('./paciente');

class EspacoSereno {
  constructor() {
    this.psicologos = [];
    this.pacientes = [];
    this.mensagens = [];
  }

  cadastrarPsicologo(nome) {
    const novoPsicologo = new Psicologo(nome);
    this.psicologos.push(novoPsicologo);
    return novoPsicologo;
  }

  cadastrarPaciente(nome) {
    const novoPaciente = new Paciente(nome);
    this.pacientes.push(novoPaciente);
    return novoPaciente;
  }

  associarPacienteComPsicologo(paciente, psicologo) {
    if (this._isValidPacientePsicologoPair(paciente, psicologo)) {
      paciente.conectarPsicologo(psicologo);
      psicologo.conectarPaciente(paciente);
    } else {
      console.error('Erro: Parâmetros inválidos para associarPacienteComPsicologo.');
    }
  }

  enviarMensagemDePacienteParaPaciente(origem, destino, conteudo) {
    this.mensagens.push({ origem, destino, conteudo });
  }

  enviarMensagem(pacienteDestino, conteudo) {
    if (pacienteDestino.psicologo !== null) {
      this.enviarMensagemDePacienteParaPaciente(this, pacienteDestino, conteudo);
    } else {
      console.error('Erro: Paciente não associado a um psicólogo.');
    }
  }

  _isValidPacientePsicologoPair(paciente, psicologo) {
    return paciente instanceof Paciente && psicologo instanceof Psicologo;
  }
}

module.exports = EspacoSereno;