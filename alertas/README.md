---
title: Últimas alertas de Cibersegurança
sidebar: auto
tags:
  - alertas
  - vulnerabilidades
  - riscos
---

# Últimos alertas de Cibersegurança

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
