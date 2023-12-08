class Lembretes {
  constructor() {
    this.lembretes = [];
  }

  configurarLembrete(descricao, data) {
    this.lembretes.push({ descricao, data });
  }

  emitirLembretes() {
    const agora = new Date();

    this.lembretes.forEach(lembrete => {
      if (lembrete.data > agora) {
        console.log(`Lembrete: ${lembrete.descricao} às ${lembrete.data}`);
    }
    });
  }
}

module.exports = Lembretes;