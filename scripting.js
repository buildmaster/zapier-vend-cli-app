'use strict';

// START: HEADER -- AUTOMATICALLY ADDED FOR COMPATIBILITY - v1.2.0
const _ = require('lodash');
_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
const crypto = require('crypto');
const async = require('async');
const moment = require('moment-timezone');
const { DOMParser, XMLSerializer } = require('xmldom');
const atob = require('zapier-platform-legacy-scripting-runner/atob');
const btoa = require('zapier-platform-legacy-scripting-runner/btoa');
const z = require('zapier-platform-legacy-scripting-runner/z');
const $ = require('zapier-platform-legacy-scripting-runner/$');
const {
    ErrorException,
    HaltedException,
    StopRequestException,
    ExpiredAuthException,
    RefreshTokenException,
    InvalidSessionException,
} = require('zapier-platform-legacy-scripting-runner/exceptions');
// END: HEADER -- AUTOMATICALLY ADDED FOR COMPATIBILITY - v1.2.0


var Zap = {
    pre_unsubscribe: function (bundle) {
        bundle.request.method = 'DELETE';
        // bundle.subscribe_data is from return data in post_subscribe method
        bundle.request.url = bundle.request.url + bundle.subscribe_data.id;
        bundle.request.data = null;
        return bundle.request;
    },

    pre_subscribe: function (bundle) {
        bundle.request.method = 'POST';
        bundle.request.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        bundle.request.data = $.param({
            data: JSON.stringify({
                url: bundle.target_url,
                active: "true",
                type: bundle.event,
            })
        });
        return bundle.request;
    }

};

// START: FOOTER -- AUTOMATICALLY ADDED FOR COMPATIBILITY - v1.2.0
module.exports = Zap;
// END: FOOTER -- AUTOMATICALLY ADDED FOR COMPATIBILITY - v1.2.0
