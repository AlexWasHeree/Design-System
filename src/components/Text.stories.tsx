import { Text } from "./Text";

export default {
  title: 'Components/Text',
  component: Text,
  args: {
     children: 'Lorem ipsum',
     size: 'md'
  }
}

export const Default = {};

export const Small = {
  args: {
    size: 'sm'
  }
};

export const Large = {
  args: {
    size: 'lg'
  }
};

export const CustomComponent = {
  args: {
    asChild: true,
    children: (
      <p>Testando</p>
    )
  }
};
