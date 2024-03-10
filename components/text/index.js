import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import * as Font from "expo-font";
import {
  SS_Black,
  SS_Bold,
  SS_Extra,
  SS_Med,
  SS_Reg,
  SS_Semi,
} from "../../assets/fonts";

export const RegularText = (props) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      SofiaSansReg: SS_Reg,
      SofiaSansReg: {
        uri: SS_Reg,
        display: Font.FontDisplay.FALLBACK,
      },
    }).then(() => {
      setLoaded(true);
    });
  }, []);

  return (
    <Text
      style={{ ...props?.style, fontFamily: loaded ? "SofiaSansReg" : null }}
    >
      {props.children}
    </Text>
  );
};

export const MediumText = (props) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      SofiaSansMed: SS_Med,
      SofiaSansMed: {
        uri: SS_Med,
        display: Font.FontDisplay.FALLBACK,
      },
    }).then(() => {
      setLoaded(true);
    });
  }, []);

  return (
    <Text
      style={{ ...props?.style, fontFamily: loaded ? "SofiaSansMed" : null }}
    >
      {props.children}
    </Text>
  );
};

export const SemiBoldText = (props) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      SofiaSansSemi: SS_Semi,
      SofiaSansSemi: {
        uri: SS_Semi,
        display: Font.FontDisplay.FALLBACK,
      },
    }).then(() => {
      setLoaded(true);
    });
  }, []);

  return (
    <Text
      style={{ ...props?.style, fontFamily: loaded ? "SofiaSansSemi" : null }}
    >
      {props.children}
    </Text>
  );
};

export const BoldText = (props) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      SofiaSansBold: SS_Bold,
      SofiaSansBold: {
        uri: SS_Bold,
        display: Font.FontDisplay.FALLBACK,
      },
    }).then(() => {
      setLoaded(true);
    });
  }, []);

  return (
    <Text
      style={{ ...props?.style, fontFamily: loaded ? "SofiaSansBold" : null }}
    >
      {props.children}
    </Text>
  );
};

export const ExtraBoldText = (props) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      SofiaSansExtraBold: SS_Extra,
      SofiaSansExtraBold: {
        uri: SS_Extra,
        display: Font.FontDisplay.FALLBACK,
      },
    }).then(() => {
      setLoaded(true);
    });
  }, []);

  return (
    <Text
      style={{
        ...props?.style,
        fontFamily: loaded ? "SofiaSansExtraBold" : null,
      }}
    >
      {props.children}
    </Text>
  );
};

export const BlackText = (props) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      SofiaSansBlack: SS_Black,
      SofiaSansBlack: {
        uri: SS_Black,
        display: Font.FontDisplay.FALLBACK,
      },
    }).then(() => {
      setLoaded(true);
    });
  }, []);

  return (
    <Text
      style={{ ...props?.style, fontFamily: loaded ? "SofiaSansBlack" : null }}
    >
      {props.children}
    </Text>
  );
};
