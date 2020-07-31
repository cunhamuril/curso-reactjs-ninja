export default (amount, singular, plural) => {
  return amount === 1 ? singular : plural;
};
