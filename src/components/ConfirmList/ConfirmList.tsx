import {
  Box,
  Card,
  CardContent,
  makeStyles,
  Theme,
  Dialog,
  Tabs,
  Tab,
} from '@material-ui/core';
import React, { FC } from 'react';
import { ConfirmOrderContainer } from '../../containers';
import { ConfirmListProps } from './ConfirmListProps';
import RefuseDialog from './RefuseDialog';
import SwipeableViews from 'react-swipeable-views';
import { ConfirmTable } from '..';
import { TabPanel, a11yProps } from '../TabPanel';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 'calc(100vh - 48px)',
  },
  card: {
    paddingBottom: theme.spacing(3),
    margin: theme.spacing(3),
    width: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100% - 80px)',
    alignItems: 'center',
  },
}));

const ConfirmList: FC<ConfirmListProps> = ({
  orders,
  id,
  handleClickOpen,
  handleClose,
  refuseDialog,
  handleOpenRefuseDialog,
  handleCloseRefuseDialog,
  formikRefuse,
}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const classes = useStyles();
  return (
    <>
      <Box className={classes.root} display="flex" justifyContent="center">
        <Card className={classes.card}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Ожидают обработки" {...a11yProps(0)} />
            <Tab label="Отклонены" {...a11yProps(1)} />
          </Tabs>
          <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
            <TabPanel index={0} value={value}>
              <CardContent>
                <ConfirmTable
                  orders={orders}
                  handleClickOpen={handleClickOpen}
                />
              </CardContent>
            </TabPanel>
          </SwipeableViews>
        </Card>
      </Box>
      <Dialog
        open={Boolean(id)}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <ConfirmOrderContainer
          orders={orders}
          orderId={id}
          handleClose={handleClose}
          handleOpenRefuseDialog={handleOpenRefuseDialog}
        />
      </Dialog>
      <Dialog
        open={refuseDialog}
        onClose={handleCloseRefuseDialog}
        aria-labelledby="refuse-dialog"
      >
        <RefuseDialog
          handleCloseRefuseDialog={handleCloseRefuseDialog}
          formikRefuse={formikRefuse}
        />
      </Dialog>
    </>
  );
};

export default ConfirmList;
