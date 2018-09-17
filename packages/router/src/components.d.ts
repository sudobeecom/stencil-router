/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import '@stencil/core';

import '@stencil/state-tunnel';
import {
  HistoryType,
  LocationSegments,
  MatchResults,
  RouteRenderProps,
  RouterHistory,
  RouteViewOptions,
} from './global/interfaces';


export namespace Components {

  interface StencilAsyncContent {
    'documentLocation'?: string;
  }
  interface StencilAsyncContentAttributes extends StencilHTMLAttributes {
    'documentLocation'?: string;
  }

  interface StencilRouterRedirect {
    'history'?: RouterHistory;
    'root'?: string;
    'url'?: string;
  }
  interface StencilRouterRedirectAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
    'root'?: string;
    'url'?: string;
  }

  interface StencilRouteLink {
    'activeClass': string;
    'anchorClass'?: string;
    'anchorId'?: string;
    'anchorRole'?: string;
    'anchorTabIndex'?: string;
    'anchorTitle'?: string;
    'ariaHaspopup'?: string;
    'ariaLabel'?: string;
    'ariaPosinset'?: string;
    'ariaSetsize'?: number;
    /**
    * Custom tag to use instead of an anchor
    */
    'custom': string;
    'exact': boolean;
    'history'?: RouterHistory;
    'location'?: LocationSegments;
    'root'?: string;
    'strict': boolean;
    'url'?: string;
    'urlMatch'?: string | string[];
  }
  interface StencilRouteLinkAttributes extends StencilHTMLAttributes {
    'activeClass'?: string;
    'anchorClass'?: string;
    'anchorId'?: string;
    'anchorRole'?: string;
    'anchorTabIndex'?: string;
    'anchorTitle'?: string;
    'ariaHaspopup'?: string;
    'ariaLabel'?: string;
    'ariaPosinset'?: string;
    'ariaSetsize'?: number;
    /**
    * Custom tag to use instead of an anchor
    */
    'custom'?: string;
    'exact'?: boolean;
    'history'?: RouterHistory;
    'location'?: LocationSegments;
    'root'?: string;
    'strict'?: boolean;
    'url'?: string;
    'urlMatch'?: string | string[];
  }

  interface StencilRouteTitle {
    'pageTitle': string;
    'titleSuffix': string;
  }
  interface StencilRouteTitleAttributes extends StencilHTMLAttributes {
    'pageTitle'?: string;
    'titleSuffix'?: string;
  }

  interface StencilRoute {
    'component'?: string;
    'componentProps'?: { [key: string]: any };
    'componentUpdated'?: (options: RouteViewOptions) => void;
    'exact': boolean;
    'group': string | null;
    'history'?: RouterHistory;
    'historyType'?: HistoryType;
    'location'?: LocationSegments;
    'match': MatchResults | null;
    'routeRender'?: (props: RouteRenderProps) => any;
    'routeViewsUpdated'?: (options: RouteViewOptions) => void;
    'scrollTopOffset'?: number;
    'url'?: string | string[];
  }
  interface StencilRouteAttributes extends StencilHTMLAttributes {
    'component'?: string;
    'componentProps'?: { [key: string]: any };
    'componentUpdated'?: (options: RouteViewOptions) => void;
    'exact'?: boolean;
    'group'?: string | null;
    'history'?: RouterHistory;
    'historyType'?: HistoryType;
    'location'?: LocationSegments;
    'match'?: MatchResults | null;
    'routeRender'?: (props: RouteRenderProps) => any;
    'routeViewsUpdated'?: (options: RouteViewOptions) => void;
    'scrollTopOffset'?: number;
    'url'?: string | string[];
  }

  interface StencilRouter {
    'historyType': HistoryType;
    'root': string;
    'scrollTopOffset'?: number;
    'titleSuffix': string;
  }
  interface StencilRouterAttributes extends StencilHTMLAttributes {
    'historyType'?: HistoryType;
    'root'?: string;
    'scrollTopOffset'?: number;
    'titleSuffix'?: string;
  }

  interface StencilRouteSwitch {
    'group': string;
    'location'?: LocationSegments;
    'routeViewsUpdated'?: (options: RouteViewOptions) => void;
    'scrollTopOffset'?: number;
  }
  interface StencilRouteSwitchAttributes extends StencilHTMLAttributes {
    'group'?: string;
    'location'?: LocationSegments;
    'routeViewsUpdated'?: (options: RouteViewOptions) => void;
    'scrollTopOffset'?: number;
  }
}

declare global {
  interface StencilElementInterfaces {
    'StencilAsyncContent': Components.StencilAsyncContent;
    'StencilRouterRedirect': Components.StencilRouterRedirect;
    'StencilRouteLink': Components.StencilRouteLink;
    'StencilRouteTitle': Components.StencilRouteTitle;
    'StencilRoute': Components.StencilRoute;
    'StencilRouter': Components.StencilRouter;
    'StencilRouteSwitch': Components.StencilRouteSwitch;
  }

  interface StencilIntrinsicElements {
    'stencil-async-content': Components.StencilAsyncContentAttributes;
    'stencil-router-redirect': Components.StencilRouterRedirectAttributes;
    'stencil-route-link': Components.StencilRouteLinkAttributes;
    'stencil-route-title': Components.StencilRouteTitleAttributes;
    'stencil-route': Components.StencilRouteAttributes;
    'stencil-router': Components.StencilRouterAttributes;
    'stencil-route-switch': Components.StencilRouteSwitchAttributes;
  }


  interface HTMLStencilAsyncContentElement extends Components.StencilAsyncContent, HTMLStencilElement {}
  var HTMLStencilAsyncContentElement: {
    prototype: HTMLStencilAsyncContentElement;
    new (): HTMLStencilAsyncContentElement;
  };

  interface HTMLStencilRouterRedirectElement extends Components.StencilRouterRedirect, HTMLStencilElement {}
  var HTMLStencilRouterRedirectElement: {
    prototype: HTMLStencilRouterRedirectElement;
    new (): HTMLStencilRouterRedirectElement;
  };

  interface HTMLStencilRouteLinkElement extends Components.StencilRouteLink, HTMLStencilElement {}
  var HTMLStencilRouteLinkElement: {
    prototype: HTMLStencilRouteLinkElement;
    new (): HTMLStencilRouteLinkElement;
  };

  interface HTMLStencilRouteTitleElement extends Components.StencilRouteTitle, HTMLStencilElement {}
  var HTMLStencilRouteTitleElement: {
    prototype: HTMLStencilRouteTitleElement;
    new (): HTMLStencilRouteTitleElement;
  };

  interface HTMLStencilRouteElement extends Components.StencilRoute, HTMLStencilElement {}
  var HTMLStencilRouteElement: {
    prototype: HTMLStencilRouteElement;
    new (): HTMLStencilRouteElement;
  };

  interface HTMLStencilRouterElement extends Components.StencilRouter, HTMLStencilElement {}
  var HTMLStencilRouterElement: {
    prototype: HTMLStencilRouterElement;
    new (): HTMLStencilRouterElement;
  };

  interface HTMLStencilRouteSwitchElement extends Components.StencilRouteSwitch, HTMLStencilElement {}
  var HTMLStencilRouteSwitchElement: {
    prototype: HTMLStencilRouteSwitchElement;
    new (): HTMLStencilRouteSwitchElement;
  };

  interface HTMLElementTagNameMap {
    'stencil-async-content': HTMLStencilAsyncContentElement
    'stencil-router-redirect': HTMLStencilRouterRedirectElement
    'stencil-route-link': HTMLStencilRouteLinkElement
    'stencil-route-title': HTMLStencilRouteTitleElement
    'stencil-route': HTMLStencilRouteElement
    'stencil-router': HTMLStencilRouterElement
    'stencil-route-switch': HTMLStencilRouteSwitchElement
  }

  interface ElementTagNameMap {
    'stencil-async-content': HTMLStencilAsyncContentElement;
    'stencil-router-redirect': HTMLStencilRouterRedirectElement;
    'stencil-route-link': HTMLStencilRouteLinkElement;
    'stencil-route-title': HTMLStencilRouteTitleElement;
    'stencil-route': HTMLStencilRouteElement;
    'stencil-router': HTMLStencilRouterElement;
    'stencil-route-switch': HTMLStencilRouteSwitchElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
