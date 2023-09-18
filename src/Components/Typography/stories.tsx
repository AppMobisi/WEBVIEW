import { Story, Meta } from '@storybook/react/types-6-0'
import { TypographyComponent } from '.'

export default {
  title: 'shared/TypographyComponent',
  component: TypographyComponent
} as Meta

export const Default: Story = (args) => {
  return <TypographyComponent>Exemplo de texto.</TypographyComponent>
}
