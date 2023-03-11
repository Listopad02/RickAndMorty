import { useState } from 'react'
import { setStatus, setGender } from "../../store/filtersSlice"
import { useDispatch } from "react-redux"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./Filters.css"

const Filters = () => {
  const [status, setStatusState] = useState('')
  const [gender, setGenderState] = useState('')
  const dispatch = useDispatch();

  return (
    <div className="filters">
      <FormControl>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="status"
          id="status"
          label="Status"
          value={status}
          onChange={e => {
            dispatch(setStatus(e.target.value))
            setStatusState(e.target.value)
          }}
          sx={{ width: "150px" }}
          className="filters-select"
        >
          <MenuItem value="alive">Alive</MenuItem>
          <MenuItem value="dead">Dead</MenuItem>
          <MenuItem value="unknown">Unknown</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
      <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="gender"
          id="gender"
          label="Gender"
          value={gender}
          onChange={e => {
            dispatch(setGender(e.target.value))
            setGenderState(e.target.value)
          }}
          sx={{ width: "150px" }}
          className="filters-select"
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="genderless">Genderless</MenuItem>
          <MenuItem value="unknown">Unknown</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default Filters