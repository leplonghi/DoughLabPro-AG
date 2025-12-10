import React from 'react';
import LegalPageLayout from './LegalPageLayout';

const EulaPage: React.FC = () => {
  return (
    <LegalPageLayout title="End User License Agreement (EULA)" lastUpdated="August 1, 2024">
      <h3>1. Introduction</h3>
      <p>This End User License Agreement ("Agreement") is a legal agreement between you (either an individual or a single entity) and DoughLabPro ("Licensor") for the DoughLabPro software product, which includes computer software and may include associated media, printed materials, and "online" or electronic documentation ("Software Product").</p>
      <p>BY INSTALLING, COPYING, OR OTHERWISE USING THE SOFTWARE PRODUCT, YOU AGREE TO BE BOUND BY THE TERMS OF THIS AGREEMENT.</p>

      <h3>2. Grant of License</h3>
      <p>DoighLabPro grants you the following rights provided that you comply with all terms and conditions of this EULA:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Installation and Use.</strong> You may install and use an unlimited number of copies of the Software Product.</li>
        <li><strong>Reproduction and Distribution.</strong> You may not reproduce and distribute copies of the Software Product without explicit permission.</li>
      </ul>

      <h3>3. Description of Other Rights and Limitations</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Limitations on Reverse Engineering, Decompilation, and Disassembly.</strong> You may not reverse engineer, decompile, or disassemble the Software Product, except and only to the extent that such activity is expressly permitted by applicable law notwithstanding this limitation.</li>
        <li><strong>Separation of Components.</strong> The Software Product is licensed as a single product. Its component parts may not be separated for use on more than one computer.</li>
        <li><strong>Software Transfer.</strong> You may permanently transfer all of your rights under this EULA, provided you retain no copies, you transfer all of the Software Product (including all component parts, the media and printed materials, any upgrades, and this EULA), and the recipient agrees to the terms of this EULA.</li>
        <li><strong>Termination.</strong> Without prejudice to any other rights, DoughLabPro may terminate this EULA if you fail to comply with the terms and conditions of this EULA. In such event, you must destroy all copies of the Software Product and all of its component parts.</li>
      </ul>

      <h3>4. Copyright</h3>
      <p>All title and copyrights in and to the Software Product (including but not limited to any images, photographs, animations, video, audio, music, text, and "applets" incorporated into the Software Product), the accompanying printed materials, and any copies of the Software Product are owned by DoughLabPro or its suppliers. The Software Product is protected by copyright laws and international treaty provisions. Therefore, you must treat the Software Product like any other copyrighted material.</p>

    </LegalPageLayout>
  );
};

export default EulaPage;
