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

//console.log(system.get_locations_url());
//console.log(system.get_location_tickets_url('l0'));
//console.log(system.get_location_table_url('l0','t0'));
//console.log(system.get_location_ticket_url('l0','t1'));
//console.log(system.get_location_menu_url('l0'));
//console.log(system.get_location_tables_url('l0'));
//console.log(system.get_location_employees_url('l0'));
//console.log(system.get_location_employee_url('l0','e0'));

console.log(system.gen_urls());

console.log('exit');