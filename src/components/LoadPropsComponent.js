import React from 'react'

class LoadPropsComponent extends React.Component {

    render() {
        if (this.props.loading) {
            return (
                <button>Load</button>
            )     
        } else {
            return (
                <div className='loader loader-animated'></div>
            )
        }
    }
}

export default LoadPropsComponent