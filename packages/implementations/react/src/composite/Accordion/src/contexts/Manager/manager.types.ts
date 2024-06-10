import { Dispatch, SetStateAction } from "react";

export interface AccordionManagerProps {
  selected: string;
  onSelect: Dispatch<SetStateAction<string>>;
}
