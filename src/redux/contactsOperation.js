// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';
import axios from 'axios';

axios.defaults.baseURL = 'https://625d8fc34c36c7535776c3a0.mockapi.io/contacts';

export const asyncGetContacts = () => dispatch => {
  dispatch({ type: 'contacts/getContactsPending' });

  axios
    .get('/contacts')
    .then(({ data }) =>
      dispatch({ type: 'contacts/getContactsFulfilled', payload: data })
    )
    .catch(error =>
      dispatch({ type: 'contacts/getContactsRejected', payload: error })
    );
};
