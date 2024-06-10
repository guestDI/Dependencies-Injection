import { IConfig } from "../types";

const config: IConfig = (window as any).__CONFIG__;
delete (window as any).__CONFIG__;

export { config }