# Homebanking
O sistema Homebanking trata-se de uma aplicação feita em Angular, onde tem como finalidade representar um mini sistema financeiro.
 
 *Nele é permitido:*
  **1 - Fazer Login**
  **2 - Controle Financeciro: Adicionar, retirar e consultar extratos**


# Módulos

    MatIconModule
    MatFormFieldModule
    MatInputModule
    MatButtonModule
    MatTableModule
    FormsModule
    ReactiveFormsModule
    AppRoutingModule

**Os módulos utilizados foram do Angular Material e AppRouting do Angular**

  Onde grande maioria dos componentes foram utilizados muitas funcionalidades do Angular Material

# Componentes

  **Os componentes foram colocados no diretório src/app/components**

    Tratam-se de quatro componentes: 
    - footer
    - header
    - home
    - login
    - register
  
  - footer e header, tratam-se de componentes de estilo para cabeçalho e rodapé
  - login, representa a tela inicial de login do usuário
  - home, representa o sistema bancário, o saldo começa como 0 e é permitido adicionar,remover e consultar os saldos numa tabela, acompanhado com a data da remoção/adição do saldo. O componente home recebe o email por meio dos parâmetros de rota da rota de login.
  - register, na tela de cadastro é possivel colocar email e a senha (o emote representa a segurança quanto ao tamanho da senha), onde é necessário confirmar a senha.

# Execução
  1 - É necessário ter Angular CLI instalado.
    **npm install -g @angular/cli**
  
  2 - Instalar os pacotes/dependências:
    **npm install / yarn install**
  
  3 - Executar o projeto com Angular CLI.
    **ng serve --open** (--open vai abrir o navegador automaticamente.)
