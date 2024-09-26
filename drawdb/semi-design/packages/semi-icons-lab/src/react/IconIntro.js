function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function IconIntro(props, svgRef) {
    return /*#__PURE__*/React.createElement("svg", _extends({
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        focusable: false,
        ref: svgRef
    }, props), /*#__PURE__*/React.createElement("path", {
        d: "M3.12591 8.09927C2.41427 8.66858 2 9.53052 2 10.4419V19C2 20.6569 3.34315 22 5 22H9V16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16V22H19C20.6569 22 22 20.6569 22 19V10.4419C22 9.53052 21.5857 8.66858 20.8741 8.09927L13.2494 1.99951C12.519 1.41516 11.481 1.41516 10.7506 1.99951L3.12591 8.09927Z",
        fill: "#DDE3E8"
    }), /*#__PURE__*/React.createElement("path", {
        d: "M9 15V22H15V15C15 13.3431 13.6569 12 12 12C10.3431 12 9 13.3431 9 15Z",
        fill: "#6A6F7F"
    }));
}

const ForwardRef = /*#__PURE__*/React.forwardRef(IconIntro);
export default ForwardRef;