async function getProduct(productId) {
    
    try {
        const apiUrl = `https://fakestoreapi.com/products/${productId}`;
        const response = await fetch(apiUrl);
        
        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          console.error(`Erro na requisição: ${response.status}`);
          return null;
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
        return null;
      }
}

module.exports = getProduct;
