GraphQL

-> GraphQL is a query language for APIs and a runtime for fulfilling those queries with existing data. Basically, it is used to load data from a server to a client -- it’s a way to get data from an API into your application. And as you’ll see, it does this in a much more efficient manner than traditional methods and services.

-> GraphQL was developed by Facebook in 2012 because the team needed “a data-fetching API powerful enough to describe all of Facebook, yet simple enough to be easy to learn and use by our product developers” when building the mobile applications. Since then, the querying language has steadily grown in popularity -- in part to Facebook open-sourcing the language in 2016. GraphQL has proven to be incredibly effective for building modern mobile and web, giving developers a flexible, rich technology for extracting data that is more efficient and less sprawling than REST APIs. The real secret is that GraphQL ensures that the developer and application only loads the relevant and absolute necessary data, even if it's from multiple sources.

GraphQL has three main characteristics:

***(1)***It lets the client specify exactly what data it needs.

***(2)***It makes it easier to aggregate data from multiple sources.

***(3)***It uses a type system to describe data.

-> With GraphQL, the user is able to make a single call to fetch the required information rather than to construct several REST requests to fetch the same. A GraphQL query is a string that is sent to a server to be interpreted and fulfilled, which then returns JSON back to the client.

"GitHub uses GraphQL as it offers more flexibility for the developers. The option to precisely generate the information that a user wants is a great advantage over sending multiple REST calls to receive the same. To generate the information using REST calls would require a two stage process — One to gather the information of the user and the other to fetch the information about the organization the user is associated with. GraphQL helps alleviate this two-step process."

Difference between GraphQL and Rest

-> GraphQL is much different than a standard REST API where we typically have a specific endpoint or resource we’re hitting that determines an entire block of data that comes back in the returning JSON response, which then needs to be parsed and scattered.

-> GraphQL is instead established around schema, queries, and resolvers and rather aims to improve upon the REST philosophy by allowing you to ask for a specific piece of data -- not just the entire block. No need for parsing through a long stream of data -- you only get what you ask for. And what you ask for could be compiled from several different REST APIs.

-> However, let’s remember GraphQL and REST are two different things -- GraphQL is a language and a technology, while REST is an architecture pattern, which means that even as teams increasingly adopt GraphQL, it does not mean the end of the road for REST.

-> GraphQL has only one endpoint, where we send all our queries. With a REST approach, we create multiple endpoints and use HTTP verbs to distinguish read actions (GET) and write actions (POST, PUT, DELETE). GraphQL does not use HTTP verbs to determine the request type.

-> With REST, you generally cannot choose what the server returns back to you, unless the server implements partial responses using sparse fieldsets, and clients use that feature. The API maintainer cannot enforce such filtering. With GraphQL you explicitly request just the information you need, you don’t “opt out” from the full response default, but it’s mandatory to pick the fields you want.

-> With REST usually there is no way to determine if a field is needed by the client, so when it comes to refactoring or deprecating, it’s impossible to determine actual usage. GraphQL makes it possible to track which fields are used by clients.

-> A REST API is based on JSON which cannot provide type control. GraphQL has a Type System.

Which one is better? Organizations around the world are questioning their API technology choices and they are trying to find out if migrating from REST to GraphQL is best for their needs. GraphQL is a perfect fit when you need to expose complex data representations, and when clients might need only a subset of the data, or they regularly perform nested queries to get the data they need. As with programming languages, there is no single winner, it all depends on your needs.Also, there’s a point I want to make: you can use both. You can mix and match REST and GraphQL depending on your needs, and sometimes it’s the best thing to do.

-> HTTP already implements caching, and REST is implemented using HTTP, the client can use HTTP caching to avoid refetching resources. GraphQL has no caching mechanism in place, hence leaving the clients with the responsibility of taking care of caching on their end.

Schema

-> A GraphQL schema is at the core of any GraphQL server implementation. It describes the functionality available to the client applications that connect to it. We can use any programming language to create a GraphQL schema and build an interface around it. The GraphQL runtime defines a generic graph-based schema to publish the capabilities of the data service it represents. Client applications can query the schema within its capabilities. This approach decouples clients from servers and allows both to evolve and scale independently.

-> A GraphQL schema is a description of the data clients can request from a GraphQL API. It also defines the queries and mutation functions that the client can use to read and write data from the GraphQL server. In other words, you specify your client or application UI data requirements in your GraphQL schema.

-> The GraphQL schema is at the center of every GraphQL server. It defines the server's API, allowing clients to know which operations can be performed by the server. The schema is written using the GraphQL schema language (also called schema definition language, SDL). With it, you can define object types and fields to represent data that can be retrieved from the API as well as root types that define the group of operations that the API allows. The root types are the query type, mutation type, and subscription type, which are the three types of operations you can run request from a GraphQL server. The query type is compulsory for any GraphQL schema, while the other two are optional. While we can define custom types in the schema, the GraphQL specification also defines a set of built-in scalar types. They are Int, Float, Boolean, String, and ID.

Resolvers

-> Resolver is a collection of functions that generate response for a GraphQL query. In simple terms, a resolver acts as a GraphQL query handler. Every resolver function in a GraphQL schema accepts four positional arguments as given below − fieldName:(root, args, context, info) => { result } These arguments have the following meanings and conventional names:

(1) obj: The object that contains the result returned from the resolver on the parent field, or, in the case of a top-level Query field, the rootValue passed from the server configuration. This argument enables the nested nature of GraphQL queries.

(2) args: An object with the arguments passed into the field in the query. For example, if the field was called with author(name: "Ada"), the args object would be: { "name": "Ada" }.

(3) context: This is an object shared by all resolvers in a particular query, and is used to contain per-request state, including authentication information, dataloader instances, and anything else that should be taken into account when resolving the query.

(4) info: This argument should only be used in advanced cases, but it contains information about the execution state of the query, including the field name, path to the field from the root, and more.

-> In order to respond to queries, a schema needs to have resolvers for all fields. Resolvers are per field functions that are given a parent object, arguments, and the execution context, and are responsible for returning a result for that field. Resolvers cannot be included in the GraphQL schema language, so they must be added separately. The collection of resolvers is called the "resolver map". The resolverMap object (IResolvers) should have a map of resolvers for each relevant GraphQL Object Type.