import { FETCH_POSTS, NEW_POST, PINCODE_DETAILS , SOURCE_COORDINATES,
  VISCINITY_DISTRICT_APPOINTMENTS, CURRENCT_VISCINITY_DISTRICTS, AVAILAIBLE_APPOINTMENTS} from '../actions/types';

const initialState = {
  items: [],
  item: {},
  pincode_details : '',
  source_coordinates : {},
  viscinity_appointments : [],
  current_viscinity_districts:{},
  availaible_apointments:{}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    case PINCODE_DETAILS:
      const temp=action.payload
      return {
        ...state,
        pincode_details: temp[0].PostOffice[0].District,
        viscinity_appointments : []
      };
    case SOURCE_COORDINATES:
      const geometry=action.payload
      return {
        ...state,
        source_coordinates:  geometry.results[0].geometry.location
      };
    case VISCINITY_DISTRICT_APPOINTMENTS:
      var viscinity_districts_results=state.viscinity_appointments
      console.log('initial viscinity_districts_results', viscinity_districts_results);
      viscinity_districts_results=viscinity_districts_results.concat(action.payload)
      console.log('viscinity_districts_results action payload', action.payload.centers);
      console.log('viscinity_districts_results', viscinity_districts_results);
      return {
        ...state,
        viscinity_appointments:  viscinity_districts_results
      };

      case CURRENCT_VISCINITY_DISTRICTS:
        return {
          ...state,
          current_viscinity_districts: action.payload
        };

      case AVAILAIBLE_APPOINTMENTS:
      console.log('availaible_appointments', action.payload);
        return {
          ...state,
          availaible_apointments: action.payload
        };
    default:
      return state;
  }
}
