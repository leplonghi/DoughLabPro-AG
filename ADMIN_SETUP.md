# 🔧 Configuração do Usuário Pro

## Problema
O email `leplonghi@gmail.com` deveria ser reconhecido como usuário Pro, mas não está configurado no Firebase/Firestore.

## Solução Implementada

### 1️⃣ **Verificações Hardcoded** ✅
O código já tem verificações automáticas em dois lugares:

**`src/permissions.ts` (linha 108):**
```typescript
if (user.email === 'leplonghi@gmail.com' || user.isAdmin) return 'lab_pro';
```

**`src/contexts/UserProvider.tsx` (linha 158-177):**
```typescript
const isAdminEmail = email === 'leplonghi@gmail.com';
// ...
isAdmin: !!profileData.isAdmin || authUser.email === 'leplonghi@gmail.com',
```

### 2️⃣ **Ferramenta de Admin (NOVO)** 🆕

Foi criado um componente `AdminTools` que aparece **apenas para o admin** (leplonghi@gmail.com) no canto inferior direito da tela.

**Como usar:**

1. **Faça login** com o email `leplonghi@gmail.com`
2. Você verá um **painel preto** no canto inferior direito
3. O painel mostra:
   - Seu UID atual
   - Email
   - Plano atual (free/lab_pro)
   - Status isPro
4. Clique no botão **"✨ Grant Pro Access"**
5. O sistema irá:
   - Criar/atualizar seu documento no Firestore
   - Definir `plan: 'lab_pro'`
   - Definir `isPro: true`
   - Definir `isAdmin: true`
   - Recarregar a página automaticamente

### 3️⃣ **Verificação Manual no Firestore**

Se ainda houver problemas, você pode verificar manualmente:

1. Acesse o [Firebase Console](https://console.firebase.google.com)
2. Selecione seu projeto
3. Vá em **Firestore Database**
4. Navegue até: `users/{seu_uid}`
5. Verifique se o documento tem:
```json
{
  "email": "leplonghi@gmail.com",
  "plan": "lab_pro",
  "isPro": true,
  "isAdmin": true,
  "proSince": "2025-12-01T..."
}
```

### 4️⃣ **Script Alternativo (Se necessário)**

Caso queira usar um script Node.js para configurar via Firebase Admin:

```bash
# Você precisará do serviceAccountKey.json do Firebase
# Baixe em: Firebase Console > Project Settings > Service Accounts
npm run tsx scripts/setupProUser.ts
```

## Fluxo de Verificação

O sistema segue esta ordem de prioridade:

1. **Email hardcoded** (`leplonghi@gmail.com`) → sempre retorna `lab_pro`
2. **Firestore `isAdmin: true`** → retorna `lab_pro`
3. **Firestore `plan: "lab_pro"` ou `plan: "pro"`** → retorna `lab_pro`
4. **Firestore `isPro: true`** → retorna `lab_pro`
5. Caso contrário → retorna o plano do Firestore ou `free`

## Troubleshooting

### O painel de admin não aparece?
- ✅ Verifique se fez login com `leplonghi@gmail.com` (exato)
- ✅ Recarregue a página (F5)

### Erro "Firebase not initialized"?
- ❌ Verifique se o arquivo `.env` tem as credenciais do Firebase
- ❌ Verifique se o Firebase está configurado corretamente

### Já configurou mas ainda mostra "free"?
- 🔄 Faça logout e login novamente
- 🔄 Limpe o cache do navegador
- 🔄 Verifique o documento no Firestore manualmente

## Arquivos Modificados

- ✅ `src/components/AdminTools.tsx` (NOVO)
- ✅ `src/App.tsx` (adicionado `<AdminTools />`)
- ✅ `scripts/setupProUser.ts` (script alternativo)
- ✅ `src/permissions.ts` (já tinha verificação hardcoded)
- ✅ `src/contexts/UserProvider.tsx` (já tinha verificação hardcoded)

---

**Última atualização:** 2025-12-01  
**Status:** ✅ Pronto para uso
