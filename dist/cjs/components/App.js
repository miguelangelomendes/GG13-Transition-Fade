"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
function Dropdown(_a) {
    var children = _a.children, iconComponent = _a.iconComponent, _b = _a.containerClass, containerClass = _b === void 0 ? '' : _b, _c = _a.iconClass, iconClass = _c === void 0 ? '' : _c, _d = _a.className, className = _d === void 0 ? '' : _d;
    var _e = (0, react_1.useState)(false), isOpen = _e[0], setIsOpen = _e[1];
    var handleClick = function () {
        setIsOpen(!isOpen);
    };
    var handleClickOutside = function () {
        setIsOpen(false);
    };
    return (react_1["default"].createElement("div", { className: "relative ".concat(className) },
        react_1["default"].createElement("div", { className: "clickable relative z-[3] ".concat(iconClass), onClick: handleClick }, iconComponent),
        isOpen && (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("div", { className: 'fixed inset-0 z-[1]', onClick: handleClickOutside }),
            react_1["default"].createElement("div", { className: "absolute right-0 z-[3] mt-1 rounded-lg shadow-lg ".concat(containerClass) }, children)))));
}
exports["default"] = Dropdown;
//# sourceMappingURL=App.js.map