import { useWindowDimensions } from 'react-native';

// Design baseline: iPhone 14 (390x844 logical pixels)
// Fire HD 10 (2021) reports ~600x960 dp in portrait
// Scale factor stretches our base design to fill the larger tablet screen

const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;

// Minimum and maximum scale guards to prevent extreme distortion
// on very small or very large screens
const MIN_SCALE = 0.75;
const MAX_SCALE = 1.9;

export function useResponsiveScale() {
  const { width, height } = useWindowDimensions();

  const rawScaleX = width / BASE_WIDTH;
  const rawScaleY = height / BASE_HEIGHT;

  const scaleX = Math.min(Math.max(rawScaleX, MIN_SCALE), MAX_SCALE);
  const scaleY = Math.min(Math.max(rawScaleY, MIN_SCALE), MAX_SCALE);

  // scale() — use for horizontal sizes: widths, padding, font sizes
  const scale = (size: number): number => Math.round(size * scaleX);

  // verticalScale() — use for heights and vertical spacing
  const verticalScale = (size: number): number => Math.round(size * scaleY);

  // moderateScale() — use for font sizes and things that shouldn't
  // grow as aggressively as full layout dimensions.
  // factor 0.5 means: grow halfway between base and full scale.
  const moderateScale = (size: number, factor = 0.5): number =>
    Math.round(size + (scale(size) - size) * factor);

  return {
    scale,
    verticalScale,
    moderateScale,
    screenWidth: width,
    screenHeight: height,
    // True when the logical width is tablet-sized (Fire HD 10 = ~600dp wide)
    isTablet: width >= 600,
    scaleX,
    scaleY,
  };
}
