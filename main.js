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


var x;
x = system.get_location_ticket({'{location_id}':'l0','{ticket_id}':'t0','items':true,'{ticket_item_id}':'tii'});
console.log(x);
console.log(system.get_location_ticket(system.gen_ticket_args('l0','t0')));

var args = system.gen_ticket_args('l0','t0');

console.log(system.get_location_ticket(args));

delete args.items;
for(var i=0;i<8;++i) {
	var t = 't'+i;
	args['{ticket_id}'] = t;
	console.log(system.get_location_ticket(args));
}




