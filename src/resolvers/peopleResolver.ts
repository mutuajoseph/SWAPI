import { Query, Resolver, Arg } from 'type-graphql'
import { Person } from '../schemas/Person'

import httpClient from '../utils/api'


@Resolver(() => Person)
export class PeopleResolver {
    private people: Person[] = []
    private person: any


    @Query(() => [Person])
    async getPeople(
        @Arg("pageNumber", { defaultValue: 0 }) pageNumber: number,
        @Arg("search", { defaultValue: '' }) search: string,
    ): Promise<Person[]> {

        if (search) {
            httpClient.get(`/people/?search=${search}`)
            .then(res => this.people = res.data.results)
        }

        if (pageNumber) {
            httpClient.get(`/people/?page=${pageNumber}`)
            .then(res => this.people = res.data.results)
        }
        return await this.people
    }

    @Query(() => Person)
    async getPerson(
        @Arg("person") person: number,
    ): Promise<Person> {

        httpClient.get(`/people/${person}/`)
            .then(res => this.person = res.data)
        return await this.person
    }
}