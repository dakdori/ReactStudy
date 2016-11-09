
var TextAreaCounter = React.createClass({
  name: 'TextAreaCounter_Name',
  displayName: 'TextAreaCounter_DPName',
  propTypes: {
    defaultValue: React.PropTypes.string
  },
  getDefaultProps: function(){
    return {
      defaultValue: ''
    };
  },
  render: function(){
    return React.DOM.div(null,
      React.DOM.textarea({
        defaultValue: this.props.text,
        onChange: this._textChange
      }),
      React.DOM.h3(null, this.props.text.length)
    );
  },
  getInitialState: function(){
    return{
      text: this.props.defaultValue
    }
  },
  _textChange: function(ev){
    this.setState({
      text: ev.target.value
    });
  }
});

//소비자
var myTextAreaCounter = ReactDOM.render(
  React.createElement(TextAreaCounter, {
    text: 'Bob',
  }),
  document.getElementById('app')
);