import { GraphQLClient, gql } from "graphql-request";

export type Company = {
    id: string;
    name: string;
    description: string | null;
};

export type Job = {
    id: string;
    title: string;
    description: string | null;
};

export type JobWithCompany = Job & {
    company: Company;
}

const client = new GraphQLClient("http://localhost:9000/graphql");

export async function getJobs() {
    const query = gql`
        query Jobs {
            jobs {
                id
                title
                description
                company {
                    id
                    name
                    description
                }
            }
        }
    `;

    const { jobs } = await client.request<{ jobs: JobWithCompany[] }>(query);
    return jobs;
}

export async function getJob(id: string) {
    const query = gql`
    query JobById($id: ID!) {
        job (id: $id) {
            id
            title
            description
            company {
                id
                name
                description
            }
        }
    }
`;

    const { job } = await client.request<{ job: JobWithCompany }>(query, { id });
    return job;
}