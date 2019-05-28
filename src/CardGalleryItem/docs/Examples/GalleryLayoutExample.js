/* eslint-disable */
import React from 'react';

import CardGalleryItem from 'wix-style-react/CardGalleryItem';
import { Col, Container, Row } from 'wix-style-react/Grid';
import Badge from 'wix-style-react/Badge';
import Edit from 'wix-style-react/new-icons/Edit';
import Delete from 'wix-style-react/new-icons/Delete';
import Email from 'wix-style-react/new-icons/Email';
import styles from './ExampleBasic.scss';

const backgroundImageUrl =
  'https://static.wixstatic.com/media/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg/v1/fill/w_343,h_343,al_c,q_80,usm_0.66_1.00_0.01/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg';

render(
  <div>
    <Container>
      {[1, 2, 3].map(x => (
        <Row>
          {[1, 2, 3].map(y => (
            <Col span={4}>
              <CardGalleryItem
                badge={
                  <Badge size="medium" skin="standard" type="solid" uppercase>
                    sale
                  </Badge>
                }
                title={'Card title'}
                subtitle={'Card subtitle'}
                settingsMenu={<DropdownBase
                  showArrow
                  options={[
                    listItemActionBuilder({
                      id: 0,
                      title: 'Edit',
                      prefixIcon: <Icons.Edit />,
                      skin: 'dark',
                    }),
                    listItemActionBuilder({
                      id: 1,
                      title: 'Delete',
                      prefixIcon: <Icons.Delete />,
                      skin: 'destructive',
                    }),
                    listItemActionBuilder({
                      id: 2,
                      title: 'Send mail',
                      prefixIcon: <Icons.Email />,
                    }),
                    listItemActionBuilder({
                      id: 3,
                      title: 'Something',
                      disabled: true,
                    }),
                  ]}
                  onSelect={({id}) => console.log(`action id=${id}`)}
                >
                  {({ open, close }) => {
                    return (
                      <IconButton
                        skin="light"
                        priority="secondary"
                        onClick={e => {
                          open(e);
                          e.stopPropagation();
                        }}
                        onMouseLeave={close}
                      >
                        <Icons.More />
                      </IconButton>
                    );
                  }}
                </DropdownBase>}
                primaryActionProps={{
                  label: 'Button',
                  onClick: () => {
                    alert('Primary action clicked');
                  },
                }}
                secondaryActionProps={{
                  label: 'Text link',
                  onClick: () => {
                    alert('Secondary action clicked');
                  },
                }}
                backgroundImageUrl={backgroundImageUrl}
                data-hook="storybook-card-gallery-item"
              />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  </div>,
);
