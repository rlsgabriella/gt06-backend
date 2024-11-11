const ProductList = async( req, res, next ) => {

    try{
        const products = [
            {
              name: "sapato nike",
              price: 300,
              image: "sapato3.png",
            },
            {
              name: "sapato nike2",
              price: 400,
              image: "sapato3.png",
            },
            {
              name: "sapato nike3",
              price: 500,
              image: "sapato3.png",
            },
            {
              name: "sapato nike4",
              price: 600,
              image: "sapato3.png",
            },
            {
              name: "sapato nike5",
              price: 700,
              image: "sapato3.png",
            },
            {
              name: "sapato nike6",
              price: 800,
              image: "sapato3.png",
            },
            {
              name: "sapato nike7",
              price: 900,
              image: "sapato3.png",
            },
            {
              name: "sapato nike8",
              price: 1000,
              image: "sapato3.png",
            }
          ]

        res.send(products)

    } catch (error) {
        res.send({
            'success':false,
            'error':`erro na requisicao ${error}`
        })
    }
}

module.exports = {
    ProductList
}