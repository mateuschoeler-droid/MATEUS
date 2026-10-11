# Mappa Viagens

Protótipo funcional de uma assessoria de viagens premium, com identidade azul-marinho, bege e dourado inspirada na referência fornecida. A marca tipográfica é uma interpretação provisória. O PDF original fornecido está disponível na seção de amostra de roteiros.

## Executar

Requer Node.js 20 ou superior. Não há dependências de execução nem etapa de build.

```sh
cd /workspace/MATEUS
npm start
```

Servidor na porta 3000, em todas as interfaces. Use `PORT=3001 npm start` se necessário. Para verificar a resposta local: `curl -f http://127.0.0.1:3000/`. Processos precisam ser reiniciados após restaurar o ambiente.

```sh
npm test
```

## Funcionalidades

- Catálogo com seis roteiros, incluindo a Grécia conforme o material original da Mappa, busca sem distinção de acentos, categorias, região, orçamento e ordenação.
- Favoritos persistidos no navegador, com alternativa em memória quando o armazenamento estiver bloqueado.
- Detalhes e proposta de roteiro em modal.
- Amostra do padrão Mappa baseada em `VIAGENS.pdf`: capa original, inspirações para Mykonos, mapa externo e download das quatro páginas fornecidas. As páginas além dessas quatro, citadas no sumário, não estão no arquivo recebido.
- Simulador para onze destinos, com duração, viajantes, três padrões de hospedagem e três temporadas.
- Custos discriminados: voos, quartos duplos, experiências, alimentação, transfers e assessoria de 8%.
- Briefing personalizado para download; nenhum dado é enviado a servidores de atendimento.
- Layout responsivo, navegação por teclado, fechamento de modais com Escape e preferência por movimento reduzido.

Preços e roteiros são demonstrativos. Busca por data ajusta a temporada da simulação, sem verificar disponibilidade. Base de voos: São Paulo. Quartos acomodam até duas pessoas; número de noites = dias − 1. Seguros, vistos e compras não estão incluídos. Categorias e destinos podem ser ajustados em `public/model.js`; cores e tipografia em `public/style.css`.

## Validação realizada

Seis testes automatizados do modelo, além de um fluxo real em Chromium cobrindo desktop e celular (390 px), busca, estado vazio, filtros, persistência dos favoritos, detalhes, alteração de preços, briefing e download. Sem erros JavaScript e sem transbordamento horizontal no celular.

## Próximas decisões de produto

1. Definir a conversão principal: conversa via WhatsApp, agendamento ou formulário para um CRM. Atualmente o briefing só é baixado.
2. Entrevistar clientes sobre três escolhas: destinos preferidos, investimento por pessoa e o que consideram uma experiência premium.
3. Validar as faixas do simulador com fornecedores e margens reais; separar honorários da assessoria quando houver uma política comercial definida.
4. Trocar as referências visuais por fotografias próprias/licenciadas e a marca provisória pelo arquivo vetorial oficial.
5. Medir futuramente: pesquisas sem resultado, destinos favoritados, simulações concluídas e briefings solicitados, com consentimento apropriado. Não há coleta de analytics nesta versão.
6. Acrescentar depoimentos reais, quem está por trás da Mappa e canais de contato confirmados.

As fontes são locais, distribuídas sob SIL Open Font License (arquivos em `public/fonts`). A origem e as limitações das fotografias estão em `public/images/SOURCES.md`.

## Publicação estática

O conteúdo de `public/` funciona sem Node.js em hospedagem estática. Os caminhos dos recursos são relativos, compatíveis com o subdiretório `/MATEUS/` do GitHub Pages. A branch `gh-pages` recebe somente os arquivos públicos. Para ativar: Settings → Pages → Deploy from a branch → gh-pages → / (root) → Save. O link só fica disponível após a conclusão do deploy pelo GitHub.
