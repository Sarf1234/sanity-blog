import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {menuType} from './menutype'
import { blogBanner } from './blogBannerType'

export const schema = {
  types: [blockContentType, categoryType, postType, authorType, menuType, blogBanner],
}
