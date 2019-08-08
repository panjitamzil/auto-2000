import React from 'react'
import store from './config/store'
import Help from './containers/Help'
import { Provider } from 'react-redux'
import HomeScreen from './containers/Home'
import Diagnose from './containers/Diagnose'
import ModalCar from './containers/ModalCar'
import Technology from './containers/Technology'
import AddDiagnose from './containers/AddDiagnose'
import AddModalCar from './containers/AddModalCar'
import AddTechnology from './containers/AddTechnology'
import ProductKnowledge from './containers/ProductKnowladge'
import TechnicalKnowledge from './containers/TechnicalKnowledge'
import AddProductKnowledge from './containers/AddProductKnowledge'
import TechnicalProblemView from './containers/TechnicalProblemView'
import AddTechnicalKnowledge from './containers/AddTechnicalKnowledge'
import ProductKnowladgeHistory from './containers/ProductKnowladgeHistory'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import TechnicalKnowledgeHistory from './containers/TechnicalKnowledgeHistory'
import TechnicalKnowledgeCategory from './containers/TechnicalKnowledgeCategory'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    ProductKnowledge: {
      screen: ProductKnowledge
    },
    AddProductKnowladge: {
      screen: AddProductKnowledge
    },
    TechnicalKnowledge: {
      screen: TechnicalKnowledge
    },
    TechnicalKnowledgeCategory: {
      screen: TechnicalKnowledgeCategory
    },
    TechnicalKnowledgeHistory: {
      screen: TechnicalKnowledgeHistory
    },
    AddTechnicalKnowledge: {
      screen: AddTechnicalKnowledge
    },
    TechnicalProblemView: {
      screen: TechnicalProblemView
    },
    ProductKnowladgeHistory: {
      screen: ProductKnowladgeHistory
    },
    Technology: {
      screen: Technology
    },
    AddTechnology: {
      screen: AddTechnology
    },
    ModalCar: {
      screen: ModalCar
    },
    AddModalCar: {
      screen: AddModalCar
    },
    Help: {
      screen: Help
    },
    Diagnose: {
      screen: Diagnose
    },
    AddDiagnose: {
      screen: AddDiagnose
    }
  },
  {
    initialRouteName: "Home"
  }
);

const RNavigation = createAppContainer(AppNavigator)
export default () => (
  <Provider store={store}>
    <RNavigation />
  </Provider>
)