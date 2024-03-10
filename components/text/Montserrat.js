import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import * as Font from "expo-font";
import { M_Semi } from "../../assets/fonts";

export const MSemiText = (props) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      M_Semi: M_Semi,
      M_Semi: {
        uri: M_Semi,
        display: Font.FontDisplay.FALLBACK,
      },
    }).then(() => {
      setLoaded(true);
    });
  }, []);

  return (
    <Text style={{ ...props?.style, fontFamily: loaded ? "M_Semi" : null }}>
      {props.children}
    </Text>
  );
};
