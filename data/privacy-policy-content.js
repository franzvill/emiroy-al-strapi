'use strict';

// Default content for the Privacy Policy Page, applied by the bootstrap
// function on first run. Once an entry has any sections, the bootstrap leaves
// it alone — admin edits are never overwritten. Italian intentionally omitted:
// matches the prior hardcoded-page behaviour where IT visitors fell back to
// EN, which is what the backend's getPrivacyPolicyPage() still does.

module.exports = {
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: March 28, 2026',
    seo: {
      metaTitle: 'Privacy Policy',
      metaDescription:
        'Learn how GALENO, EMIROYALE collects, uses, and protects your personal data in accordance with Swiss and EU data protection law.',
    },
    sections: [
      {
        heading: '1. Data Controller',
        body: `The data controller responsible for processing your personal data is:

GALENO, EMIROYALE
Cours des Bastions 13
1205 Geneva
Switzerland

Company Registration: CH-660.0.536.024-0
Contact: contact@emigeneva.ch`,
      },
      {
        heading: '2. Data We Collect',
        body: `We collect and process the following categories of personal data:

• Account information (via Shopify): When you create an account or place an order, we collect your name, email address, phone number, billing and delivery address, and order details.

• Form submissions: When you submit a contact form, callback request, availability notification, collector presentation request, retailer partnership inquiry, corporate request, or personalisation request, we collect your name, email address, phone number, and any company or additional information you choose to provide.

• Analytics and cookie data: We use cookies and analytics technologies, including Google Analytics, Meta Ads Manager, and our own self-hosted analytics system, to collect information about page views, traffic sources, product views, cart interactions, session activity, ad performance, and visitor behaviour in order to understand how our website is used and improve our services.

• Technical data: We automatically collect technical information when you visit our website, including your IP address, browser type, device type, operating system, language preferences, referral URLs, and general location data derived from your IP address.

• Payment data: When you complete a purchase using payment providers such as Klarna, Apple Pay, or Google Pay, certain payment-related information, transaction identifiers, and authentication data may be processed by those providers to complete and secure the transaction.

• Marketing and advertising data: Through Meta Ads Manager and similar technologies, we may collect information relating to advertising interactions, campaign attribution, and engagement with our advertisements across third-party platforms.

• Chat interactions: We collect and store the content of messages exchanged through our customer support chat widget Talven, together with related contact details and support history where applicable.`,
      },
      {
        heading: '3. Legal Basis for Processing',
        body: `We process your personal data on the following legal bases:

• Consent (Article 6(1)(a) GDPR): We rely on your consent for the use of analytics cookies and for processing data submitted through optional contact and request forms. You may withdraw your consent at any time.

• Performance of a contract (Article 6(1)(b) GDPR): We process your account, order, and payment data to the extent necessary to fulfil purchases made through our Shopify-powered checkout, including transactions processed through third-party payment providers such as Klarna, Apple Pay, and Google Pay.

• Legitimate interests (Article 6(1)(f) GDPR): We process certain technical, security, and usage data to protect the security of our website, prevent fraud, ensure secure payment processing, improve our services, and maintain the proper functioning of our website, where such interests are not overridden by your rights and freedoms.

Payment providers such as Klarna, Apple Pay, and Google Pay act as independent data controllers for certain processing activities, including payment authentication and fraud prevention.`,
      },
      {
        heading: '4. Third-Party Recipients',
        body: `We may share your personal data with the following third-party service providers:

• Shopify Inc. (Canada / USA): Our e-commerce platform, which processes order, payment, delivery, and account-related data. Shopify is certified under applicable data transfer mechanisms.

• Google LLC (USA): We use Google Analytics for website analytics and Google-related services for website functionality and performance monitoring. Google processes analytics, technical, and usage data in accordance with its privacy terms and applicable standard contractual clauses.

• Meta Platforms, Inc. (USA): We use Meta Ads Manager and related advertising technologies to measure advertising performance, campaign attribution, and user engagement across Meta platforms. Meta may process cookie identifiers, technical data, and interaction data in accordance with its own privacy policies and applicable data transfer safeguards.

• Klarna Bank AB (Sweden): We offer Klarna as a payment option at checkout. Klarna may process payment information, contact details, order information, and financial data for payment processing, fraud prevention, and financing services in accordance with its own privacy policy and applicable legal obligations.

• Apple Pay and Google Pay: Where available as payment methods, Apple Pay and Google Pay may process payment authentication data, tokenized payment information, and device-related identifiers in order to facilitate secure payment transactions. Such processing is carried out in accordance with the respective providers' privacy policies and applicable legal obligations.

• Talven: Our customer support chat widget provider, which processes the content of chat interactions and related customer support information.

• Adobe Inc. (USA): We use Adobe TypeKit for web font delivery and typography services, which may process technical information such as IP address and browser-related data when fonts are loaded.

Please note that our content management system and custom analytics backend are self-hosted and do not involve third-party data transfers.`,
      },
      {
        heading: '5. International Data Transfers',
        body: `Some of our third-party service providers are located outside Switzerland and the European Economic Area (EEA), including in the United States and other jurisdictions where data protection laws may differ from those applicable in Switzerland or the EEA. This may include providers such as Shopify, Google, Meta, Klarna, Apple Pay, and Google Pay, as well as their affiliated companies and authorised sub-processors.

Where we transfer personal data to countries that do not provide an equivalent level of data protection, we rely on appropriate safeguards such as:

• Standard Contractual Clauses (SCCs) adopted by the European Commission and recognised under Swiss data protection law; and
• Adequacy decisions issued by the European Commission or the Swiss Federal Council, where applicable.

Where required, we also implement additional contractual, technical, and organisational measures designed to protect personal data during international transfers.

You may request further information about the specific safeguards in place by contacting us at contact@emigeneva.ch.`,
      },
      {
        heading: '6. Data Retention',
        body: `We retain your personal data for the following periods:

• Consent preferences: 13 months from the date of consent.
• Google Analytics data: 14 months, in accordance with Google Analytics default retention settings.
• Custom analytics data: 14 months.
• Form submission data: Retained for as long as necessary to respond to your inquiry and for any applicable follow-up period required by our legitimate interests or legal obligations.
• Chat support data: Retained for as long as necessary to manage customer support requests, maintain service continuity, and comply with applicable legal obligations.
• Account and order data: Retained for as long as your account remains active and for the period required by applicable Swiss commercial, accounting, and tax law following account deletion.
• Payment and transaction data: Where purchases are processed through third-party payment providers such as Klarna, Apple Pay, or Google Pay, certain payment, transaction, and fraud-prevention data may be retained by those providers in accordance with their own legal, regulatory, accounting, and compliance obligations.`,
      },
      {
        heading: '7. Your Rights as a Data Subject',
        body: `Subject to applicable law, you have the following rights with respect to your personal data:

• Right of access: You may request a copy of the personal data we hold about you.
• Right to rectification: You may request that we correct inaccurate or incomplete data.
• Right to erasure: You may request that we delete your personal data in certain circumstances.
• Right to restriction of processing: You may request that we restrict the processing of your data in certain circumstances.
• Right to data portability: You may request that we provide your data in a structured, commonly used, machine-readable format.
• Right to object: You may object to the processing of your data where we rely on legitimate interests.
• Right to withdraw consent: Where processing is based on consent, you may withdraw it at any time without affecting the lawfulness of prior processing.
• Rights related to third-party processing: Where your personal data is processed through third-party services such as payment providers (e.g. Klarna, Apple Pay, Google Pay), you may also exercise your rights directly with those providers in accordance with their respective privacy policies.
• Right to lodge a complaint: You have the right to lodge a complaint with the competent data protection authority if you believe that the processing of your personal data infringes applicable data protection laws.

To exercise any of these rights, please contact us at contact@emigeneva.ch.

We will respond to your request within 30 days. We may ask you to verify your identity before processing your request.`,
      },
      {
        heading: '8. Supervisory Authorities',
        body: `You have the right to lodge a complaint with a competent data protection supervisory authority. Depending on your place of residence, you may contact the following authorities:

• Switzerland: Federal Data Protection and Information Commissioner (FDPIC) — www.edoeb.admin.ch
• France: Commission Nationale de l'Informatique et des Libertés (CNIL) — www.cnil.fr
• Other EU Member States: The data protection authority of the EU member state in which you reside.`,
      },
      {
        heading: '9. Cookies',
        body: `We use cookies and similar tracking technologies on our website. Necessary cookies are always active and cannot be disabled. Analytics cookies are only activated after you provide your consent.

For full details about the cookies we use and how to manage your preferences, please refer to our Cookie Policy at https://www.emigeneva.ch/cookie-policy.`,
      },
      {
        heading: '10. Changes to This Policy',
        body: `We reserve the right to update this Privacy Policy at any time to reflect changes in applicable law, our data processing practices, or the services we offer. When we make material changes, we will revise the "Last updated" date at the top of this page. We encourage you to review this policy periodically.

Continued use of our website following the publication of any changes constitutes your acknowledgement of the updated policy.`,
      },
      {
        heading: '11. Data Security',
        body: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, misuse, or alteration. These measures include access controls, encryption where appropriate, and secure hosting environments. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.`,
      },
    ],
  },
  fr: {
    title: 'Politique de confidentialité',
    lastUpdated: 'Dernière mise à jour : 28 mars 2026',
    seo: {
      metaTitle: 'Politique de confidentialité',
      metaDescription:
        'Découvrez comment GALENO, EMIROYALE collecte, utilise et protège vos données personnelles conformément au droit suisse et européen en matière de protection des données.',
    },
    sections: [
      {
        heading: '1. Responsable du traitement',
        body: `Le responsable du traitement de vos données personnelles est :

GALENO, EMIROYALE
Cours des Bastions 13
1205 Genève
Suisse

Numéro d'immatriculation : CH-660.0.536.024-0
Contact : contact@emigeneva.ch`,
      },
      {
        heading: '2. Données collectées',
        body: `Nous collectons et traitons les catégories de données personnelles suivantes :

• Informations de compte (via Shopify) : lorsque vous créez un compte ou passez une commande, nous collectons votre nom, adresse e-mail, numéro de téléphone, adresse de facturation et de livraison, et les détails de votre commande.

• Soumissions de formulaires : lorsque vous soumettez un formulaire de contact, une demande de rappel, une notification de disponibilité, une demande de présentation pour collectionneurs, une demande de partenariat revendeur, une demande corporate ou une demande de personnalisation, nous collectons votre nom, adresse e-mail, numéro de téléphone, ainsi que toute information relative à votre entreprise ou tout complément d'information que vous choisissez de fournir.

• Données analytiques et de cookies : nous utilisons des cookies et des technologies analytiques, notamment Google Analytics, Meta Ads Manager et notre propre système d'analyse hébergé en interne, pour collecter des informations sur les pages vues, les sources de trafic, les vues de produits, les interactions avec le panier, l'activité de session, les performances publicitaires et le comportement des visiteurs, afin de comprendre comment notre site est utilisé et d'améliorer nos services.

• Données techniques : nous collectons automatiquement des informations techniques lorsque vous visitez notre site, notamment votre adresse IP, votre type de navigateur, votre type d'appareil, votre système d'exploitation, vos préférences linguistiques, les URL de provenance et des données de localisation générale dérivées de votre adresse IP.

• Données de paiement : lorsque vous effectuez un achat via des prestataires de paiement tels que Klarna, Apple Pay ou Google Pay, certaines informations relatives au paiement, identifiants de transaction et données d'authentification peuvent être traités par ces prestataires afin de finaliser et de sécuriser la transaction.

• Données marketing et publicitaires : via Meta Ads Manager et des technologies similaires, nous pouvons collecter des informations concernant les interactions publicitaires, l'attribution des campagnes et l'engagement avec nos publicités sur des plateformes tierces.

• Interactions via le chat : nous collectons et conservons le contenu des messages échangés via notre widget de support client Talven, ainsi que les coordonnées et l'historique de support associés, le cas échéant.`,
      },
      {
        heading: '3. Base juridique du traitement',
        body: `Nous traitons vos données personnelles sur les bases juridiques suivantes :

• Consentement (article 6, paragraphe 1, point a) du RGPD) : nous nous appuyons sur votre consentement pour l'utilisation des cookies analytiques et pour le traitement des données soumises via les formulaires de contact et de demande facultatifs. Vous pouvez retirer votre consentement à tout moment.

• Exécution d'un contrat (article 6, paragraphe 1, point b) du RGPD) : nous traitons vos données de compte, de commande et de paiement dans la mesure nécessaire à l'exécution des achats effectués via notre interface de paiement Shopify, y compris les transactions traitées par des prestataires de paiement tiers tels que Klarna, Apple Pay et Google Pay.

• Intérêts légitimes (article 6, paragraphe 1, point f) du RGPD) : nous traitons certaines données techniques, de sécurité et d'utilisation pour protéger la sécurité de notre site, prévenir la fraude, garantir un traitement sécurisé des paiements, améliorer nos services et maintenir le bon fonctionnement de notre site, dans la mesure où ces intérêts ne sont pas primés par vos droits et libertés.

Les prestataires de paiement tels que Klarna, Apple Pay et Google Pay agissent en tant que responsables du traitement indépendants pour certaines activités de traitement, notamment l'authentification du paiement et la prévention de la fraude.`,
      },
      {
        heading: '4. Destinataires tiers',
        body: `Nous pouvons partager vos données personnelles avec les prestataires de services tiers suivants :

• Shopify Inc. (Canada / États-Unis) : notre plateforme e-commerce, qui traite les données de commande, de paiement, de livraison et de compte. Shopify est certifié conformément aux mécanismes de transfert de données applicables.

• Google LLC (États-Unis) : nous utilisons Google Analytics pour l'analyse du site et des services Google associés pour la fonctionnalité et le suivi des performances du site. Google traite les données analytiques, techniques et d'utilisation conformément à ses conditions de confidentialité et aux clauses contractuelles types applicables.

• Meta Platforms, Inc. (États-Unis) : nous utilisons Meta Ads Manager et les technologies publicitaires associées pour mesurer la performance publicitaire, l'attribution des campagnes et l'engagement des utilisateurs sur les plateformes Meta. Meta peut traiter des identifiants de cookies, des données techniques et des données d'interaction conformément à ses propres politiques de confidentialité et aux garanties de transfert de données applicables.

• Klarna Bank AB (Suède) : nous proposons Klarna comme option de paiement lors du paiement. Klarna peut traiter les informations de paiement, les coordonnées de contact, les informations de commande et les données financières à des fins de traitement des paiements, de prévention de la fraude et de services de financement, conformément à sa propre politique de confidentialité et aux obligations légales applicables.

• Apple Pay et Google Pay : lorsqu'ils sont disponibles comme moyens de paiement, Apple Pay et Google Pay peuvent traiter des données d'authentification de paiement, des informations de paiement tokenisées et des identifiants liés à l'appareil afin de faciliter des transactions de paiement sécurisées. Ce traitement est effectué conformément aux politiques de confidentialité respectives des prestataires et aux obligations légales applicables.

• Talven : notre prestataire de widget de support client, qui traite le contenu des interactions via le chat et les informations de support client associées.

• Adobe Inc. (États-Unis) : nous utilisons Adobe TypeKit pour la diffusion de polices web et les services typographiques, qui peut traiter des informations techniques telles que l'adresse IP et les données liées au navigateur lors du chargement des polices.

Veuillez noter que notre système de gestion de contenu et notre backend analytique personnalisé sont hébergés en interne et n'impliquent pas de transferts de données vers des tiers.`,
      },
      {
        heading: '5. Transferts internationaux de données',
        body: `Certains de nos prestataires tiers sont établis en dehors de la Suisse et de l'Espace économique européen (EEE), notamment aux États-Unis et dans d'autres juridictions où la législation sur la protection des données peut différer de celle applicable en Suisse ou dans l'EEE. Cela peut concerner des prestataires tels que Shopify, Google, Meta, Klarna, Apple Pay et Google Pay, ainsi que leurs sociétés affiliées et leurs sous-traitants autorisés.

Lorsque nous transférons des données personnelles vers des pays n'offrant pas un niveau de protection équivalent, nous nous appuyons sur des garanties appropriées, notamment :

• Les clauses contractuelles types (CCT) adoptées par la Commission européenne et reconnues par le droit suisse en matière de protection des données ; et
• Les décisions d'adéquation émises par la Commission européenne ou le Conseil fédéral suisse, le cas échéant.

Lorsque cela est nécessaire, nous mettons également en œuvre des mesures contractuelles, techniques et organisationnelles supplémentaires destinées à protéger les données personnelles lors des transferts internationaux.

Vous pouvez demander de plus amples informations sur les garanties spécifiques en place en nous contactant à contact@emigeneva.ch.`,
      },
      {
        heading: '6. Durées de conservation',
        body: `Nous conservons vos données personnelles pour les durées suivantes :

• Préférences de consentement : 13 mois à compter de la date du consentement.
• Données Google Analytics : 14 mois, conformément aux paramètres de conservation par défaut de Google Analytics.
• Données analytiques personnalisées : 14 mois.
• Données de formulaires : conservées aussi longtemps que nécessaire pour répondre à votre demande et pour toute période de suivi requise par nos intérêts légitimes ou nos obligations légales.
• Données de support via le chat : conservées aussi longtemps que nécessaire pour gérer les demandes de support client, maintenir la continuité du service et respecter les obligations légales applicables.
• Données de compte et de commande : conservées aussi longtemps que votre compte est actif et pendant la durée requise par le droit commercial, comptable et fiscal suisse applicable après la suppression du compte.
• Données de paiement et de transaction : lorsque les achats sont traités via des prestataires de paiement tiers tels que Klarna, Apple Pay ou Google Pay, certaines données de paiement, de transaction et de prévention de la fraude peuvent être conservées par ces prestataires conformément à leurs propres obligations légales, réglementaires, comptables et de conformité.`,
      },
      {
        heading: '7. Vos droits en tant que personne concernée',
        body: `Sous réserve du droit applicable, vous disposez des droits suivants concernant vos données personnelles :

• Droit d'accès : vous pouvez demander une copie des données personnelles que nous détenons à votre sujet.
• Droit de rectification : vous pouvez demander la correction de données inexactes ou incomplètes.
• Droit à l'effacement : vous pouvez demander la suppression de vos données personnelles dans certaines circonstances.
• Droit à la limitation du traitement : vous pouvez demander la limitation du traitement de vos données dans certaines circonstances.
• Droit à la portabilité des données : vous pouvez demander que nous vous fournissions vos données dans un format structuré, couramment utilisé et lisible par machine.
• Droit d'opposition : vous pouvez vous opposer au traitement de vos données lorsque nous nous fondons sur des intérêts légitimes.
• Droit de retrait du consentement : lorsque le traitement est fondé sur le consentement, vous pouvez le retirer à tout moment, sans que cela ne porte atteinte à la licéité du traitement antérieur.
• Droits liés au traitement par des tiers : lorsque vos données personnelles sont traitées par des services tiers tels que des prestataires de paiement (par exemple Klarna, Apple Pay, Google Pay), vous pouvez également exercer vos droits directement auprès de ces prestataires conformément à leurs politiques de confidentialité respectives.
• Droit d'introduire une réclamation : vous avez le droit d'introduire une réclamation auprès de l'autorité compétente en matière de protection des données si vous estimez que le traitement de vos données personnelles enfreint la législation applicable en matière de protection des données.

Pour exercer l'un de ces droits, veuillez nous contacter à contact@emigeneva.ch.

Nous répondrons à votre demande dans un délai de 30 jours. Nous pouvons vous demander de vérifier votre identité avant de traiter votre demande.`,
      },
      {
        heading: '8. Autorités de contrôle',
        body: `Vous avez le droit d'introduire une réclamation auprès d'une autorité de contrôle compétente en matière de protection des données. Selon votre lieu de résidence, vous pouvez contacter les autorités suivantes :

• Suisse : Préposé fédéral à la protection des données et à la transparence (PFPDT) — www.edoeb.admin.ch
• France : Commission Nationale de l'Informatique et des Libertés (CNIL) — www.cnil.fr
• Autres États membres de l'UE : l'autorité de protection des données de l'État membre de l'UE dans lequel vous résidez.`,
      },
      {
        heading: '9. Cookies',
        body: `Nous utilisons des cookies et des technologies de suivi similaires sur notre site web. Les cookies nécessaires sont toujours actifs et ne peuvent pas être désactivés. Les cookies analytiques ne sont activés qu'après que vous avez donné votre consentement.

Pour obtenir des informations complètes sur les cookies que nous utilisons et sur la manière de gérer vos préférences, veuillez consulter notre Politique des cookies à l'adresse https://www.emigeneva.ch/cookie-policy.`,
      },
      {
        heading: '10. Modifications de la présente politique',
        body: `Nous nous réservons le droit de mettre à jour la présente Politique de confidentialité à tout moment afin de refléter les évolutions du droit applicable, de nos pratiques de traitement des données ou des services que nous proposons. Lorsque nous apportons des modifications substantielles, nous révisons la date de « Dernière mise à jour » figurant en haut de cette page. Nous vous encourageons à consulter régulièrement cette politique.

La poursuite de l'utilisation de notre site web après la publication de toute modification vaut reconnaissance de la politique mise à jour.`,
      },
      {
        heading: '11. Sécurité des données',
        body: `Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte, usage abusif ou altération. Ces mesures incluent des contrôles d'accès, le chiffrement lorsque cela est approprié et des environnements d'hébergement sécurisés. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée, et nous ne pouvons garantir une sécurité absolue.`,
      },
    ],
  },
  de: {
    title: 'Datenschutzerklärung',
    lastUpdated: 'Zuletzt aktualisiert: 28. März 2026',
    seo: {
      metaTitle: 'Datenschutzerklärung',
      metaDescription:
        'Erfahren Sie, wie GALENO, EMIROYALE Ihre personenbezogenen Daten gemäß schweizerischem und EU-Datenschutzrecht erhebt, verwendet und schützt.',
    },
    sections: [
      {
        heading: '1. Verantwortliche Stelle',
        body: `Verantwortliche Stelle für die Verarbeitung Ihrer personenbezogenen Daten ist:

GALENO, EMIROYALE
Cours des Bastions 13
1205 Genf
Schweiz

Handelsregister: CH-660.0.536.024-0
Kontakt: contact@emigeneva.ch`,
      },
      {
        heading: '2. Erhobene Daten',
        body: `Wir erheben und verarbeiten die folgenden Kategorien personenbezogener Daten:

• Kontodaten (über Shopify): Wenn Sie ein Konto erstellen oder eine Bestellung aufgeben, erheben wir Ihren Namen, Ihre E-Mail-Adresse, Ihre Telefonnummer, Ihre Rechnungs- und Lieferadresse sowie Ihre Bestelldaten.

• Formulareingaben: Wenn Sie ein Kontaktformular, eine Rückrufanfrage, eine Verfügbarkeitsbenachrichtigung, eine Sammler-Präsentationsanfrage, eine Anfrage zur Einzelhandelspartnerschaft, eine Geschäftsanfrage oder eine Personalisierungsanfrage einreichen, erheben wir Ihren Namen, Ihre E-Mail-Adresse, Ihre Telefonnummer sowie etwaige Unternehmensdaten oder zusätzliche Informationen, die Sie freiwillig angeben.

• Analyse- und Cookie-Daten: Wir verwenden Cookies und Analysetechnologien, einschließlich Google Analytics, Meta Ads Manager und unseres eigenen, selbst gehosteten Analysesystems, um Informationen zu Seitenaufrufen, Traffic-Quellen, Produktansichten, Warenkorb-Interaktionen, Sitzungsaktivität, Anzeigenleistung und Besucherverhalten zu erfassen, um zu verstehen, wie unsere Website genutzt wird, und unsere Dienste zu verbessern.

• Technische Daten: Wir erheben automatisch technische Informationen, wenn Sie unsere Website besuchen, einschließlich Ihrer IP-Adresse, des Browsertyps, des Gerätemodells, des Betriebssystems, der Spracheinstellungen, der Verweis-URLs und allgemeiner Standortdaten, die aus Ihrer IP-Adresse abgeleitet werden.

• Zahlungsdaten: Wenn Sie einen Kauf über Zahlungsanbieter wie Klarna, Apple Pay oder Google Pay tätigen, können bestimmte zahlungsbezogene Informationen, Transaktionskennungen und Authentifizierungsdaten von diesen Anbietern verarbeitet werden, um die Transaktion abzuschließen und zu sichern.

• Marketing- und Werbedaten: Über Meta Ads Manager und ähnliche Technologien können wir Informationen zu Werbeinteraktionen, Kampagnen-Attribution und Engagement mit unserer Werbung auf Plattformen Dritter erheben.

• Chat-Interaktionen: Wir erheben und speichern den Inhalt der Nachrichten, die über unser Kundensupport-Chat-Widget Talven ausgetauscht werden, sowie zugehörige Kontaktdaten und Supporthistorie, sofern zutreffend.`,
      },
      {
        heading: '3. Rechtsgrundlage der Verarbeitung',
        body: `Wir verarbeiten Ihre personenbezogenen Daten auf den folgenden Rechtsgrundlagen:

• Einwilligung (Art. 6 Abs. 1 lit. a DSGVO): Wir stützen uns auf Ihre Einwilligung für die Verwendung von Analyse-Cookies und für die Verarbeitung von Daten, die über optionale Kontakt- und Anfrageformulare übermittelt werden. Sie können Ihre Einwilligung jederzeit widerrufen.

• Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO): Wir verarbeiten Ihre Konto-, Bestell- und Zahlungsdaten, soweit dies zur Erfüllung der über unseren Shopify-basierten Kaufabschluss getätigten Käufe erforderlich ist, einschließlich der Transaktionen, die über Zahlungsanbieter Dritter wie Klarna, Apple Pay und Google Pay abgewickelt werden.

• Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO): Wir verarbeiten bestimmte technische, sicherheitsbezogene und Nutzungsdaten, um die Sicherheit unserer Website zu schützen, Betrug zu verhindern, eine sichere Zahlungsabwicklung zu gewährleisten, unsere Dienste zu verbessern und das ordnungsgemäße Funktionieren unserer Website aufrechtzuerhalten, sofern Ihre Rechte und Freiheiten diese Interessen nicht überwiegen.

Zahlungsanbieter wie Klarna, Apple Pay und Google Pay agieren für bestimmte Verarbeitungstätigkeiten, insbesondere die Zahlungsauthentifizierung und Betrugsprävention, als unabhängige Verantwortliche.`,
      },
      {
        heading: '4. Empfänger der Daten',
        body: `Wir können Ihre personenbezogenen Daten an die folgenden Drittanbieter weitergeben:

• Shopify Inc. (Kanada / USA): Unsere E-Commerce-Plattform, die Bestell-, Zahlungs-, Liefer- und kontobezogene Daten verarbeitet. Shopify ist gemäß den anwendbaren Datenübermittlungsmechanismen zertifiziert.

• Google LLC (USA): Wir verwenden Google Analytics für Webanalysen sowie Google-bezogene Dienste für die Funktionalität und Leistungsüberwachung der Website. Google verarbeitet Analyse-, technische und Nutzungsdaten gemäß seinen Datenschutzbestimmungen und den anwendbaren Standardvertragsklauseln.

• Meta Platforms, Inc. (USA): Wir verwenden Meta Ads Manager und zugehörige Werbetechnologien, um die Werbeleistung, die Kampagnen-Attribution und das Nutzer-Engagement auf Meta-Plattformen zu messen. Meta kann Cookie-Identifikatoren, technische Daten und Interaktionsdaten gemäß seinen eigenen Datenschutzrichtlinien und den anwendbaren Schutzmaßnahmen für Datenübermittlungen verarbeiten.

• Klarna Bank AB (Schweden): Wir bieten Klarna als Zahlungsoption beim Bezahlvorgang an. Klarna kann Zahlungsinformationen, Kontaktdaten, Bestellinformationen und Finanzdaten zu Zwecken der Zahlungsabwicklung, Betrugsprävention und Finanzierungsdienstleistungen gemäß ihrer eigenen Datenschutzerklärung und den anwendbaren rechtlichen Verpflichtungen verarbeiten.

• Apple Pay und Google Pay: Sofern als Zahlungsmethoden verfügbar, können Apple Pay und Google Pay Zahlungsauthentifizierungsdaten, tokenisierte Zahlungsinformationen und gerätebezogene Identifikatoren verarbeiten, um sichere Zahlungsvorgänge zu ermöglichen. Diese Verarbeitung erfolgt gemäß den jeweiligen Datenschutzrichtlinien der Anbieter und den anwendbaren rechtlichen Verpflichtungen.

• Talven: Unser Anbieter des Kundensupport-Chat-Widgets, der den Inhalt der Chat-Interaktionen und damit verbundene Kundensupport-Informationen verarbeitet.

• Adobe Inc. (USA): Wir verwenden Adobe TypeKit für die Auslieferung von Webschriften und typografische Dienste, wobei beim Laden der Schriften technische Informationen wie die IP-Adresse und browserbezogene Daten verarbeitet werden können.

Bitte beachten Sie, dass unser Content-Management-System und unser eigenes Analyse-Backend selbst gehostet werden und keine Datenübermittlungen an Dritte beinhalten.`,
      },
      {
        heading: '5. Internationale Datenübermittlungen',
        body: `Einige unserer Drittanbieter befinden sich außerhalb der Schweiz und des Europäischen Wirtschaftsraums (EWR), unter anderem in den Vereinigten Staaten und anderen Rechtsordnungen, in denen das Datenschutzrecht von dem in der Schweiz oder im EWR geltenden abweichen kann. Dies kann Anbieter wie Shopify, Google, Meta, Klarna, Apple Pay und Google Pay sowie deren verbundene Unternehmen und autorisierte Auftragsverarbeiter umfassen.

Soweit wir personenbezogene Daten in Länder übermitteln, die kein gleichwertiges Datenschutzniveau bieten, stützen wir uns auf geeignete Garantien wie:

• Standardvertragsklauseln (SCC) der Europäischen Kommission, anerkannt nach schweizerischem Datenschutzrecht; und
• Angemessenheitsbeschlüsse der Europäischen Kommission oder des Schweizerischen Bundesrats, soweit anwendbar.

Soweit erforderlich, ergreifen wir auch zusätzliche vertragliche, technische und organisatorische Maßnahmen zum Schutz personenbezogener Daten bei internationalen Übermittlungen.

Weitere Informationen zu den konkret ergriffenen Garantien können Sie unter contact@emigeneva.ch anfordern.`,
      },
      {
        heading: '6. Aufbewahrungsdauer',
        body: `Wir speichern Ihre personenbezogenen Daten für die folgenden Zeiträume:

• Einwilligungspräferenzen: 13 Monate ab dem Zeitpunkt der Einwilligung.
• Google-Analytics-Daten: 14 Monate, gemäß den Standard-Aufbewahrungseinstellungen von Google Analytics.
• Eigene Analysedaten: 14 Monate.
• Daten aus Formulareingaben: So lange aufbewahrt, wie es zur Beantwortung Ihrer Anfrage und für etwaige Folgeprozesse erforderlich ist, die durch unsere berechtigten Interessen oder gesetzliche Pflichten gefordert werden.
• Chat-Support-Daten: So lange aufbewahrt, wie es zur Bearbeitung von Kundensupport-Anfragen, zur Aufrechterhaltung der Servicekontinuität und zur Erfüllung anwendbarer rechtlicher Verpflichtungen erforderlich ist.
• Konto- und Bestelldaten: So lange aufbewahrt, wie Ihr Konto aktiv bleibt, sowie für den nach schweizerischem Handels-, Buchhaltungs- und Steuerrecht nach einer Kontolöschung erforderlichen Zeitraum.
• Zahlungs- und Transaktionsdaten: Soweit Käufe über Zahlungsanbieter Dritter wie Klarna, Apple Pay oder Google Pay abgewickelt werden, können bestimmte Zahlungs-, Transaktions- und Betrugspräventionsdaten von diesen Anbietern gemäß ihren eigenen rechtlichen, regulatorischen, buchhalterischen und Compliance-Verpflichtungen aufbewahrt werden.`,
      },
      {
        heading: '7. Ihre Rechte als betroffene Person',
        body: `Vorbehaltlich des anwendbaren Rechts haben Sie in Bezug auf Ihre personenbezogenen Daten folgende Rechte:

• Auskunftsrecht: Sie können eine Kopie der personenbezogenen Daten anfordern, die wir über Sie speichern.
• Recht auf Berichtigung: Sie können verlangen, dass wir unrichtige oder unvollständige Daten berichtigen.
• Recht auf Löschung: Sie können unter bestimmten Voraussetzungen die Löschung Ihrer personenbezogenen Daten verlangen.
• Recht auf Einschränkung der Verarbeitung: Sie können unter bestimmten Voraussetzungen die Einschränkung der Verarbeitung Ihrer Daten verlangen.
• Recht auf Datenübertragbarkeit: Sie können verlangen, dass wir Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format bereitstellen.
• Widerspruchsrecht: Sie können der Verarbeitung Ihrer Daten widersprechen, soweit wir uns auf berechtigte Interessen stützen.
• Recht auf Widerruf der Einwilligung: Soweit die Verarbeitung auf einer Einwilligung beruht, können Sie diese jederzeit widerrufen, ohne dass die Rechtmäßigkeit der zuvor erfolgten Verarbeitung berührt wird.
• Rechte im Zusammenhang mit der Verarbeitung durch Dritte: Soweit Ihre personenbezogenen Daten über Drittanbieter wie Zahlungsanbieter (z. B. Klarna, Apple Pay, Google Pay) verarbeitet werden, können Sie Ihre Rechte auch unmittelbar gegenüber diesen Anbietern gemäß deren jeweiligen Datenschutzrichtlinien geltend machen.
• Beschwerderecht: Sie haben das Recht, eine Beschwerde bei der zuständigen Datenschutzbehörde einzureichen, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen das anwendbare Datenschutzrecht verstößt.

Um eines dieser Rechte auszuüben, kontaktieren Sie uns bitte unter contact@emigeneva.ch.

Wir werden auf Ihre Anfrage innerhalb von 30 Tagen antworten. Wir können Sie bitten, vor der Bearbeitung Ihrer Anfrage Ihre Identität zu bestätigen.`,
      },
      {
        heading: '8. Aufsichtsbehörden',
        body: `Sie haben das Recht, eine Beschwerde bei einer zuständigen Datenschutz-Aufsichtsbehörde einzureichen. Je nach Wohnsitz können Sie sich an folgende Behörden wenden:

• Schweiz: Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter (EDÖB) — www.edoeb.admin.ch
• Frankreich: Commission Nationale de l'Informatique et des Libertés (CNIL) — www.cnil.fr
• Andere EU-Mitgliedstaaten: Die Datenschutzbehörde des EU-Mitgliedstaats, in dem Sie wohnen.`,
      },
      {
        heading: '9. Cookies',
        body: `Wir verwenden auf unserer Website Cookies und ähnliche Tracking-Technologien. Notwendige Cookies sind stets aktiv und können nicht deaktiviert werden. Analyse-Cookies werden erst nach Ihrer Einwilligung aktiviert.

Vollständige Informationen zu den von uns eingesetzten Cookies und zur Verwaltung Ihrer Präferenzen finden Sie in unserer Cookie-Richtlinie unter https://www.emigeneva.ch/cookie-policy.`,
      },
      {
        heading: '10. Änderungen dieser Erklärung',
        body: `Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu aktualisieren, um Änderungen des anwendbaren Rechts, unserer Datenverarbeitungspraxis oder der von uns angebotenen Dienste widerzuspiegeln. Bei wesentlichen Änderungen aktualisieren wir das Datum „Zuletzt aktualisiert" am Anfang dieser Seite. Wir empfehlen, diese Erklärung regelmäßig zu überprüfen.

Die fortgesetzte Nutzung unserer Website nach der Veröffentlichung von Änderungen gilt als Anerkennung der aktualisierten Erklärung.`,
      },
      {
        heading: '11. Datensicherheit',
        body: `Wir treffen geeignete technische und organisatorische Maßnahmen, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Verlust, Missbrauch oder Veränderung zu schützen. Diese Maßnahmen umfassen Zugriffskontrollen, Verschlüsselung soweit angemessen und sichere Hosting-Umgebungen. Allerdings ist keine Methode der Übertragung über das Internet oder der elektronischen Speicherung vollständig sicher, und wir können keine absolute Sicherheit garantieren.`,
      },
    ],
  },
};
