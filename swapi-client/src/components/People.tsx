
import gql from "graphql-tag"
import { useQuery } from "react-apollo"

const PEOPLE_QUERY = gql`
    {
        getPeople(pageNumber: 1) {
            height
        }
    }
`

function People() {
  const {loading, error, data} = useQuery(PEOPLE_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) console.log(error)
  console.log(data)
  
  return (
    <div>
        Test
    </div>
  )
}

export default People