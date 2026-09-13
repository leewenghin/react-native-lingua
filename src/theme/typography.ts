import { fontFamilies } from "./fonts";

export const typography = {
  h1: {
    role: "Page / Screen Title",
    fontFamily: fontFamilies.bold,
    fontSize: 32,
    lineHeight: 32 * 1.2,
    weightName: "Bold",
  },
  h2: {
    role: "Section Title",
    fontFamily: fontFamilies.semibold,
    fontSize: 24,
    lineHeight: 24 * 1.3,
    weightName: "SemiBold",
  },
  h3: {
    role: "Card / Module Title",
    fontFamily: fontFamilies.semibold,
    fontSize: 20,
    lineHeight: 20 * 1.3,
    weightName: "SemiBold",
  },
  h4: {
    role: "Subheading",
    fontFamily: fontFamilies.medium,
    fontSize: 16,
    lineHeight: 16 * 1.4,
    weightName: "Medium",
  },
  bodyLarge: {
    role: "Important content",
    fontFamily: fontFamilies.regular,
    fontSize: 16,
    lineHeight: 16 * 1.6,
    weightName: "Regular",
  },
  bodyMedium: {
    role: "Body text",
    fontFamily: fontFamilies.regular,
    fontSize: 14,
    lineHeight: 14 * 1.6,
    weightName: "Regular",
  },
  bodySmall: {
    role: "Supporting text",
    fontFamily: fontFamilies.regular,
    fontSize: 13,
    lineHeight: 13 * 1.6,
    weightName: "Regular",
  },
  caption: {
    role: "Labels, meta text",
    fontFamily: fontFamilies.regular,
    fontSize: 11,
    lineHeight: 11 * 1.4,
    weightName: "Regular",
  },
} as const;

export type TypographyStyleName = keyof typeof typography;
