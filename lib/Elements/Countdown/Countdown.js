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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEST_ID = void 0;
const react_1 = __importStar(require("react"));
const helpers_1 = require("../../utils/helpers");
exports.TEST_ID = "countdown";
const Countdown = (props) => {
    const { initialCount } = props;
    const [count, setCount] = react_1.useState(initialCount);
    react_1.useEffect(() => {
        const { onCompletion, infinite } = props;
        const countdownInterval = setInterval(() => {
            if (count > 0) {
                setCount(count - 1);
            }
            else {
                if (infinite) {
                    setCount(initialCount);
                }
                if (onCompletion) {
                    onCompletion();
                }
            }
        }, 1000);
        return () => clearInterval(countdownInterval);
    }, [count]);
    const { className, style } = props;
    const composedClassName = helpers_1.combineClassNames("countdown-container", className);
    return (react_1.default.createElement("h1", { "data-testid": exports.TEST_ID, style: style, className: composedClassName }, count));
};
exports.default = Countdown;
//# sourceMappingURL=Countdown.js.map