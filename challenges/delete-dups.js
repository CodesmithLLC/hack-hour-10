const deleteDups = (h, n = {}, c = h) => {
  do if (!n[c.value]) n[c.value] = c
  while (c = c.next)
  Object.keys(n).forEach((e, i) => e.next = n[i + 1])
  return h
}

module.exports = deleteDups
