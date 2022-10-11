const users = {
    id : 02,
    name : 'Sagor',
    address : 'Barguna',
    isGood: true,
};

for(const keys in users){
    const values = users[keys];
    console.log(keys,values);  
}
// id 2
// name Sagor
// address Barguna
// isGood true

//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

const users = {
    id : 02,
    name : 'Sagor',
    address : 'Barguna',
    isGood: true,
};

for(const [keys, values] of Object.entries(users)){
    console.log(keys,values);
}
// id 2
// name Sagor
// address Barguna
// isGood true