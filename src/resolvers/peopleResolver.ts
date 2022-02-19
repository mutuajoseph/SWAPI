import { Query, Resolver, Arg} from 'type-graphql'
import { Person } from '../schemas/Person'

import httpClient from '../utils/api'


@Resolver(() => Person)
export class PeopleResolver {
    private people: Person[] = []
    private peopleSearch: Person[] = [] 


    @Query(() => [Person])
    async getPeople(
        @Arg("pageNumber", {defaultValue: 1}) pageNumber: number,
        ): Promise<Person[]> {

        httpClient.get(`/people/?page=${pageNumber}`)
        .then(res => this.people = res.data.results)
        return await this.people
    }

    @Query(() => [Person])
    async searchPerson(
        @Arg("search", {defaultValue: ''}) search: string,
        ): Promise<Person[]> {

        httpClient.get(`/people/?search=${search}`)
        .then(res => this.peopleSearch = res.data.results)
        return await this.peopleSearch
    }
}