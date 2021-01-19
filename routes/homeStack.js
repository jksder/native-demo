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
  Ducks: {
    screen: Ducks,
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
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
