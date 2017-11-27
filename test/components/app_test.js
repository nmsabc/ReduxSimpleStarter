import {renderComponent, expect} from '../test_helper'
import App from '../../src/components/app'

// use 'describe' to group together similar tests
describe('App', () => {
  // use 'it' to test a single atribute of the target
  it('show the correct text', () => {
    // here we create an instance of app
    const component = renderComponent(App)
    // use 'expect' to make an 'assertion' about target
    // expect(component).to.contain('React Simple Starter') ==> failed == OK
    expect(component).to.contain('React simple starter')
  })
})
