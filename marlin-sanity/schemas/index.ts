import blog from './blog'
import blogPage from './blogPage'
import {blogPageTags} from './blogPageTags'
import {blogPostTagColors} from './blogPostTagColors'
import features from './features'
import forVendorsShowcase from './forVendorsShowcase'
import leadForm from './leadForm'
import {localeString} from './localeStringType'
import {localeText} from './localeTextType'
import mainShowcase from './main-showcase'
import mainPageBlogSection from './mainPageBlogSection'
import mainPageMiddleSections from './mainPageMiddleSections'
import mainPageOrdersSection from './mainPageOrdersSection'
import mainPageWorksSection from './mainPageWorksSection'
import pricingCards from './pricing-cards'
import pricingSections from './pricingSections'
import retailersFeatures from './retailersFeatures'
import retailersMiddleSections from './retailersMiddleSections'
import retailersShowcase from './retailersShowcase'
import vendorsFeatures from './vendorsFeatures'
import vendorsMiddleSections from './vendorsMiddleSections'

export const schemaTypes = [
  mainShowcase,
  features,
  mainPageMiddleSections,
  mainPageWorksSection,
  mainPageOrdersSection,
  mainPageBlogSection,

  blog,
  blogPage,
  blogPageTags,
  blogPostTagColors,

  forVendorsShowcase,
  vendorsFeatures,
  vendorsMiddleSections,

  retailersShowcase,
  retailersFeatures,
  retailersMiddleSections,

  pricingCards,
  pricingSections,

  localeString,
  localeText,

  leadForm,
]
