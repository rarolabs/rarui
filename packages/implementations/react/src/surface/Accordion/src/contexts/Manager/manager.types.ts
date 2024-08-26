import { Dispatch, SetStateAction } from "react";

export interface AccordionManagerProps {
  selected: string;
  disabled?: boolean;
  onSelect: Dispatch<SetStateAction<string>>;
}
