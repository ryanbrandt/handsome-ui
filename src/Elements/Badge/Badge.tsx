import * as React from "react";

import { AppContext } from "../../Containers/";

import "./index.css";

interface Props {
  /**
   * Content to be rendered within the badge, either a string or custom JSX
   */
  content: string | React.ReactElement;

  /**
   * Optional CSS classes to apply
   */
  className?: string;

  /**
   * Optional inline styles
   */
  style?: React.CSSProperties;
}

const Badge: React.FunctionComponent<Props> = (
  props: Props
): React.ReactElement => {
  const _renderContent = (): React.ReactNode => {
    const { content } = props;

    if (typeof content === "string") {
      return <div className="bagde_text_content">{content}</div>;
    }

    return content;
  };

  const _renderBadge = (isMobile: boolean): React.ReactNode => {
    const { className, style } = props;

    let baseClass = "badge_badge";
    if (isMobile) {
      // TODO
    }

    return (
      <div
        className={`${className ? `${className} ` : ""}${baseClass}`}
        style={style}
      >
        {_renderContent()}
      </div>
    );
  };

  return (
    <AppContext.Consumer>
      {(isMobile) => _renderBadge(isMobile)}
    </AppContext.Consumer>
  );
};

export default Badge;
