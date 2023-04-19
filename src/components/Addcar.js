import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


export default function Addcar({addCar}) {
    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
        brand: '', model: '', color: '', fuel: '', year: '', price: ''
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        addCar(car);
        setOpen(false);
        setCar({
            brand: '', model: '', color: '', fuel: '', year: '', price: ''
        })
    };
    
    return(
        <div>
            <Button style={{margin: 10}} variant="outlined" color="primary" onClick={handleClickOpen}>
                Add Car
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Car</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        value={car.brand}
                        onChange={e => setCar({...car, brand: e.target.value})}
                        label="Brand"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        value={car.model}
                        onChange={e => setCar({...car, model: e.target.value})}
                        label="Model"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        value={car.color}
                        onChange={e => setCar({...car, color:e.target.value})}
                        label="Color"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        value={car.fuel}
                        onChange={e => setCar({...car, fuel: e.target.value})}
                        label="Fuel"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        value={car.year}
                        onChange={e => setCar({...car, year: e.target.value})}
                        label="Year"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        value={car.price}
                        onChange={e => setCar({...car, price: e.target.value})}
                        label="Price"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}