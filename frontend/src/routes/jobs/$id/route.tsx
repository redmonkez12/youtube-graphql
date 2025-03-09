import { Loader } from '@/components/loader'
import { Button } from '@/components/ui/button'
import { getJob } from '@/graphql/queries'
import { createFileRoute, Link, redirect } from '@tanstack/react-router'
import { toast } from "sonner"

type GraphQLError = {
  message: string;
  locations?: { line: number; column: number }[];
  path?: string[];
  extensions?: Record<string, any>;
}

type GraphQLResponse = {
  errors?: GraphQLError[];
  data?: any;
}

const errors: Record<string, string> = {
  NOT_FOUND: "Job not found",
};

export const Route = createFileRoute('/jobs/$id')({
  loader: async ({ params }) => {
    const { id } = params

    try {
      return {
        job: await getJob(id),
      }
    } catch (e) {
      if (e && typeof e === 'object' && 'response' in e && 'errors' in (e.response as any)) {
        const graphqlError = e as { response: GraphQLResponse };
        console.log();
        for (const error of graphqlError.response.errors ?? []) {
          toast(errors[error.extensions?.code] ?? "Job not found");
        }
      } else {
        // Handle non-GraphQL errors
        console.error("Unknown error:", e);
        toast("An error occurred");
      }
      throw redirect({
        to: '/',
      })
    }
  },
  pendingComponent: () => <Loader />,
  component: RouteComponent,
})

function RouteComponent() {
  const { job } = Route.useLoaderData();

  return <div className="grid place-items-center">
    <div>
      <h1 className="text-2xl font-semibold">Job Detail</h1>

      <div className='flex items-cente gap-2'>
        <div className='font-semibold'>Title:</div>
        <div>{job.title}</div>
      </div>
      <div className='flex items-center gap-2'>
        <div className='font-semibold'>Description:</div>
        <div>{job.description}</div>
      </div>

      <Button asChild className='mt-4'>
        <Link to="/">Back</Link>
      </Button>
    </div>
  </div>
}
