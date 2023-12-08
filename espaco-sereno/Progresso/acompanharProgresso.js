class AcompanharProgresso {
  constructor() {
    this.metas = new Map();
  }

  definirMeta(paciente, meta) {
    this.metas.set(paciente, meta);
    console.log(`Meta definida para ${paciente.nome}: ${meta}`);
  }

  registrarMarco(paciente, marco) {
    const meta = this.metas.get(paciente);
    if (meta) {
      console.log(`Marco registrado para ${paciente.nome}: ${marco}`);
      this.avaliarProgresso(paciente, meta, marco);
    } else {
      console.error('Erro: Meta não definida para o paciente.');
    }
  }

  avaliarProgresso(paciente, meta, marco) {
    const progresso = (marco / meta) * 100;
    console.log(`Progresso para ${paciente.nome}: ${progresso.toFixed(2)}%`);
  }
}

module.exports = AcompanharProgresso;