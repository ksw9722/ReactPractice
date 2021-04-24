class HelloWorld extends React.Component {
    render() {
        React.createElement(
            'h1',
            this.props,
            'Hello World!!!!'
        );
    }
}

ReactDOM.render(React.createElement(HelloWorld, { id: 'hello' }), document.getElementById('kswtest'));
