import Stream from './Stream';
import { shallow } from 'enzyme';

describe('Stream Component Tests' , () => {
  const props = {
    tracks: [{ title: 'Can\'t Tell Me Nothin' }, { title: 'Ultralight Beam' }],
  };

  it('should return track names', () => {
    const element = shallow(<Stream { ...props } />);
    expect(element.find('.track')).to.have.length(2);
  });
});
