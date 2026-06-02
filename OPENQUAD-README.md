# Opensquad - Guia de Uso

## O que é o Opensquad?

O Opensquad é um framework de orquestração multi-agente. Você descreve o que precisa em linguagem natural, e o opensquad cria uma equipe de agentes especializados que trabalham juntos automaticamente.

## Como usar no OpenCode

### Comandos disponíveis:

1. **Abrir menu principal**: `/opensquad`
2. **Criar um squad**: `/opensquad create "Descrição do que você precisa"`
3. **Executar um squad**: `/opensquad run <nome-do-squad>`
4. **Listar squads**: `/opensquad list`
5. **Ajuda**: `/opensquad help`

### Exemplos de uso:

```
/opensquad create "Squad que gera carrosséis de Instagram a partir de notícias quentes"
/opensquad create "Squad que produz materiais de lançamento de infoproduto"
/opensquad create "Squad que escreve tutoriais completos com prints de tela"
```

## Configuração

### Arquivos criados:
- `_opensquad/` — Configuração do opensquad
- `_squads/` — Seus squads salvos
- `.env` — Variáveis de ambiente (Instagram API, imgBB)
- `.mcp.json` — Configuração do Playwright para navegação

### Para usar o Instagram Publisher:
1. Acesse https://developers.facebook.com/docs/instagram-api/
2. Obtenha um token de acesso
3. Edite o arquivo `.env` com seu token e user ID

## Agentes disponíveis

O opensquad cria automaticamente agentes especializados:
- **Pesquisador** — Coleta informações e tendências
- **Estrategista** — Gera ideias e define abordagem
- **Redator** — Produz conteúdo
- **Designer** — Cria imagens
- **Revisor** — Garante qualidade

## Mais informações

- Documentação: https://github.com/renatoasse/opensquad
- Video de lançamento: https://www.youtube.com/watch?v=CL1ppI4qHeU
