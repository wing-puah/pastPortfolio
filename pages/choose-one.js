import { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { Container__boxShadow } from '../components/styles/container';
import generateRandomArr from '../components/choose-one/utils';
import data from '../components/choose-one/_data.json';

const UserRecord = (props) => {
  const { records } = props;

  return (
    <Table {...props}>
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
        {records.map((el, idx) => (
          <TableRow key={idx}>
            <TableCell>{idx + 1}</TableCell>
            <TableCell>{el}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const SingleBox = (props) => {
  const { onUserClick, image, name } = props;

  return (
    <Grid item xs={6}>
      <Container__boxShadow
        className="text-center p-2 p-sm-5 border height--full"
        onClick={onUserClick}
      >
        <img src={`/static/choose-one/${image}`} className="img-fluid" alt={name} />
        <h3>{name}</h3>
      </Container__boxShadow>
    </Grid>
  );
};


function ChooseOneGrid() {
  const [gameSelection, setGameSelection] = useState();
  const [gameIdx, setGameIdx] = useState(null);
  const [firstIdx, setFirstIdx] = useState();
  const [secondIdx, setSecondIdx] = useState();
  let [userRecord, setUserRecord] = useState([]);

  useEffect(() => {
    setGameSelection(generateRandomArr(5));
    setGameIdx(0);
  }, []);

  useEffect(() => {
    if (typeof gameSelection !== 'undefined' && gameIdx < (gameSelection.length - 1)) {
      setFirstIdx(gameSelection[gameIdx][0]);
      setSecondIdx(gameSelection[gameIdx][1]);
    }
  }, [gameIdx]);

  const updateRecords = (userChoice) => {
    console.log(userChoice)
    if (gameIdx < (gameSelection.length - 1)) {
      userRecord.push(userChoice);
      setGameIdx(gameIdx + 1);
    }
  };

  return (
    <div>
      <h2>Choose the image that you like</h2>
      <Grid container spacing={16}>
        <SingleBox
          onUserClick={() => updateRecords(data.choices[firstIdx].name)}
          {...data.choices[firstIdx]}
        />
        <SingleBox
          onUserClick={() => updateRecords(data.choices[secondIdx].name)}
          {...data.choices[secondIdx]}
        />
      </Grid>
      <UserRecord records={userRecord} className="my-5" />
    </div>
  );
}

SingleBox.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onUserClick: PropTypes.func.isRequired,
};

UserRecord.propTypes = {
  records: PropTypes.array.isRequired,
};

export default ChooseOneGrid;
