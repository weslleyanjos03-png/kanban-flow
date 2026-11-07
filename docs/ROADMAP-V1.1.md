# Roadmap de evolução — Kanban Flow

Esta é a proposta de evolução, **não** a confirmação de uma versão já lançada. A release oficial existente continua sendo [v1.0.0](https://github.com/weslleyanjos03-png/kanban-flow/releases/tag/v1.0.0) até a publicação formal de outra versão.

## Qualidade e preservação de dados — alta prioridade

- [x] Corrigir URLs do repositório após a mudança de nome.
- [x] Adicionar testes de validação dos dados e scripts.
- [x] Proteger importação e limpeza quando o armazenamento falha.
- [x] Preparar persistência transacional para criação, edição, movimento, conclusão e exclusão de tarefas.
- [x] Preservar conteúdo local ilegível até o usuário optar pela recuperação ou descarte.
- [ ] Validar o funcionamento com testadores reais no Android, iOS e desktop.

## Experiência inicial — alta prioridade

- [x] Adicionar instrução de primeiros passos no quadro vazio.
- [x] Indicar rolagem horizontal das etapas em telas menores.
- [ ] Revisar o uso por teclado e leitores de tela com usuários.
- [ ] Revisar tamanho dos controles e fluxos de edição no celular.

## Produto e comunidade — próximas iterações

- [ ] Priorizar sugestões coletadas de 5 a 10 testadores reais.
- [ ] Avaliar personalização de categorias e etapas, mantendo compatibilidade com backups.
- [ ] Avaliar instruções mais claras e confirmação para restaurar dados.
- [ ] Considerar instalação PWA após avaliar manutenção e atualização offline.
- [ ] Estudar sincronização na nuvem **somente** com projeto de segurança, autenticação, custos e privacidade.

## Medição sem rastreamento oculto

- Manter a aplicação sem rastreamento automático por padrão.
- Usar feedback voluntário por issues e entrevistas com dados fictícios.
- Consultar GitHub Insights para métricas do repositório, quando disponíveis (isso **não** equivale a visitas ou usuários ativos do site).
- Qualquer ferramenta futura de analytics precisa ser documentada, revisada quanto à privacidade e configurada explicitamente.

## Regra de lançamento

Não publicar uma release oficial v1.1.0 sem testes de código aprovados, validação dos principais fluxos no navegador e registro das limitações conhecidas.
