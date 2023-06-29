const active = true;

let message = ( active ) ? 'Successful' : 'Failed';
message = active && 'Success';

console.log(message);