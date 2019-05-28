/* eslint-disable */
import React from 'react';

import CardGalleryItem from 'wix-style-react/CardGalleryItem';
import TextButton from 'wix-style-react/TextButton';
import DropdownBase from 'wix-style-react/DropdownBase';
import {Col, Container, Row} from 'wix-style-react/Grid';
import Edit from 'wix-style-react/new-icons/Edit';
import ChevronDown from 'wix-style-react/new-icons/ChevronDown';
import Delete from 'wix-style-react/new-icons/Delete';
import {listItemActionBuilder} from 'wix-style-react/ListItemAction';

const backgroundImageUrl =
  'https://static.wixstatic.com/media/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg/v1/fill/w_343,h_343,al_c,q_80,usm_0.66_1.00_0.01/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg';

render(
  <div>
    <Container>
      <Row>
        <Col span={6}>
          <CardGalleryItem
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
                  <TextButton
                    skin="light"
                    suffixIcon={<Icons.ChevronDown />}
                    onClick={e => {
                      open(e);
                      e.stopPropagation();
                    }}
                    onMouseLeave={close}
                  >
                    Actions
                  </TextButton>
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
      </Row>
    </Container>
  </div>,
);
