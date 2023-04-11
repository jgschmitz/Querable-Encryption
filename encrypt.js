#assumes you have already created collection "MyCollection"
db.getCollection("myCollection").encrypt(
  {
    keyVaultNamespace: "encryption.__keyVault",
    "kmsProviders": {
      "local": {
        "key": {
          "key": "<base64 encoded key>",
          "iv": "<base64 encoded iv>"
        }
      }
    }
  }
)
