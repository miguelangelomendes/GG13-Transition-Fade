import React, { useState } from 'react';
export default function Dropdown(_a) {
    var children = _a.children, iconComponent = _a.iconComponent, _b = _a.containerClass, containerClass = _b === void 0 ? '' : _b, _c = _a.iconClass, iconClass = _c === void 0 ? '' : _c, _d = _a.className, className = _d === void 0 ? '' : _d;
    var _e = useState(false), isOpen = _e[0], setIsOpen = _e[1];
    var handleClick = function () {
        setIsOpen(!isOpen);
    };
    var handleClickOutside = function () {
        setIsOpen(false);
    };
    return (React.createElement("div", { className: "relative ".concat(className) },
        React.createElement("div", { className: "clickable relative z-[3] ".concat(iconClass), onClick: handleClick }, iconComponent),
        isOpen && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'fixed inset-0 z-[1]', onClick: handleClickOutside }),
            React.createElement("div", { className: "absolute right-0 z-[3] mt-1 rounded-lg shadow-lg ".concat(containerClass) }, children)))));
}
//# sourceMappingURL=App.js.map