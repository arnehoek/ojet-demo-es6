/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojrouter', 'ojs/ojknockout', 'ojs/ojarraytabledatasource'], (oj, ko) => {
        class ControllerViewModel {
            constructor() {
                // Media queries for repsonsive layouts
                let smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
                this.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);
                this.router = oj.Router.rootInstance;
                this.router.configure({
                    'dashboard': {label: 'Dashboard', isDefault: true},
                    'incidents': {label: 'Incidents'},
                    'customers': {label: 'Customers'},
                    'about': {label: 'About'}
                });
                oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();

                let navData = [
                    {
                        name: 'Dashboard', id: 'dashboard',
                        iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-chart-icon-24'
                    },
                    {
                        name: 'Incidents', id: 'incidents',
                        iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-fire-icon-24'
                    },
                    {
                        name: 'Customers', id: 'customers',
                        iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-people-icon-24'
                    },
                    {
                        name: 'About', id: 'about',
                        iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-info-icon-24'
                    }
                ];
                this.navDataSource = new oj.ArrayTableDataSource(navData, {idAttribute: 'id'});

                // Header
                // Application Name used in Branding Area
                this.appName = ko.observable("App Name");
                // User Info used in Global Navigation area
                this.userLogin = ko.observable("john.hancock@oracle.com");

                this.footerLinks = ko.observableArray([
                    this.footerLink('About Oracle', 'aboutOracle', 'http://www.oracle.com/us/corporate/index.html#menu-about'),
                    this.footerLink('Contact Us', 'contactUs', 'http://www.oracle.com/us/corporate/contact/index.html'),
                    this.footerLink('Legal Notices', 'legalNotices', 'http://www.oracle.com/us/legal/index.html'),
                    this.footerLink('Terms Of Use', 'termsOfUse', 'http://www.oracle.com/us/legal/terms/index.html'),
                    this.footerLink('Your Privacy Rights', 'yourPrivacyRights', 'http://www.oracle.com/us/legal/privacy/index.html')
                ]);
            }


            // Footer
            footerLink(name, id, linkTarget) {
                return {
                    name: name,
                    linkId: id,
                    linkTarget: linkTarget
                }
            }
        }

        return new ControllerViewModel();
    }
);
