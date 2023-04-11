db.createCollection("myCollection", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         properties: {
            ssn: {
               encrypt: {
                  keyId: ["<DEK UUID>"],
                  bsonType: "string"
               }
            },
            name: {
               bsonType: "string"
            }
         }
      }
   }
})
