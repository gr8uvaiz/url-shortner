const sessionIdMap = new Map();

module.exports.setUser = function(id,user){
    sessionIdMap.set(id,user);
}
module.exports.getUser = function(id){
    return sessionIdMap.get(id);
}