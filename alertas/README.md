---
title: Últimas alertas de Cibersegurança
sidebar: auto
tags: 
  - alertas
  - vulnerabilidades
  - riscos
---

# Últimos alertas de Cibersegurança


## Google lança atualização urgente para corrigir grave vulnerabilidade Zero-Day no Chrome - (CVE-2022-1364)
*Data: 14/04/2022*

O Google disponibilizou patches de emergência para resolver dois problemas de segurança em seu navegador Chrome, um dos quais diz estar sendo ativamente explorado.

Registrado como CVE-2022-1364 , a falha gravidade está relacionada ao mecanismo JavaScript V8. Clément Lecigne, do Grupo de Análise de Ameaças do Google, foi creditado por relatar a falha em 13 de abril de 2022.

Com a correção mais recente, o Google corrigiu um total de três vulnerabilidades Zero-Day no Chrome desde o início do ano. É também o segundo tipo de bug relacionado à JavaScript a ser corrigida em menos de um mês.

Recomenda-se que os usuários atualizem o Chorme para a versão 100.0.4896.127 para Windows, macOS e Linux para impedir possíveis ameaças. Os usuários de navegadores baseados no Chromium, como Microsoft Edge, Brave, Opera e Vivaldi, também são aconselhados a aplicar as correções à medida que estiverem disponíveis.

Referências:
- [https://thehackernews.com/2022/04/google-releases-urgent-chrome-update-to.html](https://thehackernews.com/2022/04/google-releases-urgent-chrome-update-to.html)

## Apache Log4j2 Zero-Day - Log4Shell (CVE-2021-44228)
*Data: 11/12/2021*

Uma vulnerabilidade crítica de dia zero que afeta o Apache Log4j2 foi divulgada no dia 09/12. Apelidada de Log4Shell, quando explorada resulta em uma Execução de Código Remoto (RCE). Diversos relatos apontam que a vulnerabilidade está sendo ativamente explorada.

O Log4j2 é uma biblioteca Java amplamente utilizada. A biblioteca faz parte do projeto Apache Logging Services da Apache Software Foundation.

O diagrama a seguir apresenta a forma de ataque e as possíveis tecnicas de proteção.

![](/img/log4j_attack.png)

A versão 2.15.0 foi disponibilizada para correção do problema.

Referências:
  - [https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-44228](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-44228)
  - [https://logging.apache.org/log4j/2.x/security.html](https://logging.apache.org/log4j/2.x/security.html)
  - [https://www.govcert.ch/blog/zero-day-exploit-targeting-popular-java-library-log4j/](https://www.govcert.ch/blog/zero-day-exploit-targeting-popular-java-library-log4j/)

## VMware alerta para falha grave no vCenter (VMSA-2021-0020)
*Data: 22/09/2021*

A VMware emitiu um alerta sobre uma grave vulnerabilidade no vCenter. Correções foram disponibilizadas e devem ser aplicadas o mais rápido possível.

Referências:
 - [https://www.vmware.com/security/advisories/VMSA-2021-0020.html](https://www.vmware.com/security/advisories/VMSA-2021-0020.html)
 - [https://core.vmware.com/vmsa-2021-0020-questions-answers-faq#section1](https://core.vmware.com/vmsa-2021-0020-questions-answers-faq#section1)

## Microsoft MSHTML Remote Code Execution Vulnerability (CVE-2021-40444)
*Data: 10/09/2021*

Grave vulnerabilidade zero-day que pode ser explorada ao abrir um arquivo do Office malicioso. A solução de contorno é desabilitar o ActiveX do Internet Explorer.

Referências:
 - https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-40444
 - https://www.kaspersky.com/blog/cve-2021-40444-vulnerability-mshtml/41728/

## Golpe do boleto volta repaginado usando dados coletados em megavazamentos
*Data: 24/08/2021*

Um golpe antigo que já afetou milhares de brasileiros voltou a ganhar força graças a megavazamentos de dados ocorridos recentemente. A Axur Segurança Cibernética afirma que criminosos voltaram a usar boletos falsos em golpes nos quais as vítimas são convencidas a pagá-los através do uso de informações que lhes são familiares.

Fonte: https://canaltech.com.br/seguranca/golpe-do-boleto-volta-repaginado-usando-dados-coletados-em-megavazamentos-191782/

## Windows PrintNightmare - (CVE-2021-1675)
*Data: 01/07/2021*

Vulnerabilidade crítica no serviço spooler do Windows Print permite a execução de código remoto e elevação de privilégios. Apelidada de PrintNightmare, a exploração desta vulnerabilidade permite o comprometimento do Controlador de Domínio.
A Microsoft recomenda que o serviço Print Spooler seja desativado dos Controladores de Domínio e demais servidores não utilizados para impressão.

> Computer Configuration -> Administrative Templates -> Printers -> Allow Print Spooler to accept client connections set this to Disabled:

Atualização (08/07/2021 9:30)

Patches lançados e disponíveis https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-34527
Existem alguns relatos que os patches disponibilizados não corrigem completamente a vulnerabilidade, mas sua aplicação dificulta a exploração.

[CERT VultNote...](https://www.kb.cert.org/vuls/id/383432)

[CISA Alert](https://us-cert.cisa.gov/ncas/current-activity/2021/06/30/printnightmare-critical-windows-print-spooler-vulnerability)

![](/img/cve-2021-34527.jpg)

##  VMWare - Execução remota de código (CVE-2021-21985)
*Data: 25/05/2021*

O Client vSphere(HTML5) contém uma vulnerabilidade de execução remota de código devido à falta de validação de entrada no plug-in do Virtual SAN Health Check que é habilitado por padrão no vCenter Server. Um usuário malicioso com acesso de rede à porta 443 pode explorar essa vulnerabilidade para executar comandos com privilégios administrativos no sistema operacional que hospeda o vCenter Server.

[Maiores informações...](https://arstechnica.com/gadgets/2021/05/vulnerability-in-vmware-product-has-severity-rating-of-9-8-out-of-10/)

## Vulnerabilidade crítica no CORE CMS Drupal 
*Data: 22/04/2021*

Grave vulnerabilidade no CORE CMS Drupal.

Versões afetadas:
 - Drupal 9.1.x
 - Drupal 9.0.x
 - Drupal 8.9.x
 - Drupal 7.x

[Maiores informações...](https://www.drupal.org/sa-core-2021-002)


## CISA e FBI alertam para aumento de ciberataques contra colégios 
*Data: 18/12/2020*

A Agência de Segurança Cibernética e de Infraestrutura dos Estados Unidos (CISA), juntamente com o FBI, alertou sobre o aumento de ataques cibernéticos direcionados ao setor educacional K-12 (equivalente a Educação Básica). Os ataques mais comuns são ransoware, roubo de informações e interrupções de serviços de teleaula. O relatório ainda destaca que é esperado um aumento ainda maior para 2021.

[Maiores informações...](https://us-cert.cisa.gov/sites/default/files/publications/AA20-345A_Joint_Cybersecurity_Advisory_Distance_Learning_S508C.pdf)

## Fortinet FortiOS - Vulnerabilidade em software 
*Data: 10/11/2020*

Uma falha nos controles de limitação de acesso aos diretórios de recursos do serviço SSL VPN do FortiOS permite que um usuário não autenticado realize download de arquivos de sistema de um equipamento através da criação de requisições HTTP maliciosas (path transversal). O risco é potencializado em razão de, para exploração desta vulnerabilidade, ser o bastante o equipamento estar exposto à Internet ou a qualquer outra rede não controlada, não sendo necessário que o usuário malicioso obtenha credenciais de acesso. Realizando o download dos arquivos de sistema, o atacante pode ter acesso a informações de infraestrutura de rede, regras de permissão de tráfego, além de outras informações sensíveis sobre o equipamento que podem ser utilizados para a elaboração de ataques mais elaborados e persistentes à rede, servidores e sistemas.

[Maiores informações...](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-13379)

## Microsoft Windows - Elevação de privilégio (CVE-2020-1472)
*Data: 05/11/2020*

Conhecida como "Zerologon", uma falha no esquema de autenticação principal do protocolo remoto Netlogon (Microsoft Windows Netlogon Remote Protocol, MS-NRPC) do serviço Active Directory pode permitir a manipulação do esquema criptográfico, alterando a identidade de um computador ao realizar autenticação em um controlador de domínio e estabelecendo um canal de conexão com privilégios administrativos totais. A exploração desta vulnerabilidade pode permitir que um usuário malicioso realize ações graves tais como: alterar a conta administrativa do serviço Active Directory, criar novas contas administrativas e alterar credenciais de usuários administradores de domínio, executar comandos remotos e softwares maliciosos em qualquer computador de rede controlado pelo domínio, podendo, inclusive, causar infecção massiva por ransomware na rede.

[Maiores informações...](https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2020-1472)

##  VMWare - Execução remota de código (CVE-2020-3992)
*Data: 05/11/2020*
Uma falha no gerenciamento de memória do serviço Common Information Model (CIM) do VMWare pode permitir o acesso incorreto a determinado espaço alocado após o seu uso (user-after-free). A exploração desta vulnerabilidade pode permitir que um usuário malicioso que tenha acesso à rede de gerenciamento e ao protocolo OpenSLP, porta TCP/427, realize a execução de códigos com os privilégios administrativos em um host ESXi e hosts virtuais hospedados, podendo, inclusive, causar infecção massiva por ransomware.

[Maiores informações...](https://www.vmware.com/security/advisories/VMSA-2020-0023.html)

Teste
