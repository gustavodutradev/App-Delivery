# Apresentação

Seja bem-vindo(a) ao repositório do App de Receitas! Este projeto foi realizado em grupo durante meus estudos na Trybe, sendo o projeto de conclusão de Back-End.

Composição do grupo:
- Gustavo Dutra
- Juliana Martinelli
- Pedro Boccaletti
- Ricardo Souza

Neste projeto criamos um MVP de um aplicativo de delivery de bebidas. Fomos responsáveis por construir tanto o Front-End, quanto o Back-end e o Banco de Dados da aplicação.

Utilizamos da metodologia Kanban para organizarmos nosso progresso e possuir total visibilidade e transparência de cada etapa. Além disso, realizávamos *daily meetings* antes do início de cada dia de trabalho, para que todos ficassem à par da situação atual de cada integrante, o que seria feito no dia e se havia algum impedimento/bloqueio em alguma tarefa.

Fui responsável pela construção do Front-End e estilização do projeto, junto ao Pedro Boccaletti.
Ricardo Souza e Juliana Martinelli foram responsáveis pela construção do Back-End e realização de testes.
Importante ressaltar que cada equipe prestava suporte à outra e realizava *pair programming* quando suas tarefas já haviam sido concluídas. Dessa forma, todos os integrantes puderam participar de todas as etapas da aplicação, do início ao fim.

# Tecnologias Utilizadas

**Aplicação**
- JavaScript
- GIT
- DOCKER
- EsLint

**Front-End**
- React-Redux
- React-Hooks
- Axios
- Tailwind
- Styled Components
- Jest

**Back-End**
- Node.js
- Express
- Sequelize
- JWT
- MySQL
- Sinon / Mocha / Chai

# Principais Funcionalidades
A) Acesso via login: tanto clientes, quanto pessoas vendedoras e administradores devem ter acesso ao aplicativo via login, porém para funções diferentes: (1) A pessoa cliente, que compra da lista de produtos; (2) A pessoa vendedora, que aprova, prepara e entrega; (3) A pessoa administradora, que gerencia quem usa o aplicativo;

B) Fazer a comunicação entre clientes e pessoas vendedoras: a pessoa cliente faz o pedido via "carrinho de compras" e a pessoa vendedora aprova, prepara e envia esse pedido. Quando o produto é recebido por quem comprou, essa pessoa marca o pedido como "recebido". Ambos devem possuir detalhes sobre seus pedidos;

C) Se a pessoa cliente faz o pedido, o mesmo deve aparecer para a pessoa vendedora em seu dash de pedidos após a atualização da página. A pessoa cliente, por sua vez, deve ter as informações sobre seu pedido quando sua página for atualizada, ou seja, ter informações se o pedido está sendo preparado ou se já saiu pra entrega;

# Banco de Dados

O banco de dados contituiu-se de 4 tabelas que se relacionam entre si, que são:
- Usuários
- Vendas
- Produtos da Venda
- Produtos

**Diagrama de Entidade e Relacionamento**

![erdr](https://github.com/Gustavo-trybedev/App-Delivery/assets/103958434/d9921d12-122f-4434-a342-dd34e029c916)

# Preview

<div align="center">
  <video src="https://github.com/Gustavo-trybedev/App-Delivery/assets/103958434/dff166ba-cb24-4d95-af89-a833bb39f737" />
</div>

<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto.
É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->
