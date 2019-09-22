import { ApolloServer, gql, PubSub, withFilter } from 'apollo-server';
import {
  idArg,
  queryType,
  stringArg,
  subscriptionField,
  objectType
} from 'nexus';
import {
  makePrismaSchema,
  prismaObjectType,
  prismaInputObjectType
} from 'nexus-prisma';
import * as path from 'path';
import datamodelInfo from './generated/nexus-prisma';
import { prisma } from './generated/prisma-client';

const pubsub = new PubSub();
const NEW_EMPLOYEE = 'NEW_EMPLOYEE';

const Employee = prismaObjectType({
  name: 'Employee',
  description: 'Employee of a company(Employer)',
  definition(t) {
    t.prismaFields([
      'email',
      'id',
      'name',
      'updatedAt',
      'photo_url',
      'createdAt',
      {
        name: 'employer',
        args: []
      }
    ]);
  }
});

const Employer = prismaObjectType({
  name: 'Employer',
  description: 'Also known as a company that has employees',
  definition(t) {
    t.prismaFields([
      '*',
      {
        name: 'employees',
        args: []
      }
    ]);
    t.int('num_employees', {
      description: 'Number of employees under a employer',
      resolve: async ({ id }, {}, { prisma }) => {
        const employees = await prisma.employees({
          where: { employer: { id } }
        });
        return employees.length;
      }
    });
  }
});

const Query = prismaObjectType({
  name: 'Query',
  definition: t => t.prismaFields(['*'])
});

const Mutation = prismaObjectType({
  name: 'Mutation',
  definition: t => t.prismaFields(['*'])
});

const NewEmployeeSubscription = subscriptionField('newEmployee', {
  type: 'Employee',
  description:
    'Shows the list of employees in real time for a particular employer',
  args: {
    employer_id: stringArg({
      required: true,
      description: 'Id of the employer'
    })
  },
  subscribe: async (_, { employer_id }, { prisma }) =>
    prisma.$subscribe
      .employee({
        mutation_in: ['CREATED'],
        node: { employer: { id: employer_id } }
      })
      .node(),
  resolve: payload => payload
});

const schema = makePrismaSchema({
  // Provide all the GraphQL types we've implemented
  types: [Query, Mutation, Employer, Employee, NewEmployeeSubscription],

  // Configure the interface to Prisma
  prisma: {
    datamodelInfo,
    client: prisma
  },

  // Specify where Nexus should put the generated files
  outputs: {
    schema: path.join(__dirname, './generated/schema.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts')
  },

  // Configure nullability of input arguments: All arguments are non-nullable by default
  nonNullDefaults: {
    input: false,
    output: false
  },

  // Configure automatic type resolution for the TS representations of the associated types
  typegenAutoConfig: {
    sources: [
      {
        source: path.join(__dirname, './types.ts'),
        alias: 'types'
      }
    ],
    contextType: 'types.Context'
  }
});

const server = new ApolloServer({
  schema,
  context: { prisma }
});

server.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000`)
);
