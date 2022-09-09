export default function dateFormat(str) {
  let getTime = str.substring(11, 19);
  let getDate = str.substring(0, 10);
  let formatGetDate = getDate.split("-");
  let temp = formatGetDate[0]
  formatGetDate[0] = formatGetDate[2]
  formatGetDate[2] = temp
  getDate = formatGetDate.join("/");
  str = (getDate + " at " + getTime)
  return str
  // console.log(getDate + " and " + getTime)
}

