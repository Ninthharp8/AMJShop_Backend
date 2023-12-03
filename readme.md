instalar las librerias con `npm install` 

luego deben iniciar el servicio de `Xhamp` o de `wampServer` para que se detecte la base de datos la cual debe tener de datos : 

    * host:'127.0.0.1',
    * port:3306,
    * user:'root',
    * password:'',
    * db: 'mega_shop'

Obviamente esos datos son los que le puse default. Si el de ustedes se llama diferente pos le cambian en `/config/helpers.js`

se ejecuta con `npm start`

Se lanza en [localhost:3636](http://localhost:3636)

las apis son: 
    * `/api/users`
    * `/api/products`
    * `/api/auth`
    * `/api/orders`

Pueden clickar rapidamente  : 

    * [localhost:3636/api/users](http://localhost:3636/api/users)
    * [http://localhost:3636/api/products](http://localhost:3636/api/products)
    * [http://localhost:3636/api/auth](http://localhost:3636/api/auth)
    * [http://localhost:3636/api/orders](http://localhost:3636/api/orders)
