export interface MagazineRes {
  pagePostData: Magazine[]
  totalPages: number
  currentPage: number
  category: number
}

export interface Magazine {
  id: number
  title: string
  subTitle: string
  parentCategoryId: number
  parentCategoryName: string
  categoryId: number
  categoryName: string
  thumbnail: string
  createdDate: string // "Jan 11 2022"
}
