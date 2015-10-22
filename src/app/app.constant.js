(function() {
    'use strict';

    angular.module('@@appName')

    .constant('conf', {
        ENV: '@@env',
        VERSION: '@@appVersion',
        API: {
            BASEURL: '@@apiUrl',
            EXPERIENCE: {
                path: '/experiences'
            },
            SKILL: {
                path: '/skills'
            },
            EDUCATION: {
                path: '/education'
            },
            INTERESTS: {
                path: '/interestscat'
            },
            TRAVEL: {
                path: '/travels'
            }
        },
        STATIC: {
            BASEURL: '@@staticUrl'
        },
        GMAPS: {
            API_KEY: 'TODO'
        }

    });
})();

