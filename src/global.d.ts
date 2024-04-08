declare module "*module.scss"{
  interface Iclassname{
    [classname: string]: string
  }
  const classNames: Iclassname;
  export = classNames;
}

declare module '*.png';
declare module '*.jpeg';
declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
