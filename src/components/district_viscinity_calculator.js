import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchAppointmentsSevenDays,saveCurrentViscinityDistricts } from '../actions/postActions';

import data from '../data/viscinity_districts_v2.json';

class ViscinityDistricts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viscinity_districts : data['Bagalkot']
    };
  }

  componentDidUpdate(prevProps) {
  if (this.props.pincode_details !== prevProps.pincode_details) {
    this.setState({
      viscinity_districts : data[this.props.pincode_details]
    })


    data[this.props.pincode_details].map((obj)=>{
        console.log('Array of viscinity districts',obj);
        this.props.fetchAppointmentsSevenDays(obj.district_id)
      });

    this.props.saveCurrentViscinityDistricts(data[this.props.pincode_details])

   }
  }



  render(){
  const listItems = this.state.viscinity_districts.map((number) =>
      <li>{number.district_id} - {number.district_name}</li>
    );
    return(
      <h1>
        <ul>{listItems}</ul>
      </h1>
    );
  }
}


const mapStateToProps = state => ({
  pincode_details: state.posts.pincode_details,
});


export default connect(mapStateToProps, { fetchAppointmentsSevenDays, saveCurrentViscinityDistricts })(ViscinityDistricts);
