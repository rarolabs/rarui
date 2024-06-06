import { Dispatch, SetStateAction } from "react";

export interface ManagerProps {
  selected: string;
  onSelect: Dispatch<SetStateAction<string>>;
}
