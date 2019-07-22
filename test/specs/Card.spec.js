import { shallowMount } from '@vue/test-utils';
import Card from '../../src/components/Card.vue';

describe('A Loading.vue', () => {
  it('renders when passed', () => {
    const title = 'testTitle';
    const value = 'testValue';

    const wrapper = shallowMount(Card, {
      propsData: { title, value }
    });

    expect(wrapper.props().title).toBe('testTitle');
    expect(wrapper.props().value).toBe('testValue');
  });
});
