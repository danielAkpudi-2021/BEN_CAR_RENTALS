import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core'; 
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

import DatePicker from './DatePicker';
import FormInput from './FormInput';

const AddressForm = ({ checkoutToken, next }) => {
    const methods = useForm();

    return (
        <>
            <Typography variant="h6" gutterBottom>customer details</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => next({ ...data }))}>
                    <Grid container spacing={3}>
                        <FormInput name='firstName' label='First name' />
                        <FormInput name='LastName' label='Last name' />
                        <FormInput name='address1' label='Address' />
                        <FormInput name='email' label='Email' />
                        <FormInput name='City' label='City' />
                        <FormInput name='zip' label='Zip / Postal code' />
                        {/* <DatePicker /> */}
                    </Grid>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button style={{  textTransform: 'lowercase' }} component={Link} to="/cars/cart" color="primary" variant="outlined">Back to Cart</Button>
                        <Button style={{  textTransform: 'lowercase' }} type="submit" variant="contained" color="primary">Next</Button>
                    </div>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
