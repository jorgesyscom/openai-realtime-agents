import { AllAgentConfigsType } from "@/app/types";
import customerServiceRetail from "./customerServiceRetail";

import syscom from "./syscom";

export const allAgentSets: AllAgentConfigsType = {
  syscom,
  customerServiceRetail,

};

export const defaultAgentSetKey = "syscom";
