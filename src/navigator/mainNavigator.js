import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList102361Navigator from '../features/ArticleList102361/navigator';
import ArticleList102360Navigator from '../features/ArticleList102360/navigator';
import ArticleList102359Navigator from '../features/ArticleList102359/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList102361: { screen: ArticleList102361Navigator },
ArticleList102360: { screen: ArticleList102360Navigator },
ArticleList102359: { screen: ArticleList102359Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
