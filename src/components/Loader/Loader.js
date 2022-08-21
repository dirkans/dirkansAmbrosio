import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const Loader = () => {
return (


    <Box sx={{ display: 'flex' }}>
    <CircularProgress />
    <p>Cargando porfavor espere..</p>
  </Box>

)


}

export default Loader;