import { createGlobalThemeContract } from "@vanilla-extract/css";

export const vars = createGlobalThemeContract(
  {
    colors: {
      surface: {
        background: "",
        brand: "",
        "brand-hover": "",
        "brand-press": "",
        "brand-secondary": "",
        "brand-secondary-hover": "",
        "brand-secondary-press": "",
        "brand-secondary-subdued": "",
        "brand-subdued": "",
        disabled: "",
        error: "",
        "error-hover": "",
        "error-press": "",
        "error-subdued": "",
        hover: "",
        info: "",
        "info-hover": "",
        "info-press": "",
        "info-subdued": "",
        invert: "",
        "invert-disabled": "",
        "invert-hover": "",
        "invert-press": "",
        "invert-secondary": "",
        "on-brand-hover": "",
        "on-brand-press": "",
        "on-brand-secondary-hover": "",
        "on-brand-secondary-press": "",
        "on-error-hover": "",
        "on-error-press": "",
        "on-info-hover": "",
        "on-info-press": "",
        "on-success-hover": "",
        "on-success-press": "",
        "on-warning-hover": "",
        "on-warning-press": "",
        overlay: "",
        press: "",
        primary: "",
        secondary: "",
        success: "",
        "success-hover": "",
        "success-press": "",
        "success-subdued": "",
        warning: "",
        "warning-hover": "",
        "warning-press": "",
        "warning-subdued": "",
      },
      content: {
        brand: "",
        "brand-alt": "",
        "brand-secondary": "",
        disabled: "",
        error: "",
        info: "",
        invert: "",
        "invert-disabled": "",
        "invert-secondary": "",
        "on-brand": "",
        "on-brand-secondary": "",
        "on-error": "",
        "on-info": "",
        "on-success": "",
        "on-warning": "",
        primary: "",
        secondary: "",
        success: "",
        warning: "",
        "warning-alt": "",
      },
      border: {
        brand: "",
        "brand-alt": "",
        "brand-secondary": "",
        disabled: "",
        divider: "",
        error: "",
        info: "",
        invert: "",
        "invert-disabled": "",
        primary: "",
        secondary: "",
        subdued: "",
        success: "",
        warning: "",
      },
    },
    fontFamily: {
      inter: "",
    },
    fontSize: {
      hero: {
        caption: "",
      },
      body: {
        xxs: "",
        xs: "",
        s: "",
        m: "",
        l: "",
        xl: "",
      },
      heading: {
        xs: "",
        s: "",
        m: "",
        l: "",
        xl: "",
      },
      button: {
        s: "",
        m: "",
        l: "",
      },
      label: {
        s: "",
        m: "",
        l: "",
      },
    },
    fontWeight: {
      regular: "",
      medium: "",
      semiBold: "",
      bold: "",
    },
    lineWeight: {
      hero: {
        caption: "",
      },
      body: {
        xxs: "",
        xs: "",
        s: "",
        m: "",
        l: "",
        xl: "",
      },
      heading: {
        xs: "",
        s: "",
        m: "",
        l: "",
        xl: "",
      },
      button: {
        s: "",
        m: "",
        l: "",
      },
      label: {
        s: "",
        m: "",
        l: "",
      },
    },
    elevation: {
      none: "",
      top: {
        "1": "",
        "2": "",
        "3": "",
        "4": "",
        "5": "",
      },
      bottom: {
        "1": "",
        "2": "",
        "3": "",
        "4": "",
        "5": "",
      },
    },
    shape: {
      border: {
        radius: {
          none: "",
          "2xs": "",
          xs: "",
          sm: "",
          md: "",
          lg: "",
          xl: "",
          "2xl": "",
          pill: "",
          button: "",
          input: "",
        },
        width: {
          "1": "",
          "2": "",
          "3": "",
          "4": "",
          "5": "",
        },
      },
    },
    spacing: {
      "4xs": "",
      "3xs": "",
      "2xs": "",
      xs: "",
      s: "",
      md: "",
      lg: "",
      xl: "",
      "2xl": "",
      "3xl": "",
      "4xl": "",
      "5xl": "",
      "6xl": "",
      "7xl": "",
      "8xl": "",
    },
    zIndex: {
      100: "",
      200: "",
      300: "",
      400: "",
      500: "",
      600: "",
      700: "",
      800: "",
      900: "",
    },
    breakpoint: {
      xs: "",
      md: "",
      lg: "",
      xl: "",
    },
  },
  (_value, path) => `rarui-${path.join("-")}`,
);
