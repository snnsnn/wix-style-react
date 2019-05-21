import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Hover from './Hover';
import Card from '../Card';
import Button from '../Button';
import TextButton from '../TextButton';
import Text from '../Text';
import Heading from '../Heading';
import Proportion from '../Proportion';
import DataHooks from './CardGalletyItemDataHooks';

import styles from './CardGalleryItem.scss';
import animationStyles from './CardGalleryItemAnimation.scss';

class CardGalleryItem extends React.Component {
  static displayName = 'CardGalleryItem';
  static propTypes = {
    /** Card badge */
    badge: PropTypes.node,

    /** Card title */
    title: PropTypes.node,

    /** Card subtitle */
    subtitle: PropTypes.node,

    /** Background image of CardGalleryItem */
    backgroundImageUrl: PropTypes.string,

    /** Properties for primary action button */
    primaryActionProps: PropTypes.shape({
      /** Label of primary action button */
      label: PropTypes.node,
      /** On click handler of primary action button and of the whole card */
      onClick: PropTypes.func,
    }).isRequired,

    /** Properties for secondary action text button */
    secondaryActionProps: PropTypes.shape({
      /** Label of secondary action text button */
      label: PropTypes.node,
      /** On click handler of secondary action text button */
      onClick: PropTypes.func,
    }).isRequired,

    /** className for root */
    className: PropTypes.string,

    /** data-hook value */
    dataHook: PropTypes.string,
  };

  static defaultProps = {
    primaryActionProps: {
      onClick: () => {},
    },
    secondaryActionProps: {
      onClick: () => {},
    },
  };

  _renderBadge(badge) {
    return (
      <div className={styles.badgeWrapper} data-hook={DataHooks.badge}>
        {badge}
      </div>
    );
  }

  render() {
    const {
      title,
      subtitle,
      badge,
      backgroundImageUrl,
      primaryActionProps,
      secondaryActionProps,
      className,
      dataHook,
    } = this.props;

    const footerExists = title || subtitle;

    const hoveredContent = (
      <div
        className={classNames(styles.hoveredContent, {
          [styles.hoveredContentWithFooter]: footerExists,
        })}
        data-hook={DataHooks.hoverContent}
      >
        <div className={styles.primaryAction}>
          <Button dataHook={DataHooks.primaryAction}>
            {primaryActionProps.label}
          </Button>

          <div className={styles.secondaryAction}>
            <TextButton
              skin="light"
              onClick={event => {
                secondaryActionProps.onClick(event);
                event.stopPropagation();
              }}
              dataHook={DataHooks.secondaryAction}
            >
              {secondaryActionProps.label}
            </TextButton>
          </div>
        </div>
        {badge && this._renderBadge(badge)}
      </div>
    );

    return (
      <Proportion>
        <div
          className={classNames(styles.root, className)}
          onClick={primaryActionProps.onClick}
          data-hook={dataHook}
        >
          <Card stretchVertically>
            <Hover
              classNames={animationStyles}
              timeout={200}
              hoveredContent={hoveredContent}
              dataHook={DataHooks.hoverComponent}
            >
              <div
                className={classNames(styles.content, {
                  [styles.contentWithFooter]: footerExists,
                })}
                style={{
                  backgroundImage: `url(${backgroundImageUrl})`,
                }}
                data-hook={DataHooks.backgroundImage}
              >
                {badge && this._renderBadge(badge)}
              </div>

              {footerExists && (
                <div>
                  <Card.Divider />
                  <div className={styles.footer}>
                    <Heading
                      appearance="H4"
                      ellipsis
                      data-hook={DataHooks.title}
                    >
                      {title}
                    </Heading>
                    <Text
                      size="small"
                      weight="thin"
                      secondary
                      ellipsis
                      data-hook={DataHooks.subtitle}
                    >
                      {subtitle}
                    </Text>
                  </div>
                </div>
              )}
            </Hover>
          </Card>
        </div>
      </Proportion>
    );
  }
}

export default CardGalleryItem;
