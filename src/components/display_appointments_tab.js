import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveAvailaibleAppointments } from '../actions/postActions';

class DisplayAppointments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      unfiltered_appointments : []
    };
  }

  componentDidUpdate(prevProps) {
  var availaible_appointments=[]
  if (this.props.viscinity_appointments !== prevProps.viscinity_appointments) {
    if(this.props.viscinity_appointments.length===this.props.current_viscinity_districts.length){

      console.log(this.props.viscinity_appointments.length);
      console.log(this.props.current_viscinity_districts.length);

      this.props.viscinity_appointments.map((obj)=>{
        obj.centers.map((cent)=>{
          cent.sessions.map((sess )=>{
            if(sess.available_capacity>0){
              sess.center_name=cent.name
              sess.center_address=cent.address
              sess.district_name=cent.district_name
              sess.pincode=cent.pincode
              sess.fee_type=cent.fee_type
              delete sess.slots
              sess.cent_lat=1234
              sess.cent_long=2429
              availaible_appointments.push(sess)
            }
          })
        })
      });


    this.props.saveAvailaibleAppointments(availaible_appointments)
    }
   }
  }



  render(){

    return(
      <h1>
        PLACE HOLDER
      </h1>
    );
  }
}


const mapStateToProps = state => ({
  viscinity_appointments: state.posts.viscinity_appointments,
  current_viscinity_districts: state.posts.current_viscinity_districts
});


export default connect(mapStateToProps, { saveAvailaibleAppointments })(DisplayAppointments);
