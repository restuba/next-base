const getNickName = name => {
  if (name) {
    const lastChar = name[name.length - 1]?.toUpperCase() || '';
    return name[0].toUpperCase() + lastChar;
  }
  const x = name?.match(/\b\w/g) || [];
  return ((x.shift() || '') + (x.pop() || '')).toUpperCase();
};

export default getNickName;
