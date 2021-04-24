class HelloWorld extends React.Component{
    render(){
        <h1 {... this.props}>Hello World!!!!</h1>
    }
}

ReactDOM.render(<HelloWorld id='hello'/>,document.getElementById('kswtest'));