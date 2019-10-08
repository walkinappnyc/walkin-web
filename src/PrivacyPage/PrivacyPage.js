import React, { Component } from 'react';
import { triggerPageViewEvent } from '../analytics';
import './styles.scss';

class PrivacyPage extends Component {
  componentDidMount() {
    triggerPageViewEvent();
  }

  render() {
    return (
      <div className="about privacy">
        <div
          className="container-fluid"
          style={{
            backgroundColor: '#6d5b97',
            padding: '27px 0',
            marginBottom: '39px'
          }}
        >
          <div className="heroAddress">Terms of Service & Privacy Policy</div>
        </div>
        <div className="container">
          <div className="row">
            <p><strong>Last Updated:</strong> 8/21/2019</p>
            <p>Walk.in appreciates your use of and contributions to our websites, our mobile and desktop applications, our other properties and/or our related services (collectively known as the "Services," or, each individually, a "Service"). Walk.in respects your privacy and is committed to protecting your personal information.</p>
            <p>Walk.in encourages you to read this privacy policy to understand the information Walk.in collects and how Walk.in uses and disclose it. This policy applies to all of our Services that link to it.</p>
          </div>
          <div className="row">
            <p><strong>1. Information Collected by Walk.in.</strong></p>
            <p>When you use the Services, Walk.in collects a variety of information from and about you, your devices, and your interaction with the Services. Some of this information identifies you directly or can be used to identify you when combined with other data.</p>
            <ul>
              <li><strong>Information you provide.</strong> When using the Services, you may be asked to provide personal information about yourself, such as your name, contact information, payment information, details about the properties you are interested in and some financial information. This may occur, for example, when you register on the Services, share or save a property, correspond with a real estate professional (such as a real estate agent, broker, property manager, or others) via the Services, or complete other forms or transactions, such as a request for information on a rental unit and background check application. You may also provide information about a third party through the Services, for example, if you share an apartment listing with a recipient via email. Walk.in may combine this information with other information Walk.in collects from your interaction with the Services or from other companies.</li>

              <li>Some information you provide through the Services is collected and processed by third parties on our behalf. For example, when you order services through the Services, Walk.in may need to collect your credit or debit card information. This information is collected and processed by third-party payment processors. In the event that a credit report is required to use a Service, you may be asked to provide your Social Security number ("SSN"). When SSNs are required, Walk.in uses technology to pass that information directly to the third-party providers who need the information to process the credit or background check report. If you are a real estate professional, you may be able to connect your third-party email account (such as Gmail) to your Walk.in account. If you enable that connection, Walk.in will access your messages, contacts, and settings to provide the requested Services to you.</li>

              <li><strong>Cookies, Web beacons, and other tracking technologies.</strong> Walk.in and our partners use various technologies to collect information automatically when you access and use the Services, including cookies, web beacons and other similar technologies. Cookies are bits of electronic information that can be transferred to your computer or other electronic device to uniquely identify your browser. When you use the Services, Walk.in and our partners may place one or more cookies on your computer or other electronic device or use other technologies that provide similar functionality. Walk.in and our partners may use cookies to connect your activity on the Services with other information Walk.in store about you in your account profile or your prior interactions on the Services to, for example, store your preferences. The use of cookies helps us improve the quality of the Services to you, by identifying information which is most interesting to you, tracking trends, measuring the effectiveness of advertising, or storing information you may want to retrieve on a regular basis, such as your favorite apartments. At any time, you may adjust settings on your browser to refuse cookies according to the instructions related to your browser. However, if you choose to disable cookies, many of the free features of the Services will not operate properly.</li>

              <li>The pages on the Services may also include web beacons or pixels, which are electronic files to count users who have visited that page, to track activity over time and across different websites, to determine users’ interactions with emails Walk.in sends, to identify certain cookies on the computer or other electronic device accessing that page, or to collect other related information, and this information may be associated with your unique browser, device identifier, or Internet Protocol address. Walk.in may, for example, implement a pixel on the pages of the Services where you view a certain advertisement so that Walk.in can track whether you visit a Walk.in website associated with that advertisement at a later time.</li>

              <li><strong>Third-party cookies, Web beacons, and other tracking technologies.</strong> Walk.in works with service providers and advertising networks to track and manage cookie information and your activities while you're using the Services and your online activities over time and across different websites and devices. For example, third parties may use cookies to deliver advertisements to you based on your visit to the Services. For additional information, please refer to the section below entitled, "Interest-Based Advertising."</li>

              <li><strong>Mobile device and mobile browser information.</strong> You may adjust settings on your mobile device and mobile browser regarding cookies and sharing of certain information, such as your mobile device model or the language your mobile device uses, by adjusting the privacy and security settings on your mobile device. Please refer to the instructions provided by your mobile service provider or mobile device manufacturer.</li>

              <li><strong>Location Data.</strong> Enabling location services on your mobile device is necessary to allow the unlocking of properties’ doors and entrances. If you enable location services on your mobile device, Walk.in collects the location of your device, which Walk.in uses to provide you with property access, location-based information, and advertising. If you wish to deactivate this feature, you can disable location services on your mobile device.</li>

              <li><strong>Usage logs.</strong> Walk.in collects information about your use of our Services, including the type of browser you use, access times, pages viewed, your IP address and the page you visited before navigating to our Services. Walk.in also collects information about the computer or mobile device you use to access our Services, such as the hardware model, operating system and version, unique device identifiers, mobile network information, and browsing behavior.</li>

              <li><strong>Calls and text messages.</strong> Calls between you and Walk.in, or between you and third parties made through Walk.in (such as real estate agents you contact about a property through a form or link on our website, or using contact information found on our website), may be recorded or monitored for quality assurance and customer service purposes. You will be notified at the beginning of a call if it may be recorded or monitored. Walk.in uses a third-party service provider to track phone calls and text messages between you and real estate professionals so that Walk.in and the real estate professional can access certain details about the contact. As part of this process, Walk.in and its service provider will receive in real time and store data about your call or text message, including the date and time of the call or text message, your phone number, and the content of the text message.</li>

              <li><strong>Public content.</strong> You may provide information publicly through the Services, such as when you leave a review for a real estate professional, or when you contribute to discussion forums.</li>

              <li><strong>Social networks.</strong> If you use the social networking connection functions offered through the Services, Walk.in may access all of your social network profile information that you have made available to be shared and to use it in accordance with this privacy policy. Please refer to the instructions governing your social network account to manage the information that is shared through your account.</li>
            </ul>
            <p><strong>Collection of information by third-party services.</strong> Some Services require collection of your information directly by third parties. For example, if you use the Services to make rent payments. By using such Services, you grant Walk.in and third-party services the right, power, and authority to act on your behalf to access and transmit your personal and financial information from the relevant financial institution.</p>
            <p>Walk.in will not knowingly collect personally identifiable information from any person under the age of 18. ?</p>
          </div>

          <div className="row">
            <p><strong>2. Notice of Photography, Video and Audio Recording</strong></p>
            <ul>
              <li>When you visit a property supported by Walk.in, you enter an area where photography, audio, and video recording may occur.</li>
              <li>By entering the properties, you consent to photography, audio recording, video recording and monitoring and its use for security, quality assurance, training, providing feedback to listing agents, real-estate management companies, and landlords or for any other purpose(s) that Walk.in, its vendors, partners, affiliates and/or representatives deems fit to use. You release Walk.in, its officers and employees, and each and all persons involved from any liability connected with such recordings, digitizing, photographs, computer images, video and/or or sound recordings.</li>
              <li>All materials are stored on Walk.in servers, and will not be publicly disclosed.</li>
              <li>By entering the properties, you waive all rights you may have to any claims for payment or royalties in connection with any of these materials, regardless of the purpose. You also waive any right to inspect or approve any photo, video, or audio recordings taken by Walk.in or any building owner or mangement companies, or the person or entity designated to do so by Walk.in.</li>
              <li>You have been fully informed of your consent, waiver of liability, and release before entering the property, and this notice is prominently displayed on Walk.in’s website and app.</li>
            </ul>
          </div>

          <div className="row">
            <p><strong>3. How Walk.in Uses Your Information</strong><br/>
            Walk.in generally uses the information collected about you to provide and improve the Services, including to:</p>
            <ul>
              <li>provide and deliver the Services, process transactions and send related information such as confirmations and invoices;</li>
              <li>send you technical notices, updates, security alerts and support and administrative messages;</li>
              <li>respond to your comments, questions and requests and provide customer service;</li>
              <li>communicate with you about products, services, offers, promotions, rewards and events offered by Walk.in and others, and provide news and information Walk.in thinks will be of interest to you;</li>
              <li>monitor and analyze trends, usage and activities in connection with our Services;</li>
              <li>revise, modify, and update existing Services and develop new Services;</li>
              <li>detect, investigate and prevent fraudulent transactions and other illegal activities and protect the rights and property of Walk.in and others;</li>
              <li>personalize the Services and present you with advertising, content or features that Walk.in believes will be of interest or useful to you;</li>
              <li>facilitate contests, sweepstakes and promotions and process and deliver entries and rewards;</li>
              <li>link or combine with information Walk.in gets from others to help understand your needs and provide you with better service; and</li>
              <li>carry out any other purpose described to you at the time the information was collected.</li>
            </ul>
            <p><strong>Email Management.</strong> You may receive email from Walk.in for a variety of reasons.  For example, if you took an action through the Services. If you have an account with Walk.in, you can select your preferences through your account settings. Also, you can manage your receipt of some types of communication by following the instructions included in the email Walk.in sends you. Please note that, even if you unsubscribe from certain email correspondences, Walk.in may still need to email you with important transactional or administrative information.</p>
          </div>

          <div className="row">
            <p><strong>4. When Walk.in Shares and Discloses Your Information</strong></p>
            <p>Your privacy is important and Walk.in is committed to protecting your information that identifies you personally. Walk.in will only share personal information that you provide outside the public areas of the Services in the following circumstances:</p>
            <ul>
              <li><strong>With your consent.</strong> When you consent or direct Walk.in to share the personal information. This happens when you submit your information through many of our Services. For example, if you choose to contact a real estate agent, mortgage lender, investor, builder, property manager, or other real estate professional through the Services, your name, phone number, email address, and message content will appear to the recipient of the message. Similarly, if you apply for rental housing through the Services, your application information will be sent to prospective landlords.</li>
              <li><strong>Service providers to Walk.in.</strong> When Walk.in hires a service provider to help operate the Services for our business, Walk.in may give access to personal information only as appropriate to perform the service for Walk.in, and subject to the terms of this privacy policy. Walk.in always remains responsible for the privacy of your personal information that is shared with service providers.</li>
              <li><strong>Partners with whom Walk.in conduct business.</strong> When Walk.in partners with other businesses to offer products and services, Walk.in may share information with those business partners only as needed to provide those products and services and only subject to the terms of this privacy policy.</li>
              <li><strong>Legal obligation or protection from harm.</strong> When Walk.in has a good faith belief that access, use, preservation or disclosure of information is reasonably necessary to (a) satisfy any requirement of law, regulation, legal process, or enforceable governmental request, (b) enforce or investigate a potential violation of the Terms of Use, (c) detect, prevent, or otherwise respond to fraud, security or technical concerns, (d) support auditing and compliance functions, or (e) protect the rights, property, or safety of Walk.in, its users, or the public against harm.</li>
              <li><strong>Business transfers.</strong> If and when Walk.in is involved in a merger, acquisition, or any form of transfer or sale of some or all of its business, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, Walk.in may share your personal information in connection with that transaction.</li>
            </ul>
            <p>Walk.in may also share aggregated or de-identified information that cannot reasonably be used to identify you.</p>
          </div>

          <div className="row">
            <p><strong>5. Interest-Based Advertising</strong></p>
            <p>Walk.in participates in interest-based advertising. This means that when you use the Services, Walk.in or third party service providers or advertisers may use cookies (that they collect or that Walk.in provide to them) or other similar technologies to collect information about your use of the Services (including mobile applications) or your online activities over time and across different websites and devices. Collected information may include the content you view, the date and time that you view this content, and the website that referred you to the Services, and this information may be associated with your unique browser, device identifier, or Internet Protocol (IP) address. These practices help tailor advertisements that are relevant and useful to you. These tailored advertisements may appear on the Services or on other websites, applications or properties.</p>
            <p>In addition, if you have provided your email address to us, Walk.in may use a scrambled, unreadable form (a hash) of your email address to deliver tailored advertisements to you on the Services or on other websites, including via Facebook’s Custom Audience Feature or other similar tools. Click here to learn about how you can control the ads you see on Facebook.</p>
            <p>You may opt-out of cookie tracking and analysis as described in the section below entitled 'Opting Out of Collection of Information by Third Parties'. The Services do not otherwise respond to ‘do not track’ signals.</p>
          </div>

          <div className="row">
            <p><strong>6. Third-Party Links and Websites</strong></p>
            <p>Throughout the Services, Walk.in may link to the Websites of other companies and/or individuals. Further, certain functionalities on the Services may involve the distribution of your listing information to third-party Websites. These third-party Websites may collect information about users on those Websites, and Walk.in's privacy policy does not extend to these external Websites and third parties. Please refer directly to these third parties and Websites regarding their privacy policies.</p>
          </div>

          <div className="row">
            <p><strong>7. Security and Retention of Information</strong></p>
            <p>Walk.in takes reasonable steps to protect the information users share with us from unauthorized use, access, and disclosure, both during transmission and at rest. However, no transmission of information via the Internet nor electronic storage solution can be entirely secure, so please be aware that Walk.in cannot guarantee absolute security.</p>
            <p>You can access, update, and delete personal information you provide to Walk.in in your account profile by logging into your account on the relevant Walk.in Service. Walk.in may maintain a copy of the original version of your information in our records.</p>
            <p>Walk.in will retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.</p>
          </div>

          <div className="row">
            <p><strong>8. Transfer of Information to the United States</strong></p>
            <p>Walk.in is based in the United States and you acknowledge that the information Walk.in collect is governed by U.S. law. By accessing or using the Services or otherwise providing information to us, you consent to the processing, transfer, and storage of information in and to the United States, where you may not have the same rights and protections as you do under local law.</p>
          </div>

          <div className="row">
            <p><strong>9. Government and Private Party Information Requests</strong></p>
            <p>Walk.in occasionally receives various forms of legal process from government agencies and private parties requesting information about Walk.in users. Before Walk.in produce information, Walk.in will attempt to notify affected users and give them an opportunity to object unless notification is prohibited by law or if Walk.in believe that notification would create a risk of harm or be otherwise counterproductive.</p>
          </div>

          <div className="row">
            <p><strong>10. Contacting Walk.in</strong></p>
            <p>If you have any questions about this privacy policy, or the privacy practices of Walk.in, please email us at support@Walk.in, or you can write to us at:</p>
            <p>www.Walk.in.com<br/>524 North Ave, New Rochelle, NY 10801</p>
          </div>

          <div className="row">
            <p><strong>11. Changes to this Privacy Policy</strong></p>
            <p>Please note that this policy may be amended from time to time. You should check back for the most current version before relying on any of the provisions in this privacy policy. Walk.in will provide notice of material changes to the policy, either by posting a notice on our Walk.in supported sites, by sending an email, or some other reasonable method.</p>
          </div>

        </div>
      </div>
    );
  }
}

export default PrivacyPage;
