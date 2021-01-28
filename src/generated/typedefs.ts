const s = `# Instructs the server to apply the mutations in a LOGGED batch
directive @atomic on MUTATION

# Represents a CQL float as a floating-point literal.
# This is a 32-bit IEEE-754 floating point.
# If the value cannot be represented as a float, it will be converted.
# This conversion can loose precision, or range (resulting in +/-Infinity).
scalar Float32

input Float32FilterInput {
  eq: Float32
  notEq: Float32
  gt: Float32
  gte: Float32
  lt: Float32
  lte: Float32
  in: [Float32]
}

input ListStringFilterInput {
  eq: [String]
  notEq: [String]
  gt: [String]
  gte: [String]
  lt: [String]
  lte: [String]
  in: [[String]]
  contains: String
}

type Mutation {
  # Delete mutation for the table 'shops'.
  # Note that 'shop_id' is the field that corresponds to the table primary key.
  deleteshops(
    value: shopsInput!
    ifExists: Boolean
    ifCondition: shopsFilterInput
    options: MutationOptions
  ): shopsMutationResult

  # Insert mutation for the table 'shops'.
  # Note that 'shop_id' is the field that corresponds to the table primary key.
  insertshops(
    value: shopsInput!
    ifNotExists: Boolean
    options: MutationOptions
  ): shopsMutationResult

  # Update mutation for the table 'shops'.
  # Note that 'shop_id' is the field that corresponds to the table primary key.
  updateshops(
    value: shopsInput!
    ifExists: Boolean
    ifCondition: shopsFilterInput
    options: MutationOptions
  ): shopsMutationResult

  # Delete mutation for the table 'shops_by_location'.
  # Note that 'longitude', 'latitude' and 'shop_id' are the fields that correspond to the table primary key.
  deleteshops_by_location(
    value: shops_by_locationInput!
    ifExists: Boolean
    ifCondition: shops_by_locationFilterInput
    options: MutationOptions
  ): shops_by_locationMutationResult

  # Insert mutation for the table 'shops_by_location'.
  # Note that 'longitude', 'latitude' and 'shop_id' are the fields that correspond to the table primary key.
  insertshops_by_location(
    value: shops_by_locationInput!
    ifNotExists: Boolean
    options: MutationOptions
  ): shops_by_locationMutationResult

  # Update mutation for the table 'shops_by_location'.
  # Note that 'longitude', 'latitude' and 'shop_id' are the fields that correspond to the table primary key.
  updateshops_by_location(
    value: shops_by_locationInput!
    ifExists: Boolean
    ifCondition: shops_by_locationFilterInput
    options: MutationOptions
  ): shops_by_locationMutationResult
}

enum MutationConsistency {
  LOCAL_ONE
  LOCAL_QUORUM
  ALL
}

# The execution options for the mutation.
input MutationOptions {
  consistency: MutationConsistency = LOCAL_QUORUM
  serialConsistency: SerialConsistency = SERIAL
  ttl: Int
}

type Query {
  # Query for the table 'shops'.
  # Note that 'shop_id' is the field that corresponds to the table primary key.
  shops(
    value: shopsInput
    filter: shopsFilterInput
    orderBy: [shopsOrder]
    options: QueryOptions
  ): shopsResult
  shopsFilter(
    filter: shopsFilterInput
    orderBy: [shopsOrder]
    options: QueryOptions
  ): shopsResult
    @deprecated(reason: "No longer supported. Use root type instead.")

  # Query for the table 'shops_by_location'.
  # Note that 'longitude', 'latitude' and 'shop_id' are the fields that correspond to the table primary key.
  shops_by_location(
    value: shops_by_locationInput
    filter: shops_by_locationFilterInput
    orderBy: [shops_by_locationOrder]
    options: QueryOptions
  ): shops_by_locationResult
  shops_by_locationFilter(
    filter: shops_by_locationFilterInput
    orderBy: [shops_by_locationOrder]
    options: QueryOptions
  ): shops_by_locationResult
    @deprecated(reason: "No longer supported. Use root type instead.")
}

enum QueryConsistency {
  LOCAL_ONE
  LOCAL_QUORUM
  ALL
  SERIAL
  LOCAL_SERIAL
}

# The execution options for the query.
input QueryOptions {
  consistency: QueryConsistency = LOCAL_QUORUM
  limit: Int
  pageSize: Int = 100
  pageState: String
}

enum SerialConsistency {
  SERIAL
  LOCAL_SERIAL
}

input StringFilterInput {
  eq: String
  notEq: String
  gt: String
  gte: String
  lt: String
  lte: String
  in: [String]
}

type address_typeUdt {
  city: String
  country: String
  street: String
  houseNumber: String
  postalCode: String
}

input address_typeUdtFilterInput {
  eq: address_typeUdtInput
  notEq: address_typeUdtInput
  gt: address_typeUdtInput
  gte: address_typeUdtInput
  lt: address_typeUdtInput
  lte: address_typeUdtInput
  in: [address_typeUdtInput]
}

input address_typeUdtInput {
  city: String
  country: String
  street: String
  houseNumber: String
  postalCode: String
}

type contact_typeUdt {
  phone: String
  whatsapp: String
  facebook: String
}

input contact_typeUdtFilterInput {
  eq: contact_typeUdtInput
  notEq: contact_typeUdtInput
  gt: contact_typeUdtInput
  gte: contact_typeUdtInput
  lt: contact_typeUdtInput
  lte: contact_typeUdtInput
  in: [contact_typeUdtInput]
}

input contact_typeUdtInput {
  phone: String
  whatsapp: String
  facebook: String
}

type coordinates_typeUdt {
  latitude: Float32
  longitude: Float32
}

input coordinates_typeUdtFilterInput {
  eq: coordinates_typeUdtInput
  notEq: coordinates_typeUdtInput
  gt: coordinates_typeUdtInput
  gte: coordinates_typeUdtInput
  lt: coordinates_typeUdtInput
  lte: coordinates_typeUdtInput
  in: [coordinates_typeUdtInput]
}

input coordinates_typeUdtInput {
  latitude: Float32
  longitude: Float32
}

# The type used to represent results of a query for the table 'shops'.
type shops {
  shop_id: String
  address: address_typeUdt
  contact: contact_typeUdt
  coordinates: coordinates_typeUdt
  description: String
  name: String
  pictures: [String]
  tags: [String]
  type: String
  website: String
}

# The input type used for filtering with non-equality operators for the table 'shops'.
# Note that 'shop_id' is the field that corresponds to the table primary key.
input shopsFilterInput {
  shop_id: StringFilterInput
  address: address_typeUdtFilterInput
  contact: contact_typeUdtFilterInput
  coordinates: coordinates_typeUdtFilterInput
  description: StringFilterInput
  name: StringFilterInput
  pictures: ListStringFilterInput
  tags: ListStringFilterInput
  type: StringFilterInput
  website: StringFilterInput
}

# The input type for the table 'shops'.
# Note that 'shop_id' is the field that corresponds to the table primary key.
input shopsInput {
  shop_id: String
  address: address_typeUdtInput
  contact: contact_typeUdtInput
  coordinates: coordinates_typeUdtInput
  description: String
  name: String
  pictures: [String]
  tags: [String]
  type: String
  website: String
}

# The type used to represent results of a mutation for the table 'shops'.
type shopsMutationResult {
  applied: Boolean
  value: shops
}

# The enum used to order a query result based on one or more fields for the table 'shops'.
enum shopsOrder {
  shop_id_DESC
  shop_id_ASC
  address_DESC
  address_ASC
  contact_DESC
  contact_ASC
  coordinates_DESC
  coordinates_ASC
  description_DESC
  description_ASC
  name_DESC
  name_ASC
  pictures_DESC
  pictures_ASC
  tags_DESC
  tags_ASC
  type_DESC
  type_ASC
  website_DESC
  website_ASC
}

type shopsResult {
  pageState: String
  values: [shops!]
}

# The type used to represent results of a query for the table 'shops_by_location'.
type shops_by_location {
  longitude: Float32
  latitude: Float32
  shop_id: String
}

# The input type used for filtering with non-equality operators for the table 'shops_by_location'.
# Note that 'longitude', 'latitude' and 'shop_id' are the fields that correspond to the table primary key.
input shops_by_locationFilterInput {
  longitude: Float32FilterInput
  latitude: Float32FilterInput
  shop_id: StringFilterInput
}

# The input type for the table 'shops_by_location'.
# Note that 'longitude', 'latitude' and 'shop_id' are the fields that correspond to the table primary key.
input shops_by_locationInput {
  longitude: Float32
  latitude: Float32
  shop_id: String
}

# The type used to represent results of a mutation for the table 'shops_by_location'.
type shops_by_locationMutationResult {
  applied: Boolean
  value: shops_by_location
}

# The enum used to order a query result based on one or more fields for the table 'shops_by_location'.
enum shops_by_locationOrder {
  longitude_DESC
  longitude_ASC
  latitude_DESC
  latitude_ASC
  shop_id_DESC
  shop_id_ASC
}

type shops_by_locationResult {
  pageState: String
  values: [shops_by_location!]
}
`;

export default s;
