// import "raf/polyfill"; // may need this when dealing with requestAnimationFrame
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// configure Enzyme adapter for React
Enzyme.configure({ adapter: new Adapter() });