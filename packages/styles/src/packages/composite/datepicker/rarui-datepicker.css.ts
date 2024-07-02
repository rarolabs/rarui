import { globalStyle, style } from "@vanilla-extract/css";

import { varsThemeBase } from "../../../themes";

/* -------------------------------------------------------------------------------------------------
 * Style
 * -----------------------------------------------------------------------------------------------*/

const datepicker = style({
  border: "none",
  fontFamily: varsThemeBase.fontFamily.body,
  color: varsThemeBase.colors.content.primary,
  backgroundColor: varsThemeBase.colors.surface.primary,
  boxShadow: varsThemeBase.elevation.bottom[1],
  borderRadius: varsThemeBase.shape.border.radius.xs,
  overflow: "hidden",
});

const weekday = style({
  textTransform: "capitalize",
  flex: 1,
  color: varsThemeBase.colors.content.secondary,
  fontSize: varsThemeBase.fontSize.body.xs,
  fontWeight: varsThemeBase.fontWeight.regular,
});

const day = style({
  width: "2.5rem",
});

const time = style({
  height: "auto !important",
  padding: "0 !important",
  margin: `0px ${varsThemeBase.spacing["4xs"]}`,
  marginBottom: varsThemeBase.spacing["4xs"],
  ":hover": {
    backgroundColor: `${varsThemeBase.colors.surface["brand-hover"]} !important`,
  },
});

globalStyle(`${datepicker} .react-datepicker__header`, {
  backgroundColor: "transparent",
  border: 0,
  padding: 0,
});

globalStyle(`${datepicker} .react-datepicker-time__header`, {
  backgroundColor: varsThemeBase.colors.surface.secondary,
  height: "64px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: varsThemeBase.colors.content.primary,
});

globalStyle(`${datepicker} .react-datepicker__time-container`, {
  borderLeftColor: varsThemeBase.colors.border.subdued,
});

globalStyle(
  `${datepicker} .react-datepicker__time-box, ${datepicker} .react-datepicker__time`,
  {
    borderBottomRightRadius: "0 !important",
    background: "transparent",
  },
);

globalStyle(`${datepicker} .react-datepicker__time-list`, {
  backgroundColor: varsThemeBase.colors.surface.primary,
  color: varsThemeBase.colors.content.primary,
});

globalStyle(`${datepicker} .react-datepicker__time-list::-webkit-scrollbar`, {
  width: ".375rem",
  background: "transparent",
});

globalStyle(
  `${datepicker} .react-datepicker__time-list::-webkit-scrollbar-thumb`,
  {
    borderRadius: varsThemeBase.shape.border.radius["2xs"],
    backgroundColor: varsThemeBase.colors.content.disabled,
  },
);

globalStyle(`${datepicker} .react-datepicker__day-names`, {
  display: "flex",
  boxSizing: "border-box",
  padding: varsThemeBase.spacing.xs,
  paddingTop: varsThemeBase.spacing["3xs"],
  paddingBottom: 0,
});

globalStyle(`${datepicker} .react-datepicker__year`, {
  maxWidth: "242px",
});

globalStyle(`${datepicker} .react-datepicker__year-wrapper`, {
  maxWidth: "100%",
  display: "block",
});

globalStyle(
  `
    ${datepicker} .react-datepicker__month,
    ${datepicker} .react-datepicker__children-container
  `,
  {
    width: "100%",
    margin: 0,
    padding: 0,
  },
);

globalStyle(`${datepicker} .react-datepicker__month`, {
  boxSizing: "border-box",
  padding: varsThemeBase.spacing.xs,
  paddingTop: varsThemeBase.spacing["3xs"],
});

globalStyle(`${datepicker} .react-datepicker__month`, {
  boxSizing: "border-box",
  padding: varsThemeBase.spacing.xs,
  paddingTop: varsThemeBase.spacing["3xs"],
});

globalStyle(
  `
    ${datepicker} .react-datepicker__day,
    ${datepicker} .react-datepicker__month-text,
    ${datepicker} .react-datepicker__year-text,
    ${datepicker} ${time}
  `,
  {
    borderStyle: "solid",
    borderColor: "transparent",
    lineHeight: "2.5rem",
    textTransform: "capitalize",
    borderRadius: varsThemeBase.shape.border.radius["2xs"],
    borderWidth: varsThemeBase.shape.border.width[1],
    color: varsThemeBase.colors.content.primary,
    fontSize: varsThemeBase.fontSize.button.s,
    fontWeight: varsThemeBase.fontWeight.medium,
  },
);

globalStyle(
  `
    ${datepicker} .react-datepicker__day:hover,
    ${datepicker} .react-datepicker__month-text:hover,
    ${datepicker} .react-datepicker__year-text:hover,
    ${datepicker} ${time}:hover
  `,
  {
    borderRadius: varsThemeBase.shape.border.radius["2xs"],
    borderColor: varsThemeBase.colors.border.brand,
    backgroundColor: varsThemeBase.colors.surface["brand-hover"],
  },
);

globalStyle(
  `
    ${datepicker} .react-datepicker__day:focus-within,
    ${datepicker} .react-datepicker__month-text:focus-within,
    ${datepicker} .react-datepicker__year-text:focus-within,
    ${datepicker} .react-datepicker__time-list-item:focus-within
  `,
  {
    outline: "none",
    boxShadow: varsThemeBase.utils["focus-ring"],
  },
);

globalStyle(
  `
    ${datepicker} .react-datepicker__day--today,
    ${datepicker} .react-datepicker__month-text--today,
    ${datepicker} .react-datepicker__year-text--today,
    ${datepicker} .react-datepicker__time-list--today
  `,
  {
    backgroundColor: varsThemeBase.colors.surface.primary,
    borderColor: varsThemeBase.colors.surface.brand,
    color: varsThemeBase.colors.content.brand,
  },
);

globalStyle(
  `
    ${datepicker} .react-datepicker__day--keyboard-selected,
    ${datepicker} .react-datepicker__month-text--keyboard-selected,
    ${datepicker} .react-datepicker__year-text--keyboard-selected

  `,
  {
    backgroundColor: "transparent",
  },
);

globalStyle(
  `
    ${datepicker} .react-datepicker__day--selected,
    ${datepicker} .react-datepicker__month-text--selected,
    ${datepicker} .react-datepicker__year-text--selected,
    ${datepicker} .react-datepicker__time-list-item--selected,
    ${datepicker} .react-datepicker__day--range-end
  `,
  {
    backgroundColor: `${varsThemeBase.colors.surface.brand} !important`,
    color: varsThemeBase.colors.content["on-brand"],
    fontWeight: varsThemeBase.fontWeight.medium,
    borderColor: varsThemeBase.colors.surface.brand,
  },
);

globalStyle(
  `
    ${datepicker} .react-datepicker__day--in-range,
    ${datepicker} .react-datepicker__day--in-selecting-range,
    ${datepicker} .react-datepicker__month-text--in-range,
    ${datepicker} .react-datepicker__month-text--in-selecting-range,
    ${datepicker} .react-datepicker__year-text--in-range,
    ${datepicker} .react-datepicker__year-text--in-selecting-range
  `,
  {
    backgroundColor: varsThemeBase.colors.surface["brand-hover"],
    borderRadius: varsThemeBase.shape.border.radius["2xs"],
  },
);

globalStyle(`${datepicker} .react-datepicker__day--outside-month`, {
  color: varsThemeBase.colors.content.disabled,
  fontWeight: varsThemeBase.fontWeight.regular,
});

globalStyle(`${datepicker} .react-datepicker__day--outside-month:hover`, {
  borderColor: "transparent",
  backgroundColor: "transparent",
});

export const datepickerStyles = {
  datepicker,
  day,
  weekday,
  time,
};
