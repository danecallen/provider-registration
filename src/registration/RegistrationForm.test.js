// Link.react.test.js
import React from 'react';
import RegistrationForm from './RegistrationForm';
import renderer from 'react-test-renderer';

test('Should render', () => {
    const component = renderer.create(
        <RegistrationForm></RegistrationForm>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});