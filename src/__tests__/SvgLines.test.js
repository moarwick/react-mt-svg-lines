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


    console.log(wrapper.debug(), wrapper.prop('children'));
    // expect(wrapper.type()).toBe('button');
    // expect(wrapper.prop('disabled')).toBe(undefined);
    // expect(wrapper.getElement()).toMatchSnapshot(); // snapshot!
  });
});
