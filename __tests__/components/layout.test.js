import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Layout, { BodyContainer, BodyContainerWithCss } from '../../pages/components/layout';

describe( '<Layout/>', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<Layout />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  })
})
