# Senhas

A senha é nossa identidade digital e é a primeira barreira de proteção dos principais sistemas. Diante disso, disponibilizamos algumas dicas gerais e para você melhorar a complexidade de suas senhas.

[[toc]]

![](/img/password.jpg)  

## Senhas no dia-dia
Devemos ter muito cuidado ao lidar com senhas no ambiente corporativo e pessoal.

**CUIDADOS** :exclamation:
* Evitar falar senhas em voz alta.

![](/img/passwords1.png) 
* Evitar salvar senhas em papéis físicos ou arquivos no computador.

![](/img/passwords3.jpg) 

* As senhas devem ser individuais e intrasferíveis, cada colaborador deve ter seus devidos acessos para realização das suas atividades, o compartilhamento de senhas entre colaboradores é inadmissível nos dias de hoje.

## Tipos de ataques
Os ataques a senhas baseiam-se em dois tipos de ataques, os que criam lista de palavras direcionadas e os que utilizam listas prontas.

### Criando lista de palavras
O primeiro tipo é quando o atacante cria uma lista de palavras direcionada. Podendo ser direcionada a um processo ou a uma pessoa específica.

 * Quando é direcionada a um processo, seria em uma autenticação que possui um numero determinado de caracteres no login, por exemplo, 6 caracteres. Sendo assim, conforme tabela abaixo, um atacante levaria 5 minutos para montar uma lista com todas as combinações possíveis e descobrir/invadir determinada conta, aumentando para 8 dias se tiver caracteres especiais. Conforme a senha possuir mais caracteres, podemos observar que se torna impossível um atacante performar com sucesso um ataque deste tipo.

* Quando é direcionado a uma pessoa, o atacante coleta diversas informações pessoais e ou de interesses do alvo e cria uma lista de palavras com diversas combinações. Caso a pessoa utilize informações pessoais na senha, possivelmente terá a senha descoberta.



![](/img/passwords2.png)  
### Utilizando listas prontas
O segundo tipo de ataque e mais comum, é quando o atacante utiliza listas com senhas de diversos vazamentos já ocorridos, ou seja, senhas reais e já utilizadas em diversos ambientes. Se sua senha foi vazado em algum momento da vida e você nunca alterou ela, possivelmente estará vulnerável a este tipo de ataque. 

## Dicas para uma senha robusta
Seguem abaixo 8 dicas para criação de senhas robustas para seus logins.

1. **Ela é longa?** Tente usar pelo menos 10 ou 12 caracteres, ou o máximo possível.

2. **Ela é difícil de adivinhar?** Evite sequências, como "12345" ou "qwerty", pois elas podem ser hackeadas por força bruta em segundos. Pelo mesmo motivo, evite também palavras comuns ("senha1").

3. **Ela tem tipos variados de caracteres?** Letras minúsculas e maiúsculas, símbolos e números devem fazer parte da senha. A variedade pode tornar a sua senha mais imprevisível.

4. **Substituições óbvias de caracteres são evitadas?** Por exemplo, usar o número zero "0" no lugar da letra "O". Essas substituições já estão codificadas nos softwares de hackeamento atuais. Então, evite isso.

5. **A senha usa combinações de palavras incomuns?** As senhas podem ser mais seguras se usarem palavras inesperadas. Mesmo que você use palavras comuns, é possível organizá-las em uma ordem estranha e certificar-se de que não estejam relacionadas. Ambos os métodos podem neutralizar os hackeamentos baseados em dicionários.

6. **Você consegue memorizá-la?** Use algo que faça sentido para você, mas que será difícil para os computadores adivinharem. Mesmo senhas aleatórias podem ser lembradas pela memória muscular, sendo semilegíveis. Mas senhas que impeçam o seu acesso não ajudam muito. 

7. **Você já usou a senha antes?** Reutilizar senhas compromete várias contas. Use sempre algo original.

8. **A senha apresenta uma regra difícil de ser adivinhada por computadores?** Um exemplo pode ser uma senha de três palavras com quatro letras cada, onde as duas primeiras letras de cada palavra são substituídas por números e símbolos. Por exemplo: "?4sa#2to?6da" em vez de "casagatovida".

::: tip Dica Extra!
* Não utilize dados pessoais nas senhas, como por exemplo, celular, datas, CPF.
:::

*Fonte: Kaspersky*

## Cofres de Senha
Os cofres de senha são bastante úteis para fazermos um bom controle de senhas para todas as aplicações que possuimos credenciais. Dentre os principais estão o Bitwarden, Keepass e Lastpass. Traremos aqui, detalhes sobre a utilização do Bitwarden, que possui aplicativo para Android, Iphone, Windows, MacBook e possui um plugin para utilização no browser.

### Bitwarden
Seguem abaixo alguns vídeos para criação de conta e utilização via browser. Mais detalhes podem ser obtidos no [site do fabricante](https://bitwarden.com/).

* Criando conta

<iframe width="560" height="315" src="https://www.youtube.com/embed/W6Miu-TJI1c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

* Plugin no navegador

<iframe width="560" height="315" src="https://www.youtube.com/embed/J_z4VqERVkQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Já tive minha senha vazada?
O site [Have I been pwned](https://haveibeenpwned.com/) possui uma base com dados de diversos vazamentos de dados ocorridos. Então, podemos consultar nele se algum dado nosso já foi vazado, podendo pesquisar por e-mail ou por telefone.

::: warning IMPORTANTE!
Não quer dizer que se por acaso seus dados não apareçam no site, em nenhum momento foi vazado. O site possui uma base enorme de dados mas não possui **TODOS** os dados de vazamentos já ocorridos.
:::

### Realizando consultas no Have I Been Pwned
Ao realizarmos a consulta e o retorno for uma tela verde vide exemplo abaixo, são boas notícias, nosso e-mail não participa de nenhum vazamento cadastrado no site.

![](/img/haveigreen.png)  

Se realizarmos a consulta e o retorno for uma tela vermelha, más notícias, nosso e-mail está em algum vazamento cadastrado no site.

![](/img/haveired.png)

Descendo a tela até o final da página nos deparamos com mais informações sobre os tais vazamentos, com informações de quando o vazamento ocorreu e quais dados foram vazados. No exenplo abaixo podemos observar as seguintes informações:

**Vazamento do Adoboe**: Ocorreu em 2013, 153 milhões de contas foram vazadas, os dados vazados foram: e-mails, dicas de senha, senhas e usernames.

**Vazamento do Canva**: Ocorreu em 2019, impactando 137 milhões de inscritos, os dados vazados foram: e-mails, localizações geográficas, nomes, senhas e usernames.

![](/img/haveired1.png)

### Cadastrando e-mail para notificação de próximos vazamentos
No menu superior, na aba "Notify me", podemos cadastrar um e-mail para sermos notificados quando um novo vazamento ocorrer e nosso e-mail estar associado a ele.

![](/img/notify.png)