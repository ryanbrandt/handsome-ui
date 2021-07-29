import * as React from "react";

import { combineClassNames } from "../../utils/helpers";

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

  const { className, style } = props;

  return (
    <div className={combineClassNames("badge_badge", className)} style={style}>
      {_renderContent()}
    </div>
  );
};

export default Badge;
