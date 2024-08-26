import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const getLabelDate = (data: Date, formatDate: string) =>
  capitalizeFirstLetter(format(data, formatDate, { locale: ptBR }));

export const getYearsPickerRangeStart = (date: Date) => {
  const dateYear = date.getFullYear();
  const rangeStart = Math.floor(dateYear / 12) * 12 + 1;
  return [rangeStart, rangeStart + 11];
};

export const months = Array.from({ length: 12 }, (_, i) =>
  getLabelDate(new Date(2000, i, 1), "MMMM"),
);
