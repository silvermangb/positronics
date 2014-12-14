/**
 * New node file
 */


var system = require('system');

var account = require('account');

var assert = require('assert');

//console.log(account.get_api_key());
//account.set_api_key('changed_my_api_key');
//console.log(account.get_api_key());
//
//console.log(system.get_base_url());
//system.set_api_version ('0.2');
//system.api_version = '0.3';
//console.log(system.get_base_url());




console.log(system.get_location_tickets_url('lo'));
console.log(system.get_location_ticket_url({location_id:'l0',ticket_id:'t0',items:true,ticket_item_id:'tii'}));
console.log(system.get_location_ticket_url(system.gen_ticket_args('l0','t0')));

var args = system.gen_ticket_args('l0');
args.ticket_id = 't0';
args.ticket_item_id = 'tti';
args.items = true;
args.modifiers = true;
args.modifier_id = 'mi';
console.log(system.get_location_ticket_url(args));

try
{
	console.log(system.get_location_ticket_url(args));
}
catch(e)
{
	console.log(e);
}

delete args.items;
delete args.ticket_item_id;
delete args.modifiers;
delete args.modifier_id;
for(var i=0;i<8;++i) {
	var t = 't'+i;
	args.ticket_id = t;
	console.log(system.get_location_ticket_url(args));
}
args.items = true;
console.log(system.get_location_ticket_url(args));



