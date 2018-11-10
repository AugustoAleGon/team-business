// Functions that are used around the web

export const filterMenu = (data, menu) => {
  if (menu === 'All') {
    return data
  }
  let filterArr = []
  for (let i = 0; i < data.length; i++) {
    if (data[i].categories.includes(menu)) {
      filterArr.push(data[i])
    }
  }
  return filterArr
}
