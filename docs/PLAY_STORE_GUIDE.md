# DoughLabPro — Guia de Publicação na Google Play Store

> **Tecnologia**: TWA (Trusted Web Activity) — wrapper Android oficial do Google para PWAs
> **App ID**: `com.doughlabpro.app`
> **URL**: `https://doughlabpro-fire.web.app`

---

## O que é TWA e por que usamos

Trusted Web Activity é o método oficial do Google para publicar PWAs na Play Store sem reescrever o app em Android nativo. O app é renderizado pelo Chrome instalado no dispositivo — sem WebView, sem bridge, com performance nativa.

**Vantagens:**
- 0 código Android para manter
- Atualizações automáticas (o app carrega a versão mais recente do Firebase Hosting)
- Acesso a todos os recursos da Play Store (avaliações, analytics, IAP futuro)
- Ícone na tela inicial e tela de splash nativa

---

## Checklist de Pré-requisitos

### Contas e ferramentas necessárias

- [ ] **Conta Google Play Console** — criar em [play.google.com/console](https://play.google.com/console)
  Taxa única: **USD $25** (pagamento único, vitalício)
- [ ] **Java JDK 17+** — [adoptium.net](https://adoptium.net/)
- [ ] **Android Studio** — [developer.android.com/studio](https://developer.android.com/studio)
  (necessário para Android SDK. Pode usar apenas SDK tools se preferir)
- [ ] **Node.js 18+** — [nodejs.org](https://nodejs.org/)
- [ ] **Firebase CLI** — `npm install -g firebase-tools`

---

## Fase 1 — Preparação Web (já feita por mim)

Os seguintes arquivos já foram criados/modificados no projeto:

| Arquivo | Status | O que faz |
|---------|--------|-----------|
| `public/manifest.webmanifest` | ✅ Atualizado | Manifesto PWA completo com screenshots, shortcuts, categorias |
| `public/.well-known/assetlinks.json` | ⚠️ Template | Vincula o domínio ao app Android (precisa SHA-256 real) |
| `firebase.json` | ✅ Atualizado | Serve `.well-known/` com headers corretos |
| `twa-manifest.json` | ✅ Criado | Config do Bubblewrap pré-preenchido |
| `.agent/tasks/AG_PLAY_01_twa_android_build.md` | ✅ Criado | Tarefa AG para gerar o AAB |

---

## Fase 2 — Gerar o AAB Android

### 2.1 Dar ao AG (Antigravity) a tarefa AG_PLAY_01

A tarefa `.agent/tasks/AG_PLAY_01_twa_android_build.md` contém todas as instruções para o AG:
- Instalar Bubblewrap
- Gerar o projeto Android
- Criar o keystore de assinatura
- Extrair a SHA-256 do keystore
- Atualizar `assetlinks.json`
- Buildar o `app-release-bundle.aab`

### 2.2 OU executar manualmente

```bash
# 1. Instalar Bubblewrap
npm install -g @bubblewrap/cli

# 2. Gerar projeto Android (na raiz do projeto)
bubblewrap init --manifest https://doughlabpro-fire.web.app/manifest.webmanifest

# 3. Buildar e assinar
bubblewrap build

# 4. O arquivo app-release-bundle.aab será gerado
```

### 2.3 Extrair SHA-256 e atualizar assetlinks.json

```bash
keytool -list -v -keystore ./android.keystore -alias doughlabpro -storepass SUA_SENHA | grep SHA256
```

Substitua `REPLACE_WITH_SHA256_FINGERPRINT_FROM_KEYSTORE` em `public/.well-known/assetlinks.json` com o valor real.

### 2.4 Rebuild e deploy

```bash
npm run build
firebase deploy --only hosting
```

Verifique: `https://doughlabpro-fire.web.app/.well-known/assetlinks.json`

---

## Fase 3 — Google Play Console

### 3.1 Criar conta de desenvolvedor

1. Acesse [play.google.com/console](https://play.google.com/console)
2. Clique em **Começar**
3. Pague a taxa de USD $25
4. Complete o perfil de desenvolvedor

### 3.2 Criar o app

1. No Play Console: **Todos os apps → Criar app**
2. Preencha:
   - **Nome do app**: DoughLabPro
   - **Idioma padrão**: Português (Brasil)
   - **Tipo de app**: App
   - **Gratuito ou pago**: Gratuito (ou Pago)
   - Aceite as políticas

### 3.3 Configurar o app (Google Play sigla: "ficha de loja")

#### Ficha da loja principal
- **Título**: DoughLabPro
- **Descrição curta** (80 chars): `O laboratório definitivo para suas criações de panificação`
- **Descrição completa** (4000 chars): Use o texto abaixo

**Descrição sugerida:**
```
DoughLabPro é o aplicativo definitivo para padeiros sérios, artesanais e profissionais.

🧮 CALCULADORA DE PANIFICAÇÃO
Calcule hidratação, fermento, sal e todos os ingredientes com precisão usando matemática do padeiro. Salve suas receitas e acesse offline.

📚 BIBLIOTECA DE 80+ ESTILOS
Explore uma biblioteca completa com estilos de pizza, pão, croissant, brioche, e muito mais. Cada estilo tem perfil técnico completo, dicas profissionais, e sugestões de experimentos.

🔬 CIÊNCIA DA PANIFICAÇÃO
Entenda fermentação, formação de glúten, reação de Maillard, e todos os processos que acontecem dentro da sua massa.

🌍 ESTILOS DO MUNDO INTEIRO
De pão francês à pizza napolitana, de challah a panettone artesanal — explore a panificação global.

✨ RECURSOS:
• Calculadora com baker's math
• Mais de 80 definições de estilo com conteúdo técnico aprofundado
• Perfis sensoriais e sugestões de harmonização
• Experimentos práticos para evoluir suas habilidades
• Histórico de criações
• Funciona offline (PWA)
• Disponível em Português e Inglês
```

#### Gráficos necessários (prepare antes):
| Recurso | Tamanho | Descrição |
|---------|---------|-----------|
| **Ícone do app** | 512x512 px PNG | Use `public/pwa-512x512.png` |
| **Feature graphic** | 1024x500 px PNG/JPG | Banner do app (criar novo) |
| **Screenshots celular** | Mínimo 2, 16:9 ou 9:16 | Print das telas principais |
| **Screenshots tablet** | Opcional | 7" e 10" |

> 💡 Para screenshots: abra o app em `https://doughlabpro-fire.web.app` no Chrome DevTools mobile view (390x844) e tire prints.

### 3.4 Classificação de conteúdo (IARC)

1. No Play Console: **Classificação de conteúdo**
2. Responda o questionário IARC
3. O app deve receber **Livre (L)** ou **10+** — sem conteúdo problemático

### 3.5 Pricing & distribution (Distribuição)

1. **Países**: Selecione todos, ou comece com Brasil
2. **Preço**: Gratuito (ou defina preço se for pago)
3. **Contém anúncios**: Não

### 3.6 Upload do AAB

1. No Play Console: **Produção → Criar nova versão**
2. Se aparecer opção de Google Play Signing: **Aceite** (recomendado — Google gerencia as chaves)
3. **Upload do app**: arraste o `app-release-bundle.aab`
4. **Notas da versão**:
   ```
   pt-BR: Lançamento inicial do DoughLabPro — a calculadora de panificação definitiva.
   en-US: Initial release of DoughLabPro — the ultimate bread baking calculator.
   ```

### 3.7 Política de privacidade

**Obrigatório** ter uma URL de política de privacidade. Opções:
1. Criar uma página `/privacy` no DoughLabPro com a política
2. Usar um serviço como [privacypolicytemplate.net](https://www.privacypolicytemplate.net/)
3. Hospedar um arquivo `public/privacy.html`

A política deve mencionar:
- Firebase Authentication (dados de login)
- Firestore (armazenamento de cálculos)
- Google Analytics (se ativo)
- Stripe (se pagamentos ativos)

### 3.8 Enviar para revisão

1. Complete todos os itens marcados ⚠️ no Play Console (aparecem na barra lateral)
2. **Publicar → Enviar para revisão de produção**
3. Tempo de revisão: geralmente **1-3 dias úteis**
4. Você receberá um email quando aprovado

---

## Fase 4 — Pós-publicação

### Atualizar o app

Toda vez que você fizer deploy via `firebase deploy`, **o app é atualizado automaticamente** — sem precisar de nova versão na Play Store. É a maior vantagem do TWA.

Para uma nova versão na Play Store (novo número de versão):
1. Atualize `appVersionCode` e `appVersionName` em `twa-manifest.json`
2. Rode `bubblewrap build` novamente
3. Upload do novo AAB no Play Console

### Verificar instalação TWA vs Browser

Para confirmar que está rodando como TWA (não como browser normal):

```javascript
// No console do app:
window.matchMedia('(display-mode: standalone)').matches // true = TWA/PWA
```

---

## Problemas Comuns

### "Browser bar aparece no app"
O TWA só esconde a barra do browser se o `assetlinks.json` estiver correto. Verifique:
1. SHA-256 no `assetlinks.json` bate com o keystore
2. O arquivo está acessível em `https://doughlabpro-fire.web.app/.well-known/assetlinks.json`
3. Teste com: `https://digitalassetlinks.googleapis.com/v1/statements:list?source.web.site=https://doughlabpro-fire.web.app&relation=delegate_permission/common.handle_all_urls`

### "App rejeitado pela Play Store"
Causas mais comuns:
- Política de privacidade ausente ou incompleta
- Screenshots não atendem requisitos
- Conteúdo do app não funciona (testar antes de enviar)
- Feature graphic ausente

### "Crash no dispositivo"
- Mínimo Android 7 (API 24) configurado no `twa-manifest.json`
- Testar em dispositivo real antes do upload

---

## Resumo Executivo

| O que já está pronto | O que você precisa fazer |
|---------------------|--------------------------|
| ✅ PWA configurado | ☑️ Instalar Java + Android Studio |
| ✅ manifest.webmanifest completo | ☑️ Rodar AG_PLAY_01 (ou bubblewrap manualmente) |
| ✅ twa-manifest.json pré-configurado | ☑️ Atualizar assetlinks.json com SHA-256 real |
| ✅ assetlinks.json (template) | ☑️ Criar conta Play Console ($25) |
| ✅ firebase.json atualizado | ☑️ Preparar screenshots + feature graphic |
| ✅ AG_PLAY_01 pronta | ☑️ Escrever política de privacidade |
| ✅ Ícones PWA existentes | ☑️ Upload do AAB + enviar para revisão |
