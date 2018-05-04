
    const INIT_PRODUCTS = [
        {
            id: 1,
            type: "Fruits",
            name: "Apple",
            quantity: "1 kg",
            thumbnail: "https://storage.googleapis.com/zopnow-static/images/products/320/fresh-apple-red-delicious-v-500-g.png",
            description: "Add the Red & Delicious Apples to your daily diet for its nutrient values benefiting your health. These apples are also used as an ingredient in fruit salads, desserts and custard for a delectable taste and flavour. It can also be used to prepare juices and milk shakes. It contains high content of fiber and vitamins in it which together helps in curbing cancer, controlling diabetic issues, reducing cholesterol, and many more.",
            price: "400"
        },
        {
            id: 2,
            type: "Staples",
            name: "Toor Dal",
            quantity: "500 gm",
            thumbnail: "https://storage.googleapis.com/zopnow-static/images/products/320/more-value-tur-dal-loose-v-1-kg.png",
            description: "The yellow color coated, nutrients filled dal, Tur dal or Pigeon Pea, as it is called across the world, is a widely used pulse used as an ingredient in cooking of Indian dishes. The inclusion of indispensable proteins and various amino acid supplements make them an essential component to be included in our food regime. Tur dal evokes a classic aroma and taste when cooked. It is popularly used as an ingredient in Sambhar, a South Indian dish that's served with rice. Kichdi is an another dish which is prepared across India which comprises Tur dal in major quantity.",
            price: "50"
        },
        {
            id: 3,
            type: "Beverages",
            name: "Mango Juice",
            quantity: "1 lit",
            thumbnail: "https://storage.googleapis.com/zopnow-static/images/products/320/nutrilife-mango-fruit-juice-nectar-v-1-l.png",
            description: "Relish the goodness of mixed fruits! Rich in natural nutrients that provide daily health benefits. With no added preservative and no artificial coloring, this is the perfect fruit beverage to foster a healthy lifestyle. Great choice for making blended drinks.",
            price: "110"
        }
    ]

export default function productsReducer(state=INIT_PRODUCTS, action={}) {
    // PLEASE NOTE:
    // below actions are unused
    // kept for instance - Ajinkya
    switch(action.type) {
        case 'ADD_PRODUCT':
            return state.concat(action.payload);

        case 'DELETE_PRODUCT':
            let indexToDel = findProductIndex(state, action.payload.id);
            return [...state.slice(0, indexToDel), ...state.slice(indexToDel+1)];

        case 'UPDATE_PRODUCT':
            let indexToUpdate = findProductIndex(state, action.payload.id);
            const newProductExtend = {
                ...state[indexToUpdate], name: action.payload.name
            };
            return [...state.slice(0, indexToUpdate), newProductExtend, ...state.slice(indexToUpdate+1)];

    }

    function findProductIndex(products, id) {
        return products.findIndex((p) => p.id === id)
    }

    return state;
}