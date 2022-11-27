import { useParams } from "react-router-dom"
import { CheckRequest } from "../components/CheckRequest"
import { useGetNotesByJournalIdQuery } from "../libraries/api/apiSlice"

const JournalDetails = () => {
  const { journalId } = useParams()

  const {
    data: notes,
    isLoading,
    isError,
    refetch,
  } = useGetNotesByJournalIdQuery(journalId)

  return (
    <CheckRequest isLoading={isLoading} isError={isError} refetch={refetch}>
      <div>
        {notes !== undefined ? (
          notes.data.map((note) => <h1>{note.title}</h1>)
        ) : (
          <></>
        )}
      </div>
    </CheckRequest>
  )
}

export default JournalDetails
