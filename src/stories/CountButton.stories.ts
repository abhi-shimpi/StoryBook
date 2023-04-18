import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/';
import { CountButtonComponent } from 'src/app/components/count-button/count-button.component';
import { MatCardModule } from '@angular/material/card';
import {  MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


export default {
  title: 'Example/Card Component',
  component: CountButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [MatCardModule,MatIconModule,MatButtonModule],
    }),
  ],
} as Meta;

const Template: Story<CountButtonComponent> = (args: CountButtonComponent) => ({
  component: CountButtonComponent,
  props: args,
});

export const CountButtonithNoData = Template.bind({});
CountButtonithNoData.args = {
  subTitle: '',
  titile: 0,
  icon: '',
};

export const CountButtonithData = Template.bind({});
CountButtonithData.args = {
  subTitle: 'All Employee',
  titile: 0,
  icon: '../../../assets/card1.svg',
};
