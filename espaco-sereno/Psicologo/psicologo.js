class Psicologo {
  constructor(nome) {
    this.nome = nome;
    this.pacientes = [];
  }

  conectarPaciente(paciente) {
    this.pacientes.push(paciente);
  }

}


module.exports = Psicologo;