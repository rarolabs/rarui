import { useContext } from "react";

import { Context, ContextProps } from "../../context";

export const useStepper: () => ContextProps = () => useContext(Context);
