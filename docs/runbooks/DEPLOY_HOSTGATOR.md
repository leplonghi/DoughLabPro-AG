---
description: Guia para conectar seu domínio HostGator ao Firebase ou hospedar os arquivos diretamente na HostGator.
---

# Opção 1: Usar o Firebase Hosting (Recomendado)
Esta opção mantém seu site super rápido e seguro no Google, apenas usando seu nome de domínio da HostGator.

1. **No Firebase Console:**
   - Vá para **Hosting**.
   - Clique em **Add Custom Domain** (Adicionar domínio personalizado).
   - Digite seu domínio (ex: `seusite.com.br`).
   - O Firebase vai te dar alguns valores de DNS (registros TXT e A).

2. **No Painel da HostGator (cPanel):**
   - Acesse o **Zone Editor** (Editor de Zona DNS).
   - Encontre seu domínio e clique em **Gerenciar**.
   - Adicione os registros que o Firebase pediu:
     - **TXT**: Para verificar que você é dono do domínio.
     - **A**: Para apontar o domínio para os servidores do Google.
   - Aguarde a propagação (pode levar de 1h a 24h).

---

# Opção 2: Hospedar os arquivos na HostGator
Se você prefere que os arquivos fiquem no servidor da HostGator.

1. **Gerar a Build:**
   - No terminal do projeto, rode:
     ```bash
     npm run build
     ```
   - Isso vai criar/atualizar a pasta `dist`.

2. **Preparar Arquivos:**
   - Certifique-se de que o arquivo `.htaccess` está dentro da pasta `dist`. (Nós já criamos ele na pasta public, então ele deve ser copiado automaticamente).
   - Esse arquivo é CRUCIAL para que a navegação do site funcione (evita erro 404 ao atualizar a página).

3. **Upload (FTP ou Gerenciador de Arquivos):**
   - Acesse o cPanel da HostGator -> **Gerenciador de Arquivos**.
   - Vá para a pasta `public_html` (ou a pasta do seu subdomínio).
   - Apague os arquivos antigos (se houver).
   - Faça o upload de **todo o conteúdo** de dentro da pasta `dist` do seu computador para lá.
   - **Importante:** Você deve subir os *arquivos de dentro* da pasta `dist`, não a pasta `dist` em si.

4. **Verificar:**
   - Acesse seu site. Teste navegar entre as páginas e recarregar (F5) para garantir que o `.htaccess` está funcionando.
