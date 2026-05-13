import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsBrandPhilosophy extends Struct.ComponentSchema {
  collectionName: 'components_sections_brand_philosophies';
  info: {
    description: 'Brand philosophy section with title and paragraphs';
    displayName: 'Brand Philosophy';
  };
  attributes: {
    footerText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'ESTABLISHED TO REDEFINE HOROLOGY'>;
    paragraph1: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"Each timepiece is a testament to our unwavering commitment to excellence. We don't simply create watches; we craft legacies, designed to transcend generations and moments in time.">;
    paragraph2: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Our philosophy is rooted in the belief that true luxury lies not in excess, but in the perfection of every detail, the integrity of every component, and the soul embedded in every creation.'>;
    tagline: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Where precision meets artistry, where heritage embraces innovation.'>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'TIME REFINED'>;
  };
}

export interface SectionsCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_cards';
  info: {
    description: 'A card with image and text content';
    displayName: 'Card';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    handwritingFont: Schema.Attribute.Enumeration<
      [
        'none',
        'allura',
        'pinyon-script',
        'italianno',
        'parisienne',
        'great-vibes',
        'tangerine',
        'sacramento',
        'petit-formal-script',
        'dancing-script',
        'caveat',
        'homemade-apple',
        'kalam',
      ]
    > &
      Schema.Attribute.DefaultTo<'none'>;
    handwritingText: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsCollectionCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_collection_ctas';
  info: {
    description: 'Collection call-to-action section';
    displayName: 'Collection CTA';
  };
  attributes: {
    badge: Schema.Attribute.String;
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsDetailShowcase extends Struct.ComponentSchema {
  collectionName: 'components_sections_detail_showcases';
  info: {
    description: 'Product detail showcase with image and description';
    displayName: 'Detail Showcase';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    footnote: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Product Detail'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'MULTI-LAYERED DIAL'>;
  };
}

export interface SectionsManifestoFooterRow extends Struct.ComponentSchema {
  collectionName: 'components_sections_manifesto_footer_rows';
  info: {
    description: 'Footer-style row at the bottom of the manifesto page';
    displayName: 'Manifesto Footer Row';
    icon: 'layout-bottombar';
  };
  attributes: {
    brandLine: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'EMI \u00B7 \u00C9l\u00E9gance \u00B7 Modernit\u00E9 \u00B7 Innovation'>;
    location: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Geneva, Switzerland \u2014 Est. EMI'>;
  };
}

export interface SectionsManifestoHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_manifesto_heroes';
  info: {
    description: 'Top hero block: eyebrow, brand name, tagline, divider, statement';
    displayName: 'Manifesto Hero';
    icon: 'feather';
  };
  attributes: {
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Brand Manifesto'>;
    name: Schema.Attribute.String & Schema.Attribute.DefaultTo<'EMI'>;
    statement: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'A declaration of who you are. A companion through everything you become.'>;
    tagline: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u00C9l\u00E9gance \u00B7 Modernit\u00E9 \u00B7 Innovation'>;
  };
}

export interface SectionsManifestoSlogan extends Struct.ComponentSchema {
  collectionName: 'components_sections_manifesto_slogans';
  info: {
    description: 'Closing slogan block: pre-label, main line, accent strip';
    displayName: 'Manifesto Slogan';
    icon: 'quote';
  };
  attributes: {
    accentLine: Schema.Attribute.String & Schema.Attribute.Required;
    mainLine: Schema.Attribute.Text & Schema.Attribute.Required;
    preLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'EMI Geneva'>;
  };
}

export interface SharedAboutSubmenu extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_submenu';
  info: {
    description: 'Labels for About Brand submenu items';
    displayName: 'About Submenu';
  };
  attributes: {
    brandManifestoLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Brand Manifesto'>;
    collectorsLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Private presentation for collectors'>;
    corporateLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Corporate requests'>;
    newsroomLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Newsroom'>;
    ourStoryLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Our Story'>;
    personalizedLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'You personalized a Swiss-crafted masterpiece'>;
    retailersLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<"Retailers' partnerships application Form">;
  };
}

export interface SharedBoutique extends Struct.ComponentSchema {
  collectionName: 'components_shared_boutiques';
  info: {
    description: 'Boutique location information';
    displayName: 'Boutique';
  };
  attributes: {
    address: Schema.Attribute.String & Schema.Attribute.Required;
    hours: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_info';
  info: {
    description: 'Contact information for footer';
    displayName: 'Contact Info';
  };
  attributes: {
    boutiques: Schema.Attribute.Component<'shared.boutique', true>;
    boutiquesTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Our Boutiques'>;
    email: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'contact@emigeneva.ch'>;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    description: 'Question and answer pair for FAQ';
    displayName: 'FAQ Item';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.RichText & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_sections';
  info: {
    description: 'A titled group of FAQ items';
    displayName: 'FAQ Section';
    icon: 'list';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.faq-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFooterLabels extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_labels';
  info: {
    description: 'Labels for footer';
    displayName: 'Footer Labels';
  };
  attributes: {
    aboutTitle: Schema.Attribute.String & Schema.Attribute.DefaultTo<'About'>;
    brandManifesto: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Brand Manifesto'>;
    collection: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Collection'>;
    collectorsPresentation: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Private presentation for collectors'>;
    contactFormCta: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Send us a message'>;
    contactUs: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Contact Us'>;
    contactUsUrl: Schema.Attribute.String;
    cookiePolicy: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Cookie Policy'>;
    cookieSettings: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Cookie Settings'>;
    copyrightText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'EMI. All rights reserved.'>;
    corporateRequests: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Corporate requests'>;
    currencyTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Currency'>;
    customerServiceTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Customer Service'>;
    facebook: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Facebook'>;
    facebookUrl: Schema.Attribute.String;
    faq: Schema.Attribute.String & Schema.Attribute.DefaultTo<'FAQ'>;
    feedback: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Feedback'>;
    followUsTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Follow Us'>;
    instagram: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Instagram'>;
    instagramUrl: Schema.Attribute.String;
    languageTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Language'>;
    ourStory: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'About Brand'>;
    pricingPolicy: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Pricing Policy'>;
    privacyPolicy: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Privacy Policy'>;
    retailersPartnership: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<"Retailers' partnerships application">;
    shippingReturns: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Shipping & Returns'>;
    shippingReturnsUrl: Schema.Attribute.String;
    sustainabilityPolicy: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Sustainability Policy'>;
    termsConditions: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Terms & Conditions'>;
    twitter: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Twitter'>;
    twitterUrl: Schema.Attribute.String;
    warranty: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Warranty Policy'>;
    warrantyUrl: Schema.Attribute.String;
  };
}

export interface SharedManifestoDeclaration extends Struct.ComponentSchema {
  collectionName: 'components_shared_manifesto_declarations';
  info: {
    description: 'Numbered declaration line in the manifesto';
    displayName: 'Manifesto Declaration';
    icon: 'list';
  };
  attributes: {
    numeral: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface SharedManifestoMindsetAttr extends Struct.ComponentSchema {
  collectionName: 'components_shared_manifesto_mindset_attrs';
  info: {
    description: 'Word + qualifier pair shown in the mindset section';
    displayName: 'Manifesto Mindset Attribute';
    icon: 'spark';
  };
  attributes: {
    qualifier: Schema.Attribute.String & Schema.Attribute.Required;
    word: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedManifestoOpeningParagraph
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_manifesto_opening_paragraphs';
  info: {
    description: 'Paragraph in the opening passage; choose emphasis style';
    displayName: 'Manifesto Opening Paragraph';
    icon: 'align-center';
  };
  attributes: {
    emphasis: Schema.Attribute.Enumeration<['italic', 'statement']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'italic'>;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedManifestoPrinciple extends Struct.ComponentSchema {
  collectionName: 'components_shared_manifesto_principles';
  info: {
    description: 'Single principle card (letter, word, description)';
    displayName: 'Manifesto Principle';
    icon: 'letter-case';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    letter: Schema.Attribute.String & Schema.Attribute.Required;
    word: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedManifestoPromise extends Struct.ComponentSchema {
  collectionName: 'components_shared_manifesto_promises';
  info: {
    description: 'Promise item with icon, title, and body copy';
    displayName: 'Manifesto Promise';
    icon: 'heart';
  };
  attributes: {
    body: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Enumeration<
      [
        'clock',
        'fingerprint',
        'heart',
        'shield',
        'diamond',
        'award',
        'gem',
        'sparkles',
        'sun',
        'star',
        'crown',
        'scroll',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'clock'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedNavigationLabels extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigation_labels';
  info: {
    description: 'Labels for header navigation';
    displayName: 'Navigation Labels';
  };
  attributes: {
    collection: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Collection'>;
    ourStory: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'About Brand'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTermsSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_terms_sections';
  info: {
    description: 'A heading + markdown body pair for legal pages';
    displayName: 'Terms Section';
    icon: 'file';
  };
  attributes: {
    body: Schema.Attribute.RichText & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.brand-philosophy': SectionsBrandPhilosophy;
      'sections.card': SectionsCard;
      'sections.collection-cta': SectionsCollectionCta;
      'sections.detail-showcase': SectionsDetailShowcase;
      'sections.manifesto-footer-row': SectionsManifestoFooterRow;
      'sections.manifesto-hero': SectionsManifestoHero;
      'sections.manifesto-slogan': SectionsManifestoSlogan;
      'shared.about-submenu': SharedAboutSubmenu;
      'shared.boutique': SharedBoutique;
      'shared.contact-info': SharedContactInfo;
      'shared.faq-item': SharedFaqItem;
      'shared.faq-section': SharedFaqSection;
      'shared.footer-labels': SharedFooterLabels;
      'shared.manifesto-declaration': SharedManifestoDeclaration;
      'shared.manifesto-mindset-attr': SharedManifestoMindsetAttr;
      'shared.manifesto-opening-paragraph': SharedManifestoOpeningParagraph;
      'shared.manifesto-principle': SharedManifestoPrinciple;
      'shared.manifesto-promise': SharedManifestoPromise;
      'shared.media': SharedMedia;
      'shared.navigation-labels': SharedNavigationLabels;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.terms-section': SharedTermsSection;
    }
  }
}
