import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Ducks from "../screens/Ducks";
import Turtles from "../screens/Turtles";
import Flamingoes from "../screens/Flamingoes";
import Flowers from "../screens/Flowers";

const screens = {
  Home: {
    screen: Home,
  },
  Turtles: {
    screen: Turtles,
  },
  Flamingoes: {
    screen: Flamingoes,
  },
  Flowers: {
    screen: Flowers,
  },
  Ducks: {
    screen: Ducks,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
