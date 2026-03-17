# Configuração do GitHub Pages

Este projeto está configurado para fazer deploy automático no GitHub Pages usando GitHub Actions.

## Configuração no GitHub

Para ativar o GitHub Pages no seu repositório, siga estes passos:

1. **Vá para as configurações do repositório**
   - Acesse seu repositório no GitHub
   - Clique em `Settings` (Configurações)

2. **Configure o GitHub Pages**
   - No menu lateral, clique em `Pages`
   - Em `Source`, selecione `GitHub Actions`

3. **Faça push para a branch main**
   - Após o push, o workflow será executado automaticamente
   - Você pode acompanhar o progresso na aba `Actions` do repositório

4. **Acesse seu site**
   - Após o deploy, seu site estará disponível em:
   - `https://<seu-usuario>.github.io/canvas-copycat-tool/`

## Workflow

O arquivo `.github/workflows/deploy.yml` contém a configuração do pipeline:

- **Trigger**: Executa automaticamente em pushes para a branch `main`
- **Build**: Instala dependências e faz build do projeto com Vite
- **Deploy**: Envia os arquivos da pasta `dist` para o GitHub Pages

Você também pode executar o workflow manualmente pela aba `Actions` no GitHub.

## Desenvolvimento Local

Para testar localmente:

```bash
# Desenvolvimento
yarn dev

# Build de produção (simula o que será deployado)
yarn build

# Preview do build
yarn preview
```

## Base URL

O projeto está configurado para usar `/canvas-copycat-tool/` como base URL em produção.
Se você renomear o repositório, atualize o campo `base` no arquivo `vite.config.ts`.
