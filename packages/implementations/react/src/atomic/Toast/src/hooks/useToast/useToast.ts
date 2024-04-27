import { useContext } from "react";

import { Context, ContextProps } from "../../context";

export const useToast: () => ContextProps = () => useContext(Context);
