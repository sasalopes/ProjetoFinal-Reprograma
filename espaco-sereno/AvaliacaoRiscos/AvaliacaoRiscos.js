class AvaliacaoRiscos {
  static avaliarRisco(paciente) {
    const { estadoEmocional, comportamentoRecente } = paciente;

    // avaliação de riscos
    let nivelRisco = 'baixo';

    // Se o paciente está emocionalmente instável e teve comportamentos preocupantes
    if (estadoEmocional === 'instavel' && comportamentoRecente === 'preocupante') {
      nivelRisco = 'alto';
    }

     switch (nivelRisco) {
      case 'baixo':
        return 'Baixo Risco';
      case 'medio':
        return 'Médio Risco';
      case 'alto':
        return 'Alto Risco';
      case 'critico':
        return 'Risco Crítico';
      default:
        return 'Não Classificado';
    }
  }
}

module.exports = AvaliacaoRiscos;