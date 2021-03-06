const React = require('react');
const { Link } = require('react-router');

const { RadioButton } = require('mx-react-components');

const Markdown = require('components/Markdown');

class RadioButtonDocs extends React.Component {
  state = {
    selected: 'default'
  };

  _handleRadioClick = (selected) => {
    this.setState({
      selected
    });
  };

  render() {
    return (
      <div>
        <h1>
          Radio Button
          <label>A simple radio button used in forms</label>
        </h1>

        <h3>Demo</h3>
        <RadioButton
          checked={this.state.selected === 'default'}
          onClick={this._handleRadioClick.bind(null, 'default')}
        >
          Default Style
        </RadioButton>
        <RadioButton
          activeButtonStyle={{ backgroundColor: '#FBB600' }}
          buttonStyle={{ height: 30, width: 30 }}
          checked={this.state.selected === 'custom'}
          onClick={this._handleRadioClick.bind(null, 'custom')}
          style={{ marginTop: 20 }}
        >
          Custom Style
        </RadioButton>

        <h3>Usage</h3>
        <h5>activeButtonStyle <label>Object</label></h5>
        <p>A style object that modifies the CSS styles of the inner 'div' element that creates the checked indicator for the radio button.</p>

        <h5>buttonStyle <label>Object</label></h5>
        <p>A style object that modifies the CSS styles of the 'div' element that creates the radio button.</p>

        <h5>checked <label>Boolean</label></h5>
        <p>A boolean indicating if the radio button should show as checked.</p>

        <h5>children <label>Boolean</label></h5>
        <p>Optional content included between opening and closing tags such as a label.</p>

        <h5>onClick <label>Function</label></h5>
        <p>A callback function that will be triggered on component click.</p>

        <h5>style <label>Object</label></h5>
        <p>A style object that modifies the CSS styles of the 'div' element that wraps the component.</p>

        <h5>theme <label>Object</label></h5>
        <p>Customize the component&apos;s look. See <Link to='/components/theme'>Theme</Link> for more information.</p>

        <h5>elementProps <label>Object</label></h5>
        <p>Pass native HTML attributes directly to the button element.</p>

        <h3>Example</h3>
        <Markdown>
          {`
            <RadioButton
              activeButtonStyle={{ backgroundColor: '#FBB600' }}
              buttonStyle={{ height: 30, width: 30 }}
              checked={true}
              elementProps={{
                tabIndex: -1
              }}
              onClick={this._handleRadioClick}
              style={{ marginTop: 20 }}
            >
              Label
            </RadioButton>
          `}
        </Markdown>
      </div>
    );
  }
}

module.exports = RadioButtonDocs;
