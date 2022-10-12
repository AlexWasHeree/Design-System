import { Checkbox } from './Checkbox';
import { Text } from './Text';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story: () => undefined) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Remember me</Text>
        </div>
      );
    },
  ],
};

export const Default = {};
