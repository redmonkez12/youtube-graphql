import { Loader } from '@/components/loader';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { getJobs } from '@/graphql/queries';
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  loader: async () => {
    return {
      jobs: await getJobs(),
    }
  },
  pendingComponent: () => <Loader />,
  component: () => {
    const { jobs } = Route.useLoaderData();

    return (
      <div className="grid place-items-center">
        <h1 className="text-2xl font-semibold">Job Board</h1>

        <div className="flex gap-4 flex-wrap mt-4">
          {jobs.map(job => (
            <Card key={job.id}>
              <CardHeader>
                <CardTitle><span className="font-normal">{job.company.name}</span>  : {job.title}</CardTitle>
                <CardDescription>{job.description}</CardDescription>
                <CardContent className='px-0'>
                  <Button asChild className='w-full'>
                    <Link to="/jobs/$id" params={{ id: job.id }}>Detail</Link>
                  </Button>
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    )
  },
})
