import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import ErrorBoundary from '../../components/errorMsg';
import { Container__boxShadow } from '../../components/styles/container';
import generateRandomArr from './utils';
import data from './_data.json';

const UserRecord = (props) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>
          Game no.
        </TableCell>
        <TableCell>
          Your choices
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {props.records.map((el, idx) => (
        <TableRow key={idx}>
          <TableCell>{idx+1}</TableCell>
          <TableCell>{el}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

 const SingleBox = (props) => (
  <Grid item xs={6}>
    <Container__boxShadow
      className="text-center p-5"
      onClick={props.onUserClick}
    >
      <img src={`/static/choose-one/${props.image}`} className="img-fluid"/>
      <h3>{props.name}</h3>
    </Container__boxShadow>
  </Grid>
);


function ChooseOneGrid(props) {
  const [gameSelection, setGameSelection] = useState();
  let [gameIdx, setGameIdx] = useState(0);
  let [firstIdx, setFirstIdx] = useState();
  let [secondIdx, setSecondIdx] = useState();
  let [userRecord, setUserRecord] = useState([]);
  let temp = gameIdx;

  useEffect(() => {
    setGameSelection(generateRandomArr(5));
  }, []);

  useEffect(() => {
    if (typeof gameSelection !== 'undefined') {
      setFirstIdx(gameSelection[gameIdx][0]);
      setSecondIdx(gameSelection[gameIdx][1]);
    }
  });

  return (
    <div>
      <h2>Choose the image that you like</h2>
      <Grid container spacing={16}>
        <SingleBox
          onUserClick={() => {
            gameIdx < (gameSelection.length-1) &&
            userRecord.push(data.choices[firstIdx].name)
            setUserRecord(userRecord)
            setGameIdx(gameIdx+1)
          }}
          {...data.choices[firstIdx]}
        />
        <SingleBox
          onUserClick={() => {
            gameIdx < (gameSelection.length-1) &&
            userRecord.push(data.choices[secondIdx].name)
            setUserRecord(userRecord)
            setGameIdx(gameIdx+1)
          }}
          {...data.choices[secondIdx]}
        />
      </Grid>
      <UserRecord records={userRecord}/>
    </div>
  );
};

SingleBox.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onUserClick: PropTypes.func.isRequired,
};

UserRecord.propTypes = {
  records: PropTypes.array.isRequired,
}

export default ChooseOneGrid;
