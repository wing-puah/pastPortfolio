import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Navbar from '../navbar';

describe( '<Navbar/>', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<Navbar />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  })
})
