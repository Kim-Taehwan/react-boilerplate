export type RobopickRes = RobopickData[]

export interface RobopickData {
  id: number
  eventFeedProducts: RobopickFeedProduct[]
  eventFeedBrands: RobopickFeedBrand[]
  eventFeedSellers: unknown[]
  eventFeedCategories: unknown[]
  eventId: number
  profileType: string
  profileId: unknown
  profileName: string
  profileImage: string
  profileLink: string
  bannerLink: string
  productLink: string
  imageUrl: string
  imageUrlLow: string
  description: string
  isActivated: number
  order: number
  genderType: string
  createdDate: number
  modifiedDate: number
  humanTime: string
  products: RobopickProduct[]
}

export interface RobopickFeedProduct {
  id: number
  feedId: number
  goodsno: number
  order: number
}

export interface RobopickFeedBrand {
  id: number
  feedId: number
  brandId: number
}

export interface RobopickProduct {
  id: string
  englishBrandName: string
  brandName: string
  code: string
  title: string
  taxIncludedPrice: number
  finalPrice: number
  images: string[]
  preSalePrice: number
  benefit: number
  isActivated: boolean
  partnerId: number
  idx: number
  last: boolean
  activated: boolean
}
