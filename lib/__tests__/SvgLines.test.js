'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _enzyme = require('enzyme');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('SvgLines', function () {
  var wrapper = void 0;

  it('renders as expected', function () {
    wrapper = (0, _enzyme.shallow)(React.createElement(
      _index2.default,
      null,
      React.createElement('svg', null)
    ));

    expect(wrapper.type()).toBe('span');
    expect(wrapper.prop('className')).toContain('mt-init');
    expect(wrapper.find('style')).toHaveLength(1);
    expect(wrapper.find('svg')).toHaveLength(1);
  });
});