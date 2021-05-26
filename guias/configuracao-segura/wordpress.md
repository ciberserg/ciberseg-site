# Wordpress

Este guia tem como objetivo apoiar as equipes de tecnologia no desenvolvimento e hospedagem de sites Wordpress. Ele apresenta uma lista de configurações mínimas de segurança para tornar o site mais resilientes a ciberataques.

![](/img/website.jpg)

[[toc]]

## Manter o WordPress sempre atualizado

A versão mais recente do WordPress está sempre disponível no site principal em [http://wordpress.org](http://wordpress.org) e a versão em Português Brasileiro em [http://br.wordpress.org](http://br.wordpress.org). Não existem versões oficiais disponíveis em outros sites nunca baixe ou instale o WordPress de qualquer outro endereço que não o [http://wordpress.org](http://wordpress.org).

Recomenda-se deixar habilitada a opção de atualização automática.

[Tutorial de atualização do WordPress](https://www.hostinger.com/tutorials/how-to-update-wordpress?_ga=2.123479819.1461415128.1599651744-455363438.1599237852)

## Atualizar temas e plugins desatualizados
Plugins e temas desatualizados são os principais vetores de entrada para um atacante, portanto tenha sempre a última versão desses utilitários.

## Remover Temas e Plugins que não são utilizados
Plugins e temas não utilizados devem ser removidos do CMS.

## Ocultar a versão do WordPress
Por padrão, os temas do WP utilizam uma metatag no código que divulga, para fins de estatística, a versão que está sendo utilizada. Em termos práticos, esta informação para um usuário ou para o administrador do site é inútil e deixar estas informações públicas não é aconselhável. Em varreduras feitas para localizar sites vulneráveis esta informação de versão é utilizada para definir a forma de ataque e explorar brechas de segurança.

Esta informação fica localizadas no arquivo header.php de seu tema. Para desabilitar, remova a linha a seguir: 

``` php
<meta name=”generator” content=”WordPress <?php bloginfo(‘version’); ?>” />
```

Outra maneira de remover esta informação é adicionar o código abaixo aos seus arquivos functions.php:

``` php
<?php remove_action(‘wp_head’, ‘wp_generator’); ?>
```

Esta linha força a remoção da informação de forma dinâmica. A configuração também poderá ser feita via Wordfence.

## Criar senhas fortes para todos os usuários.
Muitas ameaças potenciais podem ser evitadas com bons hábitos de segurança. Uma senha forte é um aspecto muito importante disso.

O objetivo da sua senha é dificultar que outras pessoas possam adivinhar e para evitar que ataques de força bruta sejam bem-sucedidos. Existem diversos geradores automáticos de senhas que podem ser usados para criar senhas seguras.

O WordPress também tem um medidor de segurança das senhas, que é exibido sempre que você está definindo ou alterando uma senha no WordPress. Use sempre essa ferramenta para garantir que está usando senhas adequadas.

Quando estiver escolhendo uma senha, evite:
 - Usar pequenas alterações no seu nome real, nome de usuário, nome da sua empresa ou nome do seu site.
 - Usar apenas uma palavra do dicionário, em qualquer idioma.
 - Usar senhas curtas
 - Usar senhas que tenham somente letras ou somente números (uma combinação dos dois é o ideal).

Uma senha forte não serve só para proteger o seu conteúdo. Um hacker que tenha acesso à sua conta de administração terá poderes para instalar scripts maliciosos que inclusive poderão comprometer todo o servidor.

## Alterar o nome do usuário “admin” padrão
Alterar o nome do usuário default do CMS para evitar tentativas de quebra de senha nesse usuário.

## Instalar e configurar o plugin de segurança Wordfence
Instalar o plugin de segurança wordfence. 
- [https://www.wordfence.com/]()
- [https://wordpress.org/plugins/wordfence/]()

### Desabilitar execução de arquivos PHP em pastas específicas
Impedir que códigos maliciosos, backdoors sejam executados em pastas específicas, como a pasta de uploads por exemplo em caso de um atacante conseguir fazer o upload de um arquivo malicioso.
A configuração poderá ser feita via Wordfence.

### Limitar tentativas de login
Por padrão, o WordPress permite que os usuários tentem fazer login quantas vezes quiserem. Isso deixa o site WordPress vulnerável a ataques de força bruta. 
A configuração poderá ser feita via Wordfence.

### Habilitar autenticação 2FA
Habilite o [Segundo Fator de Autenticação](/faq/#o-que-e-autenticacao-de-dois-fatores-2fa) no plugin do Wordfence.

## Alterar prefixo padrão “wp” no SGBD 
- Alterar prefixo `$table_prefixvalue` no `wp-config.php`.
- Atualizar tabelas no banco de dados.
- Alteração de valores do banco de dados manualmente.

[https://www.hostinger.com.br/tutoriais/como-aumentar-seguranca-no-wordpress/]()

## Desativar a Edição de Arquivos no Painel do WordPress
O WordPress vem com um editor de código embutido que permite editar arquivos de temas e plugins diretamente na área de administração do WordPress. Esse recurso pode ser um risco à segurança se a conta for comprometida, razão pela qual deverá ser desativado.

Para desativar a edição de arquivos basta adicionar o código a seguir no arquivo `wp-config.php`.

``` php
// Disallow file edit
define( 'DISALLOW_FILE_EDIT', true );
```

## Desativar o XML-RPC 
O XML-RPC foi ativado por padrão no WordPress, pois ajuda a conectar o site WordPress a aplicativos da Web e móveis.

Devido à sua natureza poderosa, o XML-RPC pode amplificar significativamente os ataques de força bruta.

Tutorial para desativar o XML-RPC manualmente:
[https://www.hostinger.com.br/tutoriais/o-que-e-xmlrpc-php/]()

## Permissão de arquivos do WordPress
Algumas das funcionalidades do WordPress precisam da permissão para que alguns arquivos sejam alterados no servidor. No entanto, permitir acesso à alteração de arquivos é um risco em potencial, principalmente em servidores compartilhados.

O melhor a fazer é restringir ao máximo as permissões dos seus arquivos e liberar apenas nos casos em que você precise permitir a escrita, ou criar pastas específicas com menos restrições para algumas atividades, com o upload de arquivos.

Este é um dos esquemas possíveis de permissões:
A sua conta de usuário deve ser a dona de todos os arquivos, e deve ter acesso à escrita em todos eles. Os arquivos que necessitam de escrita pelo WordPress devem estar em um grupo, também pertencente à sua conta de usuário utilizada no servidor.

> /

O diretório raiz do WordPress: todos os arquivos devem ter permissão de escrita somente pelo seu usuário, exceto o .htaccess se você quiser que o WordPress gere automaticamente as regras de reescrita para você.

> /wp-admin/

A área de administração do WordPress: todos os arquivos devem ter permissão de escrita somente pelo seu usuário.

> /wp-includes/

A maior parte da lógica de sistema do WordPress: todos os arquivos devem ter permissão de escrita somente pelo seu usuário.

> /wp-content/

Conteúdo inserido pelos usuários: estes arquivos devem ter permissão de escrita por todos os usuários (proprietário/usuário, grupos e público).
Dentro de `/wp-content/` você vai encontrar:

> /wp-content/themes/

Arquivos de temas/templates. Se você quiser utilizar o editor de temas do painel de administração, todos os arquivos devem ter permissão de escrita. Se não, todos podem ser escritos somente pela sua conta de usuário.

> /wp-content/plugins/

Arquivos de plugins: todos os arquivos devem ter permissão de escrita somente pelo seu usuário.
Outras pastas que podem existir em `/wp-content/` devem estar documentadas pelos temas ou plugins que as necessitam. As permissões podem variar.

## Protegendo o wp-config.php
Mova o arquivo wp-config.php para o diretório logo acima da instalação do WordPress. Assim, para sites instalados na raiz do servidor, o arquivo `wp-config.php` poderá ficar fora da área acessível.
Note que o `wp-config.php` poderá ficar apenas UM nível acima da instalação do WordPress (onde está a pasta wp-includes). Permita também que somente o usuário (e o do servidor) possam acessar este arquivo (geralmente isso significa uma permissão 0400 ou 0440).
Se for utilizado o `.htaccess` no servidor, poderá ser também inserido o código abaixo no arquivo, para negar acesso a qualquer um que esteja navegando atrás dele:

``` nginx
<files wp-config.php>
order allow,deny
deny from all
</files>
```

## Exclusão de arquivos desnecessários
Existem alguns arquivos desnecessários no WordPress logo após a plataforma ser instalada. É importante dar uma atenção a tais arquivos pois eles podem revelar certas informações do site o expondo a ataques mal-intencionados.

> /wp-admin/install.php

Este arquivo fica dentro da pasta wp-admin e tem como função rodar o instalador do WordPress. Pelo seu nome podemos notar que ele somente tem uso enquanto na instalação, depois disso não há função alguma dentro da plataforma. Portanto deve ser removido.

> wp-config-sample.php

Este arquivo é útil durante a criação do arquivo de configuração do WordPress, o `wp-config.php`. Depois disso, assim como o install.php, fica em desuso. Ele é apenas um arquivo de exemplo (sample) e depois da instalação e correta configuração das credenciais de acesso ao banco de dados ele não é mais utilizado. Também deve ser removido.

> readme.html

Em termos de segurança, este arquivo é o mais importante a ser deletado. Dentre as informações presentes no script, a que pode trazer mais vulnerabilidades ao site é a informação de versão do WordPress. Inclusive, esse arquivo pode ser facilmente acessado por qualquer usuário do site por qualquer navegador.

::: danger Importante
A cada atualização de versão que é feita no site esse arquivo volta a existir no FTP. Portanto, é necessário realizar a exclusão desse arquivo a cada nova atualização do core do WordPress.
:::

## Criar uma chave de Segurança e SALT nova e específica para cada site no arquivo wp_config.php
Um dos motivos que torna o `wp-config.php` importante é porque nele você pode criar Chaves de Segurança e Salts. Isso aumenta a segurança do site criptografando as informações do usuário. Por isso deve ser criada uma chave de Segurança e Salt nova e específica para cada site.
O Wordpress fornece uma API que deve ser utilizada para geração das chaves Salts.
[https://api.wordpress.org/secret-key/1.1/salt/]()

## Modo Debugging
Nos ambientes de produção sempre manter o modo debugging desativado.
 
## Usuário e senha exclusivos de banco de dados para cada instância de WordPress
Todos os sites devem ter usuário e senhas exclusivos de banco de dados para cada instância do WordPress.
