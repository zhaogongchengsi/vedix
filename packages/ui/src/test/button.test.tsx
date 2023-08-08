import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../components/Button.vue'

describe('Button', () => {
  it('create', () => {
	const text = 'Button text'
	const wrapper = mount(() => <Button variant="destructive"  >{text}</Button>)
    expect(wrapper.text()).toContain(text)
  })
})