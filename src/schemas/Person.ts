import { Field, ObjectType } from 'type-graphql'

@ObjectType()
class Film {
    @Field()
    url: string
}

@ObjectType()
class Specie {
    @Field()
    url: string
}

@ObjectType()
class Vehicle {
    @Field()
    url: string
}

@ObjectType()
class Starship {
    @Field()
    url: string
}

@ObjectType()
export class Person {

    @Field()
    name: string
    
    @Field()
    height: string

    @Field()
    mass: string

    @Field()
    hair_color: string

    @Field()
    skin_color: string

    @Field()
    eye_color: string

    @Field()
    birth_year: string

    @Field()
    gender: string

    @Field()
    homeworld: string

    @Field(() => Film)
    films: [Film]

    @Field(() => Specie)
    species: [Specie]

    @Field(() => Vehicle)
    vehicles: [Vehicle]

    @Field(() => Starship)
    starships: [Starship]

    @Field()
    created: string

    @Field()
    edited: string

    @Field()
    url: string
}
