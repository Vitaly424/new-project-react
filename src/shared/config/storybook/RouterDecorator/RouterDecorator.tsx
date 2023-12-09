import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (StoryComonent: Story) => (
    <BrowserRouter>
        <StoryComonent />
    </BrowserRouter>
);
