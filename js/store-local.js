const PREFIX='sockbuster-pages-v1-';
export const money=n=>new Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP',maximumFractionDigits:0}).format(n);
export const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function read(key,fallback){try{return JSON.parse(localStorage.getItem(PREFIX+key))??fallback}catch{return fallback}}
export function write(key,data){try{localStorage.setItem(PREFIX+key,JSON.stringify(data));return true}catch{return false}}
export function erase(key){localStorage.removeItem(PREFIX+key)}
export async function products(){const response=await fetch('data/productos.json',{cache:'no-store'});if(!response.ok)throw Error('No se pudo cargar data/productos.json');const data=await response.json();if(!Array.isArray(data.productos))throw Error('Catálogo JSON inválido');const local=read('products',null);return local??data.productos}
export function storeProducts(list){return write('products',list)}
export function getProfile(){return read('profile',null)}
export function setProfile(name){return write('profile',{name:name.trim(),demo:true})}
export function validateProduct(d){const sizes=Array.isArray(d.sizes)?d.sizes:[];if(typeof d.title!=='string'||d.title.trim().length<2||typeof d.media!=='string'||!d.media.trim()||!['sci-fi','terror','drama','animacion'].includes(d.collection)||!Number.isInteger(d.price)||d.price<0||!Number.isInteger(d.stock)||d.stock<0||sizes.length===0||sizes.some(s=>!['S','M','L','XL'].includes(s)))throw Error('Completa los datos del producto y al menos una talla');return {...d,title:d.title.trim(),media:d.media.trim(),sizes:[...new Set(sizes)]}}
