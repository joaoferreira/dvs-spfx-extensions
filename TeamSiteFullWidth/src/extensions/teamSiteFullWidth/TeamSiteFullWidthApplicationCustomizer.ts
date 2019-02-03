import { override } from '@microsoft/decorators';
import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
export interface ITeamSiteFullWidthApplicationCustomizerProperties {
  fullWidthZone: boolean;
}

require("./css/customStyles.module.scss");

export default class TeamSiteFullWidthApplicationCustomizer extends BaseApplicationCustomizer<ITeamSiteFullWidthApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    // tslint:disable-next-line:no-function-expression
      if (typeof (Event) === 'function') {
        window.dispatchEvent(new Event('resize'));
      } else {
        var resizeEvent = window.document.createEvent('UIEvents');
        resizeEvent.initUIEvent('resize', true, false, window, 0);
        window.dispatchEvent(resizeEvent);
      }

      let fullWidthZone: boolean = this.properties.fullWidthZone;
      var style : string;

      if (fullWidthZone == false) {
        // don't create fullwidth zone

        style=`.sp-pageLayout-sideNav [class^='deferredLeftNav'] {
          max-width: 0px;
        }

        [class^='pageHeader'] {
          display: none;
        }        
      
        .sp-pageLayout-sideNav .SPCanvas-canvas  {
          max-width: 100%;
        }      
                     
        .sp-pageLayout-sideNav .CanvasZone.row.CanvasZone--alignment.CanvasZone--read.CanvasZone--noMargin {
          margin: auto;
        }
      
        .sp-pageLayout-sideNav [class^='spInnerCommentsWrapper_'] {
          width: 100%;
          margin-left: auto;
          margin-right: auto;
        }`;       
      } else {  
        style=`.sp-pageLayout-sideNav [class^='deferredLeftNav'] {
          max-width: 0px;
        }

        [class^='pageHeader'] {
          display: none;
        }        
      
        .sp-pageLayout-sideNav .SPCanvas-canvas  {
          max-width: 100%;
        }
      
        .sp-pageLayout-sideNav .CanvasZoneContainer:first-child .CanvasZone.row {
          max-width: 100%;
          padding: 0;
        }

        .sp-pageLayout-sideNav .CanvasZoneContainer:first-child .CanvasZone.row .CanvasSection {
          padding: 0;
        }

        .sp-pageLayout-sideNav .CanvasZoneContainer:first-child .CanvasZone.row .CanvasSection .ControlZone {
          padding: 0;
          margin: 0;
        }
      
        .sp-pageLayout-sideNav .CanvasZoneContainer:first-child .CanvasZone.row,
        .sp-pageLayout-sideNav .CanvasZoneContainer:first-child .CanvasZone.row .CanvasSection,
        .sp-pageLayout-sideNav .CanvasZoneContainer:first-child .CanvasZone.row .CanvasSection .ControlZone,
        {
          margin: 0px;
          padding: 0px;
        }
      
        .sp-pageLayout-sideNav .CanvasZone.row.CanvasZone--alignment.CanvasZone--read.CanvasZone--noMargin {
          margin: auto;
        }
      
        .sp-pageLayout-sideNav [class^='spInnerCommentsWrapper_'] {
          width: 100%;
          margin-left: auto;
          margin-right: auto;
        }`;
      }

      var css = style;
      var head = document.head || document.getElementsByTagName('head')[0];
      var styletag = document.createElement('style');

      styletag.type = 'text/css';
      styletag.appendChild(document.createTextNode(css));      

      head.appendChild(styletag);

    return Promise.resolve();
  }
}
