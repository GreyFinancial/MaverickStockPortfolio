const router = require('express').Router();
const stockController = require('../controllers/index.js');

// Get stock info from iex for rendering everything on main page
router.get('/stockInfo', stockController.getStockInfo);

//get current stock price from IEX
router.get('/currentStockPrice', stockController.getCurrentPrice);

//updates current stock price from IEX to the database
router.post('/currentStockPrice', stockController.updatePrice);

// post stock
router.post('/stock', stockController.postStockTicker);

// get stock(s)
router.get('/stock', stockController.getStockTicker);

// deletes stock
router.delete('/deleteStock', stockController.deleteStock);

// update stock quantity
router.post('/updateQuantity', stockController.updateStockQuantity);

//posts tickers and their respective names to the database
//only to be called once through db:setup to populate the database in the first place
//never called by client
router.post('/tickersAndNames', stockController.postTickersAndNames);

// get all tickers getAllTickers
router.get('/tickers', stockController.getAllTickers);

//get banner info
router.get('/banner', stockController.getBannerInfo)

module.exports = router;
