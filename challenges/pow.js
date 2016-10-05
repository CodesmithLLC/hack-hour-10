pow=(b,p)=>p===0?1:pow(b,p-1)*b;

module.exports = pow;