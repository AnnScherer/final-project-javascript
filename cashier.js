const cashier = (price, cash) => {
  let amountOfNotes;
  let change = (cash - price).toFixed(2);
  console.log(`Price: ${price} €`);
  console.log(`Amount: ${cash} €`);
  console.log(`Change: ${change} €`);
  console.log("-----------------");

  let current = [500.0, 200.0, 100.0, 50.0, 20.0, 10.0, 5.0, 2.0, 1.0, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

  for (let i = 0; i < current.length; i++) {
    if (change >= current[i]) {
      amountOfNotes = Math.floor(change / current[i]);
      change = (change % current[i]).toFixed(2);
      console.log(`${amountOfNotes} x ${current[i]} €`);
    }
  }
};

const apple = 0.59;
const banana = 0.79;
const strawberry = 5;

cashier([apple + banana + strawberry], 50);

