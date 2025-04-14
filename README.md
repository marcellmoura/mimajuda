# MimAjuda

Sistema de controle financeiro pessoal desenvolvido com o objetivo de permitir que qualquer pessoa gerencie suas receitas, despesas e categorias de forma simples, acessível e prática.

---

## Objetivo do sistema

O MimAjuda tem como proposta oferecer um ambiente onde o usuário possa registrar seus ganhos e gastos, acompanhar saldos mensais, visualizar gráficos e manter o controle da própria vida financeira.

---

## Funcionalidades

### Funcionalidades essenciais (MVP)

- Tela de login funcional com validação de campos
- Dashboard com:
  - Cards de saldo, receita e despesa
  - Tabela de transações fictícias com estilo visual
- Design estruturado conforme protótipo do Figma
- Separação por cores de acordo com o tipo (receita/despesa)

### Funcionalidades adicionais implementadas

- Responsividade inicial
- Organização modular do projeto (HTML, CSS e JS separados)
- Estrutura de navegação lateral
- Simulação de login com usuário fixo em JavaScript

### Funcionalidades previstas (a implementar)

- Cadastro real de usuários
- Registro dinâmico de transações
- Edição e exclusão de registros
- Filtros por tipo, categoria e data
- Relatórios com gráficos
- Sistema de metas e alertas
- Integração com banco de dados

---

## Tecnologias utilizadas

- HTML5, CSS3 e JavaScript
- MySQL (modelagem de dados)
- Git e GitHub (controle de versão)
- Figma (prototipação visual)
- Markdown (documentação)

---

## Estrutura do projeto

```txt
mimajuda/
├── docs/                         # Documentação geral
│   ├── descricao.md
│   ├── funcionalidades.md
│   ├── fluxo.md
│   ├── layout.md
│   └── banco/
│       ├── modelo_conceitual.md
│       ├── modelo_logico.md
│       └── der_mimajuda.png
├── src/                          # Código-fonte do frontend
│   ├── index.html                # Tela de login
│   ├── dashboard.html            # Painel de controle
│   ├── style.css                 # Estilos globais
│   ├── script.js                 # Validação de login
│   └── logo.png                  # Logo do sistema
├── README.md                     # Documento principal
