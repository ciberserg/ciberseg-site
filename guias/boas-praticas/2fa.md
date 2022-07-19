# Duplo Fator de Autenticação (2FA)

Hoje em dia as pessoas estão se conectando a recursos organizacionais em cenários cada vez mais complexos. Elas se conectam por dispositivos corporativos, pessoais e públicos dentro e fora da rede corporativa usando smartphones, tablets, PCs e laptops, geralmente em várias plataformas. Nesse mundo sempre conectado, de vários dispositivos e plataformas, a segurança das contas de usuário é mais importante do que nunca. As senhas usadas em dispositivos, redes e plataformas, não importa o quanto sejam complexas, são insuficientes para garantir a segurança das contas dos usuários, especialmente quando eles reutilizam senhas entre contas. Um phishing sofisticado e outros ataques de engenharia social podem resultar na publicação e venda de nomes de usuário e senhas na dark web.

*Fonte Microsoft*

[[toc]]

![](/img/auth2-compressor.png)

*Fonte: Kaspersky*

## O que é autenticação de dois fatores?

A autenticação de dois fatores é um recurso oferecido por vários prestadores de serviços online que acrescentam uma camada adicional de segurança para o processo de login da conta, exigindo que o usuário forneça duas formas de autenticação.

Se você usar apenas uma senha para autenticar um usuário, isso deixará um vetor inseguro para ataque. Se a senha for fraca ou se tiver sido exposta em outro lugar, será realmente o usuário entrando com o nome de usuário e a senha ou um invasor? Quando você precisar de uma segunda forma de autenticação, a segurança será aprimorada, pois esse fator adicional não será algo fácil de ser obtido ou duplicado por um invasor.

Um fator de autenticação é uma maneira de provar que você é quem diz ser ao tentar entrar. Por exemplo, uma senha é um tipo de fator, é uma coisa que você sabe. Os três tipos mais comuns de fatores são: 

 * Algo que você sabe - como uma senha ou um PIN memorizado.
 * Algo que você tem - como um smartphone ou uma chave USB segura.
 * Algo que você é - como uma impressão digital ou reconhecimento facial.
   
*Fonte Microsoft*
### Como funciona?

Digamos que você entrará em sua conta de trabalho ou de estudante e insira seu nome de usuário e senha. Se isso for tudo o que você precisa, qualquer pessoa que conheça seu nome de usuário e senha poderá entrar como você em qualquer lugar do mundo! 

Mas se você tiver o duplo fator de autenticação habilitada, as coisas ficam mais interessantes. Na primeira vez em que entrar em um dispositivo ou aplicativo, insira seu nome de usuário e senha como de costume, você será solicitado a inserir seu segundo fator para verificar sua identidade.  

Se você está usando um aplicativo como segundo fator. Você abre o aplicativo em seu smartphone, ele mostra um número de seis dígitos criado dinamicamente, que é exclusivo do seu telefone, que você digita no site.

Se outra pessoa tentar entrar como você, no entanto, ela inserirá seu nome de usuário e senha e, quando for solicitado a fornecer esse segundo fator, ficará preso! A menos que eles tenham seu smartphone, eles não têm como obter esse número de 6 dígitos para inserir. E o número de 6 dígitos no Microsoft Authenticator muda a cada 30 segundos, portanto, mesmo se eles souberem o número que você usou para entrar na semana passada, eles ainda estão bloqueados. 

<iframe width="560" height="315" src="https://www.microsoft.com/pt-br/videoplayer/embed/RE4G1PP?pid=ocpVideo0-innerdiv-oneplayer&postJsllMsg=true&maskLevel=20&market=pt-br" title="Microsoft video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*Fonte Microsoft*

## Habilitar Duplo Fator de Auntenticação (2FA) no Microsoft 365
O procedimento a seguir descreve as ações necessárias para configurar o duplo fator de autenticação (2FA) nas contas de usuários do Microsoft 365 e Office 365.

Assim que configurado, o segundo fator de autenticação será solicitado em todos os dispositivos nos quais a pessoa costuma acessar a conta: no notebook, desktop, smartphone ou tablet.

### Quem pode usar o Duplo Fator de Autenticação (2FA) do Microsoft 365?
No momento os serviços estão disponíveis para usuários dos seguintes domínios:
 * @asav.org.br
 * @unisinos.br
 * @aneas.org.br

### Configurando o Duplo Fator de Autenticação (2FA)

Após o duplo fator de autenticação (2FA) ser habilitada em sua conta, você deverá concluir a configuração acessando o Microsoft 365 via navegador ou entrando diretamente no endereço [https://aka.ms/MFASetup](https://aka.ms/MFASetup).

Caso você opte por utilizar o segundo fator de autenticação no seu smartphone (recomendado), antes de iniciar a configuração em sua conta você já pode instalar o Microsoft Autenticador no seu smartphone (caso você ainda não utilize este recurso).

 * [Loja Apple](https://itunes.apple.com/app/microsoft-authenticator/id983156458)
 * [Loja Google](https://play.google.com/store/apps/details?id=com.azure.authenticator)

Neste momento você não conseguirá ainda configurar o aplicativo. Ele só ficará disponível para uso no decorrer da configuração.

 Para configurar a conta Office, siga os passos abaixo.

1. Acesse a sua conta do Office a partir de um navegador ([Office.com](https://office.com)). Se você estiver logado na conta, saia e efetue um novo logon.
2. Na tela onde aparece a mensagem **Mais informações necessárias** clique em **Avançar**.

![](/2fa-m365/img001.png)

3. Na tela **Verificação de Segurança adicional => Etapa 01: Como devemos entrar em contato com você** recomendamos o uso da opção **Aplicativo Móvel**.

![](/2fa-m365/img002.png)

4. Para configurar o duplo fator de autenticação com Aplicativo móvel, acesse o **Microsoft Authenticator** previamente instalado no seu smartphone. 

5. Selecione uma das opções apresentadas e clique em **Configurar**.

![](/2fa-m365/img003.png)

6. Na próxima tela serão apresentadas as instruções sobre como configurar sua conta no aplicativo **Microsoft Authenticator**. Siga os passos e depois clique em **Avançar**.
![](/2fa-m365/img004.png)

7. Caso você tenha selecionado **Receber notificações para a verificação** (passo 5), será encaminhada uma notificação para o aplicativo que foi instalado no seu smartphone. Você deverá aprovar a entrada. Dependendo do dispositivo utilizado, a entrada poderá ser aprovada pelo uso de sua senha ou de biometria (depende da confifuração de seu smartphone).

![](/2fa-m365/img005.png)

::: tip Dica!
Se no passo 5 você selecionou a opção **Usar código de verificação**, você deverá ir no aplicativo que você instalou e verificar o código que foi gerado na sua conta e em seguida inserir no campo solicitado.
:::

![](/2fa-m365/img006.png)

8. Na próxima tela você deve inserir um número de telefone para caso você perca acesso ao Aplicativo.

![](/2fa-m365/img007.png)

9. Na próxima tela, basta clicar em **Concluido**.

![](/2fa-m365/img008.png)

### Na próxima etapa serão solicitados dois métodos adicionais para que você não perca acesso à sua conta. 

Recomendamos que você utilize os métodos telefone e email.

#### Configurando o Método Telefone:
Na opção **Telefone de Autenticação está definido como +55 xxxxxxxx**, clique em **Verificar**

![](/2fa-m365/print10.png)

Insira o seu número de telefone e depois clique em **Enviar SMS para mim**

![](/2fa-m365/print11.png)

Um código de verificação será enviado para seu telefone, digite esse código no campo solicitado e depois clique em **verificar**. Após a validação selecione a opção **voltar** 

![](/2fa-m365/print12.png)

#### Configurando o Método Email:

Na opção **Email de Autenticação não está configurado**, clique em **Configurar agora** 

![](/2fa-m365/print10.png)

Insira o seu email pessoal e depois clique em **envie-me um email** 

![](/2fa-m365/print13.png)

Um código de verificação será enviado para seu email pessoal, digite esse código no campo solicitado e depois clique em **verificar**. Após a validação é selecionar a opção **voltar**

![](/2fa-m365/print14.png)

Configurados os dois métodos, é só clicar em **concluir** 

![](/2fa-m365/print15.png)

Mais detalhes podem ser encontrados em: [](https://docs.microsoft.com/en-us/azure/active-directory/user-help/multi-factor-authentication-end-user-manage-settings?redirectedfrom=MSDN)

<iframe width="560" height="315" src="https://www.youtube.com/embed/Q8OzabuNwHI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

 ## Problemas Comuns
 
Há alguns problemas comuns com a verificação de dois fatores que parecem ocorrer com mais frequência do que gostaríamos. Listamos abaixo algumas soluções para os problemas que podem ocorrer:
 
### Eu não tenho meu dispositivo móvel comigo

Isso acontece. Você deixou seu dispositivo móvel em casa e agora não pode usar o telefone para fazer a verificação. Entre em contato com o suporte da TI para obter ajuda.

### Meu dispositivo foi perdido ou roubado

Se você perdeu ou teve seu dispositivo móvel roubado, execute uma das seguintes ações:

   * Entre usando um método diferente.
   * Entre em contato com o suporte da TI para obter ajuda e peça para limpar as suas configurações.
   
É altamente recomendável informar a perda ou o roubo ao Suporte técnico da sua organização. O Suporte técnico pode fazer as atualizações apropriadas na sua conta. Após suas configurações serem limpas, você será solicitado a registrar-se para autenticação de dois fatores na próxima vez que você entrar.

*Fonte Microsoft*
### Alguém está tentando acessar a minha conta

Caso você receba no seu dispositivo móvel uma notificação para aprovar a entrada no Office 365 e não foi você que solicitou, sempre marque a opção **NEGAR** e depois selecione a opção **Relatório**. Marcando a opção relatório a equipe de segurança receberá alerta da tentativa de fraude. 

![](/img/2mfa1.jpeg)

![](/img/2mfa2.jpeg)

::: danger Importante!
Caso receba a notificação para autorizar a entrada e não foi você quem solicitou, troque a sua senha imediatamente.
:::
