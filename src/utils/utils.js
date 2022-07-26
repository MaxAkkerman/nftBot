export function getSplicedAddress(string){
  let spliced = string.slice(0, 6);
  let splicedpart2 = string.slice(43);
  return spliced + `...` + splicedpart2;
}


