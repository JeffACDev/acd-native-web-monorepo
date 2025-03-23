interface AgilityHomeFieldProperties {
  state: number;
  modified: string;
  versionID: number;
  referenceName: string;
  definitionName: string;
  itemOrder: number;
}
interface AgilityHomeFieldBackground {
  label: null;
  url: string;
  target: null;
  filesize: number;
  pixelHeight: string;
  pixelWidth: string;
}
interface AgilityHomeImage {
  label: string;
  url: string;
  filesize: number;
  pixelHeight: string;
  pixelWidth: string;
  height: number;
  width: number;
  target?: string;
}
export interface AgilityHomeFieldFeature {
  contentID: number;
  properties: AgilityHomeFieldProperties;
  fields: {
    image: AgilityHomeImage;
    backgroundColor: string;
    heading: string;
    headingColor: string;
    headingFont?: string;
    subheading?: string;
    subheadingColor?: string;
    subheadingFont?: string;
    intro: string;
    introColor: string;
    cta: [AgiltiyHomeFieldsCta];
  };
  seo: null;
}
export interface AgiltiyHomeFieldsCta {
  contentID: number;
  properties: AgilityHomeFieldProperties;
  fields: {
    label: string;
    labelColor: string;
    backgroundColor: string;
    borderColor: string;
    appView?: string;
    productID?: string;
    url?: string;
    target?: string;
  };
  seo: null;
}
interface AgiltyHomeFields {
  background?: AgilityHomeFieldBackground;
  backgroundDesktop?: AgilityHomeFieldBackground;
  backgroundImage?: AgilityHomeImage;
  image?: AgilityHomeImage;
  backgroundColor?: string;
  layout?:
    | string
    | "center-left"
    | "top-left"
    | "center-top"
    | "top-right"
    | "center-right"
    | "bottom-right"
    | "center-bottom"
    | "bottom-left"
    | "center";
  heading: string;
  headingColor: string;
  headingScriptFontColor?: string;
  headingFontSize?: string;
  headingFont?: string;
  subheading?: string;
  subheadingColor?: string;
  subheadingFontSize?: string;
  sebheadingFont?: string;
  intro?: string;
  introColor?: string;
  introFont?: string;
  introFontSize?: string;
  quotation?: string;
  quotationColor?: string;
  citation?: string;
  citationColor?: string;
  features?: [AgilityHomeFieldFeature];
  linksSeparator: string;
  linksSeparatorColor: string;
  links: [
    {
      contentID: number;
      properties: {
        state: number;
        modified: string;
        versionID: number;
        referenceName: string;
        definitionName: string;
        itemOrder: number;
      };
      fields: {
        label: string;
        labelColor: string;
        url: string;
        target: string;
      };
      seo: null;
    }
  ];
  cta?: [AgiltiyHomeFieldsCta];
  cTA?: [AgiltiyHomeFieldsCta];
  ctas?: [AgiltiyHomeFieldsCta];
}
export interface AgilityHomeField {
  contentID: number;
  properties: AgilityHomeFieldProperties;
  fields: AgiltyHomeFields;
  seo: null;
}
export interface AgilityHomeFieldKey {
  fieldKey:
    | "heroGuest"
    | "heroLoggedInUsers"
    | "heroLtoPromoOverride"
    | "favoriteLocations"
    | "favoriteOrders"
    | "recentOrders"
    | "menu"
    | "menuFeatures"
    | "guest"
    | "loggedIn"
    | "contentFeatures"
    | "aboutUs"
    | "quotation";
}

export interface AgilityHomeFields {
  contentID?: number;
  properties?: {
    state?: number;
    modified?: string;
    versionID?: number;
    referenceName?: string;
    definitionName?: string;
    itemOrder?: number;
    fields: {
      heroGuest?: [AgilityHomeField];
      heroLoggedInUsers?: [AgilityHomeField];
      heroLtoPromoOverride?: [AgilityHomeField];
      favoriteLocations?: [AgilityHomeField];
      favoriteOrders?: [AgilityHomeField];
      recentOrders?: [AgilityHomeField];
      menu?: [AgilityHomeField];
      menuFeatures?: [AgilityHomeField];
      guest?: [AgilityHomeField];
      loggedIn?: [AgilityHomeField];
      contentFeatures?: [AgilityHomeField];
      aboutUs?: [AgilityHomeField];
      quotation?: [AgilityHomeField];
    };
  };
}
