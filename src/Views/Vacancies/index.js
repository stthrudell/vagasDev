import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, ScrollView, StatusBar as StatusBarReact, Linking, Button } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../../Services/api'

import * as S from './styles'
import Modal from '../../Components/Modal';

const repoDefault = {
    "id": 51001484,
    "node_id": "MDEwOlJlcG9zaXRvcnk1MTAwMTQ4NA==",
    "name": "vagas",
    "full_name": "frontendbr/vagas",
    "private": false,
    "owner": {
      "login": "frontendbr",
      "id": 16963863,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjE2OTYzODYz",
      "avatar_url": "https://avatars.githubusercontent.com/u/16963863?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/frontendbr",
      "html_url": "https://github.com/frontendbr",
      "followers_url": "https://api.github.com/users/frontendbr/followers",
      "following_url": "https://api.github.com/users/frontendbr/following{/other_user}",
      "gists_url": "https://api.github.com/users/frontendbr/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/frontendbr/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/frontendbr/subscriptions",
      "organizations_url": "https://api.github.com/users/frontendbr/orgs",
      "repos_url": "https://api.github.com/users/frontendbr/repos",
      "events_url": "https://api.github.com/users/frontendbr/events{/privacy}",
      "received_events_url": "https://api.github.com/users/frontendbr/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "html_url": "https://github.com/frontendbr/vagas",
    "description": ":microscope: Espaço para divulgação de vagas para front-enders.",
    "fork": false,
    "url": "https://api.github.com/repos/frontendbr/vagas",
    "forks_url": "https://api.github.com/repos/frontendbr/vagas/forks",
    "keys_url": "https://api.github.com/repos/frontendbr/vagas/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/frontendbr/vagas/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/frontendbr/vagas/teams",
    "hooks_url": "https://api.github.com/repos/frontendbr/vagas/hooks",
    "issue_events_url": "https://api.github.com/repos/frontendbr/vagas/issues/events{/number}",
    "events_url": "https://api.github.com/repos/frontendbr/vagas/events",
    "assignees_url": "https://api.github.com/repos/frontendbr/vagas/assignees{/user}",
    "branches_url": "https://api.github.com/repos/frontendbr/vagas/branches{/branch}",
    "tags_url": "https://api.github.com/repos/frontendbr/vagas/tags",
    "blobs_url": "https://api.github.com/repos/frontendbr/vagas/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/frontendbr/vagas/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/frontendbr/vagas/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/frontendbr/vagas/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/frontendbr/vagas/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/frontendbr/vagas/languages",
    "stargazers_url": "https://api.github.com/repos/frontendbr/vagas/stargazers",
    "contributors_url": "https://api.github.com/repos/frontendbr/vagas/contributors",
    "subscribers_url": "https://api.github.com/repos/frontendbr/vagas/subscribers",
    "subscription_url": "https://api.github.com/repos/frontendbr/vagas/subscription",
    "commits_url": "https://api.github.com/repos/frontendbr/vagas/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/frontendbr/vagas/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/frontendbr/vagas/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/frontendbr/vagas/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/frontendbr/vagas/contents/{+path}",
    "compare_url": "https://api.github.com/repos/frontendbr/vagas/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/frontendbr/vagas/merges",
    "archive_url": "https://api.github.com/repos/frontendbr/vagas/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/frontendbr/vagas/downloads",
    "issues_url": "https://api.github.com/repos/frontendbr/vagas/issues{/number}",
    "pulls_url": "https://api.github.com/repos/frontendbr/vagas/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/frontendbr/vagas/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/frontendbr/vagas/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/frontendbr/vagas/labels{/name}",
    "releases_url": "https://api.github.com/repos/frontendbr/vagas/releases{/id}",
    "deployments_url": "https://api.github.com/repos/frontendbr/vagas/deployments",
    "created_at": "2016-02-03T13:30:09Z",
    "updated_at": "2021-03-27T22:25:19Z",
    "pushed_at": "2020-12-08T15:41:15Z",
    "git_url": "git://github.com/frontendbr/vagas.git",
    "ssh_url": "git@github.com:frontendbr/vagas.git",
    "clone_url": "https://github.com/frontendbr/vagas.git",
    "svn_url": "https://github.com/frontendbr/vagas",
    "homepage": "",
    "size": 116,
    "stargazers_count": 6090,
    "watchers_count": 6090,
    "language": null,
    "has_issues": true,
    "has_projects": false,
    "has_downloads": true,
    "has_wiki": false,
    "has_pages": false,
    "forks_count": 543,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 355,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 543,
    "open_issues": 355,
    "watchers": 6090,
    "default_branch": "main",
    "temp_clone_token": null,
    "organization": {
      "login": "frontendbr",
      "id": 16963863,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjE2OTYzODYz",
      "avatar_url": "https://avatars.githubusercontent.com/u/16963863?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/frontendbr",
      "html_url": "https://github.com/frontendbr",
      "followers_url": "https://api.github.com/users/frontendbr/followers",
      "following_url": "https://api.github.com/users/frontendbr/following{/other_user}",
      "gists_url": "https://api.github.com/users/frontendbr/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/frontendbr/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/frontendbr/subscriptions",
      "organizations_url": "https://api.github.com/users/frontendbr/orgs",
      "repos_url": "https://api.github.com/users/frontendbr/repos",
      "events_url": "https://api.github.com/users/frontendbr/events{/privacy}",
      "received_events_url": "https://api.github.com/users/frontendbr/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "network_count": 543,
    "subscribers_count": 1312
  }

const vagas = [
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4555",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4555/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4555/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4555/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4555",
      "id": 842522809,
      "node_id": "MDU6SXNzdWU4NDI1MjI4MDk=",
      "number": 4555,
      "title": "[São Paulo / Remoto ] Full Stack Developer (Foco Front-end) NodeJS - Vórtx",
      "user": {
        "login": "jhomarolo-vortx",
        "id": 51677836,
        "node_id": "MDQ6VXNlcjUxNjc3ODM2",
        "avatar_url": "https://avatars.githubusercontent.com/u/51677836?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/jhomarolo-vortx",
        "html_url": "https://github.com/jhomarolo-vortx",
        "followers_url": "https://api.github.com/users/jhomarolo-vortx/followers",
        "following_url": "https://api.github.com/users/jhomarolo-vortx/following{/other_user}",
        "gists_url": "https://api.github.com/users/jhomarolo-vortx/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/jhomarolo-vortx/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/jhomarolo-vortx/subscriptions",
        "organizations_url": "https://api.github.com/users/jhomarolo-vortx/orgs",
        "repos_url": "https://api.github.com/users/jhomarolo-vortx/repos",
        "events_url": "https://api.github.com/users/jhomarolo-vortx/events{/privacy}",
        "received_events_url": "https://api.github.com/users/jhomarolo-vortx/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 324087046,
          "node_id": "MDU6TGFiZWwzMjQwODcwNDY=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Alocado",
          "name": "Alocado",
          "color": "6befe6",
          "default": false,
          "description": ""
        },
        {
          "id": 321622629,
          "node_id": "MDU6TGFiZWwzMjE2MjI2Mjk=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/CLT",
          "name": "CLT",
          "color": "7fe266",
          "default": false,
          "description": ""
        },
        {
          "id": 321622469,
          "node_id": "MDU6TGFiZWwzMjE2MjI0Njk=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/J%C3%BAnior",
          "name": "Júnior",
          "color": "6c46ea",
          "default": false,
          "description": ""
        },
        {
          "id": 321622540,
          "node_id": "MDU6TGFiZWwzMjE2MjI1NDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Pleno",
          "name": "Pleno",
          "color": "6c46ea",
          "default": false,
          "description": ""
        },
        {
          "id": 324086912,
          "node_id": "MDU6TGFiZWwzMjQwODY5MTI=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Remoto",
          "name": "Remoto",
          "color": "6befe6",
          "default": false,
          "description": ""
        },
        {
          "id": 1178245525,
          "node_id": "MDU6TGFiZWwxMTc4MjQ1NTI1",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%A3o%20Paulo",
          "name": "São Paulo",
          "color": "f9745c",
          "default": false,
          "description": ""
        },
        {
          "id": 321622600,
          "node_id": "MDU6TGFiZWwzMjE2MjI2MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%AAnior",
          "name": "Sênior",
          "color": "6c46ea",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-27T15:05:01Z",
      "updated_at": "2021-03-27T15:05:44Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "## Nossa empresa\r\n\r\nSomos um time de tecnologia com foco no cliente (interno e externo) e em inovação constante, sempre voltado para resultados de negócio e entregas.\r\n\r\nTambém somos agilistas, portanto XP/SCRUM/Kanban/Pair Programming fazem parte do nosso dia a dia. Inclusive trabalhamos em Squads.\r\n\r\n\r\n## Descrição da vaga\r\n\r\nDesenvolvimento de novos sistemas, implantação, manutenção de sistemas e suas API's – REST e GraphQL;\r\n\r\nNossa Stack é principalmente feita em C# e NodeJS (que está crescendo muito por aqui), porém possuímos minoritariamente sistemas em PHP;\r\n\r\nPossuímos inúmeros bancos de dados, mas os predominantes são SQL Server, MongoDB e PostgreSQL. Assim, seria legal você saber sobre SQL / Big Data / NoSQL;\r\n\r\nPropor novas tecnologias e formas diferentes de programar, afinal nada é escrito na pedra 😉.\r\n\r\nGostamos muito de DDD/ BDD / TDD / Clean Architecture, estes conceitos precisam estar claros para você pois irá colocá-los em prática aqui.\r\n\r\nNosso site: https://vortx.com.br/\r\n## Local\r\n\r\nRemoto ou Escritório (estamos remoto durante a pandemia) , São Paulo - em frente ao metrô Pinheiros\r\n\r\n## Requisitos\r\n\r\n**Obrigatórios:**\r\n\r\n· Conhecimento sólido em arquitetura web;\r\n· Conhecimento sólido em pelo menos uma linguagem de programação;\r\n· Sede por aprender coisas novas;\r\n· Boa comunicação e gostar de trabalhar em equipe;\r\n· Inglês intermediário/avançado.\r\n· Gostar de contribuir para projetos open-source, temos uma biblioteca própria, o herbsJS e estamos em constante evolução nesta frente.\r\n\r\n**Desejáveis:**\r\n· Node.js;\r\n· SQL;\r\n· AWS;\r\n· Angular / React\r\n\r\n**Diferenciais:**\r\n- projetos opensource (@herbsjs)\r\n- meetups\r\n- participação em comunidades e eventos\r\n- treinamentos técnicos\r\n- auxilio para certificações\r\n\r\n## Benefícios\r\n\r\n- Plano de saúde\r\n- VR/VA de R$ 1.150 por mês\r\n- Auxílio creche\r\n- Bônus (PLR)\r\n- Auxílio educação\r\n- Oportunidade de compra de ações \r\n\r\n## Contratação\r\n\r\nCLT Full\r\n\r\n## Como se candidatar\r\n\r\nSe cadastre pelo [Kenoby](https://jobs.kenoby.com/vortx/job/desenvolvedor-full-stack/5e50139600d72114f5ac396b)\r\n\r\n## Tempo médio de feedbacks\r\n\r\nNosso processo é bem rápido e costumamos não ser burocráticos.\r\nCostumamos enviar feedbacks em até 2 dias após cada processo. E o processo no total costuma levar de 1 a duas semanas.\r\n\r\n## Labels\r\n\r\n#### Alocação\r\n- Alocado\r\n- Remoto\r\n\r\n#### Regime\r\n- CLT\r\n\r\n#### Nível\r\n- Júnior\r\n- Pleno\r\n- Sênior\r\n",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4554",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4554/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4554/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4554/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4554",
      "id": 842349948,
      "node_id": "MDU6SXNzdWU4NDIzNDk5NDg=",
      "number": 4554,
      "title": "[Uberaba] Full-Stack Developer na Grão Direto ",
      "user": {
        "login": "felpshn",
        "id": 68015575,
        "node_id": "MDQ6VXNlcjY4MDE1NTc1",
        "avatar_url": "https://avatars.githubusercontent.com/u/68015575?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/felpshn",
        "html_url": "https://github.com/felpshn",
        "followers_url": "https://api.github.com/users/felpshn/followers",
        "following_url": "https://api.github.com/users/felpshn/following{/other_user}",
        "gists_url": "https://api.github.com/users/felpshn/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/felpshn/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/felpshn/subscriptions",
        "organizations_url": "https://api.github.com/users/felpshn/orgs",
        "repos_url": "https://api.github.com/users/felpshn/repos",
        "events_url": "https://api.github.com/users/felpshn/events{/privacy}",
        "received_events_url": "https://api.github.com/users/felpshn/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 321622629,
          "node_id": "MDU6TGFiZWwzMjE2MjI2Mjk=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/CLT",
          "name": "CLT",
          "color": "7fe266",
          "default": false,
          "description": ""
        },
        {
          "id": 1504140182,
          "node_id": "MDU6TGFiZWwxNTA0MTQwMTgy",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Especialista",
          "name": "Especialista",
          "color": "d114bb",
          "default": false,
          "description": ""
        },
        {
          "id": 1178249004,
          "node_id": "MDU6TGFiZWwxMTc4MjQ5MDA0",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Minas%20Gerais",
          "name": "Minas Gerais",
          "color": "f9745c",
          "default": false,
          "description": ""
        },
        {
          "id": 321622540,
          "node_id": "MDU6TGFiZWwzMjE2MjI1NDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Pleno",
          "name": "Pleno",
          "color": "6c46ea",
          "default": false,
          "description": ""
        },
        {
          "id": 321622600,
          "node_id": "MDU6TGFiZWwzMjE2MjI2MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%AAnior",
          "name": "Sênior",
          "color": "6c46ea",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-26T23:08:38Z",
      "updated_at": "2021-03-26T23:09:19Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "## Grão Direto\r\n\r\nAssim como a Uber revolucionou o mercado de transporte, o Nubank o mercado bancário e várias outras startups mudaram seus respectivos mercados, a Grão Direto revoluciona o agronegócio conectando toda a cadeia de comercialização. Através da tecnologia, vendedores e compradores podem negociar grãos de forma muito mais rápida e eficiente, tornando a compra e venda de milho, soja, sorgo e outros grãos muito mais moderna e segura!\r\n\r\n## Descrição da vaga\r\n\r\nVocê irá integrar a equipe de engenharia da Grão Direto, que utiliza metodologia ágil de desenvolvimento na entrega de produtos de alta tecnologia. Nossos engenheiros atuam tanto em frontend quanto backend durante todo o ciclo de vida da solução, e encaram desafios complexos na computação em larga escala, utilizando habilidades em estruturas de dados, algoritmos e programação orientada a objetos. Nosso time é colaborativo por natureza, e você terá voz ativa durante todo o processo, sempre com o objetivo de construir produtos que promovam excelentes experiências para nossos clientes.\r\n\r\n## Local\r\n\r\n[PRESENCIAL] UBERABA, MINAS GERAIS\r\n\r\n## Requisitos\r\n\r\n**Obrigatórios:**\r\n- Conhecimento de conceitos básicos como estrutura de dados, algoritmos, orientação a objetos, etc;\r\n- Conhecimento em estrutura e consulta em Bancos de Dados relacionais.\r\n- Experiência em desenvolvimento de aplicações WEB, seja frontend ou backend.\r\n- Linguagens de desenvolvimento web HTML/CSS/JavaScript.\r\n- Habilidade para comunicação e escuta ativa.\r\n\r\n**Desejáveis:**\r\n- Experiência em boas práticas de desenvolvimento de software, como TDD, Clean Code, Padrões de Projeto e SOLID;\r\n- Experiência nas linguagens Angular, Node.js e Ionic.\r\n- Experiência em banco de dados MySQL (criação de views, procedures, functions, etc).\r\n- Contato com ambiente em nuvem Amazon AWS.\r\n- Vivência de cultura DevOps e automação de tarefas de integração e entrega.\r\n- Conceitos de metodologias ágeis (Scrum/Kanban).\r\n- Inglês intermediário.\r\n\r\n## Benefícios\r\n\r\n- Existe sim ALMOÇO GRÁTIS! ;) (Dois restaurantes conveniados para você escolher seu almoço todos os dias).\r\n- Sua SAÚDE em primeiro lugar! (Plano de saúde - a mensalidade do seu plano você deixa com a gente).\r\n- Com SORRISO tudo fica melhor! (Plano Odontológico - esta mensalidade também é nossa).\r\n- Apoiamos ainda mais seu DESENVOLVIMENTO PESSOAL! (Terapia, academia, cursos, livros além de outros itens que podem ajudar no seu desenvolvimento mental e físico, nós te incentivamos com um valor mensal).\r\n- Não é de Uberaba e está de MUDANÇA pra cá? (Auxílio Mudança - Apoio financeiro para te ajudar com as despesas da mudança + nosso apoio para você conhecer a nova cidade, encontrar um ótimo lugar para morar e realocar a família.).\r\n\r\n**Diferenciais:**\r\n- Ambiente descontraído\r\n- Horário flexível\r\n- Sala de jogos\r\n- Time jovem e engajado\r\n\r\n## Contratação\r\n\r\nCLT Período Integral (8hrs/dia)\r\n\r\n## Como se candidatar para essa vaga\r\n\r\nhttps://graodiretovagas.gupy.io/candidates/jobs/621308/apply\r\n\r\n## Também temos vagas para outros setores relacionados a tecnologia!!!\r\n\r\nhttps://www.graodireto.com.br/vagas/vagas-disponiveis.php\r\n\r\n## Tempo médio de feedbacks\r\n\r\nCostumamos enviar feedbacks em até 07 dias após cada processo.\r\nE-mail para contato em caso de não haver resposta: ursula@graodireto.com.br\r\n\r\n#### Nível\r\n- Pleno\r\n- Sênior\r\n- Especialista",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4553",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4553/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4553/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4553/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4553",
      "id": 842332581,
      "node_id": "MDU6SXNzdWU4NDIzMzI1ODE=",
      "number": 4553,
      "title": "[REMOTO] Front-end Developer na Studos/Arco Educação",
      "user": {
        "login": "keitoliveira",
        "id": 3808430,
        "node_id": "MDQ6VXNlcjM4MDg0MzA=",
        "avatar_url": "https://avatars.githubusercontent.com/u/3808430?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/keitoliveira",
        "html_url": "https://github.com/keitoliveira",
        "followers_url": "https://api.github.com/users/keitoliveira/followers",
        "following_url": "https://api.github.com/users/keitoliveira/following{/other_user}",
        "gists_url": "https://api.github.com/users/keitoliveira/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/keitoliveira/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/keitoliveira/subscriptions",
        "organizations_url": "https://api.github.com/users/keitoliveira/orgs",
        "repos_url": "https://api.github.com/users/keitoliveira/repos",
        "events_url": "https://api.github.com/users/keitoliveira/events{/privacy}",
        "received_events_url": "https://api.github.com/users/keitoliveira/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 324087046,
          "node_id": "MDU6TGFiZWwzMjQwODcwNDY=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Alocado",
          "name": "Alocado",
          "color": "6befe6",
          "default": false,
          "description": ""
        },
        {
          "id": 321622629,
          "node_id": "MDU6TGFiZWwzMjE2MjI2Mjk=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/CLT",
          "name": "CLT",
          "color": "7fe266",
          "default": false,
          "description": ""
        },
        {
          "id": 321622540,
          "node_id": "MDU6TGFiZWwzMjE2MjI1NDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Pleno",
          "name": "Pleno",
          "color": "6c46ea",
          "default": false,
          "description": ""
        },
        {
          "id": 324086912,
          "node_id": "MDU6TGFiZWwzMjQwODY5MTI=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Remoto",
          "name": "Remoto",
          "color": "6befe6",
          "default": false,
          "description": ""
        },
        {
          "id": 1178245525,
          "node_id": "MDU6TGFiZWwxMTc4MjQ1NTI1",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%A3o%20Paulo",
          "name": "São Paulo",
          "color": "f9745c",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-26T22:21:31Z",
      "updated_at": "2021-03-26T22:42:21Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "<!-- \r\n==================================================\r\nPOR FAVOR, SÓ POSTE SE A VAGA FOR PARA FRONT-END!\r\n\r\nNão faça distinção de gênero no título da vaga.\r\n\r\nUse: \"Front-End Developer\" ao invés de \r\n\"Desenvolvedor Front-End\" \\o/\r\n\r\nExemplo: `[São Paulo] Front-End Developer na NOME DA EMPRESA`\r\n==================================================\r\n-->\r\n\r\n<!--\r\n==================================================\r\nCaso a vaga for remoto durante a pandemia deixar a linha abaixo\r\n==================================================\r\n-->\r\n\r\n## Nossa empresa\r\n\r\nNós somos uma plataforma educacional focada em facilitar a vida dos professores e coordenadores, criando ferramentas de apoio para otimizar os processos pedagógicos e, também, na melhora do desempenho dos alunos.\r\n\r\nEntendemos que todos devem ter acesso a novas formas de estudar, sendo assim, desenvolvemos uma plataforma que potencializa o ensino na sala da aula e também fora dela. \r\n\r\nAtuamos nos segmentos de Pré-Vestibular e ENEM, Concursos Públicos, Concursos Militares, OAB e Ensino Superior. \r\n\r\nHoje, já contamos com mais de 1 milhão usuários em todo Brasil.\r\n\r\n## Descrição da vaga\r\n\r\n- Participar de planejamentos junto aos demais times, do desenvolvimento do nosso design system, refactoring de nossas plataformas e das integrações com sistemas parceiros\r\n- Participar da documentação técnica e de processos dentro do time\r\n- Ter comunicação clara e descomplicada, disseminar conhecimento através de pair-programming, code review ou treinamento, ajudando os desenvolvedores a avançar em suas carreiras\r\n\r\n## Local\r\n\r\nCaso você seja de SC, há opção de ir para o escritório se desejar. Nosso escritório está localizado no bairro João Paulo, em  Florianópolis. Remoto para outras localidades.\r\n\r\n## Requisitos\r\nPedimos conhecimento naquilo que realmente usamos 🚀\r\n\r\n**Obrigatórios:**\r\n- 3+ anos de experiência com desenvolvimento Front-End\r\n- Conhecimento sólido em HTML e CSS\r\n- Conhecimento em JavaScript\r\n- Conhecimento em React\r\n- Conhecimento em práticas de acessibilidade\r\n- Boa comunicação\r\n\r\n**Desejáveis:**\r\n- Conhecimento em práticas de performance\r\n\r\n**Diferenciais:**\r\n- Conhecimento em testes unitários e de integração com Jest e/ou Cypress\r\n- Conhecimento em module bundler Webpack e/ou Rollup\r\n- Participação anterior em desenvolvimento de design system\r\n- CSS-in-JS\r\n- Lerna\r\n- Conhecimento em criação e manutenção de CI/CD para projetos Front-End e publicação de pacotes através do NPM ou GitHub\r\n- Conhecimentos em Graphql\r\n\r\n## Benefícios\r\n\r\n- Vale Refeição ou Vale Alimentação\r\n- Plano de saúde\r\n- [Zenklub](https://zenklub.com.br/) com direito a 2 consultas grátis e 2 sessões com custo reduzido\r\n- Vale Transporte (Alocado)\r\n- Gympass\r\n- Ajuda de custo para Home Office (Remoto)\r\n- Se precisarmos que vá em nossa sede, arcamos com todos os custos (Remoto)\r\n- Folga de aniversário\r\n\r\n## Contratação\r\n\r\nCLT\r\n\r\n## Como se candidatar\r\n\r\nEnviar um e-mail para keit@arcotech.io com assunto \"Vaga Front-End Developer\" com pretensão salarial atual, o link do Github caso tenha projetos open source que deseje apresentar e link do LinkedIn.\r\n\r\n## Tempo médio de feedbacks\r\n\r\nCostumamos enviar feedbacks em até 4 dias úteis após cada processo.\r\n\r\n## Labels\r\n<!-- retire os labels que não fazem sentido à vaga -->\r\n\r\n#### Alocação\r\n- Remoto\r\n\r\n#### Regime\r\n- CLT\r\n\r\n#### Nível\r\n- Pleno\r\n\r\n\r\n",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4552",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4552/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4552/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4552/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4552",
      "id": 842329779,
      "node_id": "MDU6SXNzdWU4NDIzMjk3Nzk=",
      "number": 4552,
      "title": "[REMOTO] Senior Frontend Developer na FOTON",
      "user": {
        "login": "Felipepirova",
        "id": 80839531,
        "node_id": "MDQ6VXNlcjgwODM5NTMx",
        "avatar_url": "https://avatars.githubusercontent.com/u/80839531?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Felipepirova",
        "html_url": "https://github.com/Felipepirova",
        "followers_url": "https://api.github.com/users/Felipepirova/followers",
        "following_url": "https://api.github.com/users/Felipepirova/following{/other_user}",
        "gists_url": "https://api.github.com/users/Felipepirova/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Felipepirova/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Felipepirova/subscriptions",
        "organizations_url": "https://api.github.com/users/Felipepirova/orgs",
        "repos_url": "https://api.github.com/users/Felipepirova/repos",
        "events_url": "https://api.github.com/users/Felipepirova/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Felipepirova/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 321622540,
          "node_id": "MDU6TGFiZWwzMjE2MjI1NDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Pleno",
          "name": "Pleno",
          "color": "6c46ea",
          "default": false,
          "description": ""
        },
        {
          "id": 324086912,
          "node_id": "MDU6TGFiZWwzMjQwODY5MTI=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Remoto",
          "name": "Remoto",
          "color": "6befe6",
          "default": false,
          "description": ""
        },
        {
          "id": 321622600,
          "node_id": "MDU6TGFiZWwzMjE2MjI2MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%AAnior",
          "name": "Sênior",
          "color": "6c46ea",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-26T22:14:52Z",
      "updated_at": "2021-03-26T22:15:33Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "## Descrição da vaga\r\n\r\nSe você é um desenvolvedor Frontend Pleno/Senior e ama trabalhar com React, estamos atrás de você!\r\n\r\n## Requisitos\r\n- React.js (Ser experiente)\r\n- Inglês avançado/fluente (Talking em dia)\r\n\r\n## Como se candidatar\r\n\r\nPara saber mais sobre a vaga -> twitter @fpirova instagram @pirovinha\r\n\r\n## Labels\r\n\r\n- 🏢 Remoto\r\n- 👨 Pleno\r\n- 👴 Sênior\r\n- ⚖️ A-Combinar\r\n\r\n",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4551",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4551/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4551/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4551/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4551",
      "id": 842241246,
      "node_id": "MDU6SXNzdWU4NDIyNDEyNDY=",
      "number": 4551,
      "title": "[São Paulo] Desenvolvedor .Net + Angular/Angular JS [CAMARASYS Tecnologia]",
      "user": {
        "login": "rhcamarasys",
        "id": 81440920,
        "node_id": "MDQ6VXNlcjgxNDQwOTIw",
        "avatar_url": "https://avatars.githubusercontent.com/u/81440920?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/rhcamarasys",
        "html_url": "https://github.com/rhcamarasys",
        "followers_url": "https://api.github.com/users/rhcamarasys/followers",
        "following_url": "https://api.github.com/users/rhcamarasys/following{/other_user}",
        "gists_url": "https://api.github.com/users/rhcamarasys/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/rhcamarasys/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/rhcamarasys/subscriptions",
        "organizations_url": "https://api.github.com/users/rhcamarasys/orgs",
        "repos_url": "https://api.github.com/users/rhcamarasys/repos",
        "events_url": "https://api.github.com/users/rhcamarasys/events{/privacy}",
        "received_events_url": "https://api.github.com/users/rhcamarasys/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 321622700,
          "node_id": "MDU6TGFiZWwzMjE2MjI3MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/PJ",
          "name": "PJ",
          "color": "7fe266",
          "default": false,
          "description": ""
        },
        {
          "id": 321622540,
          "node_id": "MDU6TGFiZWwzMjE2MjI1NDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Pleno",
          "name": "Pleno",
          "color": "6c46ea",
          "default": false,
          "description": ""
        },
        {
          "id": 324086912,
          "node_id": "MDU6TGFiZWwzMjQwODY5MTI=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Remoto",
          "name": "Remoto",
          "color": "6befe6",
          "default": false,
          "description": ""
        },
        {
          "id": 1178245525,
          "node_id": "MDU6TGFiZWwxMTc4MjQ1NTI1",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%A3o%20Paulo",
          "name": "São Paulo",
          "color": "f9745c",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-26T19:26:11Z",
      "updated_at": "2021-03-26T19:26:55Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "<!-- \r\n==================================================\r\nPOR FAVOR, SÓ POSTE SE A VAGA FOR PARA FRONT-END!\r\n\r\nNão faça distinção de gênero no título da vaga.\r\n\r\nUse: \"Front-End Developer\" ao invés de \r\n\"Desenvolvedor Front-End\" \\o/\r\n\r\nExemplo: `[São Paulo] Front-End Developer na NOME DA EMPRESA`\r\n==================================================\r\n-->\r\n\r\n<!--\r\n==================================================\r\nCaso a vaga for remoto durante a pandemia deixar a linha abaixo\r\n==================================================\r\n-->\r\n\r\n\r\n## CAMARASYS Tecnologia\r\n\r\nAtuante no desenvolvimento de soluções sistêmicas, nascemos de um sonho pela busca da constante inovação e acesso à tecnologia para todos, proporcionando aos nossos clientes um direcionamento com mais integridade e segurança.\r\n\r\n## Descrição da vaga\r\n\r\nDesenvolvedor .Net + Angular/Angular JS\r\n## Local\r\n[São Paulo], [São Paulo], [Alphaville]\r\n## Requisitos\r\n**Obrigatórios:**\r\nEnsino Superior completo na área de exatas. \r\n- Desenvolvimento em .NET Full Framework.\r\n- Desenvolvimento em Angular JS.\r\n- Linguagem C#\r\n- Web API Rest\r\n- Orientação a objetos\r\n- Aplicações em camadas\r\n\r\nCompetências comportamentais obrigatórias:\r\n- Boa comunicação\r\n- Resiliência\r\n- Proativo\r\n\r\n**Desejáveis:**\r\n- Metodologia Agile Scrum.\r\n- Azure DevOps, para o gerenciamento do ciclo de vida das aplicações.\r\n- Github, para o controle de versionamento dos scripts de desenvolvimento das aplicações.\r\n\r\n**Diferenciais:**\r\n- projetos opensource\r\n\r\n## Como se candidatar\r\nPor favor envie um email para rh@camarasys.com.br com seu CV anexado - enviar no assunto: Vaga A117\r\n\r\n## Tempo médio de feedbacks\r\nCostumamos enviar feedbacks em até 2 dias após cada processo.\r\nE-mail para contato em caso de não haver resposta: rh@camarasys.com.br\r\n\r\n#### Alocação\r\n- Remoto\r\n\r\n#### Regime\r\n- PJ\r\n\r\n- Pleno",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4550",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4550/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4550/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4550/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4550",
      "id": 841920959,
      "node_id": "MDU6SXNzdWU4NDE5MjA5NTk=",
      "number": 4550,
      "title": "[São Paulo] Front-end Developer - Angular na MJV Tecnology",
      "user": {
        "login": "Ys2801",
        "id": 81336094,
        "node_id": "MDQ6VXNlcjgxMzM2MDk0",
        "avatar_url": "https://avatars.githubusercontent.com/u/81336094?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Ys2801",
        "html_url": "https://github.com/Ys2801",
        "followers_url": "https://api.github.com/users/Ys2801/followers",
        "following_url": "https://api.github.com/users/Ys2801/following{/other_user}",
        "gists_url": "https://api.github.com/users/Ys2801/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Ys2801/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Ys2801/subscriptions",
        "organizations_url": "https://api.github.com/users/Ys2801/orgs",
        "repos_url": "https://api.github.com/users/Ys2801/repos",
        "events_url": "https://api.github.com/users/Ys2801/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Ys2801/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 321622629,
          "node_id": "MDU6TGFiZWwzMjE2MjI2Mjk=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/CLT",
          "name": "CLT",
          "color": "7fe266",
          "default": false,
          "description": ""
        },
        {
          "id": 321622540,
          "node_id": "MDU6TGFiZWwzMjE2MjI1NDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Pleno",
          "name": "Pleno",
          "color": "6c46ea",
          "default": false,
          "description": ""
        },
        {
          "id": 324086912,
          "node_id": "MDU6TGFiZWwzMjQwODY5MTI=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Remoto",
          "name": "Remoto",
          "color": "6befe6",
          "default": false,
          "description": ""
        },
        {
          "id": 1178249892,
          "node_id": "MDU6TGFiZWwxMTc4MjQ5ODky",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Rio%20de%20Janeiro",
          "name": "Rio de Janeiro",
          "color": "f9745c",
          "default": false,
          "description": ""
        },
        {
          "id": 1178245525,
          "node_id": "MDU6TGFiZWwxMTc4MjQ1NTI1",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%A3o%20Paulo",
          "name": "São Paulo",
          "color": "f9745c",
          "default": false,
          "description": ""
        },
        {
          "id": 321622600,
          "node_id": "MDU6TGFiZWwzMjE2MjI2MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%AAnior",
          "name": "Sênior",
          "color": "6c46ea",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-26T12:37:04Z",
      "updated_at": "2021-03-26T12:37:43Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "<!-- \r\n==================================================\r\nPOR FAVOR, SÓ POSTE SE A VAGA FOR PARA FRONT-END!\r\n\r\nNão faça distinção de gênero no título da vaga.\r\n\r\nUse: \"Front-End Developer\" ao invés de \r\n\"Desenvolvedor Front-End\" \\o/\r\n\r\nExemplo: `[São Paulo] Front-End Developer na NOME DA EMPRESA`\r\n==================================================\r\n-->\r\n\r\n<!--\r\n==================================================\r\nCaso a vaga for remoto durante a pandemia deixar a linha abaixo\r\n==================================================\r\n-->\r\n\r\n## Nossa empresa\r\n\r\nSomos a MJV uma empresa focada em tecnologia e inovação, com mais de 21 anos no mercado, com escritórios no Rio de Janeiro, São Paulo, Curitiba, Roma, França, Londres, Colômbia e Estados Unidos. Atuando dentro dos maiores clientes como Bradesco Seguros, Santander, Sulamérica, Safra.\r\n\r\n## Descrição da vaga\r\n\r\nSobre o desafio �\r\n\r\nSerá responsável pelo desenvolvimento de novos projetos e manutenção aos mesmos.\r\n\r\nPra gente dar #match precisamos que você conheça ✅\r\n\r\nConhecimentos necessários: Front end (Angular 2+, HTML, CSS, Javascript). Programar interfaces de Web e ferramentas de edição de imagem. Executa a manutenção dos sistemas, fazendo eventuais correções necessárias.\r\n\r\n\r\n## Local\r\n\r\nHome Office \r\n## Requisitos\r\n\r\n**Obrigatórios:**\r\n- Experiência com Angular\r\n\r\n## Benefícios\r\n\r\n- Plano de saúde\r\n- Plano Odontológico\r\n- Seguro de vida\r\n- VR \r\n\r\n## Contratação\r\n\r\nCLT\r\n\r\n## Como se candidatar\r\n\r\nPor favor envie um email para yasmin.ferreira@mjv.com.br com seu CV anexado - enviar no assunto: Vaga NodeJS\r\n\r\n## Tempo médio de feedbacks\r\n\r\nCostumamos enviar feedbacks em até 05 dias após cada processo.\r\n\r\n#### Alocação\r\n- Remoto\r\n\r\n#### Regime\r\n- CLT\r\n\r\n\r\n#### Nível\r\n- Pleno\r\n- Sênior\r\n\r\n\r\n\r\n",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4549",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4549/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4549/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4549/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4549",
      "id": 841522262,
      "node_id": "MDU6SXNzdWU4NDE1MjIyNjI=",
      "number": 4549,
      "title": "[Belo Horizonte] Front-end Developer na SysMap Solutions",
      "user": {
        "login": "ngomes28",
        "id": 81397450,
        "node_id": "MDQ6VXNlcjgxMzk3NDUw",
        "avatar_url": "https://avatars.githubusercontent.com/u/81397450?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/ngomes28",
        "html_url": "https://github.com/ngomes28",
        "followers_url": "https://api.github.com/users/ngomes28/followers",
        "following_url": "https://api.github.com/users/ngomes28/following{/other_user}",
        "gists_url": "https://api.github.com/users/ngomes28/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/ngomes28/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/ngomes28/subscriptions",
        "organizations_url": "https://api.github.com/users/ngomes28/orgs",
        "repos_url": "https://api.github.com/users/ngomes28/repos",
        "events_url": "https://api.github.com/users/ngomes28/events{/privacy}",
        "received_events_url": "https://api.github.com/users/ngomes28/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 324087046,
          "node_id": "MDU6TGFiZWwzMjQwODcwNDY=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Alocado",
          "name": "Alocado",
          "color": "6befe6",
          "default": false,
          "description": ""
        },
        {
          "id": 321622629,
          "node_id": "MDU6TGFiZWwzMjE2MjI2Mjk=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/CLT",
          "name": "CLT",
          "color": "7fe266",
          "default": false,
          "description": ""
        },
        {
          "id": 1178249004,
          "node_id": "MDU6TGFiZWwxMTc4MjQ5MDA0",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Minas%20Gerais",
          "name": "Minas Gerais",
          "color": "f9745c",
          "default": false,
          "description": ""
        },
        {
          "id": 324086912,
          "node_id": "MDU6TGFiZWwzMjQwODY5MTI=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Remoto",
          "name": "Remoto",
          "color": "6befe6",
          "default": false,
          "description": ""
        },
        {
          "id": 1178245525,
          "node_id": "MDU6TGFiZWwxMTc4MjQ1NTI1",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%A3o%20Paulo",
          "name": "São Paulo",
          "color": "f9745c",
          "default": false,
          "description": ""
        },
        {
          "id": 321622600,
          "node_id": "MDU6TGFiZWwzMjE2MjI2MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%AAnior",
          "name": "Sênior",
          "color": "6c46ea",
          "default": false,
          "description": ""
        },
        {
          "id": 2188230749,
          "node_id": "MDU6TGFiZWwyMTg4MjMwNzQ5",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/%F0%9F%A6%A0%20Remoto%20durante%20pandemia",
          "name": "🦠 Remoto durante pandemia",
          "color": "f9f25e",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-26T02:04:16Z",
      "updated_at": "2021-03-26T02:05:00Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "<!-- \r\n==================================================\r\nPOR FAVOR, SÓ POSTE SE A VAGA FOR PARA FRONT-END!\r\n\r\nNão faça distinção de gênero no título da vaga.\r\n\r\nUse: \"Front-End Developer\" ao invés de \r\n\"Desenvolvedor Front-End\" \\o/\r\n\r\nExemplo: `[São Paulo] Front-End Developer na NOME DA EMPRESA`\r\n==================================================\r\n-->\r\n\r\n<!--\r\n==================================================\r\nCaso a vaga for remoto durante a pandemia deixar a linha abaixo\r\n==================================================\r\n-->\r\n> Vaga Remota durante a pandemia\r\n\r\n## Nossa empresa\r\n\r\nNós, aqui da SysMap, temos paixão por #inovação e sempre buscamos excelência em tudo o que fazemos. São mais de 20 anos de experiência no mundo da tecnologia, criando relacionamentos duradouros, trabalhando para desenvolver talentos, proporcionar oportunidades e influenciar vidas positivamente.\r\nGostaria de fazer parte de uma empresa que te desafia a transformar o mundo através da tecnologia?\r\nEntão venha para o nosso time!\r\n\r\n## Descrição da vaga\r\n\r\nSenior Front-End Developer, para atuar em uma squad ágil de desenvolvimento de sistemas para o segmento financeiro.\r\nApós a pandemia, será adotado modelo de trabalho híbrido (remoto com idas ao cliente).\r\n\r\n## Local\r\n\r\nHíbrido [Minas Gerais], [Belo Horizonte], [Lourdes]\r\n\r\n## Requisitos\r\n\r\n**Obrigatórios:**\r\n- 4 anos de experiência com Desenvolvimento Front-End\r\n- Angular.js\r\n- Angular 10\r\n- DDD/TDD\r\n- APIs REST\r\n- SQL Server\r\n- GIT\r\n- Scrum\r\n\r\n**Desejáveis:**\r\n- Arquitetura Hexagonal\r\n\r\n## Benefícios\r\n\r\n- Plano de Saúde Bradesco\r\n- VR de R$ 22,70/dia\r\n- Vale Alimentação ou Combustível\r\n- Plano Odontológico\r\n\r\n## Contratação\r\n\r\nCLT Full\r\n\r\n## Como se candidatar\r\n\r\nPor favor envie um e-mail para natalia.gomes@sysmap.com.br OU recrutamento@sysmap.com.br com seu CV anexado - enviar no assunto: Front-End BH\r\nOu, envie seu CV pelo WhatsApp: (11) 98491-0400.\r\n\r\n## Labels\r\n<!-- retire os labels que não fazem sentido à vaga -->\r\n\r\n#### Alocação\r\n- Alocado\r\n\r\n#### Regime\r\n- CLT\r\n\r\n#### Nível\r\n- Sênior\r\n\r\n\r\n\r\n",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4548",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4548/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4548/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4548/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4548",
      "id": 841400471,
      "node_id": "MDU6SXNzdWU4NDE0MDA0NzE=",
      "number": 4548,
      "title": "[100% REMOTO] Software Engineer Front End  @ NILO",
      "user": {
        "login": "anacarolinasant",
        "id": 60350118,
        "node_id": "MDQ6VXNlcjYwMzUwMTE4",
        "avatar_url": "https://avatars.githubusercontent.com/u/60350118?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/anacarolinasant",
        "html_url": "https://github.com/anacarolinasant",
        "followers_url": "https://api.github.com/users/anacarolinasant/followers",
        "following_url": "https://api.github.com/users/anacarolinasant/following{/other_user}",
        "gists_url": "https://api.github.com/users/anacarolinasant/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/anacarolinasant/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/anacarolinasant/subscriptions",
        "organizations_url": "https://api.github.com/users/anacarolinasant/orgs",
        "repos_url": "https://api.github.com/users/anacarolinasant/repos",
        "events_url": "https://api.github.com/users/anacarolinasant/events{/privacy}",
        "received_events_url": "https://api.github.com/users/anacarolinasant/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 321622700,
          "node_id": "MDU6TGFiZWwzMjE2MjI3MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/PJ",
          "name": "PJ",
          "color": "7fe266",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-25T23:01:45Z",
      "updated_at": "2021-03-25T23:02:29Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "GITHUB\r\n\r\nTÍTULO::  \r\n\r\nIssue:\r\n\r\n**Descrição:**  A Nilo nasceu no Brasil para revolucionar o nosso olhar para a saúde nas organizações. Integrando de forma singular o mundo digital com o serviço de saúde de excelência, a Nilo tem a missão de redesenhar como é feito o cuidado da população 50+ no Brasil, trazendo mais qualidade de vida e saúde. Neste momento estamos em busca de um (a) Software Engineer Front End, um profissional que tenha um espírito empreendedor,  que encante-se pelo propósito e missão do time. Esse profissional fará parte da equipe responsável pela plataforma inteligente que unifica todos os dados de pacientes e ajuda o time de coordenação com sugestões de intervenções acionáveis para prevenção de internações e procedimentos desproporcionais, melhorando a saúde do paciente e evitando gastos desnecessários.Você topa revolucionar a saúde brasileira junto com a Nilo? \r\n\r\n**Contratação:** PJ\r\n\r\n**RequisitOS:** Experiência com JavaScript, React e Typescript, práticas ágeis de desenvolvimento de software; conhecimento de boas práticas como Clean Code, SOLID e Design Patterns; conhecimento em Firebase e familiaridade com ferramentas Google Cloud.\r\n\r\nFazer o cadastro no seguinte site:  ** https://byintera.in/nilofegt **\r\n\r\nDúvidas: https://www.linkedin.com/in/ana-carolina-santos-7a6612114/",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4547",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4547/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4547/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4547/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4547",
      "id": 841296420,
      "node_id": "MDU6SXNzdWU4NDEyOTY0MjA=",
      "number": 4547,
      "title": "[Remoto] Front-end Developer na Catho",
      "user": {
        "login": "tatidirienzo",
        "id": 68643989,
        "node_id": "MDQ6VXNlcjY4NjQzOTg5",
        "avatar_url": "https://avatars.githubusercontent.com/u/68643989?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/tatidirienzo",
        "html_url": "https://github.com/tatidirienzo",
        "followers_url": "https://api.github.com/users/tatidirienzo/followers",
        "following_url": "https://api.github.com/users/tatidirienzo/following{/other_user}",
        "gists_url": "https://api.github.com/users/tatidirienzo/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/tatidirienzo/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/tatidirienzo/subscriptions",
        "organizations_url": "https://api.github.com/users/tatidirienzo/orgs",
        "repos_url": "https://api.github.com/users/tatidirienzo/repos",
        "events_url": "https://api.github.com/users/tatidirienzo/events{/privacy}",
        "received_events_url": "https://api.github.com/users/tatidirienzo/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 321622629,
          "node_id": "MDU6TGFiZWwzMjE2MjI2Mjk=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/CLT",
          "name": "CLT",
          "color": "7fe266",
          "default": false,
          "description": ""
        },
        {
          "id": 321622540,
          "node_id": "MDU6TGFiZWwzMjE2MjI1NDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Pleno",
          "name": "Pleno",
          "color": "6c46ea",
          "default": false,
          "description": ""
        },
        {
          "id": 324086912,
          "node_id": "MDU6TGFiZWwzMjQwODY5MTI=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Remoto",
          "name": "Remoto",
          "color": "6befe6",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-25T20:48:01Z",
      "updated_at": "2021-03-25T20:50:05Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "## Nossa empresa\r\n\r\nA Catho está presente na vida das pessoas em um momento fundamental: o de conseguir um novo emprego. Afinal, o emprego muda vidas e a nossa plataforma conecta milhões de currículos a empresas cadastradas.\r\n\r\nMudar vidas é a nossa razão de existir. Ao unir as pessoas com as oportunidades de trabalho, a Catho possibilita a elas atender não só suas necessidades básicas e de suas famílias, como também ter a chance de crescer, produzir e realizar sonhos.\r\n\r\nAlém disso, somos parte do grupo Seek, líder global no segmento de recrutamento online, com atuação na Austrália, China, Índia e outros países.\r\n\r\nE você, também quer ajudar a transformar vidas? Deu match com a vaga abaixo? Então #vempracatho!\r\n\r\n## Descrição da vaga\r\n\r\nO que você vai fazer (além de mudar vidas, é claro):\r\n\r\nComo Desenvolvedor(a) Front end Pleno na Catho você terá a responsabilidade de atuar em um time multidisciplinar em formato de squad.\r\n\r\nNosso time atua com desenvolvimento web e está responsável pelo design system da Catho . Dentre os desafios estão entender as necessidades do cliente, acompanhar tendências do mercado e usar o melhor da tecnologia para disponibilizar features com qualidade e rapidez. No dia a dia, você terá a oportunidade de contribuir com suas ideias e agregar valor continuamente para os diversos candidatos que usam a nossa plataforma para a busca de uma nova oportunidade de trabalho.\r\n\r\n## Local\r\n\r\nRemoto \r\n\r\n## Requisitos\r\n\r\n**Obrigatórios:**\r\n- Experiência com desenvolvimento Web;\r\n- Conhecimento nas linguagens Javascript (React), CSS3 e HTML5;\r\n- Testes automatizados (conceito, benefícios, utilização e ferramentas);\r\n- Virtual DOM;\r\n- Arquiteturas de aplicação Javascript;\r\n- Metodologias ágeis (Scrum e Kanban);\r\n- Graduação em Ciência da Computação ou área correlata.\r\n\r\n**Desejáveis:**\r\n- Conhecimento em acessibilidade;\r\n- Conhecimento em Atomic Design\r\n\r\n## Benefícios\r\n\r\n- Assistência médica (sua mensalidade fica por nossa conta e você pode estender aos seus dependentes);\r\n- Assistência odontológica;\r\n- Seguro de vida;\r\n- Vale transporte ou estacionamento;\r\n- Day off de aniversário;\r\n- Cartão multibenefícios;\r\n- Programa Lado a Lado (você pode apadrinhar uma pessoa que receberá uma assinatura da Catho);\r\n- Programa de Braços Abertos (contamos com o apoio de profissionais especializados em bem-estar mental para você e sua família);\r\n- Somos uma empresa cidadã;\r\n- Já fomos reconhecidos como GPTW diversas vezes;\r\n- Horário flexível e possibilidade de home office;\r\n- Não temos dress code.\r\n\r\n## Contratação\r\n\r\nCLT\r\n\r\n## Como se candidatar\r\n\r\nClique [aqui](http://bit.ly/catho-front-pleno) para se candidatar.\r\n\r\n## Labels\r\n<!-- retire os labels que não fazem sentido à vaga -->\r\n\r\n#### Alocação\r\n- Remoto\r\n\r\n#### Regime\r\n- CLT\r\n\r\n#### Nível\r\n- Pleno",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4546",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4546/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4546/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4546/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4546",
      "id": 841117113,
      "node_id": "MDU6SXNzdWU4NDExMTcxMTM=",
      "number": 4546,
      "title": "[REMOTO] Front-end Developer Angular 4+ na Platform Builders",
      "user": {
        "login": "Izah-Silva",
        "id": 62023040,
        "node_id": "MDQ6VXNlcjYyMDIzMDQw",
        "avatar_url": "https://avatars.githubusercontent.com/u/62023040?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Izah-Silva",
        "html_url": "https://github.com/Izah-Silva",
        "followers_url": "https://api.github.com/users/Izah-Silva/followers",
        "following_url": "https://api.github.com/users/Izah-Silva/following{/other_user}",
        "gists_url": "https://api.github.com/users/Izah-Silva/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Izah-Silva/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Izah-Silva/subscriptions",
        "organizations_url": "https://api.github.com/users/Izah-Silva/orgs",
        "repos_url": "https://api.github.com/users/Izah-Silva/repos",
        "events_url": "https://api.github.com/users/Izah-Silva/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Izah-Silva/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 1504140182,
          "node_id": "MDU6TGFiZWwxNTA0MTQwMTgy",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Especialista",
          "name": "Especialista",
          "color": "d114bb",
          "default": false,
          "description": ""
        },
        {
          "id": 321622700,
          "node_id": "MDU6TGFiZWwzMjE2MjI3MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/PJ",
          "name": "PJ",
          "color": "7fe266",
          "default": false,
          "description": ""
        },
        {
          "id": 324086912,
          "node_id": "MDU6TGFiZWwzMjQwODY5MTI=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Remoto",
          "name": "Remoto",
          "color": "6befe6",
          "default": false,
          "description": ""
        },
        {
          "id": 1178245525,
          "node_id": "MDU6TGFiZWwxMTc4MjQ1NTI1",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%A3o%20Paulo",
          "name": "São Paulo",
          "color": "f9745c",
          "default": false,
          "description": ""
        },
        {
          "id": 321622600,
          "node_id": "MDU6TGFiZWwzMjE2MjI2MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%AAnior",
          "name": "Sênior",
          "color": "6c46ea",
          "default": false,
          "description": ""
        },
        {
          "id": 2188230749,
          "node_id": "MDU6TGFiZWwyMTg4MjMwNzQ5",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/%F0%9F%A6%A0%20Remoto%20durante%20pandemia",
          "name": "🦠 Remoto durante pandemia",
          "color": "f9f25e",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-25T16:46:02Z",
      "updated_at": "2021-03-25T16:46:50Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "<!-- \r\n==================================================\r\nPOR FAVOR, SÓ POSTE SE A VAGA FOR PARA FRONT-END!\r\n\r\nNão faça distinção de gênero no título da vaga.\r\n\r\nUse: \"Front-End Developer\" ao invés de \r\n\"Desenvolvedor Front-End\" \\o/\r\n\r\nExemplo: `[São Paulo] Front-End Developer na NOME DA EMPRESA`\r\n==================================================\r\n-->\r\n\r\n<!--\r\n==================================================\r\nCaso a vaga for remoto durante a pandemia deixar a linha abaixo\r\n==================================================\r\n-->\r\n> Vaga Remota durante a pandemia\r\n\r\n## Nossa empresa\r\n\r\nSomos empreendedores e buscamos pessoas que não têm medo de mirar alto com metas audaciosas, que estão cansadas dos padrões tradicionais do mercado, nunca tiveram a oportunidade mas não desistiram diante das adversidades. Enxergamos soluções onde os outros só enxergam problemas. \r\n\r\nOs inconformados com o status quo, que queiram transformar realidades, sobretudo pessoas e estão abertos aos processos de mudança, que encaram com entusiasmo a ambição de crescer, são bem vindos entre nós.\r\n\r\nAqui, você pode, aliás você deve se expor! As fraquezas só se transformam em pontos fortes quando reconhecemos a necessidade de mudança. Vamos sempre errar rápido para acertar rápido. Reconhecendo que para inovar sempre, precisamos correr riscos! Então, queremos que você seja livre nesse terreno fértil para frutificar valor.\r\n\r\nNós vivemos da ousadia de provocar e temos propostas audaciosas, mesmo. Não temos clientes, mas sim amigos, que estão no topo da nossa cadeia de valor. Se interessou pelo nosso movimento de empreendedores? Veja nossas oportunidades! \r\n\r\n## Descrição da vaga\r\n\r\nEstamos procurando uma Pessoa Desenvolvedora Angular para se juntar a nós na mudança que move o mundo, para que a criatividade e o crescimento possam inspirar cada vez mais pessoas a fazer mais daquilo que amam, construindo um roadmap de impacto e valor.\r\n\r\nAqui é o lugar onde suas ideias são bem vindas, frutos da construção do pensamento coletivo, prontas para ganharem vida.\r\n\r\nSaca só os requisitos que pensamos:\r\n\r\n#SejaBuilder\r\n\r\n## Local\r\n[REMOTO]\r\n\r\n## Requisitos\r\n\r\n**Obrigatórios:**\r\nAngular (4+)\r\nFluência em TypeScript\r\nForte conhecimento no consumo de APIs RESTful\r\nConhecimento da biblioteca RXJS, e programação reativa\r\nCriação de layout responsivo\r\nVersionamento de código com Git\r\nMetodologias ágeis\r\n\r\n**Desejáveis:**\r\nConhecimento em Firebase (Analytics, Crashlytics, etc)\r\nExperiência em linguagens nativas e construção de bridges\r\nAnimações (Angular Animations)\r\n\r\n**Diferenciais:**\r\nOportunidades reais de empreender e impactar\r\nFazer parte de uma comunidade de empreendedores de ponta, o Movimento\r\nInovação e criação liberados\r\nParticipar de um processo único de geração de valor\r\nContribuir na criação de métodos disruptivos\r\nColocar suas ideias no mercado, na prática! :)\r\nPossibilidade de Profit share em novos Negócios\r\nPrestador de Serviços (PJ)\r\nFlexibilidade de horário\r\n\r\n## Contratação\r\n\r\nPJ\r\n\r\n## Como se candidatar\r\n\r\nCandidate-se através do link: https://bit.ly/2VUZDu8\r\n\r\n## Labels\r\n<!-- retire os labels que não fazem sentido à vaga -->\r\n\r\n#### Alocação\r\n- Remoto\r\n\r\n#### Regime\r\n- PJ\r\n\r\n#### Nível\r\n- Sênior\r\n- Especialista\r\n\r\n\r\n",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4545",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4545/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4545/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4545/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4545",
      "id": 841115212,
      "node_id": "MDU6SXNzdWU4NDExMTUyMTI=",
      "number": 4545,
      "title": "[REMOTO] Front-end Developer na Platform Builders",
      "user": {
        "login": "Izah-Silva",
        "id": 62023040,
        "node_id": "MDQ6VXNlcjYyMDIzMDQw",
        "avatar_url": "https://avatars.githubusercontent.com/u/62023040?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Izah-Silva",
        "html_url": "https://github.com/Izah-Silva",
        "followers_url": "https://api.github.com/users/Izah-Silva/followers",
        "following_url": "https://api.github.com/users/Izah-Silva/following{/other_user}",
        "gists_url": "https://api.github.com/users/Izah-Silva/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Izah-Silva/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Izah-Silva/subscriptions",
        "organizations_url": "https://api.github.com/users/Izah-Silva/orgs",
        "repos_url": "https://api.github.com/users/Izah-Silva/repos",
        "events_url": "https://api.github.com/users/Izah-Silva/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Izah-Silva/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 1504140182,
          "node_id": "MDU6TGFiZWwxNTA0MTQwMTgy",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Especialista",
          "name": "Especialista",
          "color": "d114bb",
          "default": false,
          "description": ""
        },
        {
          "id": 321622700,
          "node_id": "MDU6TGFiZWwzMjE2MjI3MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/PJ",
          "name": "PJ",
          "color": "7fe266",
          "default": false,
          "description": ""
        },
        {
          "id": 324086912,
          "node_id": "MDU6TGFiZWwzMjQwODY5MTI=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Remoto",
          "name": "Remoto",
          "color": "6befe6",
          "default": false,
          "description": ""
        },
        {
          "id": 1178245525,
          "node_id": "MDU6TGFiZWwxMTc4MjQ1NTI1",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%A3o%20Paulo",
          "name": "São Paulo",
          "color": "f9745c",
          "default": false,
          "description": ""
        },
        {
          "id": 321622600,
          "node_id": "MDU6TGFiZWwzMjE2MjI2MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%AAnior",
          "name": "Sênior",
          "color": "6c46ea",
          "default": false,
          "description": ""
        },
        {
          "id": 2188230749,
          "node_id": "MDU6TGFiZWwyMTg4MjMwNzQ5",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/%F0%9F%A6%A0%20Remoto%20durante%20pandemia",
          "name": "🦠 Remoto durante pandemia",
          "color": "f9f25e",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-25T16:43:45Z",
      "updated_at": "2021-03-25T16:44:29Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "<!-- \r\n==================================================\r\nPOR FAVOR, SÓ POSTE SE A VAGA FOR PARA FRONT-END!\r\n\r\nNão faça distinção de gênero no título da vaga.\r\n\r\nUse: \"Front-End Developer\" ao invés de \r\n\"Desenvolvedor Front-End\" \\o/\r\n\r\nExemplo: `[São Paulo] Front-End Developer na NOME DA EMPRESA`\r\n==================================================\r\n-->\r\n\r\n<!--\r\n==================================================\r\nCaso a vaga for remoto durante a pandemia deixar a linha abaixo\r\n==================================================\r\n-->\r\n> Vaga Remota durante a pandemia\r\n\r\n## Nossa empresa\r\nSomos empreendedores e buscamos pessoas que não têm medo de mirar alto com metas audaciosas, que estão cansadas dos padrões tradicionais do mercado, nunca tiveram a oportunidade mas não desistiram diante das adversidades. Enxergamos soluções onde os outros só enxergam problemas. \r\n\r\nOs inconformados com o status quo, que queiram transformar realidades, sobretudo pessoas e estão abertos aos processos de mudança, que encaram com entusiasmo a ambição de crescer, são bem vindos entre nós.\r\n\r\nAqui, você pode, aliás você deve se expor! As fraquezas só se transformam em pontos fortes quando reconhecemos a necessidade de mudança. Vamos sempre errar rápido para acertar rápido. Reconhecendo que para inovar sempre, precisamos correr riscos! Então, queremos que você seja livre nesse terreno fértil para frutificar valor.\r\n\r\nNós vivemos da ousadia de provocar e temos propostas audaciosas, mesmo. Não temos clientes, mas sim amigos, que estão no topo da nossa cadeia de valor. Se interessou pelo nosso movimento de empreendedores? Veja nossas oportunidades! \r\n\r\n## Descrição da vaga\r\n\r\nEstamos procurando uma Pessoa Desenvolvedora React para se juntar a nós na mudança que move o mundo, para que a criatividade e o crescimento possam inspirar cada vez mais pessoas a fazer mais daquilo que amam, construindo um roadmap de impacto e valor.\r\n\r\nAqui é o lugar onde suas ideias são bem vindas, frutos da construção do pensamento coletivo, prontas para ganharem vida.\r\n\r\nSaca só os requisitos que pensamos:\r\n\r\n#SejaBuilder\r\n\r\n\r\n\r\n## Local\r\n\r\n[REMOTO]\r\n\r\n## Requisitos\r\n\r\n**Obrigatórios:**\r\nReact (Redux/Mobx)\r\nFluência em JavaScript (ES6)\r\nAPIs REST\r\nTrabalhar com diferentes dimensões de dispositivo (tablet, celular, etc)\r\nConhecimento geral do ambiente móvel\r\nVersionamento de código com Git\r\nConhecimento em arquitetura de software\r\nMetodologias ágeis\r\n\r\n**Desejáveis:**\r\nConhecimento em CI/CD (App Center, Fastlane)\r\nConhecimento em Firebase (Analytics, Crashlytics, configurações)\r\nExperiência em linguagens nativas e construção de bridges\r\n\r\n**Diferenciais:**\r\n\r\nOportunidades reais de empreender e impactar\r\nFazer parte de uma comunidade de empreendedores de ponta, o Movimento\r\nInovação e criação liberados\r\nParticipar de um processo único de geração de valor\r\nContribuir na criação de métodos disruptivos\r\nColocar suas ideias no mercado, na prática! :)\r\nPossibilidade de Profit share em novos Negócios\r\nPrestador de Serviços (PJ)\r\nFlexibilidade de horário\r\n\r\n## Contratação\r\n\r\nPJ \r\n\r\n## Como se candidatar\r\nCandidate-se através do link: https://bit.ly/2VUZDu8\r\n\r\n\r\n## Labels\r\n<!-- retire os labels que não fazem sentido à vaga -->\r\n\r\n#### Alocação\r\n- Remoto\r\n\r\n#### Regime\r\n- PJ\r\n\r\n#### Nível\r\n- Sênior\r\n- Especialista\r\n\r\n\r\n",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4544",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4544/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4544/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4544/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4544",
      "id": 841074565,
      "node_id": "MDU6SXNzdWU4NDEwNzQ1NjU=",
      "number": 4544,
      "title": "[100% REMOTA] Front end - React (Pleno) @ FDTE",
      "user": {
        "login": "VanessaBruno3",
        "id": 61847698,
        "node_id": "MDQ6VXNlcjYxODQ3Njk4",
        "avatar_url": "https://avatars.githubusercontent.com/u/61847698?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/VanessaBruno3",
        "html_url": "https://github.com/VanessaBruno3",
        "followers_url": "https://api.github.com/users/VanessaBruno3/followers",
        "following_url": "https://api.github.com/users/VanessaBruno3/following{/other_user}",
        "gists_url": "https://api.github.com/users/VanessaBruno3/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/VanessaBruno3/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/VanessaBruno3/subscriptions",
        "organizations_url": "https://api.github.com/users/VanessaBruno3/orgs",
        "repos_url": "https://api.github.com/users/VanessaBruno3/repos",
        "events_url": "https://api.github.com/users/VanessaBruno3/events{/privacy}",
        "received_events_url": "https://api.github.com/users/VanessaBruno3/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 321622700,
          "node_id": "MDU6TGFiZWwzMjE2MjI3MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/PJ",
          "name": "PJ",
          "color": "7fe266",
          "default": false,
          "description": ""
        },
        {
          "id": 321622540,
          "node_id": "MDU6TGFiZWwzMjE2MjI1NDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Pleno",
          "name": "Pleno",
          "color": "6c46ea",
          "default": false,
          "description": ""
        },
        {
          "id": 324086912,
          "node_id": "MDU6TGFiZWwzMjQwODY5MTI=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Remoto",
          "name": "Remoto",
          "color": "6befe6",
          "default": false,
          "description": ""
        },
        {
          "id": 1178245525,
          "node_id": "MDU6TGFiZWwxMTc4MjQ1NTI1",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%A3o%20Paulo",
          "name": "São Paulo",
          "color": "f9745c",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-25T15:58:36Z",
      "updated_at": "2021-03-25T15:59:22Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "Descrição da vaga\r\nDesenvolvedor Front End para Web utilizando as tecnologias modernas JavaScript (React, Redux).\r\nSe conhecer Reagir Nativo (será diferencial)\r\n\r\nOBS: Contratação imediata! 👀\r\n\r\nPerfil preferido: Pleno\r\n\r\nLocal\r\n100%\r\nBase Remoto - São Paulo / Pinheiros\r\n\r\nBenefícios\r\n• Horário de trabalho flexível\r\n• Um ambiente de trabalho diferente e inovador, com uma cultura que valoriza as pessoas e a entrega de resultados\r\n\r\nContratação\r\nPJ +\r\n● 80hs em banco de horas, como descanso, após 1 ano de contrato\r\n● Possibilidade de 13º. e 14º. salários (pois, depende de metas)\r\n● Possibilidade de Bolsa MBA (parceria com a FIAP) - sorteio entre a equipe interessado no curso.\r\n● Programa de terapia\r\n● Incentivo financeiro mensal em cartão de crédito corporativo para desenvolvimento pessoal\r\ncompra de livros, cursos, certificações e eventos de eventos da área de tecnologia.\r\n\r\nNossa empresa\r\nDê uma olhada no nosso Site: http://www.fdte.org.br/\r\nA Fundação é com foco em engenharia - ligada a Poli USP\r\nO nosso escritório é um braço que é da Tecnologia\r\n\r\nComo se candidatar\r\nPor favor envie um e-mail para vanessa.bruno@fdte.io com o seguinte título e informações:\r\n\r\n• Assunto [VAGA] React Pleno\r\n• Github e / ou Blog - Vai nos ajudar a conhecer você e seu trabalho melhor :)\r\n• Currículo ou Linkedin\r\n\r\nTempo médio de feedbacks: Costumamos enviar feedbacks em até 7 dias após cada processo",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4543",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4543/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4543/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4543/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4543",
      "id": 840942724,
      "node_id": "MDU6SXNzdWU4NDA5NDI3MjQ=",
      "number": 4543,
      "title": "[Remoto] Front-end Developer na @GeekHunter",
      "user": {
        "login": "daimasson",
        "id": 78420709,
        "node_id": "MDQ6VXNlcjc4NDIwNzA5",
        "avatar_url": "https://avatars.githubusercontent.com/u/78420709?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/daimasson",
        "html_url": "https://github.com/daimasson",
        "followers_url": "https://api.github.com/users/daimasson/followers",
        "following_url": "https://api.github.com/users/daimasson/following{/other_user}",
        "gists_url": "https://api.github.com/users/daimasson/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/daimasson/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/daimasson/subscriptions",
        "organizations_url": "https://api.github.com/users/daimasson/orgs",
        "repos_url": "https://api.github.com/users/daimasson/repos",
        "events_url": "https://api.github.com/users/daimasson/events{/privacy}",
        "received_events_url": "https://api.github.com/users/daimasson/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 321622629,
          "node_id": "MDU6TGFiZWwzMjE2MjI2Mjk=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/CLT",
          "name": "CLT",
          "color": "7fe266",
          "default": false,
          "description": ""
        },
        {
          "id": 321622540,
          "node_id": "MDU6TGFiZWwzMjE2MjI1NDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Pleno",
          "name": "Pleno",
          "color": "6c46ea",
          "default": false,
          "description": ""
        },
        {
          "id": 324086912,
          "node_id": "MDU6TGFiZWwzMjQwODY5MTI=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Remoto",
          "name": "Remoto",
          "color": "6befe6",
          "default": false,
          "description": ""
        },
        {
          "id": 321622600,
          "node_id": "MDU6TGFiZWwzMjE2MjI2MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%AAnior",
          "name": "Sênior",
          "color": "6c46ea",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-25T13:41:42Z",
      "updated_at": "2021-03-25T13:42:27Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "## OLÁ, EU SOU A [GEEKHUNTER!](https://www.geekhunter.com.br/sobre) 👋 ##\r\nEu nasci com com o propósito de **transformar o dia a dia de empresas e a vida das pessoas desenvolvedoras**!\r\n\r\nA minha plataforma já conta com milhares de candidatos e empresas, que se beneficiam do sistema que mais cresce no Brasil na área de RH tech.\r\n\r\nO que me move é poder proporcionar uma ferramenta revolucionária para a contratação de profissionais de tecnologia conectando as melhores mentes desenvolvedoras às melhores empresas.\r\n\r\nEu sou cult, sou nerd, sou gamer, sou transformadora e conectada em um ambiente descontraído permitindo que tenhamos muitos insights e possamos resolver as coisas com criatividade e muito embasamento em dados. Enfim, sou Geek!\r\n\r\nEstou em plena evolução e em crescimento constante! Tenho uma série de desafios para escalar minha solução para dezenas de milhares de usuários. Minha plataforma usa especialmente Ruby on Rails, mas tenho a previsão em curto prazo de novos módulos utilizando outras tecnologias, como Python, Node. js, Go etc. Minha infra-estrutura fica na AWS e utilizo tecnologias como Postgres, Ruby on Rails, AngularJS, entre outras. Sou #TeamMetodologiaÁgil, respiro deploy e tenho uma equipe de Geeks maravilhosos. \r\n\r\nSe você quer pertencer a algo grandioso, desafiador e transformar o mundo por meio da tecnologia, vista a camisa roxa e venha ser um Geek você também!\r\n\r\n## DESCRIÇÃO DA [VAGA](https://geekhunter.gupy.io/jobs/708406) ##\r\n\r\nNessa posição sua missão principal será realizar melhorias e implementar novas funcionalidades na plataforma da GeekHunter, numa abordagem full-stack com ênfase em Frontend.\r\n\r\nVocê vai se envolver em atividades de interação da nossa plataforma escritas em Ruby On Rails e Angular. Trabalhará também com tecnologias como React e Python.\r\n\r\n**_Alguns mandamento do nosso time de Produto:_**\r\n\r\n- Sabe aquele time cooperativo e alto astral, você vai encontrar conosco!\r\n- Usamos a metodologia de Pair Programming no nosso dia-a-dia, pois acreditamos que na troca é que mais se aprende!\r\n- Usamos metodologias ágeis.\r\n- Para nós, uma boa entrega é aquela que resolve o problema do cliente.\r\n- Tudo que programamos é orientado a testes, TUDO mesmo!\r\n- Somos um time que acredita que a tecnologia é o meio que utilizamos para conquistar nossos objetivos.\r\n\r\n## RESPONSABILIDADES E ATRIBUIÇÕES ##\r\n\r\n**_Você atuará em projetos ligados a:_**\r\n\r\n- Implementação de novas funcionalidades da plataforma;\r\n- Identificação e correção de erros em funcionalidades já existentes;\r\n- Suporte a experimentos;\r\n- Entender muito bem os requisitos e escrever código claro, simples e orientado a testes;\r\n- Trabalhar para melhorar as soluções existentes da GeekHunter;\r\n- Aprender e aplicar novas tecnologias para otimizar nossos processos e produtos.\r\n\r\n## REQUISITOS E QUALIFICAÇÕES ##\r\n\r\n**_Esperamos tecnicamente de você:_**\r\n\r\n- Experiência em desenvolvimento web full-stack;\r\n- Conhecimentos em AngularJS, React ou equivalente;\r\n- Ser capaz de transformar artefatos de Design em Front-End;\r\n- Saber sobre consumo de APIs REST ou GraphQL;\r\n- Conhecer framework de testes;\r\n- Saber \"se virar\" no Back-End.\r\n\r\n**_Quais características serão esperadas de você:_**\r\n\r\n- Pragmatismo no dia-a-dia;\r\n- Focar na raiz dos problemas;\r\n- Gostar de verdade de desafios;\r\n- Se identificar com o valor: cliente sempre em primeiro lugar!\r\n- Gostar de trabalhar em equipe e com bastante autonomia.\r\n\r\n## INFORMAÇÕES ADICIONAIS ##\r\n\r\n### Esta vaga é CLT, trabalho em tempo integral (8hrs/dia) ###\r\n\r\n### Nosso trabalho é 100% home-office! ###\r\n\r\n\r\n## 😋 ALÉM DISSO, AINDA OFERECEMOS: ##\r\n\r\n- Vale-refeição/alimentação de R$ 600,00;\r\n- Plano de saúde (Bradesco Saúde Nacional);\r\n- Assistência odontológica;\r\n- Gympass;\r\n- Vale Padawan de R$130,00 mensais (benefício precioso para você utilizar no seu desenvolvimento educacional ou cultural);\r\n- Home Office Setup no valor de R$ 600,00, em uma parcela única após seu período de experiência!\r\n- Auxílio Internet no valor de R$ 125,00 mensal;\r\n- Um ambiente flexível e descontraído. Queremos que você se sinta motivado(a) para vir trabalhar até mesmo nas segundas de manhã :)\r\n\r\n## [INSCRIÇÕES AQUI](https://geekhunter.gupy.io/jobs/708406) ##\r\n\r\n### Enviamos feedback em no máximo 3 dias úteis \r\n\r\n\r\n## [TODAS NOSSAS VAGAS](https://geekhunter.gupy.io/) ##\r\n\r\n### Labels\r\n\r\nPleno \r\nSênior\r\n\r\nRemoto\r\n\r\nCLT\r\n\r\n\r\n\r\n\r\n",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4542",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4542/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4542/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4542/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4542",
      "id": 840875267,
      "node_id": "MDU6SXNzdWU4NDA4NzUyNjc=",
      "number": 4542,
      "title": "[Belo Horizonte] Front-End Developer Jr na Worked",
      "user": {
        "login": "FrancieleGhizzoni",
        "id": 67921680,
        "node_id": "MDQ6VXNlcjY3OTIxNjgw",
        "avatar_url": "https://avatars.githubusercontent.com/u/67921680?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/FrancieleGhizzoni",
        "html_url": "https://github.com/FrancieleGhizzoni",
        "followers_url": "https://api.github.com/users/FrancieleGhizzoni/followers",
        "following_url": "https://api.github.com/users/FrancieleGhizzoni/following{/other_user}",
        "gists_url": "https://api.github.com/users/FrancieleGhizzoni/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/FrancieleGhizzoni/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/FrancieleGhizzoni/subscriptions",
        "organizations_url": "https://api.github.com/users/FrancieleGhizzoni/orgs",
        "repos_url": "https://api.github.com/users/FrancieleGhizzoni/repos",
        "events_url": "https://api.github.com/users/FrancieleGhizzoni/events{/privacy}",
        "received_events_url": "https://api.github.com/users/FrancieleGhizzoni/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 324087046,
          "node_id": "MDU6TGFiZWwzMjQwODcwNDY=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Alocado",
          "name": "Alocado",
          "color": "6befe6",
          "default": false,
          "description": ""
        },
        {
          "id": 321622469,
          "node_id": "MDU6TGFiZWwzMjE2MjI0Njk=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/J%C3%BAnior",
          "name": "Júnior",
          "color": "6c46ea",
          "default": false,
          "description": ""
        },
        {
          "id": 321622700,
          "node_id": "MDU6TGFiZWwzMjE2MjI3MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/PJ",
          "name": "PJ",
          "color": "7fe266",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 4,
      "created_at": "2021-03-25T12:23:53Z",
      "updated_at": "2021-03-26T12:22:52Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "## Descrição da vaga: \r\n <p><strong>                      --- Esta vaga é para uma empresa parceira da Worked, a Orbis Digital ---</strong></p>\r\n<p>Hoje estamos formando os nossos times, e estamos em busca de uma pessoa para atuar conosco colaborando na construção dos Fronts.</p>\r\n<p></p>\r\n<p><strong>Habilidades Técnicas Desejadas:</strong></p>\r\n<p>- Sólidos conhecimentos em HTML, CSS e Javascript/TypeScript;</p>\r\n<p>- Conhecimentos dos fundamentos de SaSS, Base e Bootstrap;</p>\r\n<p>- Já ter participado de projetos ou utilizado frameworks Javascript;</p>\r\n<p>- Conhecimentos em desenvolvimento responsivo, seja híbrido ou nativo.</p>\r\n<p></p>\r\n<p><strong>Será um diferencial:</strong></p>\r\n<p>- Ter participado de projetos com, ou utilizado, Ionic/ReactJS/Angular/Flutter;</p>\r\n<p>- Profissionais em transição de carreira com experiência em agências de publicidade ou com origem nas</p>\r\n<p>áreas das ciências humanas.</p>\r\n<p></p>\r\n<p><strong>Habilidades Comportamentais:</strong></p>\r\n<p>- Ter aprendizado ativo, desenvolvendo-se de forma acelerada através de cursos e participações nos projetos da empresa, estamos em constante evolução e adaptação;</p>\r\n<p>- Ter adaptabilidade e resiliência;</p>\r\n<p>- Ter comunicação ativa, valorizamos muito a participação nas decisões, temos um ambiente aberto e integrado.</p>\r\n\r\n## Worked: \r\n <p>Somos uma HR Tech de São José dos Campos, cujo principal objetivo é conseguir reduzir a desigualdade de oportunidade para jovens talentos no Brasil, por meio da tecnologia.</p>\r\n</p>\r\n\r\n ## Habilidades: \r\n - Basecamp \r\n- Bootstrap \r\n- CSS \r\n- HTML 5 \r\n- Javascript \r\n- Sass/Less\r\n\r\n## Local: \r\n Belo Horizonte\r\n\r\n## Requisitos: \r\n - Habituado com metodologias ágeis\r\n\r\n## Benefícios: \r\n - Plano flexível de benefícios; \r\n- Acesso a cursos e mentorias para aprofundar no mundo da programação; \r\n- Somos muito flexíveis para avaliar e prover “mimos” aos nossos colaboradores.\r\n## Como se candidatar:\r\nCandidate-se em: [Front-End Developer Jr na Worked](https://coodesh.com/vagas/frontend-developer-jr-161248?origin=github&modal=open)\r\n\r\n\r\nApós candidatar-se via plataforma Coodesh e validar o seu login, você poderá acompanhar e receber todas as interações do processo por lá. Utilize a opção <b>Pedir Feedback</b> entre uma etapa e outra na vaga que se candidatou. Isso fará com que a pessoa <b>Recruiter</b> responsável pelo processo na empresa receba a notificação.\r\n\r\n## Labels\r\n\r\n#### Alocação\r\nAlocado\r\n\r\n#### Regime\r\nPJ\r\n\r\n#### Nível\r\nJúnior\r\n\r\n#### Categoria\r\nFront-End",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4541",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4541/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4541/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4541/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4541",
      "id": 840868848,
      "node_id": "MDU6SXNzdWU4NDA4Njg4NDg=",
      "number": 4541,
      "title": "[Remoto] Fullstack React/React Native Developer na Melhor Plano",
      "user": {
        "login": "FrancieleGhizzoni",
        "id": 67921680,
        "node_id": "MDQ6VXNlcjY3OTIxNjgw",
        "avatar_url": "https://avatars.githubusercontent.com/u/67921680?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/FrancieleGhizzoni",
        "html_url": "https://github.com/FrancieleGhizzoni",
        "followers_url": "https://api.github.com/users/FrancieleGhizzoni/followers",
        "following_url": "https://api.github.com/users/FrancieleGhizzoni/following{/other_user}",
        "gists_url": "https://api.github.com/users/FrancieleGhizzoni/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/FrancieleGhizzoni/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/FrancieleGhizzoni/subscriptions",
        "organizations_url": "https://api.github.com/users/FrancieleGhizzoni/orgs",
        "repos_url": "https://api.github.com/users/FrancieleGhizzoni/repos",
        "events_url": "https://api.github.com/users/FrancieleGhizzoni/events{/privacy}",
        "received_events_url": "https://api.github.com/users/FrancieleGhizzoni/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 321622540,
          "node_id": "MDU6TGFiZWwzMjE2MjI1NDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Pleno",
          "name": "Pleno",
          "color": "6c46ea",
          "default": false,
          "description": ""
        },
        {
          "id": 324086912,
          "node_id": "MDU6TGFiZWwzMjQwODY5MTI=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Remoto",
          "name": "Remoto",
          "color": "6befe6",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-25T12:15:29Z",
      "updated_at": "2021-03-25T12:16:09Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "## Descrição da vaga: \r\n <p>A <strong><em>Melhor Plano</em></strong> está buscando <strong>Pessoas Desenvolvedoras Fullstack</strong> em nível pleno. Se você é um entusiastas de tecnologia, com bons fundamentos de algoritmos e estrutura de dados e está sempre em busca de conhecimento.&nbsp;</p>\r\n<p><strong><em>Venha trabalhar conosco!!</em></strong></p>\r\n\r\n## Melhor Plano: \r\n <p>O Melhor Plano é a referência mais confiável para consumidores compararem e contratarem serviços básicos como telefonia e serviços bancários. Ajudamos consumidores com:</p>\r\n<ul>\r\n<li>Conteúdo informativo e transparente;</li>\r\n<li>Tecnologia de ponta para capturar preços em todo o país;</li>\r\n<li>Softwares para o consumidor comparar e encontrar planos com facilidade.</li>\r\n</ul>\r\n\r\n<h5>Quem somos</h5>\r\n<p>O nosso time nasceu em março de 2016 e desde lá tivemos um crescimento acelerado. Começamos a jornada com três pessoas e hoje contamos com mais de 50 colaboradores de todos os níveis de experiência, desde estagiários a profissionais com mais de 10 anos de experiência. Gostamos muito de aprender e compartilhar o que aprendemos e somos um time de pessoas que buscam a excelência no que fazem.</p><a href='https://coodesh.com/empresas/melhor-plano'>Veja mais no site</a>\r\n\r\n ## Habilidades: \r\n - Javascript \r\n- MongoDB \r\n- React.js \r\n- Typescript \r\n- Preact \r\n- Node.js\r\n## Local: \r\n 100% Remoto\r\n## Requisitos: \r\n - Pelo menos dois anos de experiência profissional \r\n- Aplicar bem os fundamentos de desenvolvimento de software como algoritmos e estrutura de dados \r\n- Consiga escrever um código limpo e modular \r\n- Tenha experiência com trabalho em equipe na construção de projetos de softwares mais longos \r\n- Ser bem orientado(a) por um arquiteto de sistemas, consiga contribuir em projetos abrangentes com várias pessoas desenvolvedoras \r\n- Comunique bem problemas e usa do conhecimento do tempo para construir soluções melhores \r\n- Seja curioso(a) e está sempre experimentando novas tecnologias\r\n\r\n## Benefícios: \r\n - Ajuda de custo de R$ 90,00 / mês caso use seu próprio equipamento \r\n- Vale educação no valor de R$ 300,00 ao ano \r\n- Plano de Saúde Bradesco 100% coberto pela empresa \r\n- Reembolso transporte no dia que vir no escritório \r\n- Sem dress code: você trabalha com a roupa que quiser \r\n- Horário Flexível - Possibilidade de stock options após um ano de empresa \r\n- Auxílio Alimentação de R$ 28,60 / dia\r\n## Como se candidatar:\r\nCandidate-se em: [Fullstack Developer na Melhor Plano](https://coodesh.com/vagas/fullstack-developer-pleno-20210224?origin=github&modal=open)\r\n\r\n\r\nApós candidatar-se via plataforma Coodesh e validar o seu login, você poderá acompanhar e receber todas as interações do processo por lá. Utilize a opção <b>Pedir Feedback</b> entre uma etapa e outra na vaga que se candidatou. Isso fará com que a pessoa <b>Recruiter</b> responsável pelo processo na empresa receba a notificação.\r\n## Labels\r\n#### Alocação\r\nRemoto\r\n#### Categoria\r\nFull-Stack",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4539",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4539/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4539/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4539/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4539",
      "id": 840850255,
      "node_id": "MDU6SXNzdWU4NDA4NTAyNTU=",
      "number": 4539,
      "title": "[Remoto - Home Office] Front-end Developer Pleno ou Sênior na Órama Investimentos",
      "user": {
        "login": "gorifla",
        "id": 5908879,
        "node_id": "MDQ6VXNlcjU5MDg4Nzk=",
        "avatar_url": "https://avatars.githubusercontent.com/u/5908879?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/gorifla",
        "html_url": "https://github.com/gorifla",
        "followers_url": "https://api.github.com/users/gorifla/followers",
        "following_url": "https://api.github.com/users/gorifla/following{/other_user}",
        "gists_url": "https://api.github.com/users/gorifla/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/gorifla/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/gorifla/subscriptions",
        "organizations_url": "https://api.github.com/users/gorifla/orgs",
        "repos_url": "https://api.github.com/users/gorifla/repos",
        "events_url": "https://api.github.com/users/gorifla/events{/privacy}",
        "received_events_url": "https://api.github.com/users/gorifla/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
  
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-25T11:50:26Z",
      "updated_at": "2021-03-25T11:50:26Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "## Nossa empresa\r\nA Órama foi criada em 2011 por profissionais experientes do mercado financeiro, foi uma das pioneiras a oferecer investimento digital no Brasil. Além disso, foi premiada pela Amazon Web Services como uma das empresas mais inovadoras em serviços financeiros.\r\n\r\nPresente em todo o país, com uma estrutura 100% online, também está comprometida com a entrega do melhor serviço para que o brasileiro possa investir de forma consciente e transparente.\r\n\r\n## Descrição da vaga\r\nEstamos em busca de um desenvolvedor sênior FrontEnd que seja bastante proativo e focado no trabalho. Não acreditamos em pessoas trabalhando por muitas horas, mas sim em pessoas trabalhando focadas numa jornada máxima de 40 horas.\r\n\r\n## Local\r\nAs vagas são para o trabalho Remoto(Home Office), mas temos escritórios no Rio de Janeiro e em São Paulo.\r\n\r\n## Requisitos\r\n**Obrigatórios:**\r\n- HTML, CSS, SASS, SCSS\r\n- Algum framework (AngularJs, Angular 2+, Vue, Reactive)\r\n- Sólidos conhecimentos de REST API\r\n\r\n**Desejáveis:**\r\n- Capacidade de Compreensão de Problemas complexos.\r\n- Capacidade de se adaptar rapidamente a um ambiente de produção.\r\n- Metodologia de Trabalho Ágil\r\n- Test Driven Development (TDD)\r\n- Code Review\r\n\r\n## Benefícios\r\n- Plano de saúde\r\n- Plano odontológico\r\n- Seguro de vida\r\n- Vale Alimentação ~R$ 460/mês\r\n- Vale Refeição ~R$ 31/dia\r\n- Auxílio creche\r\n\r\n**Diferenciais:**\r\n- 40 horas semanais – Trabalhe focado e trabalhe 40 horas.\r\n- Trabalho remoto para a pessoa certa.\r\n- Participação em Lucros\r\n- Plano de carreira bem determinado\r\n\r\n## Contratação\r\nCLT a combinar\r\n\r\n## Como se candidatar\r\nhttps://orama.gupy.io/jobs/520134?jobBoardSource=gupy_public_page\r\n\r\n## Tempo médio de feedbacks\r\nCostumamos enviar feedbacks em até 04 dias após cada processo.\r\nhttps://orama.gupy.io/jobs/520134?jobBoardSource=gupy_public_page\r\n\r\n## Labels\r\n\r\n**Alocação**\r\n- Remoto\r\n\r\n## Regime\r\n- CLT\r\n\r\n## Nível\r\n- Pleno\r\n- Sênior",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4538",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4538/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4538/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4538/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4538",
      "id": 840226986,
      "node_id": "MDU6SXNzdWU4NDAyMjY5ODY=",
      "number": 4538,
      "title": "[Porto Alegre] Front-end Developer na Bonaparte",
      "user": {
        "login": "eduardomello",
        "id": 317744,
        "node_id": "MDQ6VXNlcjMxNzc0NA==",
        "avatar_url": "https://avatars.githubusercontent.com/u/317744?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/eduardomello",
        "html_url": "https://github.com/eduardomello",
        "followers_url": "https://api.github.com/users/eduardomello/followers",
        "following_url": "https://api.github.com/users/eduardomello/following{/other_user}",
        "gists_url": "https://api.github.com/users/eduardomello/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/eduardomello/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/eduardomello/subscriptions",
        "organizations_url": "https://api.github.com/users/eduardomello/orgs",
        "repos_url": "https://api.github.com/users/eduardomello/repos",
        "events_url": "https://api.github.com/users/eduardomello/events{/privacy}",
        "received_events_url": "https://api.github.com/users/eduardomello/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 321622757,
          "node_id": "MDU6TGFiZWwzMjE2MjI3NTc=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Freela",
          "name": "Freela",
          "color": "7fe266",
          "default": false,
          "description": ""
        },
        {
          "id": 321622700,
          "node_id": "MDU6TGFiZWwzMjE2MjI3MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/PJ",
          "name": "PJ",
          "color": "7fe266",
          "default": false,
          "description": ""
        },
        {
          "id": 321622540,
          "node_id": "MDU6TGFiZWwzMjE2MjI1NDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Pleno",
          "name": "Pleno",
          "color": "6c46ea",
          "default": false,
          "description": ""
        },
        {
          "id": 324086912,
          "node_id": "MDU6TGFiZWwzMjQwODY5MTI=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Remoto",
          "name": "Remoto",
          "color": "6befe6",
          "default": false,
          "description": ""
        },
        {
          "id": 321622600,
          "node_id": "MDU6TGFiZWwzMjE2MjI2MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%AAnior",
          "name": "Sênior",
          "color": "6c46ea",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-24T22:16:18Z",
      "updated_at": "2021-03-24T22:16:57Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "## Nossa empresa\r\n\r\nA Bonaparte é uma agência que atua tanto no marketing digital quanto no desenvolvimento de soluções web. Há 10 anos no mercado, atuando em Porto Alegre, já colaboramos com marcas como Converse, Youcom, Coca-Cola, Facebook e Heineken.\r\n\r\n## Descrição da vaga\r\n\r\nTrabalhar na manutenção de Objetos Educacionais Digitais (OEDs) desenvolvidos em HTML.\r\n\r\n## Local\r\n\r\nRemoto\r\n\r\n## Requisitos\r\n\r\n**Obrigatórios:**\r\n- Experiências com HTML/CSS/JS\r\n- Experiência com Jogos HTML e Canvas\r\n\r\n**Desejáveis:**\r\n- Conhecimentos com jQuery\r\n- Conhecimentos com jQuery-UI\r\n- Conhecimentos com Interact\r\n\r\n## Contratação\r\n\r\nPJ a combinar\r\n\r\n## Como se candidatar\r\n\r\nPor favor envie um email para carlos.rosa@bonaparte.ag com seu CV anexado - enviar no assunto: Vaga OEDs\r\n\r\n## Labels\r\n\r\n#### Alocação\r\n- Remoto\r\n\r\n#### Regime\r\n- Freela\r\n- PJ\r\n\r\n#### Nível\r\n- Pleno\r\n- Sênior\r\n\r\n\r\n\r\n",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4537",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4537/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4537/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4537/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4537",
      "id": 840130158,
      "node_id": "MDU6SXNzdWU4NDAxMzAxNTg=",
      "number": 4537,
      "title": "[São Paulo] Front-end Developer na Semente Educação",
      "user": {
        "login": "comutech",
        "id": 78042119,
        "node_id": "MDQ6VXNlcjc4MDQyMTE5",
        "avatar_url": "https://avatars.githubusercontent.com/u/78042119?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/comutech",
        "html_url": "https://github.com/comutech",
        "followers_url": "https://api.github.com/users/comutech/followers",
        "following_url": "https://api.github.com/users/comutech/following{/other_user}",
        "gists_url": "https://api.github.com/users/comutech/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/comutech/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/comutech/subscriptions",
        "organizations_url": "https://api.github.com/users/comutech/orgs",
        "repos_url": "https://api.github.com/users/comutech/repos",
        "events_url": "https://api.github.com/users/comutech/events{/privacy}",
        "received_events_url": "https://api.github.com/users/comutech/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 324087046,
          "node_id": "MDU6TGFiZWwzMjQwODcwNDY=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Alocado",
          "name": "Alocado",
          "color": "6befe6",
          "default": false,
          "description": ""
        },
        {
          "id": 321622629,
          "node_id": "MDU6TGFiZWwzMjE2MjI2Mjk=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/CLT",
          "name": "CLT",
          "color": "7fe266",
          "default": false,
          "description": ""
        },
        {
          "id": 321622469,
          "node_id": "MDU6TGFiZWwzMjE2MjI0Njk=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/J%C3%BAnior",
          "name": "Júnior",
          "color": "6c46ea",
          "default": false,
          "description": ""
        },
        {
          "id": 321622540,
          "node_id": "MDU6TGFiZWwzMjE2MjI1NDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Pleno",
          "name": "Pleno",
          "color": "6c46ea",
          "default": false,
          "description": ""
        },
        {
          "id": 324086912,
          "node_id": "MDU6TGFiZWwzMjQwODY5MTI=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Remoto",
          "name": "Remoto",
          "color": "6befe6",
          "default": false,
          "description": ""
        },
        {
          "id": 1178245525,
          "node_id": "MDU6TGFiZWwxMTc4MjQ1NTI1",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%A3o%20Paulo",
          "name": "São Paulo",
          "color": "f9745c",
          "default": false,
          "description": ""
        },
        {
          "id": 2188230749,
          "node_id": "MDU6TGFiZWwyMTg4MjMwNzQ5",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/%F0%9F%A6%A0%20Remoto%20durante%20pandemia",
          "name": "🦠 Remoto durante pandemia",
          "color": "f9f25e",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-24T20:15:07Z",
      "updated_at": "2021-03-24T20:15:49Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "<!-- \r\n==================================================\r\nPOR FAVOR, SÓ POSTE SE A VAGA FOR PARA FRONT-END!\r\n\r\nNão faça distinção de gênero no título da vaga.\r\n\r\nUse: \"Front-End Developer\" ao invés de \r\n\"Desenvolvedor Front-End\" \\o/\r\n\r\nExemplo: `[São Paulo] Front-End Developer na NOME DA EMPRESA`\r\n==================================================\r\n-->\r\n\r\n<!--\r\n==================================================\r\nCaso a vaga for remoto durante a pandemia deixar a linha abaixo\r\n==================================================\r\n-->\r\n> Vaga Remota durante a pandemia\r\n\r\n## Nossa empresa\r\n\r\nA Semente Educação acredita que democratizar o ensino socioambiental para jovens e adultos é uma das formas mais poderosas de construir uma sociedade melhor e mais justa. \r\nNosso sistema de ensino já é utilizado por mais de 50 mil alunos e agora queremos escalar nosso impacto com uma nova plataforma digital.\r\n\r\n## Descrição da vaga\r\n\r\n- Atuar em conjunto com a equipe de design para receber UIs e convertê-las em HTML + CSS da forma mais fidedigna e com a melhor qualidade de código possíveis.\r\n- Participar de planejamentos para a concepção de melhorias e implementações nas nossas plataformas vigentes ou eventuais concepções de novos sistemas/produtos.\r\n- Atuar ativamente e constantemente com o time de desenvolvedores para discutir ou propor soluções, mitigar problemas e garantir que a implementação do seu código seja funcional quando agregada ao código deles.\r\n- Entender e absorver o negócio da empresa, a fim de retroalimentar os pontos descritos acima com soluções aderentes\r\n\r\n## Local\r\n\r\nHome-office, com opção livre de ir ao nosso escritório no bairro Perdizes, em São Paulo - SP\r\n\r\n## Requisitos\r\n\r\n- Sólidos conhecimentos e experiência em HTML5, CSS/SCSS.\r\n- Experiência em transposição de UIs para telas codificadas, com melhores práticas de estruturação do HTML (utilizando tags semanticamente corretas para cada caso) e do CSS/SCSS (Preferencialmente padrão BEM – Bloco, Elemento, Modificador).\r\n- Implementação de responsividade.\r\n- Experiência em atuar junto à profissionais de UI, para receber as telas a serem codificadas.\r\n- Experiência com frameworks de front js (React, Angular, Ember, Vue...).\r\n- Experiência em Git para o controle de versionamento.\r\n\r\n\r\n**Diferenciais:**\r\n\r\n- Ser apaixonado por educação e impacto social\r\n- Ser apaixonado por CSS e HTML\r\n- Ter trabalhado com handlebars ou Ember.js.\r\n- JavaScript intermediário.\r\n- Ter trabalhado com Web Apps e código escalável.\r\n\r\n## Benefícios\r\n\r\n- Vale refeição VR de R$ 540,00/mês\r\n- Vale transporte\r\n- Plano de saúde Amil 700, sem encargos/coparticipação\r\n\r\n\r\n## Contratação\r\n\r\nCLT\r\n\r\n## Como se candidatar\r\n\r\nPor favor envie um email para comutechbr@gmail.com com seu CV anexado - enviar no assunto: Vaga Front-end\r\n\r\n\r\n\r\n#### Alocação\r\n- Alocado\r\n\r\n\r\n#### Regime\r\n- CLT\r\n\r\n\r\n#### Nível\r\n- Júnior\r\n- Pleno\r\n\r\n\r\n",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4536",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4536/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4536/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4536/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4536",
      "id": 840057538,
      "node_id": "MDU6SXNzdWU4NDAwNTc1Mzg=",
      "number": 4536,
      "title": "[REMOTO] Desenvolvedor Front-End na TO Brasil",
      "user": {
        "login": "NerdProgramador-com-br",
        "id": 81326271,
        "node_id": "MDQ6VXNlcjgxMzI2Mjcx",
        "avatar_url": "https://avatars.githubusercontent.com/u/81326271?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/NerdProgramador-com-br",
        "html_url": "https://github.com/NerdProgramador-com-br",
        "followers_url": "https://api.github.com/users/NerdProgramador-com-br/followers",
        "following_url": "https://api.github.com/users/NerdProgramador-com-br/following{/other_user}",
        "gists_url": "https://api.github.com/users/NerdProgramador-com-br/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/NerdProgramador-com-br/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/NerdProgramador-com-br/subscriptions",
        "organizations_url": "https://api.github.com/users/NerdProgramador-com-br/orgs",
        "repos_url": "https://api.github.com/users/NerdProgramador-com-br/repos",
        "events_url": "https://api.github.com/users/NerdProgramador-com-br/events{/privacy}",
        "received_events_url": "https://api.github.com/users/NerdProgramador-com-br/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 324086912,
          "node_id": "MDU6TGFiZWwzMjQwODY5MTI=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Remoto",
          "name": "Remoto",
          "color": "6befe6",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-24T18:56:41Z",
      "updated_at": "2021-03-24T18:57:23Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "## Descrição da vaga\r\n\r\n- Ensino superior em Tecnologia da Informação\r\n- Sólida experiência com Javascript;\r\n- Sólida experiência com HTML/CSS; \r\n- Domínio de gerenciamento de estados; \r\n- Conhecimento em Angular 7+; \r\n- Conhecimento de GIT; \r\n- Conhecimento de Testes unitários;  \r\n- Conhecimento de metodologia ágil.\r\n\r\n## Local\r\n\r\nRemoto\r\n\r\n## Como se candidatar\r\n\r\nAccesse a [Vaga de Desenvolvedor Front-End na TO Brasil](https://nerdprogramador.com.br/to-brasil-desenvolvedor-front-end/f61945c7-8429-4002-b705-ba6a3210a083) para mais informações.\r\n\r\n## Labels\r\n- Remoto\r\n\r\n#### Alocação\r\n- Remoto\r\n",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4535",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4535/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4535/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4535/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4535",
      "id": 840053113,
      "node_id": "MDU6SXNzdWU4NDAwNTMxMTM=",
      "number": 4535,
      "title": "[São Paulo] Front-end Developer no Banco Santander ",
      "user": {
        "login": "luansmr",
        "id": 18622719,
        "node_id": "MDQ6VXNlcjE4NjIyNzE5",
        "avatar_url": "https://avatars.githubusercontent.com/u/18622719?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/luansmr",
        "html_url": "https://github.com/luansmr",
        "followers_url": "https://api.github.com/users/luansmr/followers",
        "following_url": "https://api.github.com/users/luansmr/following{/other_user}",
        "gists_url": "https://api.github.com/users/luansmr/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/luansmr/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/luansmr/subscriptions",
        "organizations_url": "https://api.github.com/users/luansmr/orgs",
        "repos_url": "https://api.github.com/users/luansmr/repos",
        "events_url": "https://api.github.com/users/luansmr/events{/privacy}",
        "received_events_url": "https://api.github.com/users/luansmr/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 324087046,
          "node_id": "MDU6TGFiZWwzMjQwODcwNDY=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Alocado",
          "name": "Alocado",
          "color": "6befe6",
          "default": false,
          "description": ""
        },
        {
          "id": 321622629,
          "node_id": "MDU6TGFiZWwzMjE2MjI2Mjk=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/CLT",
          "name": "CLT",
          "color": "7fe266",
          "default": false,
          "description": ""
        },
        {
          "id": 321622540,
          "node_id": "MDU6TGFiZWwzMjE2MjI1NDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Pleno",
          "name": "Pleno",
          "color": "6c46ea",
          "default": false,
          "description": ""
        },
        {
          "id": 1178245525,
          "node_id": "MDU6TGFiZWwxMTc4MjQ1NTI1",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%A3o%20Paulo",
          "name": "São Paulo",
          "color": "f9745c",
          "default": false,
          "description": ""
        },
        {
          "id": 321622600,
          "node_id": "MDU6TGFiZWwzMjE2MjI2MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%AAnior",
          "name": "Sênior",
          "color": "6c46ea",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 2,
      "created_at": "2021-03-24T18:51:33Z",
      "updated_at": "2021-03-25T18:58:39Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "## Nossa empresa\r\n\r\nJá pensou em trabalhar em um lugar em constante **transformação digital**, inovação, colaboração e crescimento? **Aqui é o lugar!**\r\n\r\nSe você tem paixão por tecnologia e pessoas, empatia, foco em resultados e gosta de mudanças, faça parte de tudo isso!\r\n\r\nEstamos sempre inovando e buscando trabalhar com as melhores tecnologias do mundo. Nosso time de tecnologia conta com Agile coach, desenvolvedores Mobile, profissionais full stack, BPM, DevOps, Cloud e outros.\r\n\r\nNosso compromisso com a valorização da Diversidade está presente em todas as nossas oportunidades. Acreditamos no potencial humano para desenvolver talentos e gerar inovação para nossos clientes. Aqui você pode ser quem você é!\r\n\r\nSe você se identificou #deumatch!\r\n\r\n## Descrição da vaga\r\n\r\nBuscamos Front-End Developer, com entusiasmo e energia para trazer soluções inovadoras, focadas em usuários do mercado financeiro.\r\n\r\nProcuramos pessoas com alto nível de comprometimento, foco na solução de problemas e interesse em atuar em projetos de grande porte, e que estejam disposto a crescer junto com a gente, pois aqui você vai ter muita voz e responsabilidade logo de cara!\r\n\r\nNossos desafios crescem no ritmo do nosso crescimento e isso faz com que a gente seja um time muito unido e cooperativo, sempre aprendendo, empreendendo e crescendo juntos!\r\n\r\n## Local\r\n\r\nEscritório: [SP], [São Paulo], [Centro Histórico de São Paulo]\r\n\r\n## Requisitos\r\n\r\n**Obrigatórios:**\r\n- Angular\r\n- TypeScript\r\n- Javascript\r\n- HTML5\r\n- SASS\r\n- CSS\r\n\r\n**Desejáveis:**\r\n- Testes unitários\r\n- Angular Elements\r\n- Jira\r\n\r\n**Diferenciais:**\r\n- Webviews\r\n\r\n## Benefícios\r\n\r\n- Plano Odontológico\r\n- Plano de Saúde\r\n- Seguro de Vida\r\n- Vale Transporte\r\n- Vale Refeição\r\n- Auxílio creche\r\n\r\n**Diferenciais:**\r\n- Horário flexível\r\n- PLR\r\n- Dress Code\r\n\r\n## Contratação\r\n\r\nCLT a combinar\r\n\r\n## Como se candidatar\r\n\r\nPor favor envie um email para luan.sommerhauzer@santander.com.br com seu CV anexado - enviar no assunto: Vaga - Front end\r\n\r\n## Tempo médio de feedbacks\r\n\r\nCostumamos enviar feedbacks em até 20 dias após cada processo.\r\nE-mail para contato em caso de não haver resposta: luan.sommerhauzer@santander.com.br\r\n\r\n## Labels\r\n\r\n#### Alocação\r\n- Alocado\r\n\r\n#### Regime\r\n- CLT\r\n\r\n#### Nível\r\n- Pleno\r\n- Sênior\r\n\r\n\r\n",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4534",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4534/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4534/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4534/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4534",
      "id": 839744145,
      "node_id": "MDU6SXNzdWU4Mzk3NDQxNDU=",
      "number": 4534,
      "title": "[Porto Alegre - Remote] Front-end Developer [Azion]",
      "user": {
        "login": "julsngst",
        "id": 81310052,
        "node_id": "MDQ6VXNlcjgxMzEwMDUy",
        "avatar_url": "https://avatars.githubusercontent.com/u/81310052?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/julsngst",
        "html_url": "https://github.com/julsngst",
        "followers_url": "https://api.github.com/users/julsngst/followers",
        "following_url": "https://api.github.com/users/julsngst/following{/other_user}",
        "gists_url": "https://api.github.com/users/julsngst/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/julsngst/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/julsngst/subscriptions",
        "organizations_url": "https://api.github.com/users/julsngst/orgs",
        "repos_url": "https://api.github.com/users/julsngst/repos",
        "events_url": "https://api.github.com/users/julsngst/events{/privacy}",
        "received_events_url": "https://api.github.com/users/julsngst/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 321622629,
          "node_id": "MDU6TGFiZWwzMjE2MjI2Mjk=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/CLT",
          "name": "CLT",
          "color": "7fe266",
          "default": false,
          "description": ""
        },
        {
          "id": 1504140182,
          "node_id": "MDU6TGFiZWwxNTA0MTQwMTgy",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Especialista",
          "name": "Especialista",
          "color": "d114bb",
          "default": false,
          "description": ""
        },
        {
          "id": 324086912,
          "node_id": "MDU6TGFiZWwzMjQwODY5MTI=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Remoto",
          "name": "Remoto",
          "color": "6befe6",
          "default": false,
          "description": ""
        },
        {
          "id": 321622600,
          "node_id": "MDU6TGFiZWwzMjE2MjI2MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%AAnior",
          "name": "Sênior",
          "color": "6c46ea",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-24T13:49:36Z",
      "updated_at": "2021-03-24T13:50:22Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "## Nossa empresa\r\n\r\nA Azion é uma plataforma de Edge Computing, que permite ao usuário construir e executar suas aplicações Serverless na nossa edge. A empresa começou com o foco em P&D e nos últimos anos começou a focar na sua expansão e dos seus produtos. E com isso, tivemos um grande crescimento e em novembro do ano passado a Monashess e a Qualcomm decidiram investir na Azion, acreditando no potencial da empresa e dos nossos produtos. Atualmente a maior parte dos e-commerces e as maiores plataformas LATAM entregam seu conteúdo via Azion, temos mais de 100 clientes, trabalhando com empresas como Magalu, Submarino (e-commerce), Kroton (educação), Grupo RBS (mídia), Banco Agibank na área de segurança e entre outros. Nossa atuação está em todo território nacional, na LATAM e nos EUA.\r\n\r\n\r\n## Descrição da vaga\r\n\r\nVocê atuará na arquitetura, criação, componentização e manutenção de diversos sistemas, incluindo plataformas de autenticação, Marketplace, gerenciamento de configuração em Edge de clientes, dentre muitos outros desafios. Você terá envolvimento em todo o processo, desde a análise do problema até o desenvolvimento, teste, monitoramento, e sua entrega em ambiente de produção. Prezamos pela qualidade, resiliência e segurança das nossas aplicações e produtos, então se você se identifica com esse perfil e topa os desafios, venha fazer parte do nosso time! \r\n\r\n## Local\r\n\r\n100% Remoto\r\n\r\n## Requisitos\r\n\r\n**Obrigatórios:**\r\nExperiência com desenvolvimento frontend (HTML/CSS/JS);\r\nExperiência com VueJs ou outro framework de mercado (React, Angular);\r\nExperiência com desenvolvimento em ambiente UNIX;;\r\nConhecimento de componentização e boas práticas de UI e UX;\r\nConhecimento de Client-Side APIs (DOM, Storage, XmlHttpRequest etc);\r\nConhecimento de modelos de API REST;\r\nConhecimento de requests HTTP;\r\nConhecimento de GIT, fluxos de desenvolvimento em times;\r\nConhecimento de fluxos de CI e CD;\r\nBoa organização de código e conhecimento de boas práticas;\r\nConhecimento de ferramentas de teste;\r\nInglês intermediário ou avançado.\r\n\r\n**Desejáveis:**\r\nConhecimento de utilitários e serviços de cloud (AWS, GCP, Digital Ocean etc);\r\nConhecimento de containers e conceitos relacionados (Docker, Compose, Kubernetes);\r\nConhecimento de banco de dados SQL e NoSQL;\r\nConhecimento de API GraphQL;\r\nConhecimento de storybook.\r\n\r\n## Benefícios\r\n\r\n- Plano de saúde\r\n- Plano odontológico\r\n- Seguro de vida\r\n- VR/VA com valor mensal\r\n- Auxílio para aulas de inglês e espanhol\r\n\r\n**Diferenciais:**\r\n- Horários flexíveis\r\n- R$200 para você personalizar a sua mesa de trabalho para ficar com o seu jeitinho\r\n- Geladeira com refrigerante, água, cerveja, chás, cafés e etc, grátis para quem for no escritório\r\n\r\n## Contratação\r\n\r\nCLT\r\n\r\n## Como se candidatar\r\n\r\nEnviar email para julia.angst@azion.com com \"Vaga Front-end\" no assunto, seu CV e seu telefone para contato.\r\n\r\n## Tempo médio de feedbacks\r\n\r\nCostumamos dar o feedback em até 1 semana.\r\n\r\n## Labels\r\n<!-- retire os labels que não fazem sentido à vaga -->\r\n\r\n#### Alocação\r\n- Remoto\r\n\r\n#### Regime\r\n- CLT\r\n\r\n#### Nível\r\n- Sênior\r\n- Especialista\r\n\r\n\r\n",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4533",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4533/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4533/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4533/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4533",
      "id": 839672359,
      "node_id": "MDU6SXNzdWU4Mzk2NzIzNTk=",
      "number": 4533,
      "title": "[Remote] Full-time Salary - UI/UX Designer ",
      "user": {
        "login": "Eaven",
        "id": 357878,
        "node_id": "MDQ6VXNlcjM1Nzg3OA==",
        "avatar_url": "https://avatars.githubusercontent.com/u/357878?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Eaven",
        "html_url": "https://github.com/Eaven",
        "followers_url": "https://api.github.com/users/Eaven/followers",
        "following_url": "https://api.github.com/users/Eaven/following{/other_user}",
        "gists_url": "https://api.github.com/users/Eaven/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Eaven/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Eaven/subscriptions",
        "organizations_url": "https://api.github.com/users/Eaven/orgs",
        "repos_url": "https://api.github.com/users/Eaven/repos",
        "events_url": "https://api.github.com/users/Eaven/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Eaven/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 1504140182,
          "node_id": "MDU6TGFiZWwxNTA0MTQwMTgy",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Especialista",
          "name": "Especialista",
          "color": "d114bb",
          "default": false,
          "description": ""
        },
        {
          "id": 321622540,
          "node_id": "MDU6TGFiZWwzMjE2MjI1NDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Pleno",
          "name": "Pleno",
          "color": "6c46ea",
          "default": false,
          "description": ""
        },
        {
          "id": 324086912,
          "node_id": "MDU6TGFiZWwzMjQwODY5MTI=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Remoto",
          "name": "Remoto",
          "color": "6befe6",
          "default": false,
          "description": ""
        },
        {
          "id": 321622600,
          "node_id": "MDU6TGFiZWwzMjE2MjI2MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%AAnior",
          "name": "Sênior",
          "color": "6c46ea",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-24T12:28:24Z",
      "updated_at": "2021-03-24T12:29:12Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "## Nossa empresa\r\n\r\n[Popstand](https://www.popstand.com) is a \"remote-first company\" looking to hire talented UX/UI Designers to join our growing team full time. \r\n\r\nYour work will be centered around designing in-house and for-client projects. If you find yourself designing ui's that impress, ux flows that teleport you into another realm, and you want to pave the way to the future with web3 technologies, then you’re a perfect fit. \r\n\r\nThis is a full-time, competitive salary, full-time ui/ux designer position, for the right candidates. \r\n\r\nWe’re interested in applicants that have an entrepreneurial drive, self starters, doesn't mind a tough user story flow that is a good challenge and excitement around building a future together as a team.\r\n\r\n## Descrição da vaga\r\n\r\nUI/UX Designer\r\n\r\n## Local\r\n\r\nRemoto\r\n\r\n## Requisitos\r\n\r\n**Obrigatórios:**\r\n- 2.5+ years professional experience\r\n- Figma\r\n- Mobile\r\n- Web\r\n- Wireframes\r\n- Full App Design\r\n\r\n**Desejáveis:**\r\n- Brand identity\r\n\r\n## Benefícios\r\n\r\n- Unlimited PTO\r\n- Paid vacation days\r\n- End of year bonuses\r\n- We assist with buying hardware (Mac / iPhone)\r\n\r\n## Como se candidatar\r\n\r\nPlease send an email to info@popstand.com with subject \"Front-end Brasil UX/UI Designer Job Posting\" and please include and fill out the following below to be considered:\r\n\r\n**Questionnaire:**\r\nAvailability (part-time or full-time):\r\nDo you have a Mac:\r\nWhen can you start:\r\nOverall years of experience designing (start to present day):\r\nOther unlisted experience you want to let us know about:\r\n\r\n## Tempo médio de feedbacks\r\n\r\nWe try to respond to everyone within 24 hours, though sometimes we get busy and may take a bit longer to get back to you.\r\n\r\n## Labels\r\n\r\n#### Alocação\r\n- Remoto\r\n\r\n#### Nível\r\n- Pleno\r\n- Sênior\r\n- Especialista",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4532",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4532/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4532/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4532/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4532",
      "id": 839463139,
      "node_id": "MDU6SXNzdWU4Mzk0NjMxMzk=",
      "number": 4532,
      "title": "[Hamburg | Remote] Front-end Developer — UX Engineer @ Factorial",
      "user": {
        "login": "dberri",
        "id": 17619518,
        "node_id": "MDQ6VXNlcjE3NjE5NTE4",
        "avatar_url": "https://avatars.githubusercontent.com/u/17619518?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/dberri",
        "html_url": "https://github.com/dberri",
        "followers_url": "https://api.github.com/users/dberri/followers",
        "following_url": "https://api.github.com/users/dberri/following{/other_user}",
        "gists_url": "https://api.github.com/users/dberri/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/dberri/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/dberri/subscriptions",
        "organizations_url": "https://api.github.com/users/dberri/orgs",
        "repos_url": "https://api.github.com/users/dberri/repos",
        "events_url": "https://api.github.com/users/dberri/events{/privacy}",
        "received_events_url": "https://api.github.com/users/dberri/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 1504140182,
          "node_id": "MDU6TGFiZWwxNTA0MTQwMTgy",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Especialista",
          "name": "Especialista",
          "color": "d114bb",
          "default": false,
          "description": ""
        },
        {
          "id": 321622757,
          "node_id": "MDU6TGFiZWwzMjE2MjI3NTc=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Freela",
          "name": "Freela",
          "color": "7fe266",
          "default": false,
          "description": ""
        },
        {
          "id": 321622700,
          "node_id": "MDU6TGFiZWwzMjE2MjI3MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/PJ",
          "name": "PJ",
          "color": "7fe266",
          "default": false,
          "description": ""
        },
        {
          "id": 321622540,
          "node_id": "MDU6TGFiZWwzMjE2MjI1NDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Pleno",
          "name": "Pleno",
          "color": "6c46ea",
          "default": false,
          "description": ""
        },
        {
          "id": 324086912,
          "node_id": "MDU6TGFiZWwzMjQwODY5MTI=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Remoto",
          "name": "Remoto",
          "color": "6befe6",
          "default": false,
          "description": ""
        },
        {
          "id": 321622600,
          "node_id": "MDU6TGFiZWwzMjE2MjI2MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%AAnior",
          "name": "Sênior",
          "color": "6c46ea",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-24T08:07:00Z",
      "updated_at": "2021-03-24T08:07:48Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "## Nossa empresa\r\n\r\nFactorial is a technology partner and develops sophisticated digital products. We have been working with local and international customers since 2015 and have been growing steadily ever since.\r\nOur team consists of people with different backgrounds and career paths, united by curiosity and passion for technology and digital innovation. We live New Work, appreciate personal responsibility and flexibility.\r\n\r\n## Descrição da vaga\r\n\r\n**Your tasks**\r\nYou take ownership of frontend solutions in a multi-disciplinary project team.\r\nYou plan frontend architectures and API integration in complex web applications.\r\nYou implement new features or improve existing components.\r\nYou write clean and understandable code using modern tools and workflows.\r\nYou collaborate closely with UX and visual designers.\r\nYou evaluate technical feasibility of feature requests.\r\nYou test and document your code.\r\nYou support your teammates with code reviews and pair programming.\r\n\r\n## Local\r\n\r\nRemote or Hamburg, Germany\r\n\r\n## Requisitos\r\n\r\n**Your profile**\r\n- At least 3 years experience in writing JavaScript applications and websites.\r\n- Intermediate to advanced knowledge of HTML, CSS and JavaScript.\r\n- Proficiency in at least 1 major reactive JavaScript framework (We prefer Vue.js).\r\n- Working self-organized, open-minded and communicative.\r\n- Having an eye for design, accessibility and performance.\r\n- Good communication skills in English (must) and German (nice to have).\r\n- Experience in working in agile processes such as Scrum and Kanban.\r\n- Ability to quickly become productive in different development environments.\r\n\r\n## Benefícios\r\n\r\n**What we offer you**\r\nExtensive development possibilities in a fast-growing company\r\nExperienced colleagues and a culture of exchanging experience\r\nA great team and a pleasant working atmosphere\r\nAn annual training budget at your own disposal\r\nFlexible time management\r\nA beautiful office with garden and roof terrace in the heart of Ottensen\r\nVery good coffee, various drinks, organic fruit & kicker \r\nA great cook who prepares lunch for us every 2 weeks.\r\n\r\n## Contratação\r\n\r\nA combinar\r\n\r\n## Como se candidatar\r\n\r\nYou do not have to match all the listed requirements exactly to apply. Please send your application including your aspired start date and salary expectations by email to our HR Manager Seda. You can reach her at jobs@factorial.io. We value real-life, working code higher than academic titles.\r\n\r\n## Labels\r\n\r\n#### Alocação\r\n- Remoto\r\n\r\n#### Regime\r\n- Freela\r\n- PJ\r\n\r\n#### Nível\r\n- Pleno\r\n- Sênior\r\n- Especialista\r\n\r\n\r\n",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4531",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4531/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4531/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4531/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4531",
      "id": 839079006,
      "node_id": "MDU6SXNzdWU4MzkwNzkwMDY=",
      "number": 4531,
      "title": "[Remoto] Desenvolvedor Fullstack - Home Office - Canadá",
      "user": {
        "login": "Grupo-Dream-Work",
        "id": 78158178,
        "node_id": "MDQ6VXNlcjc4MTU4MTc4",
        "avatar_url": "https://avatars.githubusercontent.com/u/78158178?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Grupo-Dream-Work",
        "html_url": "https://github.com/Grupo-Dream-Work",
        "followers_url": "https://api.github.com/users/Grupo-Dream-Work/followers",
        "following_url": "https://api.github.com/users/Grupo-Dream-Work/following{/other_user}",
        "gists_url": "https://api.github.com/users/Grupo-Dream-Work/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Grupo-Dream-Work/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Grupo-Dream-Work/subscriptions",
        "organizations_url": "https://api.github.com/users/Grupo-Dream-Work/orgs",
        "repos_url": "https://api.github.com/users/Grupo-Dream-Work/repos",
        "events_url": "https://api.github.com/users/Grupo-Dream-Work/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Grupo-Dream-Work/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 321622629,
          "node_id": "MDU6TGFiZWwzMjE2MjI2Mjk=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/CLT",
          "name": "CLT",
          "color": "7fe266",
          "default": false,
          "description": ""
        },
        {
          "id": 321622700,
          "node_id": "MDU6TGFiZWwzMjE2MjI3MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/PJ",
          "name": "PJ",
          "color": "7fe266",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-23T20:07:33Z",
      "updated_at": "2021-03-23T20:08:16Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "## About us\r\n\r\n**We are a company focused on agile technological solutions that simplify and generate real value in the day to day of organizations. We work to evolve your business quickly, consistently, and compatibly with the ever-accelerating changes of our time.**\r\n\r\n**We believe that individuals and their interactions make your and our business. This is our way of doing it: with technology and simplicity.**\r\n\r\n**Our purpose is to promote Human Growth with Technology.**\r\n\r\n## Observation:\r\n**You don't need to live in canada**\r\n\r\n## Our values\r\n\r\n- We are people serving people\r\n- We think and act as owners\r\n- We have a performance hunger\r\n- We grow and learn together\r\n- We strive for excellence and simplicity\r\n\r\n## What do you need to know about the recruitment process?\r\n\r\n**Our customer seeks to deliver the first and best in class experience building both consumer and internal applications. You will be working in a small and agile team on the latest in sports entertainment and sports performance. Projects include developing internal facing applications for their sports teams and also applications that reach their massive fan base.**\r\n\r\n## Responsibilities:\r\n\r\n**Create products and systems in a very agile environment with a fast decision process, having the opportunity to collaborate directly with people working on mobile & back-end development.**\r\n\r\n**Lead and direct other developers on Apple platform architecture and best practices.**\r\n\r\n**Communicate clearly and effectively with all members of our team.**\r\n\r\n## Must Haves:\r\n\r\n**Frontend:**\r\n\r\n- React\r\n- React Native (nice to have)\r\n- Redux, Redux-Saga and/or Hooks\r\n- NextJS (nice to have)\r\n- TypeScript\r\n- HTML/CSS\r\n\r\n**Backend:**\r\n\r\n- Node.js\r\n- Express\r\n- TypeScript\r\n- Technologies like ORM with Sequelize or TypeORM\r\n- Redis (nice to have)\r\n\r\n\r\n## Nice to Haves:\r\n\r\n- Having developed and launched a responsive web application in production with React and Node.js backend\r\n- Azure experience\r\n- Experience working in direct contact with Product Managers\r\n\r\n## Important to know!\r\n\r\n- Every professional is welcome. It doesn´t matter his/her disability, ethnicity, religious choice, sexual orientation, age, etc.  \r\n\r\n## Contratação\r\n**CLT ou PJ**\r\n\r\n**Please send an email stating your salary claim to leandro.lemos@grupodreamwork.com.br with your CV attached - send in subject: Fullstack Developer - Home Office - Canadá**\r\n\r\n**Or apply through the link:** https://jobs.recrutei.com.br/grupo-dream-work/vacancy/7036-dw1046-fullstack-developer-home-office-canada",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4530",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4530/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4530/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4530/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4530",
      "id": 839078743,
      "node_id": "MDU6SXNzdWU4MzkwNzg3NDM=",
      "number": 4530,
      "title": "[Remoto] Desenvolvedor(a) Front-end (Pleno e Sênior)",
      "user": {
        "login": "Grupo-Dream-Work",
        "id": 78158178,
        "node_id": "MDQ6VXNlcjc4MTU4MTc4",
        "avatar_url": "https://avatars.githubusercontent.com/u/78158178?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Grupo-Dream-Work",
        "html_url": "https://github.com/Grupo-Dream-Work",
        "followers_url": "https://api.github.com/users/Grupo-Dream-Work/followers",
        "following_url": "https://api.github.com/users/Grupo-Dream-Work/following{/other_user}",
        "gists_url": "https://api.github.com/users/Grupo-Dream-Work/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Grupo-Dream-Work/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Grupo-Dream-Work/subscriptions",
        "organizations_url": "https://api.github.com/users/Grupo-Dream-Work/orgs",
        "repos_url": "https://api.github.com/users/Grupo-Dream-Work/repos",
        "events_url": "https://api.github.com/users/Grupo-Dream-Work/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Grupo-Dream-Work/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 321622700,
          "node_id": "MDU6TGFiZWwzMjE2MjI3MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/PJ",
          "name": "PJ",
          "color": "7fe266",
          "default": false,
          "description": ""
        },
        {
          "id": 321622540,
          "node_id": "MDU6TGFiZWwzMjE2MjI1NDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Pleno",
          "name": "Pleno",
          "color": "6c46ea",
          "default": false,
          "description": ""
        },
        {
          "id": 324086912,
          "node_id": "MDU6TGFiZWwzMjQwODY5MTI=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Remoto",
          "name": "Remoto",
          "color": "6befe6",
          "default": false,
          "description": ""
        },
        {
          "id": 321622600,
          "node_id": "MDU6TGFiZWwzMjE2MjI2MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%AAnior",
          "name": "Sênior",
          "color": "6c46ea",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-23T20:07:08Z",
      "updated_at": "2021-03-23T20:07:51Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "## Descrição da vaga\r\n\r\n**Programador(a) para atuar no time de desenvolvimento e manutenção de projetos envolvendo AngularJS**\r\n\r\n## Local\r\n**Remoto**\r\n\r\n## Requisitos\r\n\r\n- 2 anos de experiência em projetos no framework.\r\n\r\n- Angular 4+ CSS e HTML.\r\n\r\n- Conhecimentos Typescript, React JS, HTML5, CSS3, ES6.\r\n\r\n- Noções de Design e Usabilidade;\r\n\r\n- Domínio em implementações de APIs restfull.\r\n\r\n- MVC e orientação a objetos.\r\n\r\n- Bootstrap.\r\n\r\n- Experiência com versionamento (GIT);\r\n\r\n## Formação\r\n- Superior concluído ou em andamento na área de TI\r\n- Inglês Intermediário\r\n\r\n## A empresa oferece:\r\n- Vale refeição\r\n\r\n- Vale alimentação\r\n\r\n- Plano de saúde regional\r\n\r\n- Oportunidade de crescimento profissional, contando com equipes multidisciplinares em squads.\r\n\r\n- Equipe com mais de 20 anos de experiência profissional no desenvolvimento de produtos digitais, atuando na co-criação, usabilidade, gestão de projetos e produção de software. Clientes como Google, Nike, RedBull, TicketLog, Danone, GloboNews e etc.\r\n\r\n## Contratação\r\n\r\n**PJ a combinar pretensão salarial**\r\n\r\n## Como se candidatar\r\n\r\n**Por favor envie um email informando sua pretensão salarial para leandro.lemos@grupodreamwork.com.br com seu CV anexado - enviar no assunto: Vaga Desenvolvedor(a) Front end (Pleno e Sênior)**\r\n\r\n**Ou candidatar-se através do link:** https://jobs.recrutei.com.br/grupo-dream-work/vacancy/7336-dw1049-desenvolvedora-front-end-pleno-e-senior-pj\r\n\r\n#### Nível\r\n- Pleno\r\n- Sênior",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4529",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4529/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4529/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4529/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4529",
      "id": 839077938,
      "node_id": "MDU6SXNzdWU4MzkwNzc5Mzg=",
      "number": 4529,
      "title": "[Remoto] Desenvolvedor(a) Wordpress (Pleno e Sênior) @ Grupo Dream Work",
      "user": {
        "login": "Grupo-Dream-Work",
        "id": 78158178,
        "node_id": "MDQ6VXNlcjc4MTU4MTc4",
        "avatar_url": "https://avatars.githubusercontent.com/u/78158178?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Grupo-Dream-Work",
        "html_url": "https://github.com/Grupo-Dream-Work",
        "followers_url": "https://api.github.com/users/Grupo-Dream-Work/followers",
        "following_url": "https://api.github.com/users/Grupo-Dream-Work/following{/other_user}",
        "gists_url": "https://api.github.com/users/Grupo-Dream-Work/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Grupo-Dream-Work/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Grupo-Dream-Work/subscriptions",
        "organizations_url": "https://api.github.com/users/Grupo-Dream-Work/orgs",
        "repos_url": "https://api.github.com/users/Grupo-Dream-Work/repos",
        "events_url": "https://api.github.com/users/Grupo-Dream-Work/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Grupo-Dream-Work/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 321622700,
          "node_id": "MDU6TGFiZWwzMjE2MjI3MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/PJ",
          "name": "PJ",
          "color": "7fe266",
          "default": false,
          "description": ""
        },
        {
          "id": 321622540,
          "node_id": "MDU6TGFiZWwzMjE2MjI1NDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Pleno",
          "name": "Pleno",
          "color": "6c46ea",
          "default": false,
          "description": ""
        },
        {
          "id": 324086912,
          "node_id": "MDU6TGFiZWwzMjQwODY5MTI=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Remoto",
          "name": "Remoto",
          "color": "6befe6",
          "default": false,
          "description": ""
        },
        {
          "id": 321622600,
          "node_id": "MDU6TGFiZWwzMjE2MjI2MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%AAnior",
          "name": "Sênior",
          "color": "6c46ea",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-23T20:05:56Z",
      "updated_at": "2021-03-23T20:06:38Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "## Descrição da vaga\r\n\r\n**Programador(a) para atuar no time de desenvolvimento e manutenção de projetos envolvendo WordPress.**\r\n\r\n## Local\r\n**Remoto**\r\n\r\n## Requisitos\r\n\r\n- Wordpress\r\n\r\n- HTML\r\n\r\n- CSS\r\n\r\n- Javascript – JQUERY / AngularJS\r\n\r\n- GIT\r\n\r\n## Formação\r\n- Ensino médio completo\r\n\r\n## A empresa oferece:\r\n- Vale refeição\r\n\r\n- Vale alimentação\r\n\r\n- Plano de saúde regional\r\n\r\n- Oportunidade de crescimento profissional, contando com equipes multidisciplinares em squads.\r\n\r\n- Equipe com mais de 20 anos de experiência profissional no desenvolvimento de produtos digitais, atuando na co-criação, usabilidade, gestão de projetos e produção de software. Clientes como Google, Nike, RedBull, TicketLog, Danone, GloboNews e etc.\r\n\r\n## Contratação\r\n\r\n**PJ a combinar pretensão salarial**\r\n\r\n## Como se candidatar\r\n\r\n**Por favor envie um email informando sua pretensão salarial para leandro.lemos@grupodreamwork.com.br com seu CV anexado - enviar no assunto: Vaga Desenvolvedor(a) Wordpress (Pleno e Sênior)**\r\n\r\n**Ou candidatar-se através do link:** https://jobs.recrutei.com.br/grupo-dream-work/vacancy/7338-dw1050-desenvolvedora-wordpress-pleno-e-senior-pj\r\n\r\n#### Nível\r\n- Pleno\r\n- Sênior",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4527",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4527/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4527/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4527/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4527",
      "id": 838988297,
      "node_id": "MDU6SXNzdWU4Mzg5ODgyOTc=",
      "number": 4527,
      "title": "[Remoto] Front-end Pleno e Sênior na Digital Code (Dentsu Brasil)",
      "user": {
        "login": "Conchetto",
        "id": 2488840,
        "node_id": "MDQ6VXNlcjI0ODg4NDA=",
        "avatar_url": "https://avatars.githubusercontent.com/u/2488840?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Conchetto",
        "html_url": "https://github.com/Conchetto",
        "followers_url": "https://api.github.com/users/Conchetto/followers",
        "following_url": "https://api.github.com/users/Conchetto/following{/other_user}",
        "gists_url": "https://api.github.com/users/Conchetto/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Conchetto/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Conchetto/subscriptions",
        "organizations_url": "https://api.github.com/users/Conchetto/orgs",
        "repos_url": "https://api.github.com/users/Conchetto/repos",
        "events_url": "https://api.github.com/users/Conchetto/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Conchetto/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 321622700,
          "node_id": "MDU6TGFiZWwzMjE2MjI3MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/PJ",
          "name": "PJ",
          "color": "7fe266",
          "default": false,
          "description": ""
        },
        {
          "id": 321622540,
          "node_id": "MDU6TGFiZWwzMjE2MjI1NDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Pleno",
          "name": "Pleno",
          "color": "6c46ea",
          "default": false,
          "description": ""
        },
        {
          "id": 324086912,
          "node_id": "MDU6TGFiZWwzMjQwODY5MTI=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Remoto",
          "name": "Remoto",
          "color": "6befe6",
          "default": false,
          "description": ""
        },
        {
          "id": 1178245525,
          "node_id": "MDU6TGFiZWwxMTc4MjQ1NTI1",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%A3o%20Paulo",
          "name": "São Paulo",
          "color": "f9745c",
          "default": false,
          "description": ""
        },
        {
          "id": 321622600,
          "node_id": "MDU6TGFiZWwzMjE2MjI2MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%AAnior",
          "name": "Sênior",
          "color": "6c46ea",
          "default": false,
          "description": ""
        },
        {
          "id": 2188230749,
          "node_id": "MDU6TGFiZWwyMTg4MjMwNzQ5",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/%F0%9F%A6%A0%20Remoto%20durante%20pandemia",
          "name": "🦠 Remoto durante pandemia",
          "color": "f9f25e",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-23T18:08:44Z",
      "updated_at": "2021-03-23T19:50:37Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "<!-- \r\n==================================================\r\nPOR FAVOR, SÓ POSTE SE A VAGA FOR PARA FRONT-END!\r\n\r\nNão faça distinção de gênero no título da vaga.\r\n\r\nUse: \"Front-End Developer\" ao invés de \r\n\"Desenvolvedor Front-End\" \\o/\r\n\r\nExemplo: `[São Paulo] Front-End Developer na NOME DA EMPRESA`\r\n==================================================\r\n-->\r\n\r\n<!--\r\n==================================================\r\nCaso a vaga for remoto durante a pandemia deixar a linha abaixo\r\n==================================================\r\n-->\r\n> Vaga Remota durante a pandemia\r\n\r\n## Digital Code\r\n\r\nSomos a Digital Code, uma empresa de tecnologia do grupo Dentsu. A Dentsu é o maior grupo de publicidade da Ásia e figura entre os principais players da publicidade brasileira.\r\n\r\nBuscamos um profissional comprometido com qualidade de código e apaixonado por tecnologia.\r\n\r\nAlguém que busca otimizar e evoluir seus processos de desenvolvimento, criando projetos tecnicamente elaborados, mas que entregam resultados práticos e claros.\r\n\r\n## Local\r\n\r\nTrabalho 100% Remoto\r\n\r\n## Requisitos\r\n\r\n**Obrigatórios:**\r\n- Amplo domínio no front-end (experiência em HTML5/CSS3/JS)\r\n- Autonomia com ReactJS / VUE.js ou Vanilla\r\n- Bons conhecimentos de Redux\r\n- Sass e webpack\r\n- Integração com APIs REST\r\n- Bons conhecimentos com GIT\r\n\r\n**Desejáveis:**\r\n- Experiência com metodologias ágeis\r\n- Base de UX ou UI\r\n\r\n\r\n\r\n## Contratação\r\n\r\nPJ a combinar\r\n\r\n## Como se candidatar\r\n\r\nPor favor envie um email para lucas.conchetto@digitalcode.com.br com seu CV anexado - enviar no assunto: Vaga Front-end\r\n\r\n## Labels\r\n<!-- retire os labels que não fazem sentido à vaga -->\r\n\r\n#### Alocação\r\n- Remoto\r\n\r\n#### Regime\r\n- PJ\r\n\r\n#### Nível\r\n- Pleno\r\n- Sênior\r\n\r\n\r\n",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4526",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4526/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4526/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4526/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4526",
      "id": 838827165,
      "node_id": "MDU6SXNzdWU4Mzg4MjcxNjU=",
      "number": 4526,
      "title": "[Remoto] Front-end Angular Developer no DB1 Group",
      "user": {
        "login": "alissongusmao",
        "id": 77692315,
        "node_id": "MDQ6VXNlcjc3NjkyMzE1",
        "avatar_url": "https://avatars.githubusercontent.com/u/77692315?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/alissongusmao",
        "html_url": "https://github.com/alissongusmao",
        "followers_url": "https://api.github.com/users/alissongusmao/followers",
        "following_url": "https://api.github.com/users/alissongusmao/following{/other_user}",
        "gists_url": "https://api.github.com/users/alissongusmao/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/alissongusmao/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/alissongusmao/subscriptions",
        "organizations_url": "https://api.github.com/users/alissongusmao/orgs",
        "repos_url": "https://api.github.com/users/alissongusmao/repos",
        "events_url": "https://api.github.com/users/alissongusmao/events{/privacy}",
        "received_events_url": "https://api.github.com/users/alissongusmao/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 324087046,
          "node_id": "MDU6TGFiZWwzMjQwODcwNDY=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Alocado",
          "name": "Alocado",
          "color": "6befe6",
          "default": false,
          "description": ""
        },
        {
          "id": 321622629,
          "node_id": "MDU6TGFiZWwzMjE2MjI2Mjk=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/CLT",
          "name": "CLT",
          "color": "7fe266",
          "default": false,
          "description": ""
        },
        {
          "id": 321622540,
          "node_id": "MDU6TGFiZWwzMjE2MjI1NDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Pleno",
          "name": "Pleno",
          "color": "6c46ea",
          "default": false,
          "description": ""
        },
        {
          "id": 324086912,
          "node_id": "MDU6TGFiZWwzMjQwODY5MTI=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Remoto",
          "name": "Remoto",
          "color": "6befe6",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-23T15:07:49Z",
      "updated_at": "2021-03-23T15:08:39Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "\r\n## Nossa empresa\r\n\r\nSomos um grupo de empresas de tecnologia nascido em Maringá, interior do Paraná, com 20 anos de experiência em desenvolvimento de software voltado para soluções de grandes empresas. Atuamos em diversas frentes de mercado: com produtos (ANYMARKET, CONSIGNET, EIVE) e também com serviços e projetos personalizados através da nossa Fábrica de Software - DB1 Global Software. E estamos em expansão!!! 🚀🚀🚀\r\n\r\nSomos colaboradores distribuídos em todo o Brasil e na Argentina, com escritório em Maringá/PR, Campo Grande/MS e Presidente Prudente/SP e atuamos também de forma remota (home office) desde 2017. Estamos há 12 anos consecutivos entre as Melhores Empresas Para Trabalhar, segundo o GPTW, com reconhecimento pela instituição em 2020 como empresa referência na prática de escutar o colaborador.\r\n\r\nSomos movido por desafios diários, sempre buscando uma forma de melhorar o que já existe e criar coisas novas com qualidade! Todos(as) aqui temos autonomia e voz para dar feedbacks, testar coisas novas e ser parte dessa mudança. Aqui aprendemos uns com os outros diariamente, com um forte senso de equipe. DB1 é pra quem não quer ser mais um!\r\n\r\n## Descrição da vaga\r\n\r\nBuscamos um(a) profissional apaixonado(a) por tecnologia, próativo, comprometido em entregar software com qualidade, contribuindo com conhecimentos e experiências . Atuará no desenvolvimento Frontend utilizando AngularJS e Angular 2+.\r\n\r\n**Suas principais atividades serão:**\r\n\r\n- Atuar na customização e evolução de um sistema no segmento de farmácias.\r\n- Desenvolver com foco em frontend, utilizando AngularJS e Angular 2+\r\n- Trabalhar em conjunto com equipe de desenvolvimento backend Java. \r\n\r\n## Local\r\n\r\nRemoto ou Escritório, Paraná, Maringá\r\n\r\n## Requisitos\r\n\r\n**Obrigatórios:**\r\n- Experiência em frontend;\r\n- HTML;\r\n- Javascript;\r\n- Css;\r\n- Angular 2 +;\r\n- Angularjs;\r\n- Restful API;\r\n- Conceitos de componentização;\r\n- Boas praticas de desenvolvimento.\r\n\r\n**Desejáveis:**\r\n- Conhecimento em Testes Unitários, utilizando Jasmine.\r\n\r\n**Diferenciais:**\r\n- Conhecimento em Java.\r\n\r\n## Benefícios\r\n\r\n- Vale alimentação e/ou vale refeição;\r\n- Plano de Saúde e plano odontológico;\r\n- Uma trilha de carreira com Plano de Desenvolvimento Individual (PDI) e feedbacks constantes para te ajudar na sua evolução profissional;\r\n- Horários flexíveis!;\r\n- Convênio com farmácia Droga Raia, com desconto para colaboradores;\r\n- Pra celebrar seu aniversário, é possível sair um pouco mais cedo no dia para comemorar com quem quiser e organizar o que for necessário 🥳\r\n- Aqui você terá a oportunidade de aprender coisas novas - seja no dia-a-dia, em um Programa de Mentoria ou em um desafio do nosso programa de gamificação Mestre dos Códigos.\r\n- Home office como modelo de contratação. Atuamos com essa possibilidade desde 2017. Além de viabilizar a nossos colaboradores trabalhar de casa em algum dia da semana quando necessário :)\r\n\r\n## Contratação\r\n\r\nCLT com possibilidade 100% remota\r\n\r\n## Como se candidatar\r\n\r\n[Clique aqui para se inscrever na oportunidade](https://vagasdb1.recruiterbox.com/jobs/fk0uvze?source=Github), envie seus dados e nosso time de recrutamento e seleção entrará em contato.\r\n\r\nContamos mais sobre como é trabalhar na DB1 no nosso [site de carreira](https://www.db1group.com/home-office/), também nas nossas Redes Sociais: [LinkedIn](https://www.linkedin.com/company/db1-group), [Instagram ](https://www.instagram.com/db1group/)e [Facebook](https://www.facebook.com/DB1Group). Se quiser ficar por dentro das novidades do mundo de tecnologia ou novas oportunidades, acompanha a gente lá! 🧐\r\n\r\n## Tempo médio de feedbacks\r\n\r\nCostumamos enviar feedbacks em até 5 dias após cada processo.\r\nE-mail para contato em caso de não haver resposta: talentos@db1.com.br\r\n\r\n## Labels\r\n\r\n#### Alocação\r\n- Alocado\r\n- Remoto\r\n\r\n#### Regime\r\n- CLT\r\n\r\n#### Nível\r\n- Pleno",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4525",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4525/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4525/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4525/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4525",
      "id": 838804857,
      "node_id": "MDU6SXNzdWU4Mzg4MDQ4NTc=",
      "number": 4525,
      "title": "[Remoto / Porto Alegre ] Front-end Developer (React) na DeepX",
      "user": {
        "login": "sam-ferreira",
        "id": 79854362,
        "node_id": "MDQ6VXNlcjc5ODU0MzYy",
        "avatar_url": "https://avatars.githubusercontent.com/u/79854362?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/sam-ferreira",
        "html_url": "https://github.com/sam-ferreira",
        "followers_url": "https://api.github.com/users/sam-ferreira/followers",
        "following_url": "https://api.github.com/users/sam-ferreira/following{/other_user}",
        "gists_url": "https://api.github.com/users/sam-ferreira/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/sam-ferreira/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/sam-ferreira/subscriptions",
        "organizations_url": "https://api.github.com/users/sam-ferreira/orgs",
        "repos_url": "https://api.github.com/users/sam-ferreira/repos",
        "events_url": "https://api.github.com/users/sam-ferreira/events{/privacy}",
        "received_events_url": "https://api.github.com/users/sam-ferreira/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 321622629,
          "node_id": "MDU6TGFiZWwzMjE2MjI2Mjk=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/CLT",
          "name": "CLT",
          "color": "7fe266",
          "default": false,
          "description": ""
        },
        {
          "id": 321622700,
          "node_id": "MDU6TGFiZWwzMjE2MjI3MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/PJ",
          "name": "PJ",
          "color": "7fe266",
          "default": false,
          "description": ""
        },
        {
          "id": 321622540,
          "node_id": "MDU6TGFiZWwzMjE2MjI1NDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Pleno",
          "name": "Pleno",
          "color": "6c46ea",
          "default": false,
          "description": ""
        },
        {
          "id": 324086912,
          "node_id": "MDU6TGFiZWwzMjQwODY5MTI=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Remoto",
          "name": "Remoto",
          "color": "6befe6",
          "default": false,
          "description": ""
        },
        {
          "id": 321622600,
          "node_id": "MDU6TGFiZWwzMjE2MjI2MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%AAnior",
          "name": "Sênior",
          "color": "6c46ea",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-23T14:46:19Z",
      "updated_at": "2021-03-23T14:47:11Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "## Descrição da vaga\r\n\r\nA DeepX está procurando por um **Senior React Developer** para atuar na nossa área da consultoria, trabalhando com um dos nossos clientes, uma das grandes redes de fast food! 🍔👑 No nosso time, você trabalhará construindo componentes de UI e fazendo implementação com Flux ou Redux. Você estará envolvido nas decisões dos sistemas de arquitetura e terá a oportunidade de implementar novas ideias junto de times de desenvolvimento e design. Em nossas rotinas, nós utilizamos metodologias ágeis, processos de CI/CD, TDD e valorizamos boas práticas de implementação de código.\r\n\r\n## Local\r\n\r\nRemoto ou Escritório, Porto Alegre - Moinhos de Vento (Porém, somente remoto durante a pandemia.)\r\n\r\n## Requisitos\r\n\r\n- Experiencia com desenvolvimento frontend;\r\n- Conhecimento em React, Javascript, ou outras linguagens e frameworks;\r\n- Inglês avançado;\r\n- Vontade de aprender coisas novas e trabalhar colaborativamente.\r\n\r\n## Nossa empresa\r\n\r\nA DeepX é uma empresa americana fundada em 2014, com intuito de criar produtos próprios inovadores e também ajudar empresas a acelerarem seus negócios através da tecnologia. Desde então, existe essa conexão Porto Alegre e Austin, criando produtos e trabalhando com empresas de diversos lugares do mundo.\r\n\r\nQuer saber mais sobre a nossa cultura? Da uma olhadinha no nosso site: https://www.deepx.it/life-at-deepx\r\n\r\n**Diferenciais:**\r\n\r\n- Projetos internacionais;\r\n- Oportunidade de usar o inglês no dia-a-dia;\r\n- Flexibilidade de horários;\r\n- Compartilhamento de conhecimento;\r\n- Um time verdadeiramente aberto pra receber pessoas novas.\r\n\r\n## Contratação\r\n\r\nPJ a combinar\r\n\r\n## Como se candidatar\r\n\r\nAplique aqui: https://jobs.lever.co/deepx/85b920c8-d66b-4852-bb39-d67a3858d7b0/apply\r\n\r\n## Tempo médio de feedbacks\r\n\r\nCostumamos enviar feedbacks em até 7 dias após cada processo.\r\nE-mail para contato em caso de não haver resposta: careers@deepx.it\r\n\r\n## Labels\r\n\r\n- Remoto\r\n- CLT\r\n- PJ\r\n- Pleno\r\n- Sênior",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/frontendbr/vagas/issues/4524",
      "repository_url": "https://api.github.com/repos/frontendbr/vagas",
      "labels_url": "https://api.github.com/repos/frontendbr/vagas/issues/4524/labels{/name}",
      "comments_url": "https://api.github.com/repos/frontendbr/vagas/issues/4524/comments",
      "events_url": "https://api.github.com/repos/frontendbr/vagas/issues/4524/events",
      "html_url": "https://github.com/frontendbr/vagas/issues/4524",
      "id": 838630376,
      "node_id": "MDU6SXNzdWU4Mzg2MzAzNzY=",
      "number": 4524,
      "title": "[Remoto] Front-end Developer na Koper",
      "user": {
        "login": "morais90",
        "id": 5431204,
        "node_id": "MDQ6VXNlcjU0MzEyMDQ=",
        "avatar_url": "https://avatars.githubusercontent.com/u/5431204?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/morais90",
        "html_url": "https://github.com/morais90",
        "followers_url": "https://api.github.com/users/morais90/followers",
        "following_url": "https://api.github.com/users/morais90/following{/other_user}",
        "gists_url": "https://api.github.com/users/morais90/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/morais90/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/morais90/subscriptions",
        "organizations_url": "https://api.github.com/users/morais90/orgs",
        "repos_url": "https://api.github.com/users/morais90/repos",
        "events_url": "https://api.github.com/users/morais90/events{/privacy}",
        "received_events_url": "https://api.github.com/users/morais90/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 324087046,
          "node_id": "MDU6TGFiZWwzMjQwODcwNDY=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Alocado",
          "name": "Alocado",
          "color": "6befe6",
          "default": false,
          "description": ""
        },
        {
          "id": 321622700,
          "node_id": "MDU6TGFiZWwzMjE2MjI3MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/PJ",
          "name": "PJ",
          "color": "7fe266",
          "default": false,
          "description": ""
        },
        {
          "id": 321622540,
          "node_id": "MDU6TGFiZWwzMjE2MjI1NDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Pleno",
          "name": "Pleno",
          "color": "6c46ea",
          "default": false,
          "description": ""
        },
        {
          "id": 324086912,
          "node_id": "MDU6TGFiZWwzMjQwODY5MTI=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/Remoto",
          "name": "Remoto",
          "color": "6befe6",
          "default": false,
          "description": ""
        },
        {
          "id": 321622600,
          "node_id": "MDU6TGFiZWwzMjE2MjI2MDA=",
          "url": "https://api.github.com/repos/frontendbr/vagas/labels/S%C3%AAnior",
          "name": "Sênior",
          "color": "6c46ea",
          "default": false,
          "description": ""
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-23T11:34:05Z",
      "updated_at": "2021-03-23T11:34:47Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "## Nossa empresa\r\n\r\nKoper é a plataforma de gestão de construção cívil mais completa do mercado!\r\n\r\nAcreditando em uma gestão horizontal, buscamos proporcionar ao nosso time a melhor experiência possível, enxergando a criatividade e autonomia como pilares fundamentais em nossa cultura.\r\n\r\nPara a criação do Koper, foram investidos 5 anos de pesquisa e desenvolvimento, temos como laboratório algumas Construtoras e Incorporadoras de Biguaçu, que foram nossos verdadeiros parceiros ao longo dessa jornada.\r\n\r\nAcreditamos que soluções inovadoras são aquelas que resolvem problemas reais! Por isso, nos orgulhamos em dizer que o Koper é um sistema construído pelo cliente!\r\n\r\nForam tantas experiências práticas e contribuições de nossos parceiros, que hoje temos grande satisfação em dizer que somos mais que somente uma solução inovadora.\r\n\r\n\r\n## Descrição da vaga\r\n\r\nO que você vai encontrar aqui:\r\n- Ambiente descontraído e saudável.\r\n- Reuniões pontuais e curtas.\r\n- Foco total no usuário, nosso objetivo é encantar os nossos clientes.\r\n- Pessoas comprometidas e apaixonadas em construir a melhor plataforma de gestão de construção civil.\r\n\r\nProcuramos por pessoas que:\r\n- Amem um desafio.\r\n- Sejam inquietas, questionadoras e gostem de aprender constantemente.\r\n- Gostem de participar da criação do produto.\r\n- Não tenham medo de mexer em código legado.\r\n- Escrevam código limpo, legível e de fácil manutenção.\r\n- Entreguem código testado e ajudem o time a melhorar a qualidade do código.\r\n- Compartilhem conhecimento e enriqueçam as discussões técnicas.\r\n\r\n## Local\r\nRemoto ou Escritório, Grande Florianópolis\r\n\r\n## Requisitos\r\n\r\n**Obrigatórios:**\r\n- Javascript ES6+\r\n- React\r\n- Experiência com REST API\r\n\r\n**Desejáveis:**\r\n- Typescript\r\n- Framework de teste (Jest, Cypress)\r\n\r\n**Diferenciais:**\r\n- Next.js\r\n- GraphQL\r\n\r\n## Benefícios\r\n\r\n- Internet\r\n- Horário realmente flexível\r\n- Notebook\r\n\r\n## Contratação\r\n\r\nPJ a combinar\r\n\r\n## Como se candidatar\r\n\r\nPor favor envie um email com assunto Vaga Front-End para [willian.morais@koper.com.br](mailto:willian.morais@koper.com.br) com seu perfil no LinkedIn e GitHub.\r\n\r\n## Tempo médio de feedbacks\r\n\r\nCostumamos enviar feedbacks em até 7 dias após cada processo.\r\n\r\n## Labels\r\n<!-- retire os labels que não fazem sentido à vaga -->\r\n\r\n#### Alocação\r\n- Alocado\r\n- Remoto\r\n\r\n#### Regime\r\n- PJ\r\n\r\n#### Nível\r\n- Pleno\r\n- Sênior",
      "performed_via_github_app": null
    }
  ]

export default function Vacancies({ route, navigation }) {
    const [repository, setRepository] = React.useState(repoDefault)
    const [vacanncies, setVacancies] = React.useState(vagas);
    const [modalVisible, setModalVisible] = React.useState(false)
    const [modalTitle, setModalTitle] = React.useState('')
    const [modalContent, setModalContent] = React.useState('')
    const [actionModal, setActionModal] = React.useState('')

    const { repoId } = route.params;

    React.useEffect(() => {
        // api.get(`repos/${repoId}/vagas`).then((response) => {
        //     setRepository(response.data)
        // });

        // api.get(`repos/${repoId}/vagas/issues`).then((response) => {
        //     setVacancies(response.data)
        // });
    }, [])

    return (
        <S.Container>
            <S.Repo statusBarHeight={StatusBarReact.currentHeight}>
                <S.Image 
                    source={{
                        uri: repository.owner.avatar_url,
                    }}
                />
                <S.Content>
                    <Text>{repository.owner.login}</Text>
                    <S.Description>{repository.description}</S.Description>
                </S.Content>
            </S.Repo>
            <ScrollView contentContainerStyle = {{alignItems: 'center', padding: 30}} >
                <S.CountVagas>{`${vacanncies.length} vagas abertas 😀`}</S.CountVagas>
                {vacanncies.map(vaga => (
                    <S.Vacancie key={vaga.id} 
                        //onPress={() => Linking.openURL(vaga.html_url)}
                        onPress={() => {
                            setModalTitle(vaga.title)
                            setModalContent(vaga.body)
                            setActionModal(vaga.html_url)
                            setModalVisible(true)
                        }}
                    >
                        <S.Image 
                            source={{
                                uri: vaga.user.avatar_url,
                            }}
                        />
                        <S.Content>
                            <Text>{vaga.title}</Text>
                            <S.Description>{vaga.user.login}</S.Description>
                        </S.Content>
                        <S.Icon>
                            <Icon name="angle-right" size={18} color="#999"/>
                        </S.Icon>
                    </S.Vacancie>
                ))}
            </ScrollView>
            <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}>
                <S.VagaTitle>{modalTitle}</S.VagaTitle>
                <S.VagaDescription>{modalContent}</S.VagaDescription>
                <Button
                    title="Abrir no github"
                    onPress={() => {
                        Linking.openURL(actionModal)
                    }}
                />
            </Modal>
            <StatusBar style="auto" />
        </S.Container>
    )
}
