import type { Schema, Struct } from '@strapi/strapi';

export interface LabelsAccountLabels extends Struct.ComponentSchema {
  collectionName: 'components_labels_account_labels';
  info: {
    description: 'Labels for the account page';
    displayName: 'Account Labels';
  };
  attributes: {
    emailLabel: Schema.Attribute.String;
    loadingOrders: Schema.Attribute.String;
    nameLabel: Schema.Attribute.String;
    noOrders: Schema.Attribute.String;
    orderPrefix: Schema.Attribute.String;
    ordersTitle: Schema.Attribute.String;
    profileTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    totalLabel: Schema.Attribute.String;
    trackingInfo: Schema.Attribute.String;
  };
}

export interface LabelsCallbackDialogLabels extends Struct.ComponentSchema {
  collectionName: 'components_labels_callback_dialog_labels';
  info: {
    description: 'Labels for the callback request dialog';
    displayName: 'Callback Dialog Labels';
  };
  attributes: {
    boutiqueAirport: Schema.Attribute.String;
    boutiqueGeneva: Schema.Attribute.String;
    boutiqueLabel: Schema.Attribute.String;
    boutiqueRequired: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    emailInvalid: Schema.Attribute.String;
    emailLabel: Schema.Attribute.String;
    emailRequired: Schema.Attribute.String;
    errorMessage: Schema.Attribute.String;
    errorTitle: Schema.Attribute.String;
    fullNameLabel: Schema.Attribute.String;
    fullNameRequired: Schema.Attribute.String;
    helpText: Schema.Attribute.Text;
    messageLabel: Schema.Attribute.String;
    messagePlaceholder: Schema.Attribute.String;
    phoneLabel: Schema.Attribute.String;
    phonePlaceholder: Schema.Attribute.String;
    phoneRequired: Schema.Attribute.String;
    pickupDateLabel: Schema.Attribute.String;
    reservingLabel: Schema.Attribute.String;
    selectDatePlaceholder: Schema.Attribute.String;
    submitButton: Schema.Attribute.String;
    submittingButton: Schema.Attribute.String;
    successMessage: Schema.Attribute.String;
    successTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LabelsCartLabels extends Struct.ComponentSchema {
  collectionName: 'components_labels_cart_labels';
  info: {
    description: 'Labels for the shopping cart';
    displayName: 'Cart Labels';
  };
  attributes: {
    checkoutButton: Schema.Attribute.String;
    checkoutError: Schema.Attribute.String;
    creatingCheckout: Schema.Attribute.String;
    emptyMessage: Schema.Attribute.String;
    itemPlural: Schema.Attribute.String;
    itemSingular: Schema.Attribute.String;
    title: Schema.Attribute.String;
    totalLabel: Schema.Attribute.String;
  };
}

export interface LabelsCollectorsPresentationLabels
  extends Struct.ComponentSchema {
  collectionName: 'components_labels_collectors_presentation_labels';
  info: {
    description: 'Labels for the collectors presentation form';
    displayName: 'Collectors Presentation Labels';
  };
  attributes: {
    additionalInfoTitle: Schema.Attribute.String;
    cityLabel: Schema.Attribute.String;
    cityRequired: Schema.Attribute.String;
    collectingInterestQuestion: Schema.Attribute.String;
    collectorProfileTitle: Schema.Attribute.String;
    collectorTypeAthlete: Schema.Attribute.String;
    collectorTypeGiftBuyer: Schema.Attribute.String;
    collectorTypeInvestor: Schema.Attribute.String;
    collectorTypeOther: Schema.Attribute.String;
    collectorTypePrivate: Schema.Attribute.String;
    collectorTypeQuestion: Schema.Attribute.String;
    contactInfoTitle: Schema.Attribute.String;
    countryLabel: Schema.Attribute.String;
    countryRequired: Schema.Attribute.String;
    dateRange1Month: Schema.Attribute.String;
    dateRange2Weeks: Schema.Attribute.String;
    dateRangeFlexible: Schema.Attribute.String;
    dateRangeLabel: Schema.Attribute.String;
    disclaimer: Schema.Attribute.Text;
    emailInvalid: Schema.Attribute.String;
    emailLabel: Schema.Attribute.String;
    emailRequired: Schema.Attribute.String;
    formatInPersonAirport: Schema.Attribute.String;
    formatInPersonGeneva: Schema.Attribute.String;
    formatPrivateEvent: Schema.Attribute.String;
    fullNameLabel: Schema.Attribute.String;
    fullNameRequired: Schema.Attribute.String;
    guests2to3: Schema.Attribute.String;
    guests4Plus: Schema.Attribute.String;
    guestsJustMe: Schema.Attribute.String;
    guestsLabel: Schema.Attribute.String;
    interestDiamondJewellery: Schema.Attribute.String;
    interestHeritageBrands: Schema.Attribute.String;
    interestLimitedEditions: Schema.Attribute.String;
    interestSportLuxury: Schema.Attribute.String;
    interestSwissWatchmaking: Schema.Attribute.String;
    introText: Schema.Attribute.Text;
    introText2: Schema.Attribute.Text;
    investment10000to20000: Schema.Attribute.String;
    investment20000Plus: Schema.Attribute.String;
    investment2600to5000: Schema.Attribute.String;
    investment5000to10000: Schema.Attribute.String;
    investmentRangeLabel: Schema.Attribute.String;
    investmentTitle: Schema.Attribute.String;
    messageLabel: Schema.Attribute.String;
    messagePlaceholder: Schema.Attribute.String;
    pageTitle: Schema.Attribute.String;
    phoneLabel: Schema.Attribute.String;
    phoneRequired: Schema.Attribute.String;
    presentationFormatLabel: Schema.Attribute.String;
    presentationPrefsTitle: Schema.Attribute.String;
    purchaseTimelineLabel: Schema.Attribute.String;
    returnHome: Schema.Attribute.String;
    seoDescription: Schema.Attribute.String;
    seoTitle: Schema.Attribute.String;
    submitButton: Schema.Attribute.String;
    submittingButton: Schema.Attribute.String;
    successMessage: Schema.Attribute.Text;
    successTitle: Schema.Attribute.String;
    timeline30Days: Schema.Attribute.String;
    timeline3Months: Schema.Attribute.String;
    timeline6Months: Schema.Attribute.String;
    timelineExploring: Schema.Attribute.String;
    toastError: Schema.Attribute.String;
    toastSuccess: Schema.Attribute.String;
    verificationLabel: Schema.Attribute.String;
    verificationNo: Schema.Attribute.String;
    verificationYes: Schema.Attribute.String;
  };
}

export interface LabelsComponentLabels extends Struct.ComponentSchema {
  collectionName: 'components_labels_component_labels';
  info: {
    description: 'Container for all UI component labels';
    displayName: 'Component Labels';
  };
  attributes: {
    callbackDialog: Schema.Attribute.Component<
      'labels.callback-dialog-labels',
      false
    >;
    cart: Schema.Attribute.Component<'labels.cart-labels', false>;
    header: Schema.Attribute.Component<'labels.header-labels', false>;
    notifyDialog: Schema.Attribute.Component<
      'labels.notify-dialog-labels',
      false
    >;
    productCard: Schema.Attribute.Component<
      'labels.product-card-labels',
      false
    >;
    productGrid: Schema.Attribute.Component<
      'labels.product-grid-labels',
      false
    >;
    youMayAlsoLike: Schema.Attribute.Component<
      'labels.you-may-also-like-labels',
      false
    >;
  };
}

export interface LabelsCorporateRequestsLabels extends Struct.ComponentSchema {
  collectionName: 'components_labels_corporate_requests_labels';
  info: {
    description: 'Labels for the corporate requests form';
    displayName: 'Corporate Requests Labels';
  };
  attributes: {
    additionalDetailsLabel: Schema.Attribute.String;
    additionalDetailsPlaceholder: Schema.Attribute.String;
    additionalInfoTitle: Schema.Attribute.String;
    addressLabel: Schema.Attribute.String;
    approval1to3Months: Schema.Attribute.String;
    approval30Days: Schema.Attribute.String;
    approvalImmediate: Schema.Attribute.String;
    approvalTimelineQuestion: Schema.Attribute.String;
    budget10000to20000: Schema.Attribute.String;
    budget20000Plus: Schema.Attribute.String;
    budget2600to5000: Schema.Attribute.String;
    budget5000to10000: Schema.Attribute.String;
    budgetQuestion: Schema.Attribute.String;
    cityLabel: Schema.Attribute.String;
    cityRequired: Schema.Attribute.String;
    collectionArena: Schema.Attribute.String;
    collectionArenaDiamond: Schema.Attribute.String;
    collectionQuestion: Schema.Attribute.String;
    companyInfoTitle: Schema.Attribute.String;
    contactPersonTitle: Schema.Attribute.String;
    countryLabel: Schema.Attribute.String;
    countryRequired: Schema.Attribute.String;
    customCaseBack: Schema.Attribute.String;
    customizationQuestion: Schema.Attribute.String;
    customizationTitle: Schema.Attribute.String;
    customLogoEngraving: Schema.Attribute.String;
    customMessageLabel: Schema.Attribute.String;
    customMessagePlaceholder: Schema.Attribute.String;
    customNone: Schema.Attribute.String;
    customOneOfOne: Schema.Attribute.String;
    customPackaging: Schema.Attribute.String;
    decisionMakerNo: Schema.Attribute.String;
    decisionMakerQuestion: Schema.Attribute.String;
    decisionMakerYes: Schema.Attribute.String;
    decisionTitle: Schema.Attribute.String;
    deliveryTitle: Schema.Attribute.String;
    destinationAmericas: Schema.Attribute.String;
    destinationAsia: Schema.Attribute.String;
    destinationEurope: Schema.Attribute.String;
    destinationMiddleEast: Schema.Attribute.String;
    destinationQuestion: Schema.Attribute.String;
    disclaimer: Schema.Attribute.Text;
    emailInvalid: Schema.Attribute.String;
    emailLabel: Schema.Attribute.String;
    emailRequired: Schema.Attribute.String;
    fullNameLabel: Schema.Attribute.String;
    fullNameRequired: Schema.Attribute.String;
    industryLabel: Schema.Attribute.String;
    industryPlaceholder: Schema.Attribute.String;
    legallyRegisteredNo: Schema.Attribute.String;
    legallyRegisteredQuestion: Schema.Attribute.String;
    legallyRegisteredYes: Schema.Attribute.String;
    legalNameLabel: Schema.Attribute.String;
    legalNameRequired: Schema.Attribute.String;
    pageDescription: Schema.Attribute.Text;
    pageDescription2: Schema.Attribute.Text;
    pageTitle: Schema.Attribute.String;
    phoneLabel: Schema.Attribute.String;
    phoneRequired: Schema.Attribute.String;
    positionLabel: Schema.Attribute.String;
    purposeCorporateAnniversary: Schema.Attribute.String;
    purposeEmployeeAwards: Schema.Attribute.String;
    purposeExecutiveGifts: Schema.Attribute.String;
    purposeOther: Schema.Attribute.String;
    purposeQuestion: Schema.Attribute.String;
    purposeSpecialEvent: Schema.Attribute.String;
    purposeSportsTeam: Schema.Attribute.String;
    purposeVIPGifts: Schema.Attribute.String;
    quantity100Plus: Schema.Attribute.String;
    quantity10to25: Schema.Attribute.String;
    quantity25to50: Schema.Attribute.String;
    quantity50to100: Schema.Attribute.String;
    quantity5to10: Schema.Attribute.String;
    quantityQuestion: Schema.Attribute.String;
    requestDetailsTitle: Schema.Attribute.String;
    returnHome: Schema.Attribute.String;
    seoDescription: Schema.Attribute.String;
    seoTitle: Schema.Attribute.String;
    submitButton: Schema.Attribute.String;
    submittingButton: Schema.Attribute.String;
    successMessage: Schema.Attribute.Text;
    successTitle: Schema.Attribute.String;
    timeline1to2Months: Schema.Attribute.String;
    timeline3Months: Schema.Attribute.String;
    timeline4to6Months: Schema.Attribute.String;
    timelineFlexible: Schema.Attribute.String;
    timelineQuestion: Schema.Attribute.String;
    toastError: Schema.Attribute.String;
    toastSuccess: Schema.Attribute.String;
    tradingNameLabel: Schema.Attribute.String;
    vatNumberLabel: Schema.Attribute.String;
    verificationTitle: Schema.Attribute.String;
    websiteLabel: Schema.Attribute.String;
    websitePlaceholder: Schema.Attribute.String;
  };
}

export interface LabelsHeaderLabels extends Struct.ComponentSchema {
  collectionName: 'components_labels_header_labels';
  info: {
    description: 'Labels for the header component';
    displayName: 'Header Labels';
  };
  attributes: {
    login: Schema.Attribute.String;
    logout: Schema.Attribute.String;
    myAccount: Schema.Attribute.String;
  };
}

export interface LabelsNewsroomLabels extends Struct.ComponentSchema {
  collectionName: 'components_labels_newsroom_labels';
  info: {
    description: 'Labels for the newsroom page';
    displayName: 'Newsroom Labels';
  };
  attributes: {
    comingSoon: Schema.Attribute.String;
    seoDescription: Schema.Attribute.String;
    seoTitle: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LabelsNotFoundLabels extends Struct.ComponentSchema {
  collectionName: 'components_labels_not_found_labels';
  info: {
    description: 'Labels for the 404 page';
    displayName: 'Not Found Labels';
  };
  attributes: {
    message: Schema.Attribute.String;
    returnHome: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LabelsNotifyDialogLabels extends Struct.ComponentSchema {
  collectionName: 'components_labels_notify_dialog_labels';
  info: {
    description: 'Labels for the notify availability dialog';
    displayName: 'Notify Dialog Labels';
  };
  attributes: {
    description: Schema.Attribute.Text;
    emailInvalid: Schema.Attribute.String;
    emailLabel: Schema.Attribute.String;
    emailRequired: Schema.Attribute.String;
    errorMessage: Schema.Attribute.String;
    errorTitle: Schema.Attribute.String;
    fullNameLabel: Schema.Attribute.String;
    fullNameRequired: Schema.Attribute.String;
    helpText: Schema.Attribute.Text;
    interestedInLabel: Schema.Attribute.String;
    messageLabel: Schema.Attribute.String;
    messagePlaceholder: Schema.Attribute.String;
    phoneLabel: Schema.Attribute.String;
    phonePlaceholder: Schema.Attribute.String;
    submitButton: Schema.Attribute.String;
    submittingButton: Schema.Attribute.String;
    successMessage: Schema.Attribute.String;
    successTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LabelsPageLabels extends Struct.ComponentSchema {
  collectionName: 'components_labels_page_labels';
  info: {
    description: 'Container for all page-specific labels';
    displayName: 'Page Labels';
  };
  attributes: {
    account: Schema.Attribute.Component<'labels.account-labels', false>;
    collectorsPresentation: Schema.Attribute.Component<
      'labels.collectors-presentation-labels',
      false
    >;
    corporateRequests: Schema.Attribute.Component<
      'labels.corporate-requests-labels',
      false
    >;
    newsroom: Schema.Attribute.Component<'labels.newsroom-labels', false>;
    notFound: Schema.Attribute.Component<'labels.not-found-labels', false>;
    personalized: Schema.Attribute.Component<
      'labels.personalized-labels',
      false
    >;
    productDetail: Schema.Attribute.Component<
      'labels.product-detail-labels',
      false
    >;
    retailersPartnership: Schema.Attribute.Component<
      'labels.retailers-partnership-labels',
      false
    >;
    watches: Schema.Attribute.Component<'labels.watches-labels', false>;
  };
}

export interface LabelsPersonalizedLabels extends Struct.ComponentSchema {
  collectionName: 'components_labels_personalized_labels';
  info: {
    description: 'Labels for the bespoke watch request form';
    displayName: 'Personalized Labels';
  };
  attributes: {
    cityLabel: Schema.Attribute.String;
    cityRequired: Schema.Attribute.String;
    countryLabel: Schema.Attribute.String;
    countryRequired: Schema.Attribute.String;
    creationTypeTitle: Schema.Attribute.String;
    disclaimer: Schema.Attribute.Text;
    emailInvalid: Schema.Attribute.String;
    emailLabel: Schema.Attribute.String;
    emailRequired: Schema.Attribute.String;
    fullNameLabel: Schema.Attribute.String;
    fullNameRequired: Schema.Attribute.String;
    introText: Schema.Attribute.Text;
    introText2: Schema.Attribute.Text;
    introText3: Schema.Attribute.Text;
    investment10000to20000: Schema.Attribute.String;
    investment20000to50000: Schema.Attribute.String;
    investment50000Plus: Schema.Attribute.String;
    investmentRangeTitle: Schema.Attribute.String;
    pageTitle: Schema.Attribute.String;
    phoneLabel: Schema.Attribute.String;
    phoneRequired: Schema.Attribute.String;
    returnHome: Schema.Attribute.String;
    seoDescription: Schema.Attribute.String;
    seoTitle: Schema.Attribute.String;
    submitButton: Schema.Attribute.String;
    submitting: Schema.Attribute.String;
    successMessage: Schema.Attribute.Text;
    successTitle: Schema.Attribute.String;
    timeline2to3Months: Schema.Attribute.String;
    timeline4to6Months: Schema.Attribute.String;
    timelineFlexible: Schema.Attribute.String;
    timelineTitle: Schema.Attribute.String;
    toastError: Schema.Attribute.String;
    toastSuccess: Schema.Attribute.String;
    typeCustomDial: Schema.Attribute.String;
    typeDiamond: Schema.Attribute.String;
    typeOneOfOne: Schema.Attribute.String;
    typePersonalized: Schema.Attribute.String;
    visionPlaceholder: Schema.Attribute.String;
    visionTitle: Schema.Attribute.String;
  };
}

export interface LabelsProductCardLabels extends Struct.ComponentSchema {
  collectionName: 'components_labels_product_card_labels';
  info: {
    description: 'Labels for product cards';
    displayName: 'Product Card Labels';
  };
  attributes: {
    addedToCart: Schema.Attribute.String;
    available: Schema.Attribute.String;
    comingSoon: Schema.Attribute.String;
    noImage: Schema.Attribute.String;
    notAvailable: Schema.Attribute.String;
    soldOut: Schema.Attribute.String;
  };
}

export interface LabelsProductDetailLabels extends Struct.ComponentSchema {
  collectionName: 'components_labels_product_detail_labels';
  info: {
    description: 'Labels for the product detail page';
    displayName: 'Product Detail Labels';
  };
  attributes: {
    notFoundMessage: Schema.Attribute.String;
    notFoundTitle: Schema.Attribute.String;
    notifyAvailability: Schema.Attribute.String;
    orderNow: Schema.Attribute.String;
    secureYourPiece: Schema.Attribute.String;
    selectOption: Schema.Attribute.String;
  };
}

export interface LabelsProductGridLabels extends Struct.ComponentSchema {
  collectionName: 'components_labels_product_grid_labels';
  info: {
    description: 'Labels for the product grid component';
    displayName: 'Product Grid Labels';
  };
  attributes: {
    loadError: Schema.Attribute.String;
    noProductsDescription: Schema.Attribute.String;
    noProductsTitle: Schema.Attribute.String;
  };
}

export interface LabelsRetailersPartnershipLabels
  extends Struct.ComponentSchema {
  collectionName: 'components_labels_retailers_partnership_labels';
  info: {
    description: 'Labels for the retailers partnership application form';
    displayName: 'Retailers Partnership Labels';
  };
  attributes: {
    additionalCommentsLabel: Schema.Attribute.String;
    additionalCommentsPlaceholder: Schema.Attribute.String;
    addressLabel: Schema.Attribute.String;
    avgPrice10000Plus: Schema.Attribute.String;
    avgPrice1000to2500: Schema.Attribute.String;
    avgPrice2500to5000: Schema.Attribute.String;
    avgPrice5000to10000: Schema.Attribute.String;
    avgPriceQuestion: Schema.Attribute.String;
    brandFitTitle: Schema.Attribute.String;
    brandsCarriedLabel: Schema.Attribute.String;
    brandsCarriedPlaceholder: Schema.Attribute.String;
    businessProfileTitle: Schema.Attribute.String;
    cityLabel: Schema.Attribute.String;
    cityRequired: Schema.Attribute.String;
    companyInfoTitle: Schema.Attribute.String;
    contactPersonTitle: Schema.Attribute.String;
    countryLabel: Schema.Attribute.String;
    countryRequired: Schema.Attribute.String;
    customerProfileQuestion: Schema.Attribute.String;
    deliveryRegionQuestion: Schema.Attribute.String;
    disclaimer: Schema.Attribute.Text;
    emailInvalid: Schema.Attribute.String;
    emailLabel: Schema.Attribute.String;
    emailRequired: Schema.Attribute.String;
    finalMessageTitle: Schema.Attribute.String;
    fullNameLabel: Schema.Attribute.String;
    fullNameRequired: Schema.Attribute.String;
    interestReasonLabel: Schema.Attribute.String;
    interestReasonPlaceholder: Schema.Attribute.String;
    legallyRegisteredNo: Schema.Attribute.String;
    legallyRegisteredQuestion: Schema.Attribute.String;
    legallyRegisteredYes: Schema.Attribute.String;
    legalNameLabel: Schema.Attribute.String;
    legalNameRequired: Schema.Attribute.String;
    legalTitle: Schema.Attribute.String;
    logisticsTitle: Schema.Attribute.String;
    pageDescription: Schema.Attribute.Text;
    pageTitle: Schema.Attribute.String;
    phoneLabel: Schema.Attribute.String;
    phoneRequired: Schema.Attribute.String;
    positionLabel: Schema.Attribute.String;
    profileCollectors: Schema.Attribute.String;
    profileHighLuxury: Schema.Attribute.String;
    profilePremium: Schema.Attribute.String;
    profileSportsLifestyle: Schema.Attribute.String;
    regionAmericas: Schema.Attribute.String;
    regionAsia: Schema.Attribute.String;
    regionEurope: Schema.Attribute.String;
    regionMiddleEast: Schema.Attribute.String;
    retailerTypeConceptLuxury: Schema.Attribute.String;
    retailerTypeJewellery: Schema.Attribute.String;
    retailerTypeLuxuryWatch: Schema.Attribute.String;
    retailerTypeOther: Schema.Attribute.String;
    retailerTypeQuestion: Schema.Attribute.String;
    retailerTypeSportsLuxury: Schema.Attribute.String;
    returnHome: Schema.Attribute.String;
    sellOnlineNo: Schema.Attribute.String;
    sellOnlineQuestion: Schema.Attribute.String;
    sellOnlineYes: Schema.Attribute.String;
    seoDescription: Schema.Attribute.String;
    seoTitle: Schema.Attribute.String;
    socialMediaLabel: Schema.Attribute.String;
    socialMediaPlaceholder: Schema.Attribute.String;
    storeCount1: Schema.Attribute.String;
    storeCount10Plus: Schema.Attribute.String;
    storeCount2to5: Schema.Attribute.String;
    storeCount6to10: Schema.Attribute.String;
    storeCountQuestion: Schema.Attribute.String;
    submitButton: Schema.Attribute.String;
    submittingButton: Schema.Attribute.String;
    successMessage: Schema.Attribute.Text;
    successTitle: Schema.Attribute.String;
    toastError: Schema.Attribute.String;
    toastSuccess: Schema.Attribute.String;
    tradingNameLabel: Schema.Attribute.String;
    websiteLabel: Schema.Attribute.String;
    websitePlaceholder: Schema.Attribute.String;
    workWithBoth: Schema.Attribute.String;
    workWithPreorders: Schema.Attribute.String;
    workWithQuestion: Schema.Attribute.String;
    workWithStock: Schema.Attribute.String;
    yearEstablishedLabel: Schema.Attribute.String;
    yearEstablishedPlaceholder: Schema.Attribute.String;
  };
}

export interface LabelsWatchesLabels extends Struct.ComponentSchema {
  collectionName: 'components_labels_watches_labels';
  info: {
    description: 'Labels for the watches/collection page';
    displayName: 'Watches Labels';
  };
  attributes: {
    collectionsLabel: Schema.Attribute.String;
    loadingCollections: Schema.Attribute.String;
    noProducts: Schema.Attribute.String;
    seoDescription: Schema.Attribute.String;
    seoTitle: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LabelsYouMayAlsoLikeLabels extends Struct.ComponentSchema {
  collectionName: 'components_labels_you_may_also_like_labels';
  info: {
    description: 'Labels for the you may also like section';
    displayName: 'You May Also Like Labels';
  };
  attributes: {
    noImage: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

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
      'labels.account-labels': LabelsAccountLabels;
      'labels.callback-dialog-labels': LabelsCallbackDialogLabels;
      'labels.cart-labels': LabelsCartLabels;
      'labels.collectors-presentation-labels': LabelsCollectorsPresentationLabels;
      'labels.component-labels': LabelsComponentLabels;
      'labels.corporate-requests-labels': LabelsCorporateRequestsLabels;
      'labels.header-labels': LabelsHeaderLabels;
      'labels.newsroom-labels': LabelsNewsroomLabels;
      'labels.not-found-labels': LabelsNotFoundLabels;
      'labels.notify-dialog-labels': LabelsNotifyDialogLabels;
      'labels.page-labels': LabelsPageLabels;
      'labels.personalized-labels': LabelsPersonalizedLabels;
      'labels.product-card-labels': LabelsProductCardLabels;
      'labels.product-detail-labels': LabelsProductDetailLabels;
      'labels.product-grid-labels': LabelsProductGridLabels;
      'labels.retailers-partnership-labels': LabelsRetailersPartnershipLabels;
      'labels.watches-labels': LabelsWatchesLabels;
      'labels.you-may-also-like-labels': LabelsYouMayAlsoLikeLabels;
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
