const Psicologo = require('../Psicologo/psicologo');
const Paciente = require('../Paciente/paciente');
const AvaliacaoRiscos = require('../AvaliacaoRiscos/AvaliacaoRiscos');
const AcompanharProgresso = require('../Progresso/acompanharProgresso');

class EspacoSereno {
  #psicologos = [];
  #pacientes = [];
  #mensagens = [];
  #acompanharProgresso = new AcompanharProgresso();

  get psicologos() {
    return this.#psicologos;
  }

  set psicologos(novosPsicologos) {
    this.#psicologos = novosPsicologos;
  }

  get pacientes() {
    return this.#pacientes;
  }

  set pacientes(novosPacientes) {
    this.#pacientes = novosPacientes;
  }

  get mensagens() {
    return this.#mensagens;
  }

  set mensagens(novasMensagens) {
    this.#mensagens = novasMensagens;
  }

  get acompanharProgresso() {
    return this.#acompanharProgresso;
  }

  set acompanharProgresso(novoAcompanharProgresso) {
    this.#acompanharProgresso = novoAcompanharProgresso;
  }

  cadastrarPsicologo(nome) {
    const novoPsicologo = new Psicologo(nome);
    this.#psicologos.push(novoPsicologo);
    return novoPsicologo;
  }

  cadastrarPaciente(nome) {
    const novoPaciente = new Paciente(nome);
    this.#pacientes.push(novoPaciente);
    return novoPaciente;
  }

  associarPacienteComPsicologo(paciente, psicologo) {
    try {
      if (this.#ParValidoParaAssociacaoPacientePsicologo(paciente, psicologo)) {
        paciente.conectarPsicologo(psicologo);
        psicologo.conectarPaciente(paciente);
      } else {
        throw new Error('Parâmetros inválidos para associarPacienteComPsicologo.');
      }
    } catch (error) {
      console.error(`Erro ao associar paciente com psicólogo: ${error.message}`);
    }
  }

  enviarMensagemDePacienteParaPaciente(origem, destino, conteudo) {
    this.#mensagens.push({
      origem: origem.nome || 'Anônimo',
      destino: destino.nome || 'Anônimo',
      conteudo,
    });
  }

  enviarMensagem(pacienteDestino, conteudo) {
    try {
      const { psicologo } = pacienteDestino;
      if (psicologo !== null) {
        this.enviarMensagemDePacienteParaPaciente(this, pacienteDestino, conteudo);
      } else {
        throw new Error('Paciente não associado a um psicólogo.');
      }
    } catch (error) {
      console.error(`Erro ao enviar mensagem: ${error.message}`);
    }
  }

  desconectarPacienteDePsicologo(paciente) {
    try {
      if (paciente.psicologo !== null) {
        paciente.psicologo.desconectarPaciente(paciente);
        paciente.desconectarPsicologo();
      } else {
        throw new Error('Paciente não está associado a um psicólogo.');
      }
    } catch (error) {
      console.error(`Erro ao desconectar paciente de psicólogo: ${error.message}`);
    }
  }

  listarMensagens() {
    return this.#mensagens;
  }

  listarPacientes() {
    return this.#pacientes.map(paciente => paciente.nome);
  }

  listarPsicologos() {
    return this.#psicologos.map(psicologo => psicologo.nome);
  }

  avaliarRiscoDoPaciente(paciente) {
    try {
      const nivelRisco = AvaliacaoRiscos.avaliarRisco(paciente);
      console.log(`O paciente ${paciente.nome} possui um nível de risco: ${nivelRisco}`);
    } catch (error) {
      console.error(`Erro ao avaliar risco do paciente: ${error.message}`);
    }
  }

  definirMeta(paciente, meta) {
    try {
      this.#acompanharProgresso.definirMeta(paciente, meta);
    } catch (error) {
      console.error(`Erro ao definir meta para o paciente: ${error.message}`);
    }
  }

  registrarMarco(paciente, marco) {
    try {
      this.#acompanharProgresso.registrarMarco(paciente, marco);
    } catch (error) {
      console.error(`Erro ao registrar marco para o paciente: ${error.message}`);
    }
  }

  #ParValidoParaAssociacaoPacientePsicologo(paciente, psicologo) {
    return paciente instanceof Paciente && psicologo instanceof Psicologo;
  }
}

module.exports = EspacoSereno;