import { Loader } from '@/components/loader'
import { Button } from '@/components/ui/button'
import { getJob } from '@/graphql/queries'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/jobs/$id')({
  loader: async ({ params }) => {
    const { id } = params

    return {
      job: await getJob(id),
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
