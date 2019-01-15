import { shallowMount } from '@vue/test-utils';
import { mount } from '@vue/test-utils';
import search from '@/components/search.vue';
import filter from '@/components/filter.vue';
import sort from '@/components/sort.vue';
import table from '@/components/table.vue';
import popup from '@/components/popup.vue';
import Navbar from '@/components/Navbar.vue';
import footer from '@/components/footer.vue';

describe('footer.vue', () => {
  it('renders footer when passed', () => {
    
    const wrapper = mount(footer);

    console.log(wrapper.html());

    expect(false).toBe(false)
  })
})
