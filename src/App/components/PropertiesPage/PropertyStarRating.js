import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

function PropertyStarRating() {
  const [value, setValue] = React.useState(2);

  return (
    <div>
      <div className="row">
        <Box style={{position: 'absolute', right: 45,}} component="fieldset" mb={6} borderColor="transparent">
          <Rating name="read-only" value={value} readOnly />
        </Box>
      </div>
    </div>
  );
}

export default PropertyStarRating
