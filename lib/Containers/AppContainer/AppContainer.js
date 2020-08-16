"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const AppContext_1 = __importDefault(require("./AppContext"));
const Header_1 = __importDefault(require("../../Layout/Header/Header"));
require("../../global.css");
const AppContainer = (props) => {
    const { headerMenu, mobileMenu, children, className, style, onMobileClick, } = props;
    const [isMobile, setIsMobile] = React.useState(false);
    React.useEffect(() => {
        _handleResize();
        window.addEventListener("resize", _handleResize);
        return () => window.removeEventListener("resize", _handleResize);
    }, []);
    const _handleResize = () => {
        if (window.innerWidth < 1024) {
            setIsMobile(true);
        }
        else {
            setIsMobile(false);
        }
    };
    return (React.createElement(AppContext_1.default.Provider, { value: isMobile },
        React.createElement(Header_1.default, { menu: headerMenu, mobileMenu: mobileMenu, onMobileClick: onMobileClick }),
        React.createElement("div", { className: className, style: style }, children)));
};
exports.default = AppContainer;
//# sourceMappingURL=AppContainer.js.map