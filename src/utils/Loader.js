import { InfinitySpin } from 'react-loader-spinner'

export const LoaderComponent = () => {
    return (
        <div className="loader_container">
            <p>Please Wait...</p>
            <InfinitySpin
                width='200'
                color="rgb(84, 95, 196)"
            />
        </div>
    )
}