/**
 * New node file
 */


var system = require('system');

var account = require('account');

//console.log(account.get_api_key());
//account.set_api_key('changed_my_api_key');
//console.log(account.get_api_key());
//
//console.log(system.get_base_url());
//system.set_api_version ('0.2');
//system.api_version = '0.3';
//console.log(system.get_base_url());

//console.log(system.get_locations_url());
//console.log(system.get_location_tickets_url('l0'));
//console.log(system.get_location_table_url('l0','t0'));
//console.log(system.get_location_ticket_url('l0','t1'));
//console.log(system.get_location_menu_url('l0'));
//console.log(system.get_location_tables_url('l0'));
//console.log(system.get_location_employees_url('l0'));
//console.log(system.get_location_employee_url('l0','e0'));

//console.log(system.gen_urls());
//console.log(0+system.get_location_tickets_url('l0'));
//console.log(1+system.get_location_ticket_url('l0','t0'));
//console.log(1+system.get_location_ticket_items_url('l0','t0'));
//console.log(1+system.get_location_ticket_item_id_url('l0','t0','i0'));


var location_id = system.location_id;
var ticket_id = system.ticket_id;
var ticket_item_id = system.ticket_item_id;

console.log(system.get_location_ticket({location_id:'l0',ticket_id:'t0',items:true,ticket_item_id:'tii'}));
console.log(system.get_location_ticket(system.gen_ticket_args('l0','t0')));

var args = system.gen_ticket_args('l0');


console.log(system.get_location_ticket(args));
delete args.items;
for(var i=0;i<8;++i) {
	var t = 't'+i;
	args[ticket_id] = t;
	console.log(system.get_location_ticket(args));
}




