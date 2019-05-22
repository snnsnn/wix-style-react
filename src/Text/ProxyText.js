import React from 'react';
import { bool } from 'prop-types';
import OriginalText from './Text';
import { withEllipsedTooltip } from 'wix-ui-core/dist/src/hocs/EllipsedTooltip';
import tooltip from '../Tooltip/TooltipNext/Tooltip.st.css';

const EllipsedText = withEllipsedTooltip({
  showTooltip: true,
  tooltipProps: { className: tooltip.root },
})(OriginalText);

const Text = ({ ellipsis, ...props }) =>
  ellipsis ? <EllipsedText {...props} /> : <OriginalText {...props} />;

Text.propTypes = {
  ...OriginalText.propTypes,
  /** should the text get ellipsed with tooltip, or should it get broken into lines when it reaches the end of its container */
  ellipsis: bool,
};

Text.displayName = 'Text';

export default Text;
