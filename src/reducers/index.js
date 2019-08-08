import Technology from './Technology'
import { combineReducers } from 'redux'
import ProductKnowladge from './ProductKnowladge'
import TechnologyCategory from './TechnologyCategory'
import TechnicalKnowladge from './TechnicalKnowladge'
import TechnicalProblemView from './TechnicalProblemView'
import ProductKnowladgeHistory from './ProductKnowladgeHistory'
import ProductKnowladgeCategory from './ProductKnowladgeCategory'
import TechnicalKnowladgeHistory from './TechnicalKnowladgeHistory'
import TechnicalKnowladgeCategory from './TechnicalKnowladgeCategory'

export default combineReducers({
  Technology,
  ProductKnowladge,
  TechnologyCategory,
  TechnicalKnowladge,
  TechnicalProblemView,
  ProductKnowladgeHistory,
  ProductKnowladgeCategory,
  TechnicalKnowladgeHistory,
  TechnicalKnowladgeCategory
})