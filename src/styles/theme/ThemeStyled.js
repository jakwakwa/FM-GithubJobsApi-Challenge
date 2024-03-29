export const themeColors = {
  primary: {
    violet: "#5964E0",
    lightViolet: "#939BF4",
    veryDarkBlue: "#19202D",
    midnight: "#121721",
  },
  secondary: {
    white: "#ffffff",
    lightGrey: "#F4F6F8",
    gray: "#9DAEC2",
    darkGrey: "#6E8098",
    darkStroke: "#2A3342",
    lightStroke: "#E2E6EA",
    secondaryButton: "#EEEFFC",
    secondaryButtonHover: "#C5C9F4",
    darkButton: "#303642",
    darkButtonHover: "#303642",
    checkBoxBgLight: "#E7E8E9",
    checkBoxBgDark: "#303642",
    checkBoxHover: "#D5D8F7",
  },
};

export const lightTheme = {
  body: themeColors.secondary.lightGrey,
  text: themeColors.secondary.darkGrey,
  textHeadings: themeColors.primary.veryDarkBlue,
  toggleBorder: themeColors.secondary.white,
  jobcards: themeColors.secondary.white,
  jobcardTitle: themeColors.primary.veryDarkBlue,
  jobText: themeColors.secondary.darkGrey,
  background: themeColors.secondary.lightGrey,
  bullets: themeColors.primary.violet,
  stroke: themeColors.secondary.lightStroke,
  gradient: "linear-gradient(#39598A, #79D7ED)",
  checkBoxBg: themeColors.secondary.checkBoxBgLight,
  jobLogoBorder: themeColors.secondary.checkBoxBgLight,
  jobLogoBg: themeColors.primary.veryDarkBlue,
  buttonText: themeColors.secondary.white,
};
export const darkTheme = {
  body: themeColors.primary.midnight,
  text: themeColors.secondary.gray,
  textHeadings: themeColors.secondary.white,
  jobcards: themeColors.primary.veryDarkBlue,
  jobcardTitle: themeColors.secondary.white,
  jobText: themeColors.secondary.darkGrey,
  toggleBorder: themeColors.secondary.darkGrey,
  background: themeColors.primary.midnight,
  bullets: themeColors.primary.violet,
  stroke: themeColors.secondary.darkStroke,
  gradient: "linear-gradient(#091236, #1E215D)",
  checkBoxBg: themeColors.secondary.checkBoxBgDark,
  jobLogoBorder: themeColors.primary.violet,
  jobLogoBg: themeColors.primary.veryDarkBlue,
  buttonText: themeColors.secondary.white,
};
