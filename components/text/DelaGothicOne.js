import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import * as Font from "expo-font";
import { DGO_Reg } from "../../assets/fonts";

export const DGORegularText = (props) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      DGOReg: DGO_Reg,
      DGOReg: {
        uri: DGO_Reg,
        display: Font.FontDisplay.FALLBACK,
      },
    }).then(() => {
      setLoaded(true);
    });
  }, []);

  return (
    <Text style={{ ...props?.style, fontFamily: loaded ? "DGOReg" : null }}>
      {props.children}
    </Text>
  );
};
