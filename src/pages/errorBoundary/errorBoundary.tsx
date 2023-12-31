import React from 'react';
import ErrorPage from './errorPage';
import {Types} from '../../utils/types'
import {setError} from "../../utils/store/actionCreators";
import {connect} from "react-redux";
import {cli} from "webpack";


const ErrorBoundary: React.FC<Types.ErrorPageProps> = ({isError, errorMessage, children, setError}) =>  {
    // constructor(props: any) {
    //     super(props);
    //     this.state = {
    //         error: null,
    //         errorInfo: null,
    //         isError: false
    //     };
    // }

    // componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    //     this.setState({error, errorInfo}, ()=>{
    //         console.log(this.state);
    //     });
    //
    // }

    const clickHandler = () => {
        setError(false);
    };


    // render() {
        if (isError) {
            // return <ErrorPage errorMessage={this.state.error.toString()} errorStack={this.state.errorInfo.componentStack}/>
            return <h1 onClick={clickHandler}>ERRORRRR: {errorMessage}</h1>
        }
        return <>{children}</>
    // }
};


const mapStateToProps = (state: Types.State) => {
    return {isError: state.isError, errorMessage: state.errorMessage}
};
const mapDispatchToProps = {setError};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);