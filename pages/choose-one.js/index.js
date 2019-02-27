import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

// Create initial index loop
Array.prototype.pairs = function(func) {
  for(var i = 0; i < this.length-1; i++) {
    for(var j=i; i < this.length-1; j++) {
      func([this(i)])
    }
  }
}

function setPairsIdx() {

}
// Update card
function getNextPair(){

}
// Record clicks
function postClick() {

}

const PairBoxes = (props) => {
  let pairBoxes = [];

  for (var i=0; i<2; i++) {
    pairBoxes.push(
      <Grid item xs={6} sm={4} key={i}>
        <Card
          value={i}>
          {i}
        </Card>
      </Grid>
    )
  }
};

function ChooseOne() {
  return (
    <div>
      <PairBoxes />
    </div>
  )
}

// Create 2 cards and keep looping

export default ChooseOne;
