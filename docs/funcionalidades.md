# Funcionalidades do Sistema MimAjuda 

Este documento descreve todas as funcionalidades planejadas para o sistema de controle financeiro pessoal MimAjuda. As funcionalidades estão organizadas por prioridade e área do sistema.

---

## 1. Funcionalidades essenciais (MVP)

### 1.1. Usuário
- [x] Cadastro de usuário (nome, e-mail, senha)
- [ ] Login com autenticação (e-mail e senha)
- [ ] Logout
- [ ] Validação de login (mensagem de erro ao errar senha/email)

### 1.2. Categorias
- [ ] Cadastro de categorias personalizadas por usuário
- [ ] Edição de categorias
- [ ] Exclusão de categorias
- [ ] Listagem das categorias do usuário
- [ ] Inserção automática de categorias padrão no primeiro acesso
  - Ex: Alimentação, Transporte, Lazer, Salário, Contas Fixas
- [ ] Evitar duplicação de nomes por usuário (opcional)

### 1.3. Transações
- [ ] Cadastro de transações (receitas e despesas)
  - Campos: data, tipo (receita/despesa), valor, categoria, descrição (opcional)
- [ ] Edição de transações
- [ ] Exclusão de transações
- [ ] Listagem de transações do usuário
- [ ] Filtro por tipo (receita ou despesa)
- [ ] Filtro por categoria
- [ ] Filtro por período (mês e ano)
- [ ] Ordenação por data (mais recentes primeiro)

### 1.4. Resumo Financeiro
- [ ] Cálculo do saldo total (receitas – despesas)
- [ ] Total de receitas no período selecionado
- [ ] Total de despesas no período selecionado
- [ ] Filtro por mês e ano
- [ ] Exibição de resumo no painel inicial
- [ ] Comparativo com mês anterior:
  - Diferença no total de receitas (% e R$)
  - Diferença no total de despesas (% e R$)
  - Mensagem de destaque (ex: "Você gastou 18% a mais em abril do que em março")

---

## 2. Funcionalidades adicionais (pós-MVP)

### 2.1. Relatórios e Gráficos
- [ ] Gráfico de pizza com percentual de despesas por categoria
- [ ] Gráfico de barras ou linha com saldo mês a mês
- [ ] Relatório detalhado de transações por período
- [ ] Exportar relatório para PDF ou Excel (opcional)

### 2.2. Qualidade de Vida (UX)
- [ ] Validação de formulários (ex: campos obrigatórios, formato de número)
- [ ] Feedbacks visuais (mensagens de sucesso/erro)
- [ ] Alertas de gasto excessivo (ex: “Você gastou mais de R$500 com delivery este mês!”)
- [ ] Responsividade (funcionar bem no celular)

---

## 3. Funcionalidades futuras (experimentais ou de expansão)

- [ ] Notificações por e-mail com resumo semanal/mensal
- [ ] Múltiplos perfis por usuário (ex: Pessoal, Trabalho, Família)
- [ ] Metas de economia por categoria (ex: "Gastar no máximo R$200 com delivery")
  - Definir limite de gasto por categoria e período
  - Exibir progresso em % e alertar ao atingir o limite
- [ ] Painel de simulação futura (ex: “E se eu parar de gastar com Uber?”)
- [ ] Sincronização com planilhas externas (Google Sheets)
- [ ] API para uso externo ou integração com outros apps
- [ ] Login com Google (OAuth)
