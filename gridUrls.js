// Destinos aceitos para OpenSim/Alife Virtual e SL legada.
function isValidGridDestination(value) {
  if (typeof value !== 'string' || value.length > 2048) return false;
  const v=value.trim();
  try {
    const u=new URL(v);
    if (u.username || u.password || u.search || u.hash) return false;
    const parts=u.pathname.split('/').filter(Boolean);
    if (u.protocol==='hop:') {
      return !!u.hostname && parts.length===4 && validParts(parts);
    }
    if (u.protocol==='https:' && u.hostname.toLowerCase()==='maps.secondlife.com' && parts[0]?.toLowerCase()==='secondlife') {
      return parts.length===5 && validParts(parts.slice(1));
    }
    return false;
  } catch {return false;}
}
function validParts(p) {
  return !!p[0] && p[0].length<=255 && p.slice(1).every(x=>/^\d{1,4}$/.test(x)&&Number(x)<=4096);
}
module.exports={isValidGridDestination};
