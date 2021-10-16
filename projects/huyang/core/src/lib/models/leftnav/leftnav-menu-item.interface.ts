import {IconDefinition} from '@fortawesome/free-solid-svg-icons';

export interface LeftNavMenuItem {
  title: string;
  icon: IconDefinition;
  titleBtn?: boolean;
  iconBtn?: boolean;
  url?: string[];
  click?(event: any): void;
}
