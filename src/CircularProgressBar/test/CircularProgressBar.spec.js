import React from 'react';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { circularProgressBarDriverFactory } from '../CircularProgressBar.driver';
import CircularProgressBar from '../CircularProgressBar';
import { Size } from '../constants';

describe('CircularProgressBar', () => {
  const createDriver = createDriverFactory(circularProgressBarDriverFactory);
  const defaultProps = {
    value: 40,
  };

  describe('on error', () => {
    const errorProps = {
      error: true,
      errorMessage: 'No soup for you',
      showProgressIndication: true,
    };

    it('should display tooltip text', async () => {
      const driver = createDriver(
        <CircularProgressBar {...defaultProps} {...errorProps} />,
      );
      expect(driver.isTooltipShown()).toBe(false);
      await driver.getTooltip().mouseEnter();
      expect(driver.isTooltipShown()).toBe(true);
    });

    it('should display error message', async () => {
      const driver = createDriver(
        <CircularProgressBar {...defaultProps} {...errorProps} />,
      );
      const toolTipErrorMsg = await driver.getTooltipErrorMessage();
      expect(toolTipErrorMsg).toEqual(errorProps.errorMessage);
    });

    it('should display error icon', () => {
      const driver = createDriver(
        <CircularProgressBar {...defaultProps} {...errorProps} />,
      );
      expect(driver.isErrorIconShown()).toBe(true);
    });
  });

  describe('on completion', () => {
    const successProps = {
      value: 100,
      showProgressIndication: true,
    };

    it('should display success icon', () => {
      const driver = createDriver(<CircularProgressBar {...successProps} />);
      expect(driver.isSuccessIconShown()).toBe(true);
    });
  });

  describe('size prop', () => {
    Object.keys(Size).forEach(size => {
      it(`should be ${size}`, () => {
        const driver = createDriver(
          <CircularProgressBar {...defaultProps} size={size} />,
        );
        expect(driver.getSize()).toBe(size);
      });
    });

    it(`should be default ${Size.medium}`, () => {
      const driver = createDriver(<CircularProgressBar {...defaultProps} />);
      expect(driver.getSize()).toBe(Size.medium);
    });
  });

  it(`should not throw an error when component isn't rendered`, () => {
    const driverFactoryWrapper = { createDriver };
    const isComponentRendered = false;

    jest.spyOn(driverFactoryWrapper, 'createDriver');
    driverFactoryWrapper.createDriver(
      <div>{isComponentRendered && <CircularProgressBar />}</div>,
    );

    expect(driverFactoryWrapper.createDriver).not.toThrow();
  });
});
