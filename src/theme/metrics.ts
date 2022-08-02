import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const scale = SCREEN_WIDTH / 420;

const normalize = (_size: number) => {
  const newSize = _size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

const metrics = {
  fontFamily: {
  },
  fontSize: {
    s12: normalize(12),
    s14: normalize(14),
    s16: normalize(16),
    s18: normalize(18),
    s20: normalize(20),
    s24: normalize(24),
    s28: normalize(28),
    s32: normalize(32),
    s36: normalize(36),
    s40: normalize(40),
  },
  spacing: {
    base: normalize(16),
  },
};

export default metrics;
