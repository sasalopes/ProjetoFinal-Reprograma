const Psicologo = require('../Psicologo/psicologo');
const Paciente = require('../Paciente/paciente');
const AvaliacaoRiscos = require('../AvaliacaoRiscos/AvaliacaoRiscos');

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
    if (this.#isValidPacientePsicologoPair(paciente, psicologo)) {
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

  #isValidPacientePsicologoPair(paciente, psicologo) {
    return paciente instanceof Paciente && psicologo instanceof Psicologo;
  }

  avaliarRiscoDoPaciente(paciente) {
    const nivelRisco = AvaliacaoRiscos.avaliarRisco(paciente);
    console.log(`O paciente ${paciente.nome} possui um nível de risco: ${nivelRisco}`);
    
  }
}


module.exports = EspacoSereno;