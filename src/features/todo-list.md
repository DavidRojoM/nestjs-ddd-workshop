##### TODO

- [ ] Check `get-books` feature
- [ ] Add `remove-book` feature
- [ ] Finish `get-book` feature
- [ ] Add kysely and typeorm mappings for `exchange_rates` table.
- [ ] Add a new feature, called `get-exchanged-books`
  - It receives an object containing a `currency:string` prop
  - The currency exchanger must have 2 concretions.
    - `InMemoryCurrencyExchanger`
    - `DatabaseCurrencyExchanger`
  - It returns an array of `Books` with their prices exchanged
    > NOTE: book prices inside database are in EUR(cents)

##### OPTIONAL:

- [ ] Add `update-book` feature
- [ ] Add `add-book` feature
  - It receives an object containing `name:string`, `extId:string`, `price:number` and `categoryId:number`
  - Must throw an exception if the book is already in data source. The criteria is `extId`
  - Void return
