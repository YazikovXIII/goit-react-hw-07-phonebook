// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { filterUser } from 'redux/filterSlice';

// export const Filter = () => {
//   const id = 'search-input';
//   const [filter, setFilter] = useState('');
//   const dispatch = useDispatch();
//   const changeFilter = ({ target }) => {
//     setFilter(target.value);
//     dispatch(filterUser(target.value));
//   };
//   return (
//     <div className="filterwrapper">
//       <label htmlFor={id}>Search by name</label>
//       <input id={id} type="text" value={filter} onChange={changeFilter} />
//     </div>
//   );
// };

import { useDispatch, useSelector } from 'react-redux';
import { change } from 'redux/filterSlice';
import { selectStatusFilter } from 'redux/selectors';

export const Filter = () => {
  const id = 'search-input';
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);
  const changeFilter = event => {
    dispatch(change(event.currentTarget.value));
  };

  return (
    <div className="filterwrapper">
      <label htmlFor={id}>Search by name</label>
      <input id={id} type="text" value={filter} onChange={changeFilter} />
    </div>
  );
};
