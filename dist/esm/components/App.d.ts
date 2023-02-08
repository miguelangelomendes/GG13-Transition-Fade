import React from 'react';
interface Props {
    iconComponent: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    iconClass?: string;
    containerClass?: string;
}
export default function Dropdown({ children, iconComponent, containerClass, iconClass, className, }: Props): JSX.Element;
export {};
