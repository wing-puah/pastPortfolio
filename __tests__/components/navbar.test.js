import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Navbar from '../../components/navbar';

describe('<Navbar/>', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<Navbar />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
