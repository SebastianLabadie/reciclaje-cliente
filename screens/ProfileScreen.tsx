import * as React from "react";
import Colors from "../constants/Colors";
import { StoryBook } from "../components/Cards/Storybook";
import ProfileHeader from "../components/ScreensComponents/Profile/ProfileHeader";
import {Box } from 'native-base'
import CalendarIcon from "../components/CustomIcons/CalendarIcon";
import StatisticsIcon from "../components/CustomIcons/StatisticsIcon";
import ConfigIcon from "../components/CustomIcons/ConfigIcon";
import HandCashIcon from "../components/CustomIcons/HandCashIcon";
export default function ProfileScreen() {
  return (
    <Box flex={1} p={3} alignItems="center" backgroundColor={Colors.light.background} >
      <ProfileHeader />
      <Box w="100% " flexDirection="row" flexWrap="wrap" justifyContent="space-between">
        <StoryBook navigateTo={"MyData"}  tag="Gestión" description="Últimas Recolecciones" icon={<CalendarIcon fillColor={Colors.pastelBlue} />} bgColor={Colors.pastelBlue} />
        <StoryBook navigateTo={"MyData"}  tag="Estadísticas" description="Mis Clasificaciones" icon={<StatisticsIcon fillColor={Colors.pastelPiel} />}  bgColor={Colors.pastelPiel} />
        <StoryBook navigateTo={"MyData"}  tag="Configuración" description="Mis Datos" icon={<ConfigIcon fillColor={Colors.pastelBlue} />} bgColor={Colors.pastelBlue} />
        <StoryBook navigateTo={"MyData"}  tag="Gestión" description="Mi Dinero" icon={<HandCashIcon fillColor={Colors.pastelPiel} />}  bgColor={Colors.pastelPiel} />
      </Box>
      
    </Box>
  );
}