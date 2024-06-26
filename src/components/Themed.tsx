/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView } from 'react-native';

import Colors from '@constants/Colors';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

//커스텀 색상
const colorParette = [
  "#9BC34A",
  "#FFF9C4",
];
export function useMBColor(colornum: number)  {
  if(colornum >= colorParette.length) return colorParette[0];
  return colorParette[colornum];
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = lightColor;

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = lightColor;

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
