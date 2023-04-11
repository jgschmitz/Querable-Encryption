db.getCollection("myCollection").insertOne(
  {
    "name": "John Doe",
    "ssn": Binary("<encrypted ssn>")
  }
)
