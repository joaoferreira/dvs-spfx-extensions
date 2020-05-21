var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { override } from '@microsoft/decorators';
import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
var init = false;
var TeamSiteFullWidthApplicationCustomizer = /** @class */ (function (_super) {
    __extends(TeamSiteFullWidthApplicationCustomizer, _super);
    function TeamSiteFullWidthApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TeamSiteFullWidthApplicationCustomizer.prototype.onInit = function () {
        // tslint:disable-next-line:no-function-expression
        if (typeof (Event) === 'function') {
            window.dispatchEvent(new Event('resize'));
        }
        else {
            var resizeEvent = window.document.createEvent('UIEvents');
            resizeEvent.initUIEvent('resize', true, false, window, 0);
            window.dispatchEvent(resizeEvent);
        }
        if (init) {
            return;
        }
        var fullWidthZone = this.properties.fullWidthZone;
        var style;
        init = true;
        if (fullWidthZone.toLowerCase() == "false") {
            // don't create fullwidth zone
            style = "  #spLeftNav {\n          max-width: 0px;\n        }\n      \n        .SPCanvas-canvas  {\n          max-width: 100%;\n        }      \n            \n         .CanvasZone.row.CanvasZone--alignment.CanvasZone--read.CanvasZone--noMargin {\n          margin: auto;\n        }\n      \n         [class^='spInnerCommentsWrapper_'] {\n          width: 100%;\n          margin-left: auto;\n          margin-right: auto;\n        }";
        }
        else {
            style = "#spLeftNav {\n          max-width: 0px;\n        }\n      \n        .SPCanvas-canvas  {\n          max-width: 100%;\n        }\n      \n        .CanvasZoneContainer:first-child .CanvasZone.row {\n          max-width: 100%;\n        }\n      \n         .CanvasZoneContainer:first-child .CanvasZone.row,\n         .CanvasZoneContainer:first-child .CanvasZone.row .CanvasSection,\n         .CanvasZoneContainer:first-child .CanvasZone.row .CanvasSection .ControlZone,\n        {\n          margin: 0px;\n          padding: 0px;\n        }\n      \n         .CanvasZone.row.CanvasZone--alignment.CanvasZone--read.CanvasZone--noMargin {\n          margin: auto;\n        }\n      \n         [class^='spInnerCommentsWrapper_'] {\n          width: 100%;\n          margin-left: auto;\n          margin-right: auto;\n        }";
        }
        var css = style;
        var head = document.head || document.getElementsByTagName('head')[0];
        var styletag = document.createElement('style');
        styletag.type = 'text/css';
        styletag.appendChild(document.createTextNode(css));
        head.appendChild(styletag);
        return Promise.resolve();
    };
    __decorate([
        override
    ], TeamSiteFullWidthApplicationCustomizer.prototype, "onInit", null);
    return TeamSiteFullWidthApplicationCustomizer;
}(BaseApplicationCustomizer));
export default TeamSiteFullWidthApplicationCustomizer;
//# sourceMappingURL=TeamSiteFullWidthApplicationCustomizer.js.map