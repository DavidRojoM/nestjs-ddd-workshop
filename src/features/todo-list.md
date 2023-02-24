##### TODO

- [ ] Check `get-books` feature
  - Do you find something weird?
- [ ] Add `remove-book` feature using commands
- [ ] Finish `get-book` feature using queries
- [ ] Add a new feature, called `get-exchanged-books` using queries
  - It receives an object containing a `currency:string` prop
  - The currency exchanger must have 2 concretions.
    - `InMemoryCurrencyExchanger`
    - `DatabaseCurrencyExchanger`
  - It returns an array of `Books` with their prices exchanged
    > NOTE: book prices inside database are in EUR(cents)

##### OPTIONAL:

- [ ] Add `update-book` feature using commands
- [ ] Add `add-book` feature using commands
  - It receives an object containing `name:string`, `extId:string`, `price:number` and `categoryId:number`
  - Must throw an exception if the book is already in data source. The criteria is `extId`
  - Void return
