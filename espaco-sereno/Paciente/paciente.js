class Paciente {
   #nome;
  psicologo = null;

  constructor(nome, anonimo = false) {
    this.#nome = anonimo || !nome ? 'Anônimo' : nome;
  }

  conectarPsicologo(psicologo) {
    this.psicologo = psicologo;
  }

  get nome() {
    return this.#nome;
  }

   set nome(novoNome) {
      this.#nome = novoNome;
  }
  // Método para enviar uma mensagem para outro paciente
  enviarMensagem(pacienteDestino, conteudo, app) {
  if (this.psicologo !== null) {
    app.enviarMensagemDePacienteParaPaciente(this, pacienteDestino, conteudo);
  } else {
    console.error('Erro: Paciente não associado a um psicólogo.');
  }
}

}

module.exports = Paciente;