
export const CheckRequest = ({ isLoading, isError, refetch, children }) => {

    if (isLoading) {
        return (
            <div className='all-screen'>
                <h2>Loading...</h2>
            </div>
        )
    } else if (isError){
        return (
            <></>
        )
    }

    return (
        <>
            {children}
        </>
    )
}