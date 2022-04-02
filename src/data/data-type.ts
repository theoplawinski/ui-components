// -------------------------------------------------------- GLOBAL DATA

export interface IGlobalData {
  content: IContentData
}

// -------------------------------------------------------- CONTENT DATA
export interface IContentData {
  header: {
    title: string
  }
  listSection: {
    title: string
  }
  bannerSection: {
    title: string
    subtitle: string
    externalLink: ILinkData
  }
  footer: {
    text: string
    externalLink: ILinkData
  }
}

export interface ILinkData {
  name: string
  to: string
}