import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPincodeDetails , fetchPincodeLattitudeLongitude} from '../actions/postActions';

class PinCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pincode: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const pincode=this.state.pincode
    this.props.fetchPincodeDetails(pincode);
    this.props.fetchPincodeLattitudeLongitude(pincode)
  }

  render() {

    return (
      <div>
        <h1>Please enter Pincode</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>PinCode: </label>
            <br />
            <input
              type="text"
              name="pincode"
              onChange={this.onChange}
              value={this.state.pincode}
            />
          </div>

          <br />
          <button type="submit">Submit</button>
        </form>

        <h5>
        <hr/>
          The correct district for the pincode entered is {this.props.pincode_details}
          <hr/>
          Source coordiantes are  {this.props.source_coordinates.lat}  {this.props.source_coordinates.lng }
        </h5>


      </div>
    );
  }
}

const mapStateToProps = state => ({
  pincode_details: state.posts.pincode_details,
  source_coordinates: state.posts.source_coordinates
});


export default connect(mapStateToProps, { fetchPincodeDetails , fetchPincodeLattitudeLongitude})(PinCode);
