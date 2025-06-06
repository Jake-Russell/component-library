import { Meta, StoryObj } from '@storybook/react-webpack5';
import { ButtonProps } from '../types';
import Button from '../Button';

const mockButtonProps: ButtonProps = {
  label: 'Click Me',
};

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;

export const BaseButton: StoryObj<{ props: ButtonProps }> = {
  render: ({ props }) => {
    return <Button {...props} />;
  },
  args: {
    props: mockButtonProps,
  },
};
