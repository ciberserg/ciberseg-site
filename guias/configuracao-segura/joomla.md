# Joomla

Este guia foi criado com intuito de reforçar a segurança na hora de criar e configurar um site, também foi criado um checklist com as configurações de segurança que são de caráter obrigatório para todos os sites de responsabilidade da instituição. O checklist para novos sites que irão para o ambiente de produção deverá ser encaminhado preenchido para a equipe de Cibersegurança para avaliação e validação.

## Manter o Joomla sempre atualizado.
Sempre que houver atualizações, o recomendado é atualizar. 
O Joomla oferece atualizações automáticas, basta acessar o painel de administração.
 

## Manter extensões atualizadas
Manter extensões desatualizadas podem abrir brechas para atacantes.
Para ver se há atualizações disponíveis para as extensões instaladas, faça o login no painel do Joomla e navegue até Extensões> Gerenciar> Atualizar.
 

## Utilizar o arquivo .htaccess fornecido na instalação
Após a instalação do Joomla, procure pelo arquivo htaccess.txt. Essa é a versão original do arquivo responsável pelas regras que ajudam a mitigar os ataques mais comuns. Basta renomeá-lo para “.htaccess”.
Lembrando que o uso do htaccess deve estar habilitado no apache, isso pode ser verificado no Painel Hostnet usando o menu: Site >> Configurações extras

	
## Permissão de escrita em diretórios
Geralmente usuários do Joomla acreditam ser mais fácil aplicar permissão de escrita para todos os diretórios de uma única vez ou para a raiz do site, entretanto se esquecem (ou não sabem) que essa ação pode abrir vulnerabilidades para a gravação nos diretórios. Por isso, é obrigatório que se aplique permissão de escrita apenas para diretórios que realmente necessitam.

## Habilite as opções "Adicionar sufixo de URL” e “Utilizar mod_rewrite” nas "Configurações globais"
Essas opções vão fazer com que a URL seja reescrita antes do Joomla interpretar a solicitação. Isso dificulta ataques que utilizam a URL para passagem de parâmetros. O invasor pode acabar conseguindo “driblar” essa opção caso descubra o padrão de reescrita da URL e enviando os parâmetros maliciosos. Acontece que os invasores procuram por facilidades na internet, e como isso existe de sobra, é bem provável que acabem desistindo de algum ataque contra o site e partindo para algum outro alvo mais fácil.
 
A opção "Utilizar mod_rewrite" vai fazer com que ele "esconda" o "index.php" da URL, dando a "impressão" de se tratar de um site estático. Normalmente, as URLs são assim:
http://www.meusite.com.br/index.php/artigo
Após habilitar a opção "mod_rewrite", ficaria assim:
http://www.meusite.com.br/artigo
A opção "Adicionar sufixo de URL" faz com que ele adicione um sufixo na URL baseado no tipo do documento (normalmente html). A URL passaria a ficar igual à de um site estático:
http://www.meusite.com.br/artigo.html
É importante frisar que, para que essas opções funcionem, o arquivo .htaccess fornecido na instalação deve estar em uso, como vimos no item 3.


## Desabilite algumas funções vulneráveis do PHP
Algumas funções do PHP acabam sendo extremamente perigosas quando um atacante consegue de alguma forma explorar uma vulnerabilidade. A configuração abaixo, que deve ser realizada no arquivo php.ini (normalmente /etc/php.ini) desabilita boa parte destas funções e normalmente não prejudica o funcionamento do Joomla:
disable_functions = show_source, system, shell_exec, passthru, exec, phpinfo, popen, proc_open
Certifique-se de que essas funções estão ativas. Para ter acesso às configurações do PHP no servidor, basta criar um arquivo .php com o seguinte conteúdo:
phpinfo();

## Configure as URLs amigáveis nas configurações globais
Diversos ataques a sites Joomla são feitos a partir de uma pesquisa no Google por uma determinada vulnerabilidade, ou seja, o atacante conhece a vulnerabilidade "X" de um plugin e descobriu que a URL para explorá-la é "/com_plugin?nomedapagina.php?id=123&x=456", ele irá realizar a pesquisa por essa URL. Usando este padrão de URL é bem provável que seu site seja localizado. Utilizar URL amigável faz com que você "oculte" sua vulnerabilidade, caso ela exista. Verifique também o arquivo robots.txt do seu site para certificar-se de que somente as páginas autorizadas estão sendo indexadas pelo mecanismo de buscas do Google.

## Proteção de usuários e senhas
Sempre haverá invasores tentando explorar credenciais de usuário e configurações de segurança fracas para obter acesso aos sites Joomla.
Ao utilizar senhas fortes e exclusivas em seu site, restringindo os privilégios disponíveis aos usuários por meio de funções atribuídas, permitindo a autenticação de duas etapas ou multifatorial e limitando as sessões do usuário, você pode reduzir o risco de comprometimento do site por um atacante.

### Contas de usuários
Por padrão, o Joomla permite que três grupos de usuários privilegiados acessem o Painel de Controle:

- Managers - acesso a recursos de criação de conteúdo e informações do sistema no back-end;
- Administradores - acesso à maioria das funções de administração, mas não às opções globais;
- Superusuários - acesso a todas as funções de administração com controle completo

No início de qualquer nova instalação do Joomla, você deve definir o nome de usuário e a senha do administrador. Certifique-se de que seu nome de usuário não seja “demo”, “admin” ou “administrador”.
Ao alterar o nome de usuário, você aumenta a dificuldade de acesso à conta. Um invasor deve adivinhar corretamente o nome de usuário e a senha ao mesmo tempo para obter acesso.

#### Para editar o nome de usuário, prossiga com estas etapas:
1.	Faça login no back-end do Joomla.
2.	Selecione o Gerenciador de usuários em Usuários> Gerenciar.
3.	Selecione o registro do usuário ‘admin’.
4.	Altere o nome de usuário.
5.	Clique em Salvar

#### Funções e o Princípio do Menor Privilégio
O princípio do menor privilégio é composto por duas regras muito simples:
•	Use o conjunto mínimo de privilégios em um sistema para executar uma ação.
•	Conceda privilégios apenas para a duração exata em que uma ação é necessária.
Além disso, o Joomla inclui várias funções integradas para Público, Convidado, Registrado, Especial e Superusuário. Essas funções especificam o que pode e o que não pode ser realizado por um usuário.
Siga estas recomendações de controle de acesso para reduzir seus riscos de segurança:

- Crie contas de usuário no nível mais baixo de permissão.
- Conceda permissões temporárias e revogue o acesso quando não forem mais necessárias.
- Exclua contas que não estão mais sendo usadas.
- Certifique-se de que a função de usuário padrão seja definida como pública.
- Se você já tiver nomes de usuário, certifique-se de que o menor privilégio se aplique a todos os não administradores.


#### Para editar o nome de usuário, prossiga com estas etapas:
•	Faça login no back-end do Joomla como administrador.
•	Selecione o Gerenciador de usuários em Usuários> Gerenciar.
•	Selecione o usuário que deseja editar e atribua-o ao grupo de usuários Público.

 

8.2.	Use senhas fortes do Joomla
Listas de senhas são frequentemente usadas por atacantes para sites de força bruta do Joomla. É por isso que você deve sempre usar senhas fortes e exclusivas para todas as suas contas
As senhas fortes devem atender aos seguintes padrões:
•	Pelo menos 1 caractere maiúsculo
•	Pelo menos 1 caractere minúsculo
•	Pelo menos 1 dígito
•	Pelo menos 1 caractere especial
•	Pelo menos 10 caracteres, com no máximo dois caracteres idênticos em uma linha

Você pode aplicar senhas fortes em Usuários> Opções de senha.