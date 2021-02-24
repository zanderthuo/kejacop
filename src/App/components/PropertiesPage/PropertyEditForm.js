import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import {
	makeStyles,
	createMuiTheme,
	ThemeProvider,
} from '@material-ui/core/styles';
import { Form } from "formik";


const useStyles = makeStyles((theme) => ({
    root: {
    	"&.Mui-focused": {
	        "& .MuiOutlinedInput-notchedOutline": {
	        	borderColor: "#4dbc51",
	        	borderWidth: "1px"
	        }
    	}
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: theme.palette.success.main,
        padding: theme.spacing(1.5)
    }
}));

const theme = createMuiTheme({
	overrides: {
	    MuiInputLabel: {
	    	root: {
	        	"&$focused": {
	          		color: "#4dbc51"
	        	}
	    	}
	    }
	},
	palette: {
		primary: {
			main: '#4dbc51',
			contrastText: "#fff"
		},
	}
});

const PropertyEditForm = (props) => {
    const classes = useStyles();
	const {
		values: { name, location, landlord, caretaker },
		errors,
		handleChange,
	} = props;

	return (
		<Form
			className={classes.form}
			noValidate
		>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<ThemeProvider theme={theme}>
						<TextField
							variant="outlined"
							required
							name="name"
							value={name}
							label={errors.name ? 'Error' : 'Name'}
							id={errors.postName ? 'outlined-error-helper-text' : 'postName'}
							autoComplete="name"
							onChange={handleChange}
							InputProps={{ className: classes.root }}
							helperText={errors.name ? errors.name : ''}
							error={errors.name ? true : false}
						/>
					</ThemeProvider>
				</Grid>
				<Grid item xs={12}>
					<ThemeProvider theme={theme}>
						<TextField
							id="location"
							label={errors.location ? 'Error' : 'Location'}
							variant="outlined"
							name="location"
							value={location}
							onChange={handleChange}
							InputProps={{ className: classes.root }}
							helperText={errors.location ? errors.location : ''}
							error={errors.location ? true : false}
							rows={10}
							required
						/>
					</ThemeProvider>
				</Grid>
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <TextField
              id="caretaker"
              label={errors.caretaker ? 'Error' : 'Caretaker'}
              variant="outlined"
              name="caretaker"
              value={caretaker}
              onChange={handleChange}
              InputProps={{ className: classes.root }}
              helperText={errors.caretaker ? errors.caretaker : ''}
              error={errors.caretaker ? true : false}
              rows={10}
              required
            />
          </ThemeProvider>
        </Grid>

			</Grid>
			<Grid item xs={3}>
				<ThemeProvider theme={theme}>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={`s-font-size ${classes.submit}`}
					>
						Edit
					</Button>
				</ThemeProvider>
			</Grid>
		</Form>
	);
}

export default PropertyEditForm;
