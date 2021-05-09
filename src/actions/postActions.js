import { FETCH_POSTS, NEW_POST, PINCODE_DETAILS , SOURCE_COORDINATES,
  VISCINITY_DISTRICT_APPOINTMENTS,CURRENCT_VISCINITY_DISTRICTS,AVAILAIBLE_APPOINTMENTS} from './types';

export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = postData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};


export const fetchPincodeDetails = (pincode) => dispatch => {
  fetch('https://api.postalpincode.in/pincode/'+pincode)
    .then(res => res.json())
    .then(det =>
      dispatch({
        type: PINCODE_DETAILS,
        payload: det
      })
    );
};


const key='AIzaSyClA6HV63Vtbw1BPKwGiAr7MU23g20usfQ'

export const fetchPincodeLattitudeLongitude = (pincode) => dispatch => {
  fetch('https://maps.googleapis.com/maps/api/geocode/json?address='+pincode+'&key='+key)
    .then(res => res.json())
    .then(cordinates =>
      dispatch({
        type: SOURCE_COORDINATES,
        payload: cordinates
      })
    );
};

const headers_dict={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}
export const fetchAppointmentsSevenDays = (district_id) => dispatch => {
  fetch('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id='+district_id+'&date=09-05-2021', {headers : headers_dict})
    .then(res => res.json())
    .then(cordinates =>
      dispatch({
        type: VISCINITY_DISTRICT_APPOINTMENTS,
        payload: cordinates
      })
    );
};

export const saveCurrentViscinityDistricts = (item) => dispatch => {
      dispatch({
        type: CURRENCT_VISCINITY_DISTRICTS,
        payload: item
      })
};

export const saveAvailaibleAppointments= (item) => dispatch => {
      dispatch({
        type: AVAILAIBLE_APPOINTMENTS,
        payload: item
      })
};
