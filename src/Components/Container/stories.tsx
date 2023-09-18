import { Story, Meta } from '@storybook/react/types-6-0'
import { Container } from '.'

export default {
  title: 'shared/Container',
  component: Container
} as Meta

// eslint-disable-next-line react-hooks/exhaustive-deps
export const Default: Story = () => <Container>Content text</Container>
