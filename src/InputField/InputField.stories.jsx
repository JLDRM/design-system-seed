import { InputField } from './InputField';

export default {
  title: 'Design System/InputField',
  component: InputField,
};

export const Primary = {
  args: {
    label: 'Name:*',
    htmlFor: 'username',
    error: undefined,
  },
  name: 'with name label',
  render: (args) => (
    <InputField {...args}>
      <input type='text' id='username' />
    </InputField>
  ),
};

export const Error = {
  args: {
    label: 'Name:*',
    htmlFor: 'username',
    error: { message: 'Required Field' },
  },
  name: 'with error',
  render: (args) => (
    <InputField {...args}>
      <input type='text' id='username' />
    </InputField>
  ),
};
