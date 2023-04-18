import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/';
import { CardComponent } from 'src/app/components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export default {
  title: 'Example/Card Component',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [MatCardModule, MatIconModule, MatButtonModule],
    }),
  ],
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  component: CardComponent,
  props: args,
});

export const NoCardData = Template.bind({});
NoCardData.args = {
  bgColor:'',
  imgSrc: '',
  empName: '',
  empRole: '',
  empEmail: '',
  contactNumber:0
};

export const CardWithData = Template.bind({});
CardWithData.args = {
  bgColor: 'white',
  imgSrc:
    'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg',
  empName: 'John Doe',
  empRole: 'Software Engineer',
  empEmail: 'johndoe@gmail.com',
  contactNumber: 1234567890,
};


