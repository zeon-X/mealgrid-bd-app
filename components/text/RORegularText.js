import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import * as Font from "expo-font";
import { RO_Reg } from "../../assets/fonts";

export const RORegularText = (props) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      ROReg: RO_Reg,
      ROReg: {
        uri: RO_Reg,
        display: Font.FontDisplay.FALLBACK,
      },
    }).then(() => {
      setLoaded(true);
    });
  }, []);

  return (
    <Text style={{ ...props?.style, fontFamily: loaded ? "ROReg" : null }}>
      {props.children}
    </Text>
  );
};
