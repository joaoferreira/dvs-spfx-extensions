import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
export interface ITeamSiteFullWidthApplicationCustomizerProperties {
    fullWidthZone: string;
}
export default class TeamSiteFullWidthApplicationCustomizer extends BaseApplicationCustomizer<ITeamSiteFullWidthApplicationCustomizerProperties> {
    onInit(): Promise<void>;
}
