import Product from '../components/Product';

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner"
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover"
            price={29.99}
            image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={89.99}
            image={"https://images-na.ssl-images-amazon.com/images/I/61FJtVQh9bL._AC_SX425_.jpg"}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung Galaxy Fit 2 Bluetooth Fitness Tracking Smart Band – Black (US Version)"
            price={100.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={3}
          />
          <Product
            id="4903850"
            title="Echo (3rd Gen)- Smart speaker with Alexa- Charcoal"
            price={100.99}
            image={"https://images-na.ssl-images-amazon.com/images/I/61b4qFTXRML._AC_SX425_.jpg"}
            rating={3}
          />
          <Product
            id="3254354345"
            title="New apple ipad pro (12.3-inch, wi-fi,128gb) -silver 4th generation"
            price={300.99}
            image={"https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SX522_.jpg"}
            rating={4}
          />  
        </div>

        <div className="home__row">
          <Product
            id="23445930"
            title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming"
            price={500.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={5}
            />
        </div>

      </div>
    </div>
  )
}

export default Home;