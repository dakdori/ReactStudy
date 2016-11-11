
var TextAreaCounter = React.createClass({
  name: 'TextAreaCounter_Name',
  displayName: 'TextAreaCounter_DPName',
  
  //property validation
  propTypes: {
    defaultValue: React.PropTypes.string
  },

  //property 없을 경우 초기값
  getDefaultProps: function(){
    return {
      defaultValue: ''
    };
  },

  //state 초기화
  getInitialState: function(){
    return{
      text: this.props.defaultValue
    }
  },

  render: function(){
    return React.DOM.div(null,
      React.DOM.textarea({
        defaultValue: this.state.text,
        onChange: this._textChange
      }),
      React.DOM.h3(null, this.state.text.length)
    );
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
    //property 전달
    defaultValue: 'Bob',
  }),
  document.getElementById('app')
);