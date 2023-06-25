export const getAllGlasses = async () => {
  try {
    const res = await fetch("../../public/glasses.json");
  const products = await res.json();    
  return products;
  } catch (error) {
    console.error(error)
  }
};
