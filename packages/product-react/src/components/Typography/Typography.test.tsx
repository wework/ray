import React from 'react';
import Enzyme from 'enzyme';

import { Typography } from './Typography';

const SAMPLE_TEXT = 'All their equipment and instruments are alive.';

describe('Typography', () => {
    test('should renders Typography with ray body class', () => {
        const wrapper = Enzyme.mount(<Typography>{SAMPLE_TEXT}</Typography>);
        expect(wrapper.find(Typography).length).toBe(1);
    });

    test('should renders Typography with added attributes', () => {
        const wrapper = Enzyme.mount(
            <Typography className="custom-class" data-stuff="hello" style="body">
                {SAMPLE_TEXT}
            </Typography>
        );

        expect(wrapper.html()).toBe(
            '<div class="custom-class ray-text--body" data-stuff="hello">All their equipment and instruments are alive.</div>'
        );
    });

    test('should renders Typography with a style', () => {
        const wrapper = Enzyme.mount(
            <Typography style="h3">{SAMPLE_TEXT}</Typography>
        );

        expect(wrapper.html()).toBe(
            '<div class="ray-text--h3">All their equipment and instruments are alive.</div>'
        );
    });

    test('should renders Typography with a custom tag', () => {
        const wrapper = Enzyme.mount(
            <Typography as="h1" style="display-1">
                {SAMPLE_TEXT}
            </Typography>
        );
        expect(wrapper.html()).toBe(
            '<h1 class="ray-text--display-1">All their equipment and instruments are alive.</h1>'
        );
    });
});