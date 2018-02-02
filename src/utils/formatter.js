function byteFormat(num, unit) {
  unit = unit && unit.toUpperCase() || 'B'
  let KB = 1024
  let MB = 1024 * KB
  let GB = 1024 * MB
  let TB = 1024 * GB
  switch(unit) {
    case 'T':
      num = num * TB
      break
    case 'G':
      num = num * GB
      break
    case 'M':
      num = num * MB
      break
    case 'K':
      num = num * KB
      break
  }
  console.log(unit)
  console.log(num)
  if (num < KB) {
    return num + 'B'
  }
  if (num < MB) {
    return (num/KB).toFixed(2) + 'K'
  }
  if (num < GB) {
    return (num/MB).toFixed(2) + 'M'
  }
  if (num < TB) {
    return (num/GB).toFixed(2) + 'G'
  } else {
    return (num/TB).toFixed(2) + 'T'
  }

}

const formatter = {
  byteFormat : byteFormat
}
export default formatter
