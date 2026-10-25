# BRIEF: WINAI Gestão Integrada (página de apresentação)

Entrevista em uma passada (25/10/2026). Respostas do usuário entre aspas; o resto é decisão autoral marcada como tal.
Fontes do conteúdo: `docs/apresentacao/README.md` do projeto e as memórias do projeto (o que foi feito e o que está em
andamento). Só fatos públicos: nada de domínio interno, configuração, objetos de banco além das rotinas do Winthor já
citadas no README público.

## As oito perguntas

1. **Vibe.** "Editorial / sóbrio": fundo escuro, tipografia forte, capturas reais como protagonistas; passar confiança
   para o gestor de rede de lojas. Referências (autoral): relatório anual impresso, caderno de jornal econômico, bobina
   de impressora térmica.
2. **Jornada.** Autoral, a partir do README: quem é, por que confiar (direto no Winthor), a venda inteira, o que roda
   sozinho, o acervo de telas, a segurança, o que vem, contato.
3. **Curva de energia.** Calma na abertura e no "direto no Winthor"; intensa na venda; alívio na automação; calma no
   fechamento.
4. **Sentimento e momento.** Pico escolhido: "Uma venda do início ao fim": pedido, caixa, NFC-e autorizada, PIX
   baixado, cupom no WhatsApp, tudo gravado no Winthor.
5. **O que nenhum site faz.** Autoral: a página imprime o cupom. Uma bobina térmica sai da impressora conforme a venda
   avança, linha a linha, e é destacada no fim.
6. **Distância do premium-minimal.** Editorial (família 'Editorial' de uniqueness.md §5), sóbrio.
7. **Mundo único ou cenas.** Cenas: capítulos com corte seco (gramática Chaptered editorial).
8. **Assets.** 60 capturas reais de homologação com dados desfocados (repositório winai-apresentacao) e o logo.
   Nenhuma geração por IA, nenhum gasto. Sem ffmpeg/kie.ai: sem scrub de vídeo.

"Mostrar bastidores (Claude Code, Graphify)?": "Não, só o produto".

## Gramática

**Chaptered editorial.** Os outros sete perderam porque:
- Filmic one-shot: a história é um argumento em partes, não um filme; e não há vídeo.
- Live surface: as telas são JSF reais, não dá para rodar o sistema na página sem fingir; a regra de honestidade proíbe.
- Continuous world: não há geografia nem viagem.
- Typographic poster: o produto tem 60 telas reais que provam o que dizem; esconder seria perder o melhor asset.
- Gallery/catalog: serve ao acervo de módulos (vira um capítulo, não a página).
- Split stage: não há dois lados em disputa.
- Rhythmic cutlist: energia errada para um gestor que avalia um ERP.

Navegação: fólio na margem esquerda (capítulo e título, atualiza ao passar). Abertura: folha de rosto, só tipo.
Fechamento: colofão com o convite como texto corrido.

## Jornada e curva de sentimento

| # | Capítulo | Sentimento | O que causa |
|---|---|---|---|
| 0 | Folha de rosto | Curiosidade | Título grande no escuro, uma frase, nada mais |
| I | O balcão | Reconhecimento | A rotina da loja (login do Winthor, painel) em coluna com legenda |
| II | Direto no Winthor | Confiança | Tabela tipográfica rotina do Winthor x tela do WINAI, revelada por wipe |
| — | Intertítulo III | Silêncio (autoral) | Uma tela só com "III" e uma linha: o fôlego antes do pico |
| III | Uma venda | **Tensão que resolve (PICO)** | Palco fixo: telas da venda trocam enquanto a bobina imprime ao lado |
| IV | Sozinho | Alívio | Automação: faturamento, OTO CRM com números reais (count), WhatsApp |
| V | O acervo | Amplitude | Trilho lateral com etiquetas de museu por módulo |
| VI | Quem entra | Segurança | Auditoria com regras numéricas reais, imagem em parallax na coluna |
| VII | Em obra | Expectativa | Lista curta do que está em andamento |
| — | Colofão | Decisão calma | Tipo pequeno, convite como link no texto |

Adjacentes nunca repetem sentimento.

**O pico:** "rolei a página e o cupom foi saindo da impressora enquanto a venda acontecia, até a NFC-e autorizada e o
WhatsApp". Mora no capítulo III. Maior span da página (pin 5.6), com o intertítulo silencioso antes.

**Frase de quem conta:** "É o site em que a venda acontece enquanto você rola e o cupom sai impresso no fim."

**Silêncio autoral:** o intertítulo antes do capítulo III é uma tela quase vazia de propósito (não é dead scroll).

## Partitura (dispositivo por capítulo)

| Capítulo | Dispositivo | Por quê |
|---|---|---|
| 0 Folha de rosto | flow + in | A gramática pede tipo no papel, sem mídia acima da dobra |
| I O balcão | parallax (coluna de mídia) | Profundidade discreta na imagem, texto parado ao lado |
| II Direto no Winthor | reveal | A tabela é uma mudança de estado: "não há base paralela" |
| Intertítulo | flow (silêncio) | Corte seco, nada se mexe |
| III Uma venda | pin + movimento próprio (bobina) | O quadro segura e o estado avança; o pico |
| IV Sozinho | count + in | Números reais do OTO CRM |
| V O acervo | pan | Lateral lê como "opções" |
| VI Quem entra | parallax + reveal | Coluna de mídia |
| VII Em obra | flow + in | Administrativo: curto |
| Colofão | flow | Fecha e fica parado |

Famílias: flow/in, parallax, reveal, pin, count, pan (6). Sem `scrub`, `spotlight`, `magnet` (proibidos na gramática);
sem `drift` contínuo: cada capítulo tem chão próprio com corte seco (escuro ou papel).

## Movimento-assinatura

**A bobina.** Uma impressora térmica de 80 mm fica presa no topo do palco do capítulo III; o papel desce dela guiado
pelo `--sc-p` do ato, e cada etapa da venda imprime suas linhas (itens, fechamento, NFC-e autorizada, PIX recebido,
cupom enviado). No fim aparece a serrilha e o papel se solta. Dados de demonstração, rotulados como tal (venda de
homologação da captura 46). JS próprio na página, engine intocada.

## Portão de impressões digitais

Registro vazio: primeira construção, nada a liberar.
