import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header'

describe('Header.vue', () => { //describe test cases
    test('should header component exist', () => { //test case 1
        const wrapper = shallowMount(Header) //Header component should mount
        expect(wrapper.exists()).toBeTruthy() //expect wrapper returns true
    })
    test('should button exist', () => { //test case 2
        const wrapper =  shallowMount(Header) //mounts the component
        let button = wrapper.find('button') //wrapper finds the button
        expect(button.exists()).toBeTruthy() //expect, render the button correctly
        //if button exist, its return true. with tobetruthy function test checked.
    })
    test('should render button title text', () => {
        const wrapper = shallowMount(Header)
        let button = wrapper.find('button')
        expect(button.text()).toEqual('Favorites')
    })



})