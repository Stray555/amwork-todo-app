declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const svg: string;
    export default svg;
}