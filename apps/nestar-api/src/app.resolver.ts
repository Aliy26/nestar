import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class AppResolver {
	@Query(() => String)
	public sayHello(): string {
		return "GraphQL API Server";
	}
}

function sayHello(): any {
	throw new Error("Function not implemented.");
}
