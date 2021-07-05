import React, { useEffect, useState } from "react";
import { Dimensions, Animated } from "react-native";
import { Box, useToast, Pressable,Text } from "native-base";
import axios from "axios";
import { URL_BASE } from "../assets/utils";
import { useDispatch, useSelector } from "react-redux";
import { SceneMap, TabView } from "react-native-tab-view";
import MyDataPersonalTab from "../components/ScreensComponents/MyData/MyDataPersonalTab";
import MyDataDireccionTab from "../components/ScreensComponents/MyData/MyDataDireccionTab";
import MyDataCuentaTab from "../components/ScreensComponents/MyData/MyDataCuentaTab";
import Loading1 from "../components/Loadings/Loading1";

const initialLayout = { width: Dimensions.get("window").width };

function MyDataScreen() {
  const toast = useToast();
  //@ts-ignore
  const userData = useSelector((state) => state.auth.userData);
  //@ts-ignore
  const isLoading = useSelector((state) => state.profile.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    const req = {
      EmpresaId: userData.EmpresaId,
      ClienteNro: userData.ClienteNro,
    };

    dispatch({ type: "SET_IS_LOADING", payload: true });

    try {
      const res = await axios.post(`${URL_BASE}wsGetHogarDatos`, req,{cancelToken:source.token});

      if (res.data.ErrCod == 2000) {
        dispatch({
          type: "SET_USERFULL_DATA",
          payload: res.data.SDTDatosHogar,
        });
        dispatch({ type: "SET_IS_LOADING", payload: false });
      } else {
      }
      console.log("res: ", res.data);
    } catch (error) {
      toast.show({
        title: "Error",
        status: "error",
        description: `Error wsGetHogarDatos - ${error}`,
        duration: 7000,
        placement: "top",
        marginTop: 20,
      });
    }

    return ()=>{
      console.log('clean up data')
      source.cancel("axios request cancelled");
    }
  };

  /* -------------- TABS -------------- */
  const renderScene = ({ route }: any) => {
    switch (route.key) {
      case "Personales":
        return <MyDataPersonalTab visible={index == 0 ? true : false} />;
      case "Direccion":
        return <MyDataDireccionTab visible={index == 1 ? true : false} />;
      case "Cuenta":
        return <MyDataCuentaTab visible={index == 2 ? true : false} />;
      default:
        return null;
    }
  };

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "Personales", title: "Personales" },
    { key: "Direccion", title: "Dirección" },
    { key: "Cuenta", title: "Cuenta" },
  ]);

  const renderTabBar = (props: any) => {
    const inputRange = props.navigationState.routes.map((x: any, i: any) => i);
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route: any, i: any) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex: any) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <Box
              flex={1}
              alignItems="center"
              p={2}
              key={i}
              borderBottomWidth={index == i ? 1 : 0}
              borderColor="blue"
            >
              <Pressable
                onPress={() => {
                  setIndex(i);
                }}
              >
                <Animated.Text style={[{ opacity }]}>
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <>
      {!isLoading ? (
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
      ) : <Loading1 />}
    </>
  );
}

export default MyDataScreen;
