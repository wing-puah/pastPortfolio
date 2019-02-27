import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Layout from '../../components/layout';

describe('<Layout/>', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<Layout />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
