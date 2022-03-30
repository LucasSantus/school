import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TextFieldCustom = styled(TextField)({
    // LABEL
    '& label': {
        color: '#48539b',
        paddingLeft: 6,

        '&.Mui-focused': {
            color: '#8179B5',
        }
    },

    //  INPUT
    '& input': {
        color: 'white',

        '&:valid:focus + fieldset': {
            borderLeftWidth: 8
        },
        '&.Mui-focused': {
            color: '#8179B5 !important',
        }
    },

    // '& .MuiInput-underline:after': {
    //     borderBottomColor: 'white',
    // },

    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#48539b',
        },
        '&:hover fieldset': {
            borderColor: '#3E3C7C',
            color: '#3E3C7C'
        },
        '&.Mui-focused fieldset': {
            borderColor: '#8179B5',
        },
 
    },
});