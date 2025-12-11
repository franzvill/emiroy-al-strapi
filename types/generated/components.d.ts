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
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'TIME REFINED'>;
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

export interface SharedAboutSubmenu extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_submenu';
  info: {
    description: 'Labels for About Brand submenu items';
    displayName: 'About Submenu';
  };
  attributes: {
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

export interface SharedFooterLabels extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_labels';
  info: {
    description: 'Labels for footer';
    displayName: 'Footer Labels';
  };
  attributes: {
    aboutTitle: Schema.Attribute.String & Schema.Attribute.DefaultTo<'About'>;
    collection: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Collection'>;
    contactUs: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Contact Us'>;
    contactUsUrl: Schema.Attribute.String;
    copyrightText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Emiroy-Al. All rights reserved.'>;
    customerServiceTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Customer Service'>;
    facebook: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Facebook'>;
    facebookUrl: Schema.Attribute.String;
    followUsTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Follow Us'>;
    instagram: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Instagram'>;
    instagramUrl: Schema.Attribute.String;
    languageTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Language'>;
    ourStory: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'About Brand'>;
    shippingReturns: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Shipping & Returns'>;
    shippingReturnsUrl: Schema.Attribute.String;
    twitter: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Twitter'>;
    twitterUrl: Schema.Attribute.String;
    warranty: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Warranty'>;
    warrantyUrl: Schema.Attribute.String;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.brand-philosophy': SectionsBrandPhilosophy;
      'sections.card': SectionsCard;
      'sections.collection-cta': SectionsCollectionCta;
      'sections.detail-showcase': SectionsDetailShowcase;
      'shared.about-submenu': SharedAboutSubmenu;
      'shared.footer-labels': SharedFooterLabels;
      'shared.media': SharedMedia;
      'shared.navigation-labels': SharedNavigationLabels;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
