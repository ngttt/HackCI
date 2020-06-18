const capitalize = (str) => {
    const newStr = str.charAt(0).toUpperCase() + str.slice(1, str.length);
    return newStr;
};

export default capitalize;
