/**
 * New node file
 */



var account = require('account');
console.log(account.get_api_key());
account.set_api_key('changed_my_api_key');
console.log(account.get_api_key());

var system = require('system');
console.log(system.get_base_url());
system.set_api_version ('0.2');
system.api_version = '0.3';
console.log(system.get_base_url());
