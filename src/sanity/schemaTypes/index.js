import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {menuType} from './menutype'
import { blogBanner } from './blogBannerType'
import { quoteSlider } from './quoteSlider'

export const schema = {
  types: [blockContentType, categoryType, postType, authorType, menuType, blogBanner, quoteSlider],
}
