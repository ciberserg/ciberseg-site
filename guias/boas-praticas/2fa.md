# Duplo Fator de Autenticação (2FA)

## Introdução
Hoje em dia as pessoas estão se conectando a recursos organizacionais em cenários cada vez mais complexos. Elas se conectam por dispositivos corporativos, pessoais e públicos dentro e fora da rede corporativa usando smartphones, tablets, PCs e laptops, geralmente em várias plataformas. Nesse mundo sempre conectado, de vários dispositivos e plataformas, a segurança das contas de usuário é mais importante do que nunca. As senhas usadas em dispositivos, redes e plataformas, não importa o quanto sejam complexas, são insuficientes para garantir a segurança das contas dos usuários, especialmente quando eles reutilizam senhas entre contas. Um phishing sofisticado e outros ataques de engenharia social podem resultar na publicação e venda de nomes de usuário e senhas na dark web.


<b>O que é autenticação de dois fatores?</b>

A autenticação de dois fatores é um recurso oferecido por vários prestadores de serviços online que acrescentam uma camada adicional de segurança para o processo de login da conta, exigindo que o usuário forneça duas formas de autenticação.

Se você usar apenas uma senha para autenticar um usuário, isso deixará um vetor inseguro para ataque. Se a senha for fraca ou se tiver sido exposta em outro lugar, será realmente o usuário entrando com o nome de usuário e a senha ou um invasor? Quando você precisar de uma segunda forma de autenticação, a segurança será aprimorada, pois esse fator adicional não será algo fácil de ser obtido ou duplicado por um invasor.

Esse procedimento descreve as ações necessárias para configurar o Duplo Fator de Autenticação (2FA) nas contas de usuários do Microsoft 365.
## Procedimento
Esse procedimento descreve as ações necessárias para configurar o Duplo Fator de Autenticação (2FA) nas contas de usuários do Microsoft 365.

Após o 2FA ser habilidade em sua conta, você deverá concluir a configuração acessando o Microsoft 365 via navegador ou entrando diretamente no endereço <b>(https://aka.ms/MFASetup)</b>.

1. Acesse a sua conta do Office.
2. Na tela onde aparece a mensagem <b>Mais informações necessárias</b> clique em <b>Avançar</b>.

![](/2fa-m365/img001.png)

3. Na tela <b>Verificação de Segurança adicional => Etapa 01: Como devemos entrar em contato com você recomendamos o uso da opção Aplicativo Móvel</b>.

![](/2fa-m365/img002.png)

4. Para configurar o Duplo fator de Autenticação com Aplicativo móvel, você deverá instalar o <b>Microsoft Authenticator</b> no seu Smartphone. 
5. Selecione uma das opções apresentadas e clique em <b>Configurar</b>.

![](/2fa-m365/img003.png)

6. Na próxima tela irá aparecer um pequeno manual de como configurar sua conta no aplicativo <b>Microsoft Authenticator</b>, siga o manual e depois clique em <b>Avançar</b>.
![](/2fa-m365/img004.png)

7. Na etapa 5, se você selecionou a opção <b>Receber notificações para a verificação</b>, será encaminhada uma notificação para o aplicativo que foi instalado no seu smartphone, lá você deverá aprovar a entrada.

![](/2fa-m365/img005.png)

::: tip Dica!
Se na etapa 5 você selecionou a opção <b>Usar código de verificação</b>, você deverá ir no aplicativo que você instalou e verificar o código que foi gerado na sua conta e em seguida inserir no campo solicitado.
:::

![](/2fa-m365/img006.png)

8. Na etapa 3 você deve inserir um número de telefone para caso você perca acesso ao Aplicativo.

![](/2fa-m365/img007.png)

9. Para finalizar, basta clicar em <b>Concluido</b>.

![](/2fa-m365/img008.png)

	
Mais detalhes podem ser encontrados aqui [](https://docs.microsoft.com/en-us/azure/active-directory/user-help/multi-factor-authentication-end-user-manage-settings?redirectedfrom=MSDN)


