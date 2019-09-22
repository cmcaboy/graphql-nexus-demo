// Code generated by Prisma (prisma@1.34.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateEmployee {
  count: Int!
}

type AggregateEmployer {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Employee {
  id: ID!
  name: String!
  email: String!
  photo_url: String
  createdAt: DateTime!
  updatedAt: DateTime!
  status: Boolean
  employer: Employer
}

type EmployeeConnection {
  pageInfo: PageInfo!
  edges: [EmployeeEdge]!
  aggregate: AggregateEmployee!
}

input EmployeeCreateInput {
  id: ID
  name: String!
  email: String!
  photo_url: String
  status: Boolean
  employer: EmployerCreateOneWithoutEmployeesInput
}

input EmployeeCreateManyWithoutEmployerInput {
  create: [EmployeeCreateWithoutEmployerInput!]
  connect: [EmployeeWhereUniqueInput!]
}

input EmployeeCreateWithoutEmployerInput {
  id: ID
  name: String!
  email: String!
  photo_url: String
  status: Boolean
}

type EmployeeEdge {
  node: Employee!
  cursor: String!
}

enum EmployeeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  photo_url_ASC
  photo_url_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  status_ASC
  status_DESC
}

type EmployeePreviousValues {
  id: ID!
  name: String!
  email: String!
  photo_url: String
  createdAt: DateTime!
  updatedAt: DateTime!
  status: Boolean
}

input EmployeeScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  photo_url: String
  photo_url_not: String
  photo_url_in: [String!]
  photo_url_not_in: [String!]
  photo_url_lt: String
  photo_url_lte: String
  photo_url_gt: String
  photo_url_gte: String
  photo_url_contains: String
  photo_url_not_contains: String
  photo_url_starts_with: String
  photo_url_not_starts_with: String
  photo_url_ends_with: String
  photo_url_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  status: Boolean
  status_not: Boolean
  AND: [EmployeeScalarWhereInput!]
  OR: [EmployeeScalarWhereInput!]
  NOT: [EmployeeScalarWhereInput!]
}

type EmployeeSubscriptionPayload {
  mutation: MutationType!
  node: Employee
  updatedFields: [String!]
  previousValues: EmployeePreviousValues
}

input EmployeeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EmployeeWhereInput
  AND: [EmployeeSubscriptionWhereInput!]
  OR: [EmployeeSubscriptionWhereInput!]
  NOT: [EmployeeSubscriptionWhereInput!]
}

input EmployeeUpdateInput {
  name: String
  email: String
  photo_url: String
  status: Boolean
  employer: EmployerUpdateOneWithoutEmployeesInput
}

input EmployeeUpdateManyDataInput {
  name: String
  email: String
  photo_url: String
  status: Boolean
}

input EmployeeUpdateManyMutationInput {
  name: String
  email: String
  photo_url: String
  status: Boolean
}

input EmployeeUpdateManyWithoutEmployerInput {
  create: [EmployeeCreateWithoutEmployerInput!]
  delete: [EmployeeWhereUniqueInput!]
  connect: [EmployeeWhereUniqueInput!]
  set: [EmployeeWhereUniqueInput!]
  disconnect: [EmployeeWhereUniqueInput!]
  update: [EmployeeUpdateWithWhereUniqueWithoutEmployerInput!]
  upsert: [EmployeeUpsertWithWhereUniqueWithoutEmployerInput!]
  deleteMany: [EmployeeScalarWhereInput!]
  updateMany: [EmployeeUpdateManyWithWhereNestedInput!]
}

input EmployeeUpdateManyWithWhereNestedInput {
  where: EmployeeScalarWhereInput!
  data: EmployeeUpdateManyDataInput!
}

input EmployeeUpdateWithoutEmployerDataInput {
  name: String
  email: String
  photo_url: String
  status: Boolean
}

input EmployeeUpdateWithWhereUniqueWithoutEmployerInput {
  where: EmployeeWhereUniqueInput!
  data: EmployeeUpdateWithoutEmployerDataInput!
}

input EmployeeUpsertWithWhereUniqueWithoutEmployerInput {
  where: EmployeeWhereUniqueInput!
  update: EmployeeUpdateWithoutEmployerDataInput!
  create: EmployeeCreateWithoutEmployerInput!
}

input EmployeeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  photo_url: String
  photo_url_not: String
  photo_url_in: [String!]
  photo_url_not_in: [String!]
  photo_url_lt: String
  photo_url_lte: String
  photo_url_gt: String
  photo_url_gte: String
  photo_url_contains: String
  photo_url_not_contains: String
  photo_url_starts_with: String
  photo_url_not_starts_with: String
  photo_url_ends_with: String
  photo_url_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  status: Boolean
  status_not: Boolean
  employer: EmployerWhereInput
  AND: [EmployeeWhereInput!]
  OR: [EmployeeWhereInput!]
  NOT: [EmployeeWhereInput!]
}

input EmployeeWhereUniqueInput {
  id: ID
}

type Employer {
  id: ID!
  name: String!
  email: String!
  photo_url: String
  createdAt: DateTime!
  updatedAt: DateTime!
  employees(where: EmployeeWhereInput, orderBy: EmployeeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Employee!]
}

type EmployerConnection {
  pageInfo: PageInfo!
  edges: [EmployerEdge]!
  aggregate: AggregateEmployer!
}

input EmployerCreateInput {
  id: ID
  name: String!
  email: String!
  photo_url: String
  employees: EmployeeCreateManyWithoutEmployerInput
}

input EmployerCreateOneWithoutEmployeesInput {
  create: EmployerCreateWithoutEmployeesInput
  connect: EmployerWhereUniqueInput
}

input EmployerCreateWithoutEmployeesInput {
  id: ID
  name: String!
  email: String!
  photo_url: String
}

type EmployerEdge {
  node: Employer!
  cursor: String!
}

enum EmployerOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  photo_url_ASC
  photo_url_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type EmployerPreviousValues {
  id: ID!
  name: String!
  email: String!
  photo_url: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type EmployerSubscriptionPayload {
  mutation: MutationType!
  node: Employer
  updatedFields: [String!]
  previousValues: EmployerPreviousValues
}

input EmployerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EmployerWhereInput
  AND: [EmployerSubscriptionWhereInput!]
  OR: [EmployerSubscriptionWhereInput!]
  NOT: [EmployerSubscriptionWhereInput!]
}

input EmployerUpdateInput {
  name: String
  email: String
  photo_url: String
  employees: EmployeeUpdateManyWithoutEmployerInput
}

input EmployerUpdateManyMutationInput {
  name: String
  email: String
  photo_url: String
}

input EmployerUpdateOneWithoutEmployeesInput {
  create: EmployerCreateWithoutEmployeesInput
  update: EmployerUpdateWithoutEmployeesDataInput
  upsert: EmployerUpsertWithoutEmployeesInput
  delete: Boolean
  disconnect: Boolean
  connect: EmployerWhereUniqueInput
}

input EmployerUpdateWithoutEmployeesDataInput {
  name: String
  email: String
  photo_url: String
}

input EmployerUpsertWithoutEmployeesInput {
  update: EmployerUpdateWithoutEmployeesDataInput!
  create: EmployerCreateWithoutEmployeesInput!
}

input EmployerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  photo_url: String
  photo_url_not: String
  photo_url_in: [String!]
  photo_url_not_in: [String!]
  photo_url_lt: String
  photo_url_lte: String
  photo_url_gt: String
  photo_url_gte: String
  photo_url_contains: String
  photo_url_not_contains: String
  photo_url_starts_with: String
  photo_url_not_starts_with: String
  photo_url_ends_with: String
  photo_url_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  employees_every: EmployeeWhereInput
  employees_some: EmployeeWhereInput
  employees_none: EmployeeWhereInput
  AND: [EmployerWhereInput!]
  OR: [EmployerWhereInput!]
  NOT: [EmployerWhereInput!]
}

input EmployerWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createEmployee(data: EmployeeCreateInput!): Employee!
  updateEmployee(data: EmployeeUpdateInput!, where: EmployeeWhereUniqueInput!): Employee
  updateManyEmployees(data: EmployeeUpdateManyMutationInput!, where: EmployeeWhereInput): BatchPayload!
  upsertEmployee(where: EmployeeWhereUniqueInput!, create: EmployeeCreateInput!, update: EmployeeUpdateInput!): Employee!
  deleteEmployee(where: EmployeeWhereUniqueInput!): Employee
  deleteManyEmployees(where: EmployeeWhereInput): BatchPayload!
  createEmployer(data: EmployerCreateInput!): Employer!
  updateEmployer(data: EmployerUpdateInput!, where: EmployerWhereUniqueInput!): Employer
  updateManyEmployers(data: EmployerUpdateManyMutationInput!, where: EmployerWhereInput): BatchPayload!
  upsertEmployer(where: EmployerWhereUniqueInput!, create: EmployerCreateInput!, update: EmployerUpdateInput!): Employer!
  deleteEmployer(where: EmployerWhereUniqueInput!): Employer
  deleteManyEmployers(where: EmployerWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  employee(where: EmployeeWhereUniqueInput!): Employee
  employees(where: EmployeeWhereInput, orderBy: EmployeeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Employee]!
  employeesConnection(where: EmployeeWhereInput, orderBy: EmployeeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EmployeeConnection!
  employer(where: EmployerWhereUniqueInput!): Employer
  employers(where: EmployerWhereInput, orderBy: EmployerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Employer]!
  employersConnection(where: EmployerWhereInput, orderBy: EmployerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EmployerConnection!
  node(id: ID!): Node
}

type Subscription {
  employee(where: EmployeeSubscriptionWhereInput): EmployeeSubscriptionPayload
  employer(where: EmployerSubscriptionWhereInput): EmployerSubscriptionPayload
}
`