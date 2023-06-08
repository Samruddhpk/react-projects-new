export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(number / 100); // to get exact cents(decimal) value
};

export const getUniqueValues = (data, type) => {
  //dynamic prop
  let unique = data.map((item) => item[type]);
  // console.log(u)
  if (type === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};
