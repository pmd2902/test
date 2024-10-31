export const generateUID = () => {
  return `${Date.now()}-${Math.floor(Math.random() * 100000)}`;
};
