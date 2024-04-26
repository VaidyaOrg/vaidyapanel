import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Reimbursement = () => {
  return (
    <div>
      <Typography variant="h3">About Reimbursement</Typography>
      <Typography variant="body1">Paragraph 2</Typography>

      <Typography variant="h3">Reimbursement Rules</Typography>
      <List>
        <ListItem>
          <ListItemText>Rule 1</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Rule 2</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Rule 3</ListItemText>
        </ListItem>
      </List>
    </div>
  );
}

export default Reimbursement;
