import { shallowMount} from '@vue/test-utils';
import home from '@/view/home.vue';
import search from '@/components/search.vue';
import filter from '@/components/filter.vue';
import sort from '@/components/sort.vue';
import table from '@/components/table.vue';

describe('home.vue', () => {
    it('renders the search component', () => {
      const wrapper = shallowMount(home);
     //Expects the search component to render on the home.vue component
      expect(wrapper.find(search).exists()).toBe(true);
    }),
    it('renders the filter component', () => {
      const wrapper = shallowMount(home);
     //Expects the filter component to render on the home.vue component
      expect(wrapper.find(filter).exists()).toBe(true);
    }),
    it('renders the sort component', () => {
      const wrapper = shallowMount(home);
     //Expects the sort component to render on the home.vue component
      expect(wrapper.find(sort).exists()).toBe(true);
    }),
    it('renders the table component', () => {
      const wrapper = shallowMount(home);
     //Expects the table component to render on the home.vue component
      expect(wrapper.find(table).exists()).toBe(true);
    })
  });



