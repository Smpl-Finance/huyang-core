import {IconDefinition} from '@fortawesome/free-solid-svg-icons';

export interface HuyangHeaderLinkModel {
  title: string;
  url: string[];
  class?: string;
  menu?: HuyangHeaderLinkModel[];
  icon?: IconDefinition;
}

