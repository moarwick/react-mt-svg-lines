import * as React from 'react';
import { shallow } from 'enzyme';
import SvgLines from '../index';

describe('SvgLines', () => {
  let wrapper;

  it(`renders as expected`, () => {
    wrapper = shallow(
      <SvgLines>
        <svg />
      </SvgLines>
    );

    expect(wrapper.type()).toBe('span');
    expect(wrapper.prop('className')).toContain('mt-init');
    expect(wrapper.find('style')).toHaveLength(1);
    expect(wrapper.find('svg')).toHaveLength(1);
  });
});
