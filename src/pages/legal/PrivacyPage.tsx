import React from 'react';
import LegalPageLayout from '@/components/layouts/LegalPageLayout';

const PrivacyPage: React.FC = () => {
  return (
    <LegalPageLayout title="Política de Privacidade" lastUpdated="4 de março de 2026">

      <p>
        O DoughLabPro ("nós", "nosso" ou "Aplicativo") respeita a sua privacidade e está comprometido com a
        proteção dos seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos,
        armazenamos e protegemos as informações que você nos fornece ao utilizar o DoughLabPro, em conformidade
        com a <strong>Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018)</strong> e demais
        normas aplicáveis.
      </p>

      <p>
        Ao criar uma conta ou utilizar o Aplicativo, você declara ter lido, compreendido e concordado com esta
        Política. Caso não concorde, não utilize o Aplicativo.
      </p>

      {/* ── 1. CONTROLADOR ── */}
      <h3>1. Controlador dos Dados</h3>
      <div className="bg-dlp-bg-soft p-4 rounded border border-dlp-border text-sm">
        <p><strong>Razão social:</strong> DoughLabPro</p>
        <p><strong>E-mail para assuntos de privacidade:</strong> privacy@doughlabpro.com</p>
        <p><strong>Suporte geral:</strong> support@doughlabpro.com</p>
      </div>

      {/* ── 2. DADOS COLETADOS ── */}
      <h3>2. Dados que Coletamos</h3>
      <p>Coletamos apenas os dados necessários para fornecer e melhorar o Aplicativo:</p>

      <h4>2.1 Dados de cadastro e autenticação</h4>
      <ul>
        <li><strong>E-mail</strong> — usado para criar e identificar sua conta.</li>
        <li><strong>Nome de exibição e foto de perfil</strong> — quando você faz login com o Google, recebemos o nome e a foto associados à sua conta Google. Você pode alterá-los nas configurações do Aplicativo.</li>
        <li><strong>Identificador único (UID)</strong> — gerado automaticamente pelo Firebase Authentication para vincular seus dados à sua conta.</li>
      </ul>

      <h4>2.2 Dados criados pelo uso do Aplicativo</h4>
      <ul>
        <li><strong>Cálculos e receitas</strong> — fórmulas, hidratação, pesos e configurações que você salva na calculadora.</li>
        <li><strong>Fornadas (batches)</strong> — registros de produções, anotações e resultados sensoriais.</li>
        <li><strong>Levain (fermento)</strong> — dados de alimentação, temperatura e atividade do seu fermento natural.</li>
        <li><strong>Objetivos e progressos</strong> — metas de panificação que você define no MyLab.</li>
        <li><strong>Favoritos</strong> — estilos de massa marcados como favoritos.</li>
        <li><strong>Preferências do Aplicativo</strong> — idioma, modo de cálculo, unidades de medida.</li>
      </ul>

      <h4>2.3 Dados de uso e diagnóstico</h4>
      <ul>
        <li><strong>Dados de sessão</strong> — informações técnicas como tipo de dispositivo, versão do sistema operacional e versão do Aplicativo, coletados automaticamente pelo Firebase para fins de diagnóstico e estabilidade.</li>
        <li><strong>Erros e crashes</strong> — registros de erros para identificarmos e corrigirmos problemas.</li>
      </ul>

      <h4>2.4 Dados de pagamento</h4>
      <p>
        O processamento de pagamentos de assinaturas é realizado pela <strong>Stripe, Inc.</strong> Não armazenamos
        números de cartão de crédito ou dados bancários diretamente. A Stripe pode armazenar esses dados conforme
        sua própria política de privacidade, disponível em{' '}
        <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">stripe.com/privacy</a>.
      </p>

      <h4>2.5 Dados de interação com IA (DoughBot)</h4>
      <p>
        Quando você usa o DoughBot, as mensagens enviadas são processadas pela API <strong>Google AI (Gemini)</strong>.
        Não armazenamos o histórico de conversas com o DoughBot após o encerramento da sessão. As mensagens são
        transmitidas ao Google conforme a{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Política de Privacidade do Google</a>.
      </p>

      {/* ── 3. COMO USAMOS ── */}
      <h3>3. Como Usamos os Dados</h3>
      <p>Utilizamos seus dados para:</p>
      <ul>
        <li>Criar e gerenciar sua conta e autenticar seu acesso;</li>
        <li>Sincronizar seus cálculos, receitas e histórico entre dispositivos;</li>
        <li>Fornecer funcionalidades como o DoughBot, análise de forno e biblioteca de estilos;</li>
        <li>Processar pagamentos de assinatura e gerenciar seu plano;</li>
        <li>Enviar comunicações relacionadas ao serviço (confirmação de conta, atualizações importantes);</li>
        <li>Identificar e corrigir erros e problemas de desempenho;</li>
        <li>Cumprir obrigações legais e regulatórias.</li>
      </ul>
      <p>
        <strong>Não utilizamos seus dados para fins de publicidade de terceiros, nem os vendemos a terceiros.</strong>
      </p>

      {/* ── 4. BASES LEGAIS (LGPD) ── */}
      <h3>4. Bases Legais para o Tratamento (LGPD)</h3>
      <p>O tratamento dos seus dados pessoais é realizado com fundamento nas seguintes bases legais previstas na LGPD:</p>
      <ul>
        <li><strong>Execução de contrato</strong> (art. 7º, V) — para fornecer os serviços que você contratou;</li>
        <li><strong>Consentimento</strong> (art. 7º, I) — para comunicações de marketing e funcionalidades opcionais, quando aplicável;</li>
        <li><strong>Legítimo interesse</strong> (art. 7º, IX) — para fins de segurança, diagnóstico e melhoria do Aplicativo;</li>
        <li><strong>Cumprimento de obrigação legal</strong> (art. 7º, II) — quando exigido por lei.</li>
      </ul>

      {/* ── 5. COMPARTILHAMENTO ── */}
      <h3>5. Compartilhamento com Terceiros</h3>
      <p>Compartilhamos dados apenas com os seguintes parceiros técnicos, estritamente necessários para o funcionamento do Aplicativo:</p>
      <div className="bg-dlp-bg-soft p-4 rounded border border-dlp-border text-sm space-y-3">
        <div>
          <strong>Google Firebase (Alphabet Inc.)</strong>
          <p className="text-dlp-text-muted">Autenticação, banco de dados (Firestore), armazenamento de arquivos e hospedagem. Os servidores estão localizados nos EUA. O Firebase é certificado ISO 27001 e SOC 2/3.</p>
          <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-dlp-accent">firebase.google.com/support/privacy</a>
        </div>
        <div>
          <strong>Stripe, Inc.</strong>
          <p className="text-dlp-text-muted">Processamento de pagamentos de assinaturas. Certificado PCI DSS Nível 1.</p>
          <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-dlp-accent">stripe.com/privacy</a>
        </div>
        <div>
          <strong>Google AI (Gemini API)</strong>
          <p className="text-dlp-text-muted">Processamento de mensagens do DoughBot (assistente de IA).</p>
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-dlp-accent">policies.google.com/privacy</a>
        </div>
      </div>
      <p>
        Podemos divulgar seus dados se exigido por lei, ordem judicial, ou para proteger direitos, propriedade
        ou segurança do DoughLabPro, de nossos usuários ou do público.
      </p>

      {/* ── 6. ARMAZENAMENTO ── */}
      <h3>6. Armazenamento e Segurança</h3>
      <p>
        Seus dados são armazenados de duas formas:
      </p>
      <ul>
        <li>
          <strong>Na nuvem</strong> — no Firebase Firestore, em servidores do Google nos Estados Unidos. As
          transferências internacionais de dados são protegidas pelas Cláusulas Contratuais Padrão da União
          Europeia e mecanismos equivalentes aplicáveis à LGPD.
        </li>
        <li>
          <strong>Localmente no seu dispositivo</strong> — algumas preferências e dados de cache são armazenados
          no armazenamento local do navegador (localStorage e IndexedDB via Dexie) para permitir o funcionamento
          offline e acelerar o Aplicativo. Esses dados nunca são transmitidos a terceiros.
        </li>
      </ul>
      <p>
        Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado,
        perda, destruição ou alteração, incluindo criptografia em trânsito (HTTPS/TLS) e em repouso.
      </p>

      {/* ── 7. RETENÇÃO ── */}
      <h3>7. Retenção de Dados</h3>
      <ul>
        <li>
          <strong>Conta ativa</strong> — mantemos seus dados enquanto sua conta estiver ativa e você utilizar o Aplicativo.
        </li>
        <li>
          <strong>Após exclusão da conta</strong> — excluímos seus dados pessoais em até <strong>30 dias</strong> após
          a exclusão da conta, exceto quando obrigados a retê-los por lei (ex.: registros fiscais relacionados a
          transações de pagamento, que podem ser retidos por até 5 anos conforme legislação fiscal brasileira).
        </li>
        <li>
          <strong>Dados anonimizados</strong> — podemos manter dados estatísticos anonimizados (sem identificação
          pessoal) por tempo indeterminado para fins de melhoria do Aplicativo.
        </li>
      </ul>

      {/* ── 8. SEUS DIREITOS (LGPD) ── */}
      <h3>8. Seus Direitos como Titular (LGPD)</h3>
      <p>Nos termos da LGPD (art. 18), você tem o direito de:</p>
      <ul>
        <li><strong>Confirmação e acesso</strong> — saber se tratamos seus dados e obter uma cópia deles;</li>
        <li><strong>Correção</strong> — corrigir dados incompletos, inexatos ou desatualizados;</li>
        <li><strong>Anonimização, bloqueio ou eliminação</strong> — de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD;</li>
        <li><strong>Portabilidade</strong> — receber seus dados em formato estruturado e legível por máquina;</li>
        <li><strong>Eliminação</strong> — solicitar a exclusão de dados tratados com base em consentimento;</li>
        <li><strong>Revogação do consentimento</strong> — quando o tratamento se basear em consentimento;</li>
        <li><strong>Informação sobre compartilhamento</strong> — saber com quais entidades compartilhamos seus dados;</li>
        <li><strong>Oposição</strong> — opor-se a tratamentos que não estejam em conformidade com a LGPD.</li>
      </ul>
      <p>
        Para exercer qualquer desses direitos, entre em contato pelo e-mail{' '}
        <a href="mailto:privacy@doughlabpro.com" className="text-dlp-accent">privacy@doughlabpro.com</a>.
        Responderemos em até 15 dias úteis.
      </p>
      <p>
        Você também pode excluir sua conta diretamente no Aplicativo em <strong>Configurações → Conta → Excluir conta</strong>.
      </p>

      {/* ── 9. COOKIES ── */}
      <h3>9. Cookies e Tecnologias Similares</h3>
      <p>
        Utilizamos cookies e tecnologias de armazenamento local para:
      </p>
      <ul>
        <li><strong>Autenticação</strong> — manter sua sessão ativa com segurança (cookies do Firebase Authentication);</li>
        <li><strong>Preferências</strong> — lembrar seu idioma, tema e modo de uso;</li>
        <li><strong>Cache offline</strong> — armazenar recursos do Aplicativo para funcionamento sem internet (Service Worker / PWA).</li>
      </ul>
      <p>
        Não utilizamos cookies de rastreamento publicitário ou de terceiros para fins de publicidade.
        Para mais informações, consulte nossa <a href="#" onClick={(e) => { e.preventDefault(); window.history.pushState(null, '', '#'); }} className="text-dlp-accent">Política de Cookies</a>.
      </p>

      {/* ── 10. CRIANÇAS ── */}
      <h3>10. Crianças e Adolescentes</h3>
      <p>
        O DoughLabPro não é direcionado a crianças menores de 13 anos. Não coletamos intencionalmente dados
        pessoais de crianças. Se você acredita que uma criança nos forneceu dados, entre em contato pelo
        e-mail abaixo para que possamos excluí-los.
      </p>
      <p>
        Para usuários entre 13 e 18 anos, recomendamos que o uso seja feito com conhecimento e supervisão
        dos pais ou responsáveis.
      </p>

      {/* ── 11. TRANSFERÊNCIAS INTERNACIONAIS ── */}
      <h3>11. Transferências Internacionais de Dados</h3>
      <p>
        Seus dados podem ser transferidos e armazenados em servidores localizados fora do Brasil (principalmente
        nos Estados Unidos), onde nossos provedores de serviço (Firebase/Google, Stripe) operam. Essas
        transferências são realizadas com base em mecanismos adequados de proteção, conforme exigido pela LGPD
        e as diretrizes da Autoridade Nacional de Proteção de Dados (ANPD).
      </p>

      {/* ── 12. ALTERAÇÕES ── */}
      <h3>12. Alterações nesta Política</h3>
      <p>
        Podemos atualizar esta Política periodicamente para refletir mudanças em nossas práticas ou na
        legislação. Notificaremos você sobre alterações relevantes por e-mail ou por aviso no Aplicativo.
        A data de "última atualização" no topo desta página indica quando a Política foi revisada pela
        última vez. O uso continuado do Aplicativo após as alterações implica aceitação da Política revisada.
      </p>

      {/* ── 13. CONTATO ── */}
      <h3>13. Contato e Encarregado (DPO)</h3>
      <div className="bg-dlp-bg-soft p-4 rounded border border-dlp-border text-sm space-y-1">
        <p>Para dúvidas, solicitações ou reclamações sobre privacidade:</p>
        <p><strong>E-mail:</strong> <a href="mailto:privacy@doughlabpro.com" className="text-dlp-accent">privacy@doughlabpro.com</a></p>
        <p><strong>Suporte geral:</strong> <a href="mailto:support@doughlabpro.com" className="text-dlp-accent">support@doughlabpro.com</a></p>
        <p className="mt-2 text-dlp-text-muted">
          Você também tem o direito de apresentar uma reclamação à Autoridade Nacional de Proteção de Dados
          (ANPD) — <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-dlp-accent">gov.br/anpd</a>.
        </p>
      </div>

    </LegalPageLayout>
  );
};

export default PrivacyPage;
