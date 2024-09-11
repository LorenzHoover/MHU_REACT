import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Main Heading: Trajan Pro, all caps, 30pt font on 36pt leading */}
      <h1 className="text-[30pt] leading-[36pt] font-serif font-bold text-[#002D72] uppercase mb-4">
        Privacy Policy
      </h1>
      
      <p><strong>Effective Date:</strong> 8/1/2024</p>

      {/* Body Text: Source Sans Pro Light, 10pt on 14pt leading */}
      <p className="font-light text-[10pt] leading-[14pt] text-gray-800">
        Mars Hill University ("MHU") values your privacy and is committed to protecting your personal information. This Privacy Policy outlines how your information is collected, used, and safeguarded when you use the MHU Study Lion platform ("Platform"). By accessing or using the Platform, you agree to the terms of this Privacy Policy.
      </p>

      {/* Section Heading: Trajan Pro, 12pt on 16pt leading */}
      <h2 className="text-[12pt] leading-[16pt] font-serif font-bold uppercase mt-4 mb-2">
        1. Information We Collect
      </h2>
      
      <p className="font-light text-[10pt] leading-[14pt] text-gray-800">When you use the Platform, we may collect the following information:</p>
      <ul className="list-disc list-inside text-[10pt] leading-[14pt] text-gray-800 font-light">
        <li><strong>Personal Information:</strong> This includes your name, email address, phone number, and any other details you voluntarily provide through contact forms or other communications with MHU Study Lion.</li>
        <li><strong>Usage Data:</strong> We may collect information about how you interact with the Platform, including your IP address, browser type, and other analytics data.</li>
      </ul>

      <h2 className="text-[12pt] leading-[16pt] font-serif font-bold uppercase mt-4 mb-2">
        2. Use of Information
      </h2>
      <p className="font-light text-[10pt] leading-[14pt] text-gray-800">The information we collect is used solely for the following purposes:</p>
      <ul className="list-disc list-inside text-[10pt] leading-[14pt] text-gray-800 font-light">
        <li>To provide and improve the services offered by MHU Study Lion.</li>
        <li>To respond to your inquiries and provide support.</li>
        <li>To communicate with you about updates, services, and other relevant information related to MHU Study Lion.</li>
      </ul>

      <h2 className="text-[12pt] leading-[16pt] font-serif font-bold uppercase mt-4 mb-2">
        3. Information Sharing and Disclosure
      </h2>
      <p className="font-light text-[10pt] leading-[14pt] text-gray-800"><strong>Your information will not be shared with third parties outside of the MHU organization</strong>, except under the following circumstances:</p>
      <ul className="list-disc list-inside text-[10pt] leading-[14pt] text-gray-800 font-light">
        <li><strong>With Your Consent:</strong> We may share your information if you provide explicit consent.</li>
        <li><strong>Legal Compliance:</strong> We may disclose your information if required by law or if we believe such action is necessary to comply with legal processes or to protect the rights, property, or safety of MHU, its employees, or others.</li>
      </ul>

      <h2 className="text-[12pt] leading-[16pt] font-serif font-bold uppercase mt-4 mb-2">
        4. Data Security
      </h2>
      <p className="font-light text-[10pt] leading-[14pt] text-gray-800">
        MHU Study Lion implements reasonable security measures to protect your personal information from unauthorized access, disclosure, or misuse. However, please be aware that no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
      </p>

      <h2 className="text-[12pt] leading-[16pt] font-serif font-bold uppercase mt-4 mb-2">
        5. User Responsibilities
      </h2>
      <p className="font-light text-[10pt] leading-[14pt] text-gray-800">As a user of MHU Study Lion, you agree to the following:</p>
      <ul className="list-disc list-inside text-[10pt] leading-[14pt] text-gray-800 font-light">
        <li><strong>Confidentiality:</strong> You agree not to share any information or data obtained through the Platform with unauthorized third parties.</li>
        <li><strong>Respect for Privacy:</strong> You agree to respect the privacy of other users and not disclose their information without their consent.</li>
      </ul>

      <h2 className="text-[12pt] leading-[16pt] font-serif font-bold uppercase mt-4 mb-2">
        6. Retention of Information
      </h2>
      <p className="font-light text-[10pt] leading-[14pt] text-gray-800">
        We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
      </p>

      <h2 className="text-[12pt] leading-[16pt] font-serif font-bold uppercase mt-4 mb-2">
        7. Changes to This Privacy Policy
      </h2>
      <p className="font-light text-[10pt] leading-[14pt] text-gray-800">
        MHU reserves the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the updated policy on the Platform. Your continued use of the Platform following the posting of changes constitutes your acceptance of such changes.
      </p>

      <h2 className="text-[12pt] leading-[16pt] font-serif font-bold uppercase mt-4 mb-2">
        8. Contact Us
      </h2>
      <p className="font-light text-[10pt] leading-[14pt] text-gray-800">
        If you have any questions or concerns about this Privacy Policy, please contact us at:
      </p>
      <p className="font-light text-[10pt] leading-[14pt] text-gray-800">
        <strong>Mars Hill University</strong><br />
        100 Athletic St,<br />
        Mars Hill, NC 28754<br />
        Email: mhustudylion@info.com
      </p>
    </div>
  );
};

export default PrivacyPolicy;
