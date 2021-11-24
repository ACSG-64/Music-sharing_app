import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import SongItem from '@/components/SongItem.vue';

describe('Snapshots SongItem.vue', () => {
  test('Renders correctly', () => {
    const song = {
      docID: 'testId',
      modified_name: 'test',
      display_name: 'test',
      comment_count: 5,
    };

    const wrapper = shallowMount(SongItem, {
      propsData: {
        song,
      },
      global: {
        components: {
          'router-link': RouterLinkStub,
        },
        mocks: {
          $tc: () => '',
        },
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
