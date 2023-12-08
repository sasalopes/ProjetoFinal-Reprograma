
class Paciente {
  constructor(nome) {
    this.nome = nome;
    this.psicologo = null;
  }

  conectarPsicologo(psicologo) {
    this.psicologo = psicologo;
  }

  // Método para enviar uma mensagem para outro paciente
  enviarMensagem(pacienteDestino, conteudo, app) {
    // Verifica se este paciente está associado a um psicólogo
    if (this.psicologo !== null) {
      // Chama o método de enviar mensagem do aplicativo (app)
      app.enviarMensagemDePacienteParaPaciente(this, pacienteDestino, conteudo);
    } else {
      console.log('Erro: Paciente não associado a um psicólogo.');
    }
  }
}

module.exports = Paciente;